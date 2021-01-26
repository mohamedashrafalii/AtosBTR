import './App.css';
import React, { Component } from 'react'
// import './App.module.scss'
// import Invoice from './Invoice/Invoice.jsx'
import { Switch ,BrowserRouter, Route } from "react-router-dom";
// import Receipt from "../components/Receipt.jsx";
// import Medicine from"../components/medicine/medicine.jsx";
// import Navbar from '../components/navbar/navbar.jsx'
// import Login from '../components/login/login.jsx'
import CreateStore from './components/CreateStore/createStore.jsx'
// import axios from 'axios'

class App extends Component {
 
  render() {

    return (



<div>

   <BrowserRouter>
   <Switch>
   <Route exact path="/"  component={()=><CreateStore/>} />
   <Route exact path="/subscribe"  component={()=><CreateStore/>} />

   {/* <Route exact path="/main/:type"  component={(props)=><Navbar key="1" {...props} type={localStorage.getItem("type")} value={localStorage.getItem('token')} />} />

   <Route exact path="/receipt/:id/:price"  component={Receipt}  />
   <Route exact path="/main/receipt"  component={()=><Invoice key="1" value={this.state.token} />}  /> */}

   <Route component={()=><h1 style={{color:"red"}}>Can't find what you are looking for!</h1>}/>
   </Switch>
   </BrowserRouter>
</div>
    )

    }
}

export default App

