// MyButtonComponent.js
import React, { Component } from 'react';
 
    
const divStyle = {
    padding: '12px 15px',
    margin: '10px',
    height: '100px',
    background: 'green'
};
 
class Header extends Component {
    render() {
        return <div style={ divStyle }></div>
    }
}
    
export default Header;
