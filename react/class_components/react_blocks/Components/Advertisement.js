// MyButtonComponent.js
import React, { Component } from 'react';
 
    
const divStyle = {
    padding: '12px 15px',
    margin: 'auto',
    height: '50px',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    background: 'purple', 
    color: '#fff',
    border: 'none'
};
 
class Advertisement extends Component {
    render() {
        return <div style={ divStyle }></div>
    }
}
    
export default Advertisement;
