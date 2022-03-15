// MyButtonComponent.js
import React, { Component } from 'react';
 
    
const divStyle = {
    padding: '12px 15px',
    margin: '10px',
    width: '200px',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    background: 'blue', 
    color: '#fff',
    border: 'none'
};
 
class Navigation extends Component {
    render() {
        return <div style={ divStyle }></div>
    }
}
    
export default Navigation;
