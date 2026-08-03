import React from 'react';

const Navbar = ({ account, accounts, changeAccount }) => {
  return (
    <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-3 shadow">

      <a
        className="navbar-brand col-sm-3 col-md-2 mr-0"
        href="/"
        target="_self"
      >
        🛒 <strong>BlockBazaar</strong>
      </a>

      <div className="d-flex align-items-center">

        <span
          className="badge badge-success mr-3"
          style={{ fontSize: "14px" }}
        >
          ● Connected
        </span>

        <select
          className="form-control mr-3"
          style={{ width: "250px" }}
          value={account}
          onChange={(e) => changeAccount(e.target.value)}
        >

          {accounts.map((acc, index) => (

            <option
              key={index}
              value={acc}
            >
              Account {index} - {acc.substring(0, 10)}...
            </option>

          ))}

        </select>

      </div>

    </nav>
  );
}

export default Navbar;