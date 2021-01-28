import React, { Component, useState } from "react";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Alert from 'react-bootstrap/Alert'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import KeyModal from './SubscModal.js'
import axios from 'axios';

// import SigninNav from "./NavBar";
export default class createStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storeName: "",
      storeAddress: "",
      storeCategory: "",
      storeNumber:"",
      categoryInputHidden: true,
      modalShow: false,
      nameAlert:false,
      addressAlert:false,
      categoryAlert:false,
      numberAlert:false,
      loading:false,
      subscriptionKey:"",
      token:""
    };
    this.handleStoreNameChange = this.handleStoreNameChange.bind(this);
    this.handleStoreAddressChange = this.handleStoreAddressChange.bind(this);
    this.handleStoreCategoryChange = this.handleStoreCategoryChange.bind(this);
    this.handleStoreNumberChange = this.handleStoreNumberChange.bind(this);
  }

  handleStoreNameChange(event) {
    this.setState({ storeName: event.target.value });
  }

  handleStoreAddressChange(event) {
    this.setState({ storeAddress: event.target.value });
  }
  handleStoreCategoryChange(event) {
    this.setState({ storeCategory: event.target.value });
  }
  handleStoreNumberChange(event) {
    this.setState({ storeNumber: event.target.value });
  }
  // submitStore = (e) => {
    async submitStore  (e)  {
    // alert(this.state.storeCategory)
    e.preventDefault()
    e.stopPropagation()
    this.setState({ nameAlert: false,addressAlert: false,categoryAlert:false,numberAlert:false });
    if(this.state.storeName===''){
        this.setState({ nameAlert: true });
    }
    if(this.state.storeAddress===''){
        this.setState({ addressAlert: true });
    }
    if(this.state.storeCategory===''){
        this.setState({ categoryAlert: true });
    }
    if(this.state.storeNumber.length<8){
      this.setState({ numberAlert: true });
  }
    if (this.state.storeName!=='' &&this.state.storeAddress!=='' &&this.state.storeCategory!=='' && this.state.storeNumber.length<8) {
      this.setState({loading:true, modalShow: true });
      await axios.post('http://localhost:5000/api/storesInfo/create',
      {
        phoneNumbers:[this.state.storeNumber],
        address:this.state.storeAddress,
        storeName:this.state.storeName,
        category:this.state.storeCategory
      })
        .then(response => {
          this.setState({subscriptionKey:response.data.id,loading:false ,token:response.data.token});
        })
        .catch(error => {
          alert("OOPS!! Something went wrong. Try again")
          this.setState({modalShow:false,loading:false });
          console.log(error);
        });
    }
  };

  render() {
    return (
        

      <div style={bgImage}>
            
      <div class="signin-background">
        {/* <HomeNavbar /> */}
        {/* <SigninNav /> */}
        <br />
        <br />
        <br />
        <div class="container">
          <div class="row">
            <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div class="card card-signin my-5">
                <div class="card-body">
                  <h5 class="card-title text-center">Subscription</h5>
                  <form class="form-signin">
                    <div class="form-label-group">
                      <label for="inputStoreName">Store Name</label>
                      <input
                        id="inputStoreName"
                        class="form-control"
                        placeholder="Enter Store Name"
                        onChange={this.handleStoreNameChange}
                        value={this.state.storeName}
                        required
                        autofocus
                      />
                      <Alert  variant='danger' show={this.state.nameAlert}>
                        Store Name can't be empty!
                    </Alert>
                    </div>
                    <br />

                    <div class="form-label-group" >
                      <label for="inputStoreAddress">Store Address</label>
                      <input
                        id="inputStoreAddress"
                        class="form-control"
                        placeholder="Enter Store Address"
                        onChange={this.handleStoreAddressChange}
                        value={this.state.storeAddress}
                        required
                        autofocus
                      />
                      <Alert  variant='danger' show={this.state.addressAlert}>
                        Store address can't be empty!
                    </Alert>
                    </div>
                    <br />

                    <div class="form-label-group">
                      <label for="inputStoreNumber">Store phone Number</label>
                      
                      <PhoneInput
                        country={'eg'}
                        value={this.state.storeNumber}
                        enableSearch = 'true'
                        onChange={phone => this.setState({ storeNumber:phone })}
                        />
                        <Alert  variant='danger' show={this.state.numberAlert}>
                        Invalid phone Number!
                    </Alert>
                      {/* <Alert  variant='danger' show={this.state.addressAlert}>
                        Store Number can't be empty!
                    </Alert> */}
                    </div>
                    <br />

                    <div class="form-label-group">
                      <label for="inputStoreCategory">Store Category</label>
                      <div>
                        <ToggleButtonGroup
                          type="radio"
                          name="options"
                        //   defaultValue={this.state.storeCategory}
                          onChange={(value) =>
                            this.setState({ storeCategory: value })
                          }
                        >
                          <ToggleButton
                            disabled={!this.state.categoryInputHidden}
                            variant="outline-info"
                            value={"food"}
                          >
                            Food
                          </ToggleButton>
                          <ToggleButton
                            disabled={!this.state.categoryInputHidden}
                            variant="outline-info"
                            value={"grocery"}
                          >
                            Grocery
                          </ToggleButton>
                          <ToggleButton
                            disabled={!this.state.categoryInputHidden}
                            variant="outline-info"
                            value={"medical"}
                          >
                            Medical
                          </ToggleButton>
                          <ToggleButton
                            disabled={!this.state.categoryInputHidden}
                            variant="outline-info"
                            value={"clothes"}
                          >
                            Clothes
                          </ToggleButton>
                        </ToggleButtonGroup>
                      </div>
                      <div class="custom-control custom-checkbox mb-3">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="customCheck1"
                          onChange={() =>
                            this.setState({
                              categoryInputHidden: !this.state
                                .categoryInputHidden,
                              storeCategory: "",
                            })
                          }
                        />
                        <label class="custom-control-label" for="customCheck1">
                          Other category
                        </label>
                      </div>
                      <input
                        id="inputStoreCategory"
                        class="form-control"
                        placeholder="Enter Store Category"
                        onChange={this.handleStoreCategoryChange}
                        value={this.state.storeCategory}
                        hidden={this.state.categoryInputHidden}
                        required={!this.state.categoryInputHidden}
                        autofocus
                      />
                      <Alert  variant='danger' show={this.state.categoryAlert}>
                        Store category can't be empty!
                    </Alert>
                    </div>
                    <br />
                    <button
                      class="btn btn-lg btn-info btn-block text-uppercase"
                      type="submit"
                      onSubmit={(e)=>{e.preventDefault();e.stopPropagation();}}
                      onClick={(e)=>this.submitStore(e)}
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <KeyModal show={this.state.modalShow} storeName={this.state.storeName} loading={this.state.loading} sKey={this.state.subscriptionKey} token={this.state.token}/>
          </div>
        </div>
       
        <br />
        <br />
      </div>
      </div>
    );
  }
}






const bgImage = {
    // "background-color":'#35605a',
    "backgroundImage":`url(/beatthereceipt.png)`,
    // "background-image": {img},
    "background-repeat": 'no-repeat',
    "background-attachment": 'fixed',
    "background-size": 'cover'
    
  };


  
  
