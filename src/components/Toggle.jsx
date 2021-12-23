import styled from "styled-components";
import { useContext } from "react";

import sun from "../assests/sun.png";
import moon from "../assests/moon.png";
import { ThemeContext } from "../context";

function Toggle() {
    const theme = useContext(ThemeContext);

    const handleClick = () => {
        theme.dispatch({ type: "TOGGLE" });
    }

    return (
        <ToggleStyled>
            <img src={sun} alt="sun" className="toggle-icon" />
            <img src={moon} alt="moon" className="toggle-icon" />
            <div className="toggle-btn" onClick={handleClick} style={{ left: theme.state.darkMode ? 0 : 25 }}></div>
        </ToggleStyled>
    )
}

export default Toggle;

const ToggleStyled = styled.div`
    width: 50px;
    height: 25px;
    border-radius: 20px;
    border: 1px solid grey;
    background-color: #fff;
    position: fixed;
    top: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 999;
    overflow: hidden;
    .toggle-icon {
        width: 15px;
        height: 15px;
    }
    .toggle-btn {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: #999;
        position: absolute;
        cursor: pointer;
    }
`;
