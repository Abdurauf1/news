import { Top2ContentWrapper } from "./style.js"
import { Container, Logolink, AddImg } from "./style.js"

function Top2() {
    return (
        <Top2ContentWrapper>
            <Container>
                <a href="#">
                    <Logolink src={"https://tmb-01.github.io/news/assets/img/logo/logo.png"} alt="" />
                </a>

                <AddImg src={"https://tmb-01.github.io/news/assets/img/gallery/header_card.png"} alt="" />
            </Container>
        </Top2ContentWrapper>
    )
}

export default Top2