import { MostRecentBottom, MostRecentWrapper, ImgShadow, LinksText } from "./style.js"

function MostRecent() {
    return (
        <MostRecentWrapper>
            <p>most recent</p>
            <ImgShadow>
                <div></div>
                <LinksText>
                    <p>vogue</p>
                    <a href="#">What to Wear: 9+ Cute Work Outfits to Wear This.</a>
                    <p>Jhon | 2 hours ago</p>
                </LinksText>
                <img src={"https://tmb-01.github.io/news/assets/img/gallery/most_recent.png"} alt="" />
            </ImgShadow>
            <MostRecentBottom>
                <img src={"https://tmb-01.github.io/news/assets/img/gallery/most_recent1.png"} alt="" />
                <div>
                    <a href="#">Scarlett’s disappointment at latest accolade</a>
                    <p>Jhon | 2 hours ago</p>
                </div>
            </MostRecentBottom>
            <MostRecentBottom>
                <img src={"https://tmb-01.github.io/news/assets/img/gallery/most_recent2.png"} alt="" />
                <div>
                    <a href="#">Most Beautiful Things to Do in Sidney with Your BF</a>
                    <p>Jhon | 3 hours ago</p>
                </div>
            </MostRecentBottom>
        </MostRecentWrapper>
    )
}

export default MostRecent