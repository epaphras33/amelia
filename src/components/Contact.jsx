import { useRef, useState, useContext, useEffect } from "react";
import { Container, TextField, Modal, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ContactMail, FmdGood, Facebook, GitHub, Instagram, Twitter } from "@mui/icons-material";
import emailjs from "emailjs-com";
import styled from "styled-components";

import { ThemeContext } from "../context";

function Contact() {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const [open, setOpen] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleClose = () => setOpen(false);

    useEffect(() => {
        setTimeout(() => {
            setOpen(true)
        }, 1000)
    }, []);

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 300,
        bgcolor: "background.paper",
        border: "1px solid #fff !important",
        outline: "none",
        borderRadius: "5px",
        boxShadow: 24,
        p: 2,
        "@media screen and (min-width: 1025px)" : { // eslint-disable-line no-useless-computed-key
            width: 400,
            p: 5
        }
    };

    const text = {
        mt: 2, color: "#353839", fontSize: "14px",
        "@media screen and (min-width: 1025px)" : { // eslint-disable-line no-useless-computed-key
            fontSize: "16px"
        }
    };

    const useStyles = makeStyles({
        root: {
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "#18d26e"
            },
            "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "#18d26e"
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#18d26e"
            },
            "& .MuiOutlinedInput-input": {
                color: `${darkMode ? "#fff" : "#000"}`
            },
            "&:hover .MuiOutlinedInput-input": {
                color: `${darkMode ? "#fff" : "#000"}`
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
                color: `${darkMode ? "#fff" : "#000"}`
            },
            "& .MuiInputLabel-outlined": {
                color: "#18d26e"
            },
            "&:hover .MuiInputLabel-outlined": {
                color: "#18d26e"
            },
            "& .MuiInputLabel-outlined.Mui-focused": {
                color: "#18d26e"
            }
        }
    })


    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_27327fm",
            "template_f25e8o8",
            formRef.current,
            "user_b8KZ5tHvXyEGi0XcZIdAg")
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    };

    const classes = useStyles();

    return (
        <ContactStyled data-aos="fade-right">
            {/* THANK YOU MODAL */}
            {done &&
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-description" sx={text}>
                            Thanks for reaching out to me. I am grateful and sincerely appreciate your effort. Stay connected as you will be hearing from me soon via your email address.
                        </Typography>
                    </Box>
                </Modal>
            }
            {/* END OF THANK YOU MODAL */}
            <div className="contact-bg"></div>
            <Container maxWidth="lg">
                <div className="contact-wrapper">
                    <div className="contact-left">
                        <h2 className="contact-title">Let's discuss your project</h2>
                        <div className="contact-info">
                            <p className="contact-info-item">
                                <ContactMail className="contact-icon" />
                                mcgregoramelia28@gmail.com
                            </p>
                            <p className="contact-info-item">
                                <FmdGood className="contact-icon" />
                                Park City, Summit Utah, United States
                            </p>
                            <div className="social-links">
                                <a href="https://web.facebook.com/mcamelia28/" className="facebook"><Facebook className="i" /></a>
                                <a href="https://web.facebook.com/mcamelia28/" className="twitter"><Twitter className="i" /></a>
                                <a href="https://web.facebook.com/mcamelia28/" className="git"><GitHub className="i" /></a>
                                <a href="https://web.facebook.com/mcamelia28/" className="instagram"><Instagram className="i" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="contact-right">
                        <p className="contact-desc">
                            <strong>What’s your story?</strong> <strong>You want me to freelance for you?</strong> Get in touch. I am always available for your project 24/7, including on weekends.
                        </p>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <TextField className={classes.root} label="Name" variant="outlined" name="user_name" fullWidth sx={{marginTop: "1rem"}} />
                            <TextField className={classes.root} label="Subject" variant="outlined" name="user_subject" fullWidth sx={{marginTop: "1rem"}} />
                            <TextField className={classes.root} label="You@email.com" variant="outlined" name="user_email" fullWidth sx={{marginTop: "1rem"}} />
                            <TextField className={classes.root} name="message" label="Message" placeholder="Write your message..." multiline variant="outlined" fullWidth sx={{marginTop: "1rem"}} />
                            <button>Submit</button>
                        </form>
                    </div>
                </div>

            </Container>
            
        </ContactStyled>
    )
}

export default Contact;

const ContactStyled = styled.div`
    position: relative;
    margin-top: 5rem;
    .contact-bg {
        display: none;
        @media screen and (min-width: 1025px) {
            display: block;
            width: 20px;
            height: 100%;
            background-color: #18d26e;
            position: absolute;
        }
    }
    .contact-wrapper {
        display: grid;
        grid-template-columns: repeat(1, minmax(0, 1fr));
        gap: 2rem;
        margin-top: 3rem;
        .contact-title {
            font-size: 28px;
            width: 100%;
            text-transform: capitalize;
            @media screen and (min-width: 1025px) {
                font-size: 34px;
                width: 80%;            
            }
        }
        .contact-info-item {
            font-size: 16px;
            margin: 1.5rem 0;
            display: flex;
            align-items: center;
            justify-content: start;
            min-height: 2vh;
            @media screen and (min-width: 1025px) {
                font-size: 18px;
            }
            .contact-icon {
                width: 30px;
                height: 30px;
                margin-right: 10px;
                color: #bbb;
            }
        }
        .social-links {
            text-align: start;
            .instagram {
                background-image: linear-gradient(to right, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5);
                color: #ddd;
            }
            .facebook {
                background-color: #4267b2;
                color: #ddd;
            }
            .twitter {
                background-color: #00acee;
                color: #ddd;
            }
        }
        .social-links a {
            display: inline-block;
            background: #353839;
            color: #ddd;
            line-height: 1;
            margin-right: 4px;
            border-radius: 50%;
            width: 36px;
            height: 36px;
            transition: 0.3s;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-top: 10px;
            .i {
                line-height: 0;
                font-size: 18px;
            }
            
        }
        .contact-desc {
            font-size: 16px;
            line-height: 1.7;
            @media screen and (min-width: 1025px) {
                font-size: 18px;
            }
        }
        form {
            margin-top: 20px;
            .textfields {
                margin-top: 1rem;
            }
            button {
                margin-top: 1rem;
                margin-bottom: 3rem;
                border: none;
                padding: 5px 10px;
                font-size: 16px;
                border-radius: 2px;
                text-transform: uppercase;
                background-color: #18d26e;
                color: #fff;
                cursor: pointer;
                transition: all 1s ease;
                &:hover {
                    background-color: #18d26fd4;
                }
                @media screen and (min-width: 1025px) {
                    padding: 10px 15px;
                    font-size: 18px;
                }
            }
        }
        @media screen and (min-width: 1025px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 2rem;
        }
    }
`;
