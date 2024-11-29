import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Loginform from './components/pages/Loginform';

import HomePage from './components/pages/HomePage';
import HomeMakerSignUp from './components/HomeMaker/HomeMakerSignUp';
import CusLogin from './components/Customer/CusLogin';
import HomeMakerLogin from './components/HomeMaker/HomeMakerLogin';
import CusSignUp from './components/Customer/CusSignUp';
import SignUp from './components/pages/SignUp';
import CustomerHomepage from './components/Customer/CustomerHomepage';
import HomeMakerHome from './components/HomeMaker/HomeMakerHome';
import ErrorPage from './components/pages/ErrorPage';
import FooterBottom from './components/FooterBottom';
import Profile from './components/Customer/Profile';
import AddItem from './components/HomeMaker/AddItem';
import Update from './components/HomeMaker/Update';
import EditHomeMaker from './components/HomeMaker/EditHomeMaker';
import CustomerSearch from './components/Customer/CustomerSearch';
import CustProfile from "./components/Customer/CustProfile";

import AdminLogin from './components/Admin/AdminLogin';
import AdminDashboard from './components/Admin/AdminDashboard';
import AdminCustomer from './components/Admin/AdminCustomer';
import AdminHomeMaker from './components/Admin/AdminHomeMaker';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/home-page' component={HomePage}/>
          <Route path='/LoginForm' component={Loginform}/>
          <Route path="/HomeMakerHome" component={HomeMakerHome} />

          <Route path='/HomeMakerSignUp' component={HomeMakerSignUp}/>
          <Route path='/HomeMakerLogin' component={HomeMakerLogin}/>
          <Route path='/CusSignUp' component={CusSignUp}/>
          <Route path='/CusLogin' component={CusLogin}/>
          <Route path='/sign-up' component={SignUp}/>
          <Route path="/CustomerHomepage" component={CustomerHomepage} />
          <Route path="/profile/:kitchenname" component={Profile}/>
          <Route path="/addItem" component={AddItem}/>
          <Route path="/update/:menu_id" component={Update}/>
          <Route path="/homemakerprofile" component={EditHomeMaker}/>
          <Route path="/search" component={CustomerSearch}/>
          <Route path="/customerprofile" component={CustProfile}/>
          
          <Route path="/AdminLogin" component={AdminLogin} />
          <Route path="/AdminDashboard" component={AdminDashboard} />
          <Route path="/AdminCustomer" component={AdminCustomer} />
          <Route path="/AdminHomeMaker" component={AdminHomeMaker} />
          
          <Route path='*' component={ErrorPage}/>
          
        </Switch>
      </Router>
      <FooterBottom/>

    </>

  );
}

export default App;
