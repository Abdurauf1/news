import { Left, Stick, TrendText, Container, Top1, TopContentWrapper, Right } from './style'
import lightning from "../assets/images/flash.svg"
import calendar from "../assets/images/calendar.svg"

function Top() {
    return (
        <Top1>
            <Container>
                <TopContentWrapper>
                    <Right>
                        <img src={lightning} alt="" />
                        <TrendText>TRENDING-TITLE</TrendText>
                        <Stick>|</Stick>
                        <TrendText>Class property employ ancho red multi level mansion</TrendText>
                    </Right>
                    <Left>
                        <img src={calendar} alt="" />
                        <p>+880166 253 232</p>
                    </Left>
                </TopContentWrapper>
            </Container>
        </Top1>
    )
}

export default Top