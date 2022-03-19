import styled from "styled-components";

const NewBox = styled.div`
    background-color: ${props => props.bgColor};
    width: 200px;
    height: 200px;
    margin: 0 20px;
    display: inline-block;
`;

export default NewBox;