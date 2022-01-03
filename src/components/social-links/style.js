import styled from "styled-components";

export const SocialLinksWrapper = styled.div`
    width: 372px;
    height: fit-content;
    background-color: #fff;
    border-radius: 8px;
    display: flex;
    flex-wrap: wrap;
    padding: 30px 20px 40px 20px;
    justify-content: space-between;
    margin-bottom: 40px;
    div:first-child {
        margin-bottom: 7px;
    }
    div:nth-child(2) {
        margin-bottom: 7px;
    }
    div {
        width: 163px;
        border-radius: 5px;
        display: flex;
        border: 1px solid #f4f4f4;
        padding: 10px 0 4px 13px;
        height: fit-content;
        a {
            img {
                width: 30px;
                margin: 3px 13px 0 0;
            }
        }
        div {
            display: block;
            border: none;
            padding: 0;
            p:first-child {
                font-weight: 600;
                font-size: 14px;
            }
            p:last-child {
                color: #707b8e;
                font-size: 12px;
            }
        }
    }
`;