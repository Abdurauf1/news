import styled from "styled-components"

export const FooterWrapper = styled.div`
    width: 100%;
    height: fit-content;
    background-color: #070B11;
`;

export const Container = styled.div`
    width: 87%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding: 140px 0 100px 0;
`;

export const FirstSection = styled.div`
    width: 24%;
    img {
        margin-bottom: 25px;
    }
    p:nth-child(2) {
        color: #9fa6bd;
        line-height: 25px;
        font-family: sans-serif;
        font-size: 14px;
        margin-bottom: 35px;
    }
    p:nth-child(3) {
        color: #9fa6bd;
        line-height: 30px;
        font-family: sans-serif;
        font-size: 14px;
        margin-bottom: 20px;
    }
    p:nth-child(4) {
        color: #9fa6bd;
        line-height: 30px;
        font-family: sans-serif;
        font-size: 14px;
    }
`;

export const SecondSection = styled.div`
    width: 35%;
    p:first-child {
        color: #fff;
        font-size: 23px;
        margin-bottom: 35px;
        font-weight: 700;
    }
    div {
        margin-bottom: 11px;
        display: flex;
        img {
            height: 80px;
            margin-right: 20px;
        }
    }
`;

export const FooterText = styled.div`
    padding: 5px 25px 5px 0;
    a {
        color: #fff;
        font-weight: 600;
        font-size: 15px;
        transition-duration: .5s;
        &:hover {
            color: #D81E3B;
        }
    }
    p {
        color: #707b8e;
        font-size: 12px;
        margin-top: 10px;
    }
`;