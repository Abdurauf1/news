import { RightNews, Data, LeftNews, CardImg, LyfeStyleContent, Active, TopTitles, WhatsNewWrapper } from "./style.js"
import lyfestyle from "../assets/images/lyfestyle1.png"
import lyfestyle2 from "../assets/images/lyfestyle2.png"
import lyfestyle3 from "../assets/images/lyfestyle3.png"
import lyfestyle4 from "../assets/images/lyfestyle4.png"
import lyfestyle5 from "../assets/images/lyfestyle5.png"

function WhatsNew() {
    return (
        <WhatsNewWrapper>
            <TopTitles>
                <p>whats new</p>
                <ul>
                    <li>
                        <Active href="#">lifestyle</Active>
                    </li>
                    <li>
                        <a href="#">travel</a>
                    </li>
                    <li>
                        <a href="#">fashion</a>
                    </li>
                    <li>
                        <a href="#">sports</a>
                    </li>
                    <li>
                        <a href="#">technology</a>
                    </li>
                </ul>
            </TopTitles>
            <LyfeStyleContent>
                <LeftNews>
                    <CardImg>
                        <img src={lyfestyle} alt="" />
                    </CardImg>
                    <a href="#">Secretart for Economic Air plane that looks like</a>
                    <Data>by Alice cloe - Jun 19, 2020</Data>
                    <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                </LeftNews>
                <RightNews>
                    <div>
                        <img src={lyfestyle2} alt="" />
                        <div>
                            <p>fashion</p>
                            <a href="#">Portrait of group of friends ting eat. market in.</a>
                            <p>Jun 19, 2020</p>
                        </div>
                    </div>
                    <div>
                        <img src={lyfestyle3} alt="" />
                        <div>
                            <p>fashion</p>
                            <a href="#">Portrait of group of friends ting eat. market in.</a>
                            <p>Jun 19, 2020</p>
                        </div>
                    </div>
                    <div>
                        <img src={lyfestyle4} alt="" />
                        <div>
                            <p>fashion</p>
                            <a href="#">Portrait of group of friends ting eat. market in.</a>
                            <p>Jun 19, 2020</p>
                        </div>
                    </div>
                    <div>
                        <img src={lyfestyle5} alt="" />
                        <div>
                            <p>fashion</p>
                            <a href="#">Portrait of group of friends ting eat. market in.</a>
                            <p>Jun 19, 2020</p>
                        </div>
                    </div>
                </RightNews>
            </LyfeStyleContent>
        </WhatsNewWrapper>
    )
}

export default WhatsNew
