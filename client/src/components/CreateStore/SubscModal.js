import React ,{ useState }  from 'react';
import Modal from "react-bootstrap/Modal";
import LoadingIcon from './Loading.js'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Alert from 'react-bootstrap/Alert'

const KeyModal = (props) => {
  // const [show, setShow] = useState(props.show);
  var show = props.show;
  const handleClose = () => (show = false);
  const handleShow = () => (show = true);

  // const handleShowAlert = () => (showAlert = true);
  const [alertt, setAlert] = useState(false);
  const [alertt2, setAlert2] = useState(false);
  if(props.loading){
    return(
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
          <LoadingIcon type='spin' color='#5bc0de'/>
        </Modal.Body>
          
         
          <br />
        </Modal.Footer>
      </Modal>
    )
  }
  else{

  
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
          Please save your subscription key and token as you will need it later while using our
          API's.
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
            id="subs"
            class="form-control"
            placeholder="subscription"
            value={props.sKey}
            disabled="true"
            autofocus
          />
            <Alert  variant='success' show={alertt2}>
                        Copied to clipboard
                    </Alert>
           <CopyToClipboard text={props.sKey}
          onCopy={() => {setAlert2(true); setAlert(false)}}>
          <button
                      class="btn btn-lg btn-info  text-uppercase"
                      // onClick={(e)=>this.submitStore(e)}
                    >COPY</button>
        </CopyToClipboard>
        
            {/* <input
            id="token"
            class="form-control"
            placeholder="token"
            value={props.token}
            disabled="true"
            autofocus
          /> */}
          {/* cols="30" */}
          </Modal.Footer>
          <Modal.Footer>
          <Modal.Body>
          Subscription Token:
        </Modal.Body>
           <textarea name="message" rows="3" class="form-control" value={props.token} disabled="true" autofocus/>
          <Alert  variant='success' show={alertt}>
                        Copied to clipboard
                    </Alert>
           <CopyToClipboard text={props.token}
          onCopy={() => {setAlert2(false); setAlert(true)}}>
          <button
                      class="btn btn-lg btn-info  text-uppercase"
                      // onClick={(e)=>this.submitStore(e)}
                    >COPY</button>
        </CopyToClipboard>
        
          {/* <button
                      class="btn btn-lg btn-info btn-block text-uppercase"
                      type="submit"
                    >
                      COPY
                    </button>
          <br /> */}
          {/* </div> */}
          {/* <Button variant="primary">Understood</Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
                  }
};

export default KeyModal;