// MyButtonComponent.js
import React, { Component } from 'react';
 
    
const divStyle = {
    padding: '12px 15px',
    margin: '10px',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    background: 'red', 
    color: '#fff',
    border: 'none'
};
 
class Main extends Component {
    render() {
        return <div style={ divStyle }>{this.props.children}</div>
    }
}
    
export default Main;
