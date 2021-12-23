import { Container } from "@mui/material";
import styled from "styled-components";
import bg from "../assests/bg.png";

const Mobile = () => {
    return (
        <MobileStyled>
            <Container maxWidth="lg" className="container">
                <p className="welcome">Hello, my name is</p>
                <h1 className="name">Amelia McGregor</h1>
                <div className="title">
                    <div className="title-wrapper">
                        <h2 className="title-item"><strong>Full-Stack Developer</strong></h2>
                        <h2 className="title-item"><strong>Crypto Analyst</strong></h2>
                        <h2 className="title-item"><strong>Technical Consultant</strong></h2>
                        <h2 className="title-item"><strong>Web Analyst</strong></h2>
                        <h2 className="title-item"><strong>Blockchain Consultant</strong></h2>
                    </div>
                </div>
                <p className="desc">
                    Welcome! <br />
                    This is an interactive portfolio to visualize the tools and skills I've collected so far. As you proceed on the timeline, you will see how my experiences are built up.
                </p>
            </Container>         
        </MobileStyled>
    )
};

export default Mobile;

const MobileStyled = styled.div`
    background-image: url(${bg});
    background-repeat: repeat;
    background-size: cover;
    background-position: center;
    z-index: 9;
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        .welcome {
            font-size: 24px;
        }
        .name {
            margin-top: 1rem;
            font-size: 34px;
        }
        .title {
            margin-top: 1rem;
            height: 50px;
            overflow: hidden;
            .title-wrapper {
                height: 100%;
                animation: move 10s ease-in-out infinite alternate;
                @keyframes move {
                    25%{
                        transform: translateY(-50px);
                    }
                    50%{
                        transform: translateY(-100px);
                    }
                    75%{
                        transform: translateY(-150px);
                    }
                    100%{
                        transform: translateY(-200px);
                    }
                }
                .title-item {
                    height: 50px;   
                    color: #18d26e;
                    display: flex;
                    align-items: center;
                }
            }
        }
        .desc {
            margin-top: 1rem;
            line-height: 1.7;
            font-size: 16px;
        }
    }
        
`;
