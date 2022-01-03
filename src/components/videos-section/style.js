import styled from "styled-components"

export const Container = styled.div`
    width: 87%;
    margin: auto;
    padding-top: 85px;
    padding-bottom: 35px;
`;

export const VideoSectionWrapper = styled.div`
    width: 100%;
`;

export const Video = styled.video`
    width: 100%;
    margin-bottom: 5px;
`;

export const VideosWrapper = styled.div`
    width: 99%;
    margin: auto;
`;

export const VideoCard = styled.div`
    width: 50px;
    height: 200px;
    margin-left: 5px;
    overflow: hidden;
    video {
        width: 280px;
        height: 160px;
    }
    p {
        font-weight: 600;
        text-align: center;
        font-size: 15px;
    }
`;