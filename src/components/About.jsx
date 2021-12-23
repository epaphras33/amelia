import styled from "styled-components";
import { Container } from "@mui/material";

import aboutImg from "../assests/about.jpg";
import award from "../assests/award.png";

const About = () => {
    return (
        <AboutStyled data-aos="fade-right">
            <Container maxWidth="lg">
                <h2 className="title">About Me</h2>
                <div className="about">
                    <div className="about-left">
                        <div className="about-card bg"></div>
                        <div className="about-card">
                            <img src={aboutImg} alt="profile" className="about-img" />
                        </div>
                    </div>
                    <div className="about-right">
                        <p className="about-sub">
                            Amelia McGregor is a <strong>Full-Stack Developer,</strong> a <strong>Crypto/Blockchain Consultant</strong> &amp; a <strong>Cyber Security Analyst,</strong> with experience consulting with Zions Bank, Salt Lake City. <br />
                            Amelia is fueled by her passion for understanding the nuisance of Internet Frauds. She considers herself a 'forever student', eager to both build on her academic foundations in psychology and software development and stay in tune with the latest digital technologies through continued coursework and researches. <br />
                            Her hunger for knowledge and determination to turn information into action has contributed to her most recent success at multi-million-dollar Blockchain - <strong>TOKCOIN COOPERATION.</strong> <br />
                            Amelia is currently working as a freelance cryptocurrency trader/agent and is always interested in a challenge. Reach out to <strong>mcgregoramelia28@gmail.com</strong> to connect!
                        </p>                        
                        <div className="about-award">
                            <img src={award} alt="award cert" className="about-award-img" />
                            <div className="about-award-texts">
                                <h4 className="about-award-title">Cedar Hills In't Design Award 2020</h4>
                                <p className="about-award-desc">November/December Annual Cedar Hills Best Web Developer cum Designer Award for the year 2020</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </AboutStyled>
    )
}

export default About;

const AboutStyled = styled.div`
    .title {
        font-size: 34px;
        text-align: center;
        margin-top: 5rem;
        margin-bottom: 3rem;
        @media screen and (min-width: 1025px) {
            font-size: 45px;
        }
    }
    .about {
        display: grid;
        grid-template-columns: repeat(1, minmax(0, 1fr));
        gap: 2rem;
        align-items: center;
        margin-bottom: 5rem;
        .about-left {
            position: relative;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            align-self: center;
            .about-card.bg {
                position: absolute;
                top: 50px;
                left: 50px;
                background-color: #18d26e;
                display: none;
            }
            .about-card {
                width: 100%;
                height: 70vh;
                border-radius: 5px;
                position: relative;
                overflow: hidden;
                .about-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover
                }
            }
            @media screen and (min-width: 1025px) {
                .about-card.bg {
                    display: block;
                }
                .about-card {
                    width: 60%;
                    height: 70vh;
                    border-radius: 5px;
                    position: relative;
                    overflow: hidden;
                    .about-img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover
                    }
                }
            }
        }
        .about-sub {
            line-height: 1.7;
            font-size: 14px;
            @media screen and (min-width: 1025px) {
                font-size: 16px;
            }
        }
        .about-award {
            margin-top: 1rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .about-award-img {
                width: 75px;
                height: 75px;
                border-radius: 2px;
                @media screen and (min-width: 1025px) {
                    width: 150px;
                    height: 150px;
                }
            }
            .about-award-texts {
                width: 75%;
                @media screen and (min-width: 1025px) {
                    width: 80%;
                }
                .about-award-title {
                    font-weight: bold;
                    color: #555;
                    margin-bottom: 5px;
                    @media screen and (min-width: 1025px) {
                        margin-bottom: 10px;
                    }
                }
                .about-award-desc {
                    font-size: 14px;
                    @media screen and (min-width: 1025px) {
                        font-size: 16px;
                    }
                }
            }
        }
        @media screen and (min-width: 1025px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 0rem;
        }
    }
    
`;
