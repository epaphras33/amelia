import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import Mobile from "./Mobile";
import PC from "./PC";

function Intro() {
    const isPortrait = useMediaQuery({ query: "(orientation: portrait)" })

    return (
        <IntroStyled data-aos="fade-right">
            {isPortrait ? <Mobile /> : <PC />}
        </IntroStyled>
    )
}

export default Intro;

const IntroStyled = styled.div`
    
`;
