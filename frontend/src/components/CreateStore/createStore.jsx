import React, { Component, useState } from "react";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Alert from 'react-bootstrap/Alert'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
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
      categoryAlert:false
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
  submitStore = (e) => {
    // alert(this.state.storeCategory)
    e.preventDefault()
    e.stopPropagation()
    this.setState({ nameAlert: false,addressAlert: false,categoryAlert:false });
    if(this.state.storeName==''){
        this.setState({ nameAlert: true });
    }
    if(this.state.storeAddress==''){
        this.setState({ addressAlert: true });
    }
    if(this.state.storeCategory==''){
        this.setState({ categoryAlert: true });
    }
    if (this.state.storeName!='' &&this.state.storeAddress!='' &&this.state.storeCategory!='') {
      this.setState({ modalShow: true });
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
            <KeyModal show={this.state.modalShow} storeName={this.state.storeName} />
          </div>
        </div>
        <br />
        <br />
      </div>
      </div>
    );
  }
}

const KeyModal = (props) => {
  // const [show, setShow] = useState(props.show);
  var show = props.show;
  const handleClose = () => (show = false);
  const handleShow = () => (show = true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
          Launch static backdrop modal
        </Button> */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
        <Modal.Title>{props.storeName} Subscription</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Please save your subscription key as you will need it later. All our
          API's are dependant on this key
        </Modal.Body>
        
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
              Close
            </Button> */}
          {/* <div class="form-label-group"> */}
          
          <Modal.Body>
          Subscription Key:
        </Modal.Body>
            
          <input
            id="inputStoreAddress"
            class="form-control"
            placeholder="Enter Store Address"
            value="A2sd232323sasd"
            disabled="true"
            autofocus
          />
          {/* <button
                      class="btn btn-lg btn-info btn-block text-uppercase"
                      type="submit"
                    >
                      COPY
                    </button> */}
          <br />
          {/* </div> */}
          {/* <Button variant="primary">Understood</Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};




const bgImage = {
    // "background-color":'#35605a',
    "backgroundImage":`url(/beatthereceipt.png)`,
    // "background-image": {img},
    "background-repeat": 'no-repeat',
    "background-attachment": 'fixed',
    "background-size": 'cover'
    
  };

//   const AlertExample = (props) => {
//     const [show, setShow] = useState(true);

//         return (
//           <>
//             <Alert show={show} variant="info">
//               <Alert.Heading>How's it going?!</Alert.Heading>
//               <p>
//                 Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
//                 lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
//                 fermentum.
//               </p>
//               <hr />
//               <div className="d-flex justify-content-end">
//                 <Button onClick={() => setShow(false)} variant="outline-success">
//                   Close me y'all!
//                 </Button>
//               </div>
//             </Alert>

//             {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
//           </>
//         );
//   }
