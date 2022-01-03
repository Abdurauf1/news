import styled from "styled-components";

export const Container = styled.div`
    width: 87%;
    margin: auto;
    overflow-x: hidden;
`;

export const HeaderWrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
    background-color: transparent;
    margin-bottom: 80px;
`;

export const HeaderLeftContent = styled.div`
    width: 66%;
`;

export const ChangeableImg = styled.img`
    width: 770px;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
`;

export const HeaderLeftShadow = styled.div`
    width: 770px;
    height: 300px;
    border-radius: 7px;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 99;
    overflow-y: hidden;
    background-image: -webkit-linear-gradient(-90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.01) 0%, black 100%);
`;

export const HeaderLeftText = styled.div`
    width: fit-content;
    padding-right: 100px;
    position: absolute;
    top: 435px;
    left: 30px;
    z-index: 100;
    right: 0;
    display: block;
    div {
        color: #fff;
        padding: 5px 13px;
        background-color: #ED4141;
        width: fit-content;
        font-size: 10px;
        border-radius: 5px;
        font-weight: bold;
        text-transform: uppercase;
        margin-bottom: 23px;
    }
    
    a {
        color: #fff;
        font-size: 40px;
        font-weight: bold;
        text-transform: capitalize;
        padding-right: 150px;
        transition-duration: .5s;
        letter-spacing: -.5px;
        &:hover {
            color: #F75A5A;
        }
    }
    p {
        color: #cdcfd8;
        font-size: 13px;
        margin-top: 20px;
    }
`;

export const HeaderRightContent = styled.div`
    width: 33%;
    height: fit-content;
    margin-left: 27px;
`;

export const ImgCard = styled.div`
    width: 372px;
    height: 408px;
    position: relative;
    overflow: hidden;
    border-radius: 7px;
    margin-bottom: 25px;
    div {
        width: 372px;
        height: 200px;
        position: absolute;
        top: 250px;
        left: 0;
        bottom: 0;
        right: 0;
        background-image: -webkit-linear-gradient(-90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.01) 0%, black 100%);
    }
`;

export const RightFirtsText = styled.div`
    width: 372px;
    height: fit-content;
    padding: 0 30px 20px 30px;
    position: absolute;
    z-index: 99;
    top: 0;
    bottom: 0;
    p:first-child {
        width: fit-content;
        border-radius: 6px;
        color: #fff;
        text-transform: uppercase;
        font-size: 10px;
        font-weight: bold;
        padding: 5px 13px;
        background-color: #0077B5;
        margin-bottom: 20px;
    }
    a {
        color: #fff;
        font-weight: bold;
        font-size: 25px;
        transition-duration: .5s;
        line-height: 30px;
        margin-bottom: 10px;
        &:hover {
            color: #F75A5A;
        }
    }
    p:last-child {
        color: #cdcfd8;
        font-size: 13px;
        margin-top: 10px;
    }
`;

export const ImgCard2 = styled.div`
    width: 372px;
    height: 220px;
    position: relative;
    overflow: hidden;
    border-radius: 7px;
    div {
        width: 372px;
        height: 150px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: -webkit-linear-gradient(-90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.01) 0%, black 100%);
    }
`;

export const RightSecondText = styled.div`
    width: 372px;
    height: fit-content;
    padding: 0 30px 20px 30px;
    p:first-child {
        width: fit-content;
        border-radius: 6px;
        color: #fff;
        text-transform: uppercase;
        font-size: 10px;
        font-weight: bold;
        padding: 5px 13px;
        background-color: #12BB00;
        margin-bottom: 20px;
    }
    a {
        color: #fff;
        font-weight: bold;
        font-size: 25px;
        transition-duration: .5s;
        line-height: 30px;
        margin-bottom: 10px;
        &:hover {
            color: #F75A5A;
        }
    }
    p:last-child {
        color: #cdcfd8;
        font-size: 13px;
        margin-top: 10px;
    }
`;

export const Add = styled.img`
    width: 774px;
    position: absolute;
    top: 1690px;
`;