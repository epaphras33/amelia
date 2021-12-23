import styled from "styled-components";
import { useEffect, useState } from "react";

const Time = () => {
    const [time, setTime] = useState("");
    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleString());
        }, 1000);
        return () => clearInterval(time);
    }, [time]);
    return (
        <TimeStyled>
            <span>{time}</span>
        </TimeStyled>
    )
}

export default Time;

const TimeStyled = styled.div`
    background-color: #18d26e;
    padding: .5rem;
    border-radius: 10px;
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 999;
`;
