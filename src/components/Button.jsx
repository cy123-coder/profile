import styled from "styled-components";
import '../styles/button.css';



const Button = ({OnClick, name, btn}) => {
    return(
        <button className={btn} onClick={OnClick}>{name}</button>



    );





}

export default Button