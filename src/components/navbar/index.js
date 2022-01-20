import { NavStyle, UlWrap, SearchIcon, RightLinks, Container, SocialNetworks } from "./style.js"
import facebook from "../assets/images/facebook.svg"
import twitter from "../assets/images/twitter (1).svg"
import instagram from "../assets/images/instagram.svg"
import youtube from "../assets/images/youtube.svg"
import searchIcon from "../assets/images/search (1).svg"

function Navbar() {
    return (
        <NavStyle>
            <Container>
                <UlWrap>
                    <li>
                        <a style={{ paddingLeft: "0" }} href="#">home</a>
                    </li>
                    <div></div>
                    <li>
                        <a href="#">about</a>
                    </li>
                    <div></div>
                    <li>
                        <a href="#">category</a>
                    </li>
                    <div></div>
                    <li>
                        <a href="#">latest news</a>
                    </li>
                    <div></div>
                    <li>
                        <a href="#">pages</a>
                    </li>
                    <div></div>
                    <li>
                        <a href="#">contact</a>
                    </li>
                </UlWrap>

                <RightLinks>
                    <SocialNetworks>
                        <a href="#">
                            <img src={facebook} alt="" />
                        </a>
                        <a href="#">
                            <img src={twitter} alt="" />
                        </a>
                        <a href="#">
                            <img src={instagram} alt="" />
                        </a>
                        <a href="#">
                            <img src={youtube} alt="" />
                        </a>
                    </SocialNetworks>

                    <SearchIcon href="#">
                        <img src={searchIcon} alt="" />
                    </SearchIcon>
                </RightLinks>
            </Container>
        </NavStyle>
    )
}

export default Navbar