import styled from "styled-components";
import intro from "../assests/intro.png";

const PC = () => {
    return (
        <PCStyled>
                <div className="PC-left">
                    <div className="PC-left-wrapper">
                        <p className="PC-welcome">Hello, my name is</p>
                        <h1 className="PC-name">Amelia McGregor</h1>
                        <div className="PC-title">
                            <div className="PC-title-wrapper">
                                <h2 className="PC-title-item"><strong>Full-Stack Developer</strong></h2>
                                <h2 className="PC-title-item"><strong>Crypto Analyst</strong></h2>
                                <h2 className="PC-title-item"><strong>Technical Consultant</strong></h2>
                                <h2 className="PC-title-item"><strong>Web Analyst</strong></h2>
                                <h2 className="PC-title-item"><strong>Blockchain Consultant</strong></h2>
                            </div>
                        </div>
                        <p className="PC-desc">
                            Welcome! <br />
                            This is an interactive portfolio to visualize the tools and skills I've collected so far. As you proceed on the timeline, you will see how my experiences are built up.
                        </p>
                    </div>
                </div>
                <div className="PC-right">
                    <div className="PC-bg"></div>
                    <img src={intro} alt="illustration" className="PC-img" />
                </div>           
        </PCStyled>
    )
}

export default PC;

const PCStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem;
    height: 100vh;
    .PC-left {
        display: flex;
        align-items: center;
        justify-content: center;
        .PC-left-wrapper {
            padding: 1rem;
            padding-top: 5rem;
            height: 50%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .PC-welcome {
                font-size: 34px;
                margin-top: 1rem;
            }
            .PC-name {
                margin: 1rem 0;
                font-size: 50px;
            }
            .PC-title {
                height: 50px;
                overflow: hidden;
                .PC-title-wrapper {
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
                    .PC-title-item {
                        height: 50px;   
                        color: #18d26e;
                        display: flex;
                        align-items: center;
                    }
                }
            }
            .PC-desc {
                margin-top: 1rem;
                line-height: 1.7;
                font-size: 18px;
            }
        }
    }
    .PC-right {
        position: relative;
        .PC-bg {
            clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
            background-color: #18d26e;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            right: 0;
        }
        .PC-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
        }
    }
`;
