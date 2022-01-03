import styled from "styled-components";

export const WhatsNewWrapper = styled.div`
    width: 66%;
    height: fit-content;
    background-color: #fff;
    border-radius: 8px;
    padding: 28px 20px;
`;

export const TopTitles = styled.div`
    margin-bottom: 20px;
    display: flex;
    p {
        color: #051441;
        font-size: 37px;
        font-weight: bold;
        text-transform: capitalize;
        margin-right: 10px;
    }
    ul {
        display: flex;
        li {
            margin: 18px 10px;
            a {
                text-transform: capitalize;
                color: #051441;
                font-weight: 600;
                font-size: 17px;
            }
        }
    }
`;

export const Active = styled.a`
    color: #FF2143 !important;
`;

export const LyfeStyleContent = styled.div`
    width: 100%;
    padding: 15px;
    display: flex;
    justify-content: space-between;
`;

export const LeftNews = styled.div`
    width: 320px;
    a {
        color: #051441;
        font-weight: bold;
        font-size: 23px;
        transition-duration: .5s;
        &:hover {
            color: #FF2143;
        }
    }
    p {
        font-size: 17px;
        font-family: sans-serif;
        line-height: 30px;
    }
`;

export const Data = styled.p`
    color: #707b8e;
    margin-top: 7px;
    margin-bottom: 10px;
    font-size: 13px !important;
`;

export const CardImg = styled.div`
    width: 320px;
    height: 220px;
    overflow: hidden;
    border-radius: 7px;
    position: relative;
    margin-bottom: 10px;
    img {
        width: 320px;
        height: 220px;
        transition-duration: .5s;
        &:hover {
            transform: scale(1.05);
        }
    }
`;

export const RightNews = styled.div`
    width: 48%;
    div {
        display: flex;
        margin-bottom: 12px;
        img {
            height: 105px;
            margin-right: 15px;
        }
        div {
            display: block;
            padding: 3px 0;
            p:first-child {
                color: #0077B5;
                text-transform: uppercase;
                font-size: 11px;
                font-weight: bold;
                margin-bottom: 13px;
            }
            a {
                color: #000;
                transition-duration: .5s;
                &:hover {
                    color: #FF2143;
                }
            }
            p:last-child {
                color: #707b8e;
                font-size: 13px;
                margin-top: 8px;
            }
        }
    }
    div:nth-child(3) {
        div {
            p:first-child {
                color: #13C600;
            }
        }
    }
    div:nth-child(4) {
        div {
            p:first-child {
                color: #FF2143;
            }
        }
    }
`;