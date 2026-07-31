import React, { Component } from 'react';
import Web3 from 'web3'
import logo from '../logo.png';
import './App.css';
import Marketplace from '../abis/Marketplace.json'
import Navbar from './Navbar'
import Main from './Main'

class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
  window.web3 = new Web3("http://127.0.0.1:7545")
}
  async loadBlockchainData() {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[2] })
    const networkId = await web3.eth.net.getId()
    console.log("Accounts:", accounts)
console.log("Network ID:", networkId)
console.log("Networks:", Marketplace.networks)

    const networkData = Marketplace.networks[networkId]
    if(networkData) {
      const marketplace = new web3.eth.Contract(Marketplace.abi, networkData.address)
      this.setState({ marketplace })
      const productCount = await marketplace.methods.productCount().call()
      this.setState({ productCount })
      // Load products
      for (var i = 1; i <= productCount; i++) {
        const product = await marketplace.methods.products(i).call()
        this.setState({
          products: [...this.state.products, product]
        })
      }
      this.setState({ loading: false})
    } else {
      window.alert('Marketplace contract not deployed to detected network.')
    }
  }

  constructor(props) {
    super(props)
    window.app = this
    this.state = {
      account: '',
      productCount: 0,
      products: [],
      loading: true
    }

    this.createProduct = this.createProduct.bind(this)
    this.purchaseProduct = this.purchaseProduct.bind(this)
  }

  createProduct(name, price) {
  this.setState({ loading: true })

  this.state.marketplace.methods.createProduct(name, price)
    .send({
  from: this.state.account,
  gas: 3000000
})
    .then((receipt) => {
      console.log("CREATE SUCCESS", receipt)
      window.location.reload()
    })
    .catch((err) => {
      console.error("CREATE ERROR", err)
      this.setState({ loading: false })
    })
}

  purchaseProduct(id, price) {
  this.setState({ loading: true })

  this.state.marketplace.methods.purchaseProduct(id)
    .send({
      from: this.state.account,
      value: price,
      gas: 3000000
    })
    .then((receipt) => {
      console.log("PURCHASE SUCCESS", receipt)
      window.location.reload()
    })
    .catch((err) => {
      console.error("PURCHASE ERROR", err)
      this.setState({ loading: false })
    })
}

  render() {
    return (
      <div>
        <Navbar account={this.state.account} />
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex">
              { this.state.loading
                ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>
                : <Main
                  products={this.state.products}
                  createProduct={this.createProduct}
                  purchaseProduct={this.purchaseProduct} />
              }
            </main>
          </div>
        </div>
      </div>
    );
  }
}


export default App;

