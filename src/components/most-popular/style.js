import styled from "styled-components";

export const Container = styled.div`
    width: 87%;
    margin: auto;
`;

export const MostPopularWrapper = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 40px;
    img {
        margin-right: 33px;
    }
`;

export const CarouselCards = styled.div`
    width: 880px;
    background-color: #fff;
    border-radius: 8px;
    padding: 30px 20px;
    p {
        color: #051441;
        font-weight: bold;
        font-size: 17px;
        font-family: sans-serif;
        margin-bottom: 25px;
    }
`;

export const Card = styled.div`
    width: 255px;
    height: fit-content;
    overflow: hidden;
    border-radius: 8px;
    overflow: hidden;
    img {
        width: 255px;
        margin-bottom: 15px;
    }
    p:nth-child(2) {
        color: #051441;
        margin-bottom: 10px;
        transition-duration: .5s;
        cursor: pointer;
        &:hover {
            color: #FF2143;
        }
    }
    p:nth-child(3) {
        color: #707b8e;
        font-size: 13px;
        font-weight: normal;
    }
`;

