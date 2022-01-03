import styled from "styled-components"

export const Container = styled.div`
    width: 87%;
    margin: auto;
`;

export const FooterCard = styled.div`
    width: 270px;
    height: fit-content;
    background-color: #fff;
    overflow: hidden;
    border-radius: 7px;
    margin: auto;
    margin-bottom: 50px;
    img {
        width: 100%;
        margin-bottom: 15px;
    }
    a {
        color: #051441;
        font-weight: bold;
        font-size: 15px;
        transition-duration: .5s;
        &:hover {
            color: #FF2143;
        }
    }
    p {
        margin-top: 10px;
        font-size: 13px;
        color: #838793;
    }
`;
