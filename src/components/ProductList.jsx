import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import styled from "styled-components";
import { Container } from "@mui/material";

import Product from "./Product";
import { products } from "../data";

function ProductList() {
    return (
        <ProductListStyled data-aos="fade-right">
            <Container maxWidth="md">
                <h2 className="product-list-title">You've Got Questions. I've Got Answers. It's Amelia's World!</h2>
                <div className="pro-desc-grid">
                    <div>
                        <ul style={{ listStyleType: "none", display: "inline-block", textAlign: "left" }}>
                            <li><CheckCircleIcon className="check-icon" /> Web Development</li>
                            <li><CheckCircleIcon className="check-icon" /> Blockchain Expert</li>
                            <li><CheckCircleIcon className="check-icon" /> Web Design</li>
                            <li><CheckCircleIcon className="check-icon" /> IT Management</li>
                        </ul>
                    </div>
                    <div>
                        <ul style={{listStyleType: "none"}}>
                            <li><CheckCircleIcon className="check-icon" /> Computer Networking</li>
                            <li><CheckCircleIcon className="check-icon" /> Forex Trading</li>
                            <li><CheckCircleIcon className="check-icon" /> Blogging</li>
                            <li><CheckCircleIcon className="check-icon" /> Cyber Securities</li>
                        </ul>
                    </div>
                </div>
            </Container>
            <Container maxWidth="lg">
                <div className="grid-container">
                    {products.map(product => 
                        (
                            <Product
                                key={product.id}
                                img={product.img}
                                link={product.link}
                            />
                        )
                    )}
                </div>
            </Container>
        </ProductListStyled>
    )
}

export default ProductList;

const ProductListStyled = styled.div`
    .product-list-title {
        text-align: center;
        font-size: 28px;
        text-decoration: capitalize;
        @media screen and (min-width: 600px) {
            font-size: 45px;
            padding-top: 0;
        }
    }
    .pro-desc-grid {
        display: grid;
        grid-template-columns: repeat(1, minmax(0, 1fr));
        gap: 0rem;
        margin-top: 1rem;
        li {
            display: flex;
            align-items: start;
            margin: 10px 0;
            min-height: 2vh;
            font-size: 16px;
            @media screen and (min-width: 1025px) {
                font-size: 18px;
            }
            .check-icon {
                color: #18d26e;
                margin-right: 10px;
            }
        }
        @media screen and (min-width: 1025px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1rem;
            text-align: center;
        }
    }
    .grid-container {
        display: grid;
        grid-template-columns: repeat(1, minmax(0, 1fr));
        gap: 2rem;
        margin-top: 3rem;
        @media screen and (min-width: 1025px) {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 2rem;
        }
    }
`;
