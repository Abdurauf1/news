import styled from "styled-components";

export const NavStyle = styled.nav`
    width: 100%;
    height: 79px;
    background-color: #FF2143;
    overflow: hidden;
`;

export const Container = styled.div`
    width: 87%;
    margin: auto;
    display: flex;
    justify-content: space-between;
`;

export const UlWrap = styled.ul`
    display: flex;
    margin-left: 0;
    padding-left: 0;
    li {
        width: fit-content;
        height: fit-content;
        padding: 27px 0;
        a {
            color: #fff;
            text-transform: uppercase;
            font-weight: 600;
            font-size: 15px;
            padding: 27px 25px;
        }
    }
    div {
        width: 1px;
        height: 16px;
        background-color: #fff;
        margin: 30px 0;
    }
`;

export const RightLinks = styled.div`
    display: flex;
`;

export const SocialNetworks = styled.div`
    display: flex;
    border-left: 1px solid #FF889A;
    border-right: 1px solid #FF889A;
    justify-content: space-between;
    padding: 30px;
    a {
        margin: 0 12px;
        img {
            width: 17px;
            height: 17px;
            transition-duration: .5s;
            &:hover {
                transform: rotateY(180deg);
            }
        }
    }
`;

export const SearchIcon = styled.a`
    img {
        width: 16px;
        height: 16px;
    }
    padding: 30px;
    border-right: 1px solid #FF889A;
`;