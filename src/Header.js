import React, { Component } from 'react';
import ProfilePic from './ProfilePic';
import SideBarItems from './SideBarItems';
import Footer from './Footer';

class Header extends Component {
constructor(props) {
  super(props);
}

render() {
  return (
    <div className="header">
  
        <ProfilePic></ProfilePic>

        <div className="sidebar-items">
            <SideBarItems
              setView={this.props.setView}
              currentView={this.props.currentView}>
            </SideBarItems>
        </div>
        <div className="footer">
            <Footer></Footer>
        </div>
       
    </div>
  );
}
 
}

export default Header;
