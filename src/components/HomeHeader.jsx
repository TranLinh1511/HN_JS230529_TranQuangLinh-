import React, { useState } from 'react';

function HomeHeader({ handleSearchByName }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light align-item">
        <div className="container">
          <div className="notification">
            <h4>
              To Spend $ <span>128.000.000.000 </span>
              You have money
            </h4>
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => handleSearchByName(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default HomeHeader;
