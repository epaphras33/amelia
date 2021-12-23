import styled from "styled-components";

function Product({ img, link }) {
    return (
        <ProductStyled data-aos="zoom-in">
            <div className="product-browser">
                <div className="product-circle"></div>
                <div className="product-circle"></div>
                <div className="product-circle"></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="Other websites" className="product-img" />
            </a>
        </ProductStyled>
    )
}

export default Product;

const ProductStyled = styled.div`
    height: 40vh;
    margin: 20px 10px;
    border: 1px solid rgb(0, 0, 0);
    border-bottom: none;
    border-radius: 10px 10px 0 0;
    overflow: hidden;
    .product-browser {
        height: 20px;
        background-color:rgb(0, 0, 0);
        display: flex;
        align-items: center;
        position: sticky;
        z-index: 2;
        .product-circle {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            margin: 3px;
            background-color: #fff;
        }
    }
    .product-img {
        width: 100%;
        transition: all 10s ease;
        &:hover {
        transform: translateY(-100%);
    }
    }
    &:hover {
        transform: translateY(-100%);
    }
`;
