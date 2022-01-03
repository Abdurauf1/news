import styled from "styled-components"

export const Container = styled.div`
    width: 87%;
    margin: auto;
`;

export const TrendingNewsWrapper = styled.div`
    width: 100%;
    height: fit-content;
    background-color: #fff;
    padding: 70px 0 85px 0;
    p:first-child {
        color: #051441;
        font-size: 37px;
        font-weight: bold;
        text-transform: capitalize;
        margin-bottom: 25px;
    }
`;

export const CardsWrapper = styled.div`
    width: 100%;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
`;

export const Card = styled.div`
    width: 32%;
    height: 250px;
    border-radius: 8px;
    background-image: url("https://tmb-01.github.io/news/assets/img/gallery/tranding2.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    div {
        width: 290px;
        height: 110px;
        border-top-right-radius: 8px;
        background-color: #fff;
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 15px;  
        a {
            color: #051441;
            font-size: 17px;
            font-weight: bold;
            transition-duration: .5s;
            &:hover {
                color: #FF2143;
            }
        }
        p:nth-child(2) {
            margin-top: 10px;
            font-size: 13px;
            color: #506172;
        }
        a {
            img {
                width: 30px;
                height: 30px;
                position: absolute;
                right: 20px;
                bottom: 10px;
            }
        }
    }
`;

export const Card2 = styled.div`
    width: 32%;
    height: 250px;
    border-radius: 8px;
    background-image: url("https://tmb-01.github.io/news/assets/img/gallery/tranding1.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    div {
        width: 290px;
        height: 110px;
        border-top-right-radius: 8px;
        background-color: #fff;
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 15px;  
        a {
            color: #051441;
            font-size: 17px;
            font-weight: bold;
            transition-duration: .5s;
            &:hover {
                color: #FF2143;
            }
        }
        p:nth-child(2) {
            margin-top: 10px;
            font-size: 13px;
            color: #506172;
        }
        a {
            img {
                width: 30px;
                height: 30px;
                position: absolute;
                right: 20px;
                bottom: 10px;
            }
        }
    }
`;

export const Card3 = styled.div`
    width: 32%;
    height: 250px;
    border-radius: 8px;
    background-image: url("https://tmb-01.github.io/news/assets/img/gallery/tranding2.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    div {
        width: 290px;
        height: 110px;
        border-top-right-radius: 8px;
        background-color: #fff;
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 15px;  
        a {
            color: #051441;
            font-size: 17px;
            font-weight: bold;
            transition-duration: .5s;
            &:hover {
                color: #FF2143;
            }
        }
        p:nth-child(2) {
            margin-top: 10px;
            font-size: 13px;
            color: #506172;
        }
        a {
            img {
                width: 30px;
                height: 30px;
                position: absolute;
                right: 20px;
                bottom: 10px;
            }
        }
    }
`;