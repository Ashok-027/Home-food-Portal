#!/bin/bash

# --- Configuration ---
# Set the name of your Spring Boot JAR file.
# This assumes your JAR is named like 'your-app-0.0.1-SNAPSHOT.jar'.
# You might need to adjust the version or name based on your project.
# IMPORTANT: Ensure this is the name of the executable JAR, NOT the one with '.original' suffix.
JAR_NAME="menu-REL1.0.jar"

# Set the directory where your JAR file is located.
# IMPORTANT: If running on Linux/WSL, ensure this is a valid Unix-style path (e.g., /opt/app/target/).
# The provided path '/C/GitHub-Projects/...' is typical for Git Bash on Windows.
JAR_DIR="/C/GitHub-Projects/Home-Food/Home-food-Portal/Back-end/menu/target/" #Change this Path according to your local setup
LOG_PATH="/C/GitHub-Projects/Home-Food/logs" #Change this Path according to your local setup
# Full path to the JAR file
JAR_PATH="${JAR_DIR}${JAR_NAME}"

# Optional: Java memory options (e.g., -Xmx512m for 512MB max heap)
JAVA_MEMORY_OPTS="-server -Xmx64m -Xms512m"

# --- Script Control Files ---
# PID file to store the Process ID of the running Java application.
# This allows the 'stop' command to find and terminate the process.
PID_FILE="${LOG_PATH}/menu.pid"

# Log file for the application's standard output and error.
LOG_FILE="${LOG_PATH}/menu_logs.log"

# --- Functions ---

# Function to check if the application is running
is_running() {
    if [ -f "$PID_FILE" ]; then
        PID=$(cat "$PID_FILE")
        # Check if the process with this PID exists
        if ps -p "$PID" > /dev/null; then
            # Check if the process command line contains "java" to confirm it's our application
            # Using 'ps -f -p "$PID"' to get the full command line, which is more compatible
            if ps -f -p "$PID" | grep -q "java"; then
                return 0 # Running and is a Java process
            else
                # PID file exists and process exists, but it's not a Java process
                echo "Warning: PID file exists but process $PID is not a Java application. Cleaning up PID file."
                rm -f "$PID_FILE"
                return 1 # Not running or not Java
            fi
        else
            # PID file exists but no process found with that PID
            echo "Warning: PID file exists but no process found with PID $PID. Cleaning up PID file."
            rm -f "$PID_FILE"
            return 1 # Not running
        fi
    else
        return 1 # PID file does not exist, so not running
    fi
}

# Function to start the application
start_app() {
    if is_running; then
        echo "Application is already running with PID $(cat "$PID_FILE")."
        exit 0
    fi

    echo "Starting Spring Boot Application..."

    # Check if JAR file exists
    if [ ! -f "$JAR_PATH" ]; then
        echo "Error: JAR file not found at ${JAR_PATH}"
        exit 1
    fi

    # Construct the Java command
    JAVA_COMMAND="java  -jar ${JAR_PATH}"

    echo "Application logs will be redirected to: ${LOG_FILE}"

    # Use nohup to run the process in the background and detach it from the terminal.
    # Redirect stdout and stderr to the log file.
    # Store the PID in the PID_FILE.
    nohup ${JAVA_COMMAND} > "$LOG_FILE" 2>&1 &
    echo $! > "$PID_FILE" # $! holds the PID of the last background command

    echo "Application started with PID $(cat "$PID_FILE")."
    echo "You can check the status with './$(basename "$0") status' or view logs with 'tail -f ${LOG_FILE}'."
}

# Function to stop the application
stop_app() {
    if ! is_running; then
        echo "Application is not running."
        exit 0
    fi

    PID=$(cat "$PID_FILE")
    echo "Stopping application with PID $PID..."

    # Send termination signal (SIGTERM) for graceful shutdown
    kill -TERM "$PID"
    echo "Sent SIGTERM to PID $PID. Waiting for shutdown..."

    # Wait for a few seconds for the process to terminate
    for i in {1..10}; do
        if ! ps -p "$PID" > /dev/null; then
            echo "Application stopped successfully."
            rm -f "$PID_FILE"
            exit 0
        fi
        sleep 1
    done

    # If still running after waiting, force kill (SIGKILL)
    if ps -p "$PID" > /dev/null; then
        echo "Application did not stop gracefully. Forcing shutdown with SIGKILL..."
        kill -KILL "$PID"
        sleep 1 # Give it a moment to die
        if ! ps -p "$PID" > /dev/null; then
            echo "Application forcefully stopped."
            rm -f "$PID_FILE"
            exit 0
        else
            echo "Error: Could not stop application with PID $PID."
            exit 1
        fi
    fi
}

# Function to check the status of the application
status_app() {
    if is_running; then
        echo "Application is running with PID $(cat "$PID_FILE")."
    else
        echo "Application is not running."
    fi
}

# --- Main Script Logic ---

case "$1" in
    start)
        start_app
        ;;
    stop)
        stop_app
        ;;
    restart)
        stop_app
        start_app
        ;;
    status)
        status_app
        ;;
    *)
        echo "Usage: $(basename "$0") {start|stop|restart|status}"
        exit 1
        ;;
esac

exit 0
