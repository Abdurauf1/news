import styled from "styled-components";

export const MostRecentWrapper = styled.div`
    width: 372px;
    height: fit-content;
    padding: 27px 9px;
    background-color: #fff;
    border-radius: 8px;
    p:first-child {
        color: #051441;
        text-transform: capitalize;
        font-weight: bold;
        font-size: 18px;
        margin-bottom: 18px;
    }
`;

export const ImgShadow = styled.div`
    width: 355px;
    height: 246px;
    position: relative;
    overflow: hidden;
    border-radius: 7px;
    margin-bottom: 40px;
    div {
        width: 358px;
        height: 200px;
        border-radius: 8px;
        position: absolute;
        top: 115px;
        z-index: 99;
        background: -webkit-linear-gradient(top, rgba(2,26,71,0) 0%, rgba(2,26,71,0.6) 100%);
        background: linear-gradient(to bottom, rgba(2,26,71,0) 0%, rgba(2,26,71,0.6) 100%); 
    }
    img {
        width: 100%;
    }
`;

export const LinksText = styled.div`
    padding: 0 60px 30px 30px;
    p:first-child {
        width: fit-content;
        border-radius: 5px;
        color: #fff;
        font-size: 10px;
        text-transform: uppercase;
        padding: 7px 10px;
        background-color: #8A3AB9;
        margin-bottom: 20px;
    }
    a {
        color: #fff;
        font-weight: bold;
    }
    p:last-child {
        margin-top: 10px;
        font-size: 13px;
        color: #fff;
    }
`;

export const MostRecentBottom = styled.div`
    display: flex;
    margin-bottom: 20px;
    img {
        width: 100px;
        margin-right: 15px;
    }
    div {
        a {
            color: #000;
            transition-duration: .5s;
            font-weight: 600;
            &:hover {
                color: #FF2143;
            }
        }
        p {
            margin-top: 10px;
            font-size: 13px;
            color: #707b8e;
        }
    }
`;