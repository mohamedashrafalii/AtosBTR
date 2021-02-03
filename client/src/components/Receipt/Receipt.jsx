import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import axios from 'axios'
import Items from './ViewTable.jsx'
import TotalTable from './TotalTable.jsx'
import Error404 from '../Error/Error404.jsx'
import LoadingIcon from '../CreateStore/Loading.js'
import staticVariables from './Statics.json'
import Barcode from 'react-barcode';
export default class receipt extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      error: false,
      storeName: '',
      storeAddress: '',
      storeNumber: '',
      barcode: 0,
      receipt: {
        subTotal: 0,
        vatPercentage: 0,
        items: [
          {
            name: '',
            description: '',
            quantity: 0,
            price: 0,
          },
        ],
      },
    }
  }

  calculateSubTotal() {
    let subTotal = 0
    var i
    for (i = 0; i < this.state.receipt.items.length; i++) {
      subTotal +=  (this.state.receipt.items[i].price*this.state.receipt.items[i].quantity)
    }
    this.state.receipt.subTotal=subTotal
  }

  async componentDidMount() {
    await axios
      .get(
        `${staticVariables.backendURL}/api/receipts/read/${this.props.match.params.id}`
      )
      .then((response) => {
        if (response.data.data) {
          this.setState({ receipt: response.data.data.receipt ,barcode:response.data.data.barcode})
          this.calculateSubTotal()
          axios
            .get(
              `${staticVariables.backendURL}/api/storesInfo/${response.data.data.storeId}`
            )
            .then((response) => {
              if (response.data.data) {
                this.setState({
                  storeName: response.data.data.storeName,
                  storeAddress: response.data.data.address,
                  storeNumber: response.data.data.phoneNumbers[0],
                  loading: false,
                })
              } else {
                this.setState({ error: true, loading: false })
              }
            })
            .catch((error) => {
              this.setState({ error: true, loading: false })
            })
        } else {
          this.setState({ error: true, loading: false })
        }
      })
      .catch((error) => {
        this.setState({ error: true, loading: false })
      })
  }

  render() {
    if (this.state.loading) {
      return (
        <div style={bgImage}>
          <div class="signin-background">
            <br />
            <br />
            <br />
            <div class="container">
              <div class="row">
                <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                  <div class="card card-signin my-5">
                    <div class="card-body">
                      <Card>
                        <Card.Body>
                          <LoadingIcon type="spin" color="#5bc0de" />
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>
      )
    } else if (this.state.error) {
      return <Error404 />
    } else {
      return (
        <div style={bgImage}>
          <div class="signin-background">
            <br />
            <br />
            <br />
            <div class="container">
              <div class="row">
                <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                  <div class="card card-signin my-5">
                    <div class="card-body">
                      <Card style={bgColor}>
                        <Card.Body>
                          <h1 class="card-title text-center">
                            {this.state.storeName}
                          </h1>
                          <h3 class="card-title text-center">
                            {this.state.storeAddress}
                          </h3>
                          <h5 class="card-title text-center">
                            +{this.state.storeNumber}
                          </h5>
                        </Card.Body>
                      </Card>
                      <form class="form-signin">
                        <div class="form-label-group">
                          <Items items={this.state.receipt.items} />
                          <br />
                          <Card>
                            <TotalTable
                              subTotal={this.state.receipt.subTotal}
                              vatPercentage={this.state.receipt.vatPercentage}
                            />
                          </Card>
                          {this.state.barcode&&<Barcode width={2} value={this.state.barcode} />}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>
      )
    }
  }
}

const bgImage = {
  // "background-color":'#35605a',
  backgroundImage: `url(/beatthereceipt.png)`,
  // "background-image": {img},
  'background-repeat': 'no-repeat',
  'background-attachment': 'fixed',
  'background-size': 'cover',
}

const bgColor = {
  'background-color': '#479521',
  color: 'white',
}
