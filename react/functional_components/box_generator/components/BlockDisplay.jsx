import React, { useState } from 'react';
import NewBox from './NewBox';

const BoxGenerator = props => {
    const colorField = React.createRef();

    const [state, setState] = useState({
        boxes: [],
        newColor: ""
    });

    
    const onSubmitHandler = e => {
        try {
            e.preventDefault();
            setState({
                boxes: [...state.boxes, {
                    color: state.newColor
                }],
                newColor: ""
            });
            colorField.current.value = "";
        }
        catch{
            console.error();
        }
    };

    const onChangeColorHandler = e => {
        e.preventDefault();
        setState({
            ...state,
            newColor: e.target.value
        });
    };

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <input ref={colorField}
                onChange={onChangeColorHandler}
                />
                <button type="submit">Sumbit</button>
            </form>
            <div>
                {state.boxes.map((box, index) => (
                    <NewBox
                    key={index}
                    bgColor={box.color}
                    ></NewBox>
                ))}
            </div>
        </div>
    );
};
    
export default BoxGenerator;