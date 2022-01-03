import styled from "styled-components";

export const Container = styled.div`
    width: 87%;
    margin: auto;
`;

export const Top1 = styled.div `
    width: 100%;
    height: 46px;
    background-color: #000;
`;

export const TopContentWrapper = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 13px 0;
`;

export const Right = styled.div `
    display: flex;
    img {
        width: 14px;
        height: 14px;
        margin: 3px 15px 3px 0;
    }
    p {
        color: #cdcfd8;
    }
`;

export const TrendText = styled.p `
    font-size: 14px;
`;

export const Stick = styled.p `
    margin: 0 35px; 
    font-size: 12px;
`;

export const Left = styled.div `
    display: flex;
    color: #BDBFC8;
    img {
        width: 13px;
        height: 13px;
        margin: 3px 10px;
    }
    font-size: 14px;
`;