import styled from "styled-components";
import Button from "../components/Button";
import '../styles/hover.css'
import { useNavigate } from "react-router-dom";




function Hover() {

    const navigate = useNavigate ();

    return (
        <>

        <div className="banner">
          <Button btn= "listbtn" name = {<img style={ {width: "40px", height: "30px"} } src = "/120_20260502203629.png"/>
} OnClick={() => {}} />
        <Button btn= "profile"  name = "PROFILE" OnClick={() => {navigate("/mainpage")}} />
        <Button btn= "music" name = "MUSIC" OnClick={() => {navigate("/music")}} />
        <Button btn= "cosmos" name = "COSMOS" OnClick={() => {}} />
        </div>
        </>
    );



}

export default Hover