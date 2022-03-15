// MyButtonComponent.js
import React, { Component } from 'react';
 
    
const divStyle = {
    padding: '12px 15px',
    margin: '10px',
    width: '330px',
    height: '500px',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    background: 'yellow', 
    color: '#fff',
    border: 'none'
};
 
class SubContents extends Component {
    render() {
        return <div style={ divStyle }></div>
    }
}
    
export default SubContents;
