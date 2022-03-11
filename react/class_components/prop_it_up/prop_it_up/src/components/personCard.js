import React, { Component } from 'react';
    
    
class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        };
    }

    addAge = () => {
        this.setState({age: this.state.age +1});
    }

    render() {
        return <>
                <div>
                    <h3>{this.props.lastName},{this.props.firstName}</h3>
                    <p>Age: {this.state.age}</p>
                    <p>hairColor: {this.props.hairColor}</p>
                    <button onClick={ this.addAge }>birthday button</button>
                </div>
            </>;
    }
}
    
export default PersonCard;
