import axios from 'axios';
const OnlineFood_Url="http://localhost:8082/home-food/";
class HomeMakerService {
    getRestaurants(){
        return axios.get(OnlineFood_Url+"get");
        
    }
    createRestaurant(restaurant){
        return axios.post(OnlineFood_Url+"add",restaurant);
    }
    getRestaurantById(restaurantId){
        return axios.get(OnlineFood_Url+"getRestaurantDetailsById?restaurantId="+restaurantId);
    }
    updateRestaurant(restaurantId,restaurant){
        return axios.put(OnlineFood_Url+"updateRestaurant/"+restaurantId,restaurant);
    }

    getRestaurantByIdPass(restaurantId,restaurantPass){
        return axios.get(OnlineFood_Url+"getRestaurantDetailsByIdPass?restaurantId="+restaurantId+"&restaurantPass="+restaurantPass);
    }
    deleteRestaurantById(restaurantId){
        return axios.delete(OnlineFood_Url+"deleteRestaurantDetailsById?restaurantId="+restaurantId);
    }
    countOfRestaurant()
    {
        return axios.get(OnlineFood_Url+"getCountOfRestaurant");
    }

}

export default new HomeMakerService();