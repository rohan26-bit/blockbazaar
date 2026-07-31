import React, { Component } from 'react';

class Navbar extends Component {

  render() {
    return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm px-4">
    <a className="navbar-brand font-weight-bold" href="/">
      🛒 BlockBazaar
    </a>

    <div className="ml-auto d-flex align-items-center">

      <span className="badge badge-success mr-3 px-3 py-2">
        ● Connected
      </span>

      <div className="text-right">
        <small className="text-light d-block">
          Wallet
        </small>

        <small className="text-info">
          {this.props.account}
        </small>
      </div>

    </div>
  </nav>
);
  }
}

export default Navbar;
