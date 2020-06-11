import React from 'react';


class Header extends React.Component {

  render (){
    return (
      <div className="slim-header">
        <div className="container">
            <div className="slim-header-left">
                <h2 className="slim-logo"><a href="index.html">MOVIZ<span>.</span></a></h2>

            </div>
            <div className="slim-header-right">
              
                <div className="dropdown dropdown-c">
                    <a href="#" className="logged-user" data-toggle="dropdown">
                        <img src="http://via.placeholder.com/500x500" alt="" />
                        <span>Katherine</span>
                        <i className="fa fa-angle-down"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                        <nav className="nav">
                            <a href="page-profile.html" className="nav-link"><i className="icon ion-person"></i> View Profile</a>
                            <a href="page-edit-profile.html" className="nav-link"><i className="icon ion-compose"></i> Edit Profile</a>
                            <a href="page-activity.html" className="nav-link"><i className="icon ion-ios-bolt"></i> Activity Log</a>
                            <a href="page-settings.html" className="nav-link"><i className="icon ion-ios-gear"></i> Account Settings</a>
                            <a href="page-signin.html" className="nav-link"><i className="icon ion-forward"></i> Sign Out</a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}


export default Header;
