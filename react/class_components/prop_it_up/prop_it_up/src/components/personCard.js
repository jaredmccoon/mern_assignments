import React, { Component } from 'react';
    
    
class PersonCard extends Component {
    render() {
        return <>
                <div>
                    <h3>{this.props.lastName},{this.props.firstName}</h3>
                    <p>Age: {this.props.age}</p>
                    <p>hairColor: {this.props.hairColor}</p>
                </div>
            </>;
    }
}
    
export default PersonCard;
