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
import Receipt from './components/Receipt/Receipt.jsx' 
import Test from './components/Receipt/ViewTable.jsx' 
import Error404 from './components/Error/Error404.jsx'

// import axios from 'axios'

class App extends Component {
 
  render() {

    return (



<div>

   <BrowserRouter>
   <Switch>
   <Route exact path="/"  component={()=><CreateStore/>} />
   <Route exact path="/subscribe"  component={()=><CreateStore/>} />
   <Route exact path="/receipt/:id"  component={(props)=><Receipt {...props}/>} />
   <Route exact path="/test"  component={()=><Test/>} />
   {/* <Route exact path="/details/:id" render={(props) => <DetailsPage globalStore={globalStore} {...props} /> } /> */}

   {/* <Route exact path="/main/:type"  component={(props)=><Navbar key="1" {...props} type={localStorage.getItem("type")} value={localStorage.getItem('token')} />} />

   <Route exact path="/receipt/:id/:price"  component={Receipt}  />
   <Route exact path="/main/receipt"  component={()=><Invoice key="1" value={this.state.token} />}  /> */}

   <Route component={()=><Error404/>}/>
   </Switch>
   </BrowserRouter>
</div>
    )

    }
}

export default App

