import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

class Navbar extends React.Component {

  render(){
    return (
        <div className="slim-navbar">
        <div className="">
          <ul className="nav">
            <li className="nav-item with-sub">
              <a className="nav-link" href="#">
                <ion-icon name="videocam-outline" size="small"></ion-icon>
                <span className="mg-l-10">
                  Movies
                </span>
              </a>
              <div className="sub-item">
                <ul>
                  <li>
                    <Link to="/movie/latest" activeClassName="active">Latest</Link>
                  </li>
                  <li>
                    <Link to="/movie/popular">Popular</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item with-sub">
              <a className="nav-link" href="#">
                <i className="icon ion-ios-home-outline"></i>
                <span>Dashboard</span>
              </a>
              <div className="sub-item">
                <ul>
                  <li><a href="index.html">Dashboard 01</a></li>
                  <li><a href="index2.html">Dashboard 02</a></li>
                  <li><a href="index3.html">Dashboard 03</a></li>
                  <li><a href="index4.html">Dashboard 04</a></li>
                  <li><a href="index5.html">Dasshboard 05</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        </div>
    )
  }

}

export default Navbar;
