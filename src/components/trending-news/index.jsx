import React from 'react'
import { Container, Card2, Card3, TrendingNewsWrapper, CardsWrapper, Card } from './style'
import playButton from "../assets/images/play-button (1).svg"

function TrendingNews() {
    return (
        <TrendingNewsWrapper>
            <Container>
                <p>trending news</p>
                <CardsWrapper>
                    <Card>
                        <div>
                            <a href="#">What to Expect From the 2020 Oscar Nomin ations</a>
                            <p>Jun 19, 2020</p>
                            <a href="#">
                                <img src={playButton} alt="" />
                            </a>
                        </div>
                    </Card>
                    <Card2>
                        <div>
                            <a href="#">What to Expect From the 2020 Oscar Nomin ations</a>
                            <p>Jun 19, 2020</p>
                            <a href="#">
                                <img src={playButton} alt="" />
                            </a>
                        </div>
                    </Card2>
                    <Card3>
                        <div>
                            <a href="#">What to Expect From the 2020 Oscar Nomin ations</a>
                            <p>Jun 19, 2020</p>
                            <a href="#">
                                <img src={playButton} alt="" />
                            </a>
                        </div>
                    </Card3>
                </CardsWrapper>
            </Container>
        </TrendingNewsWrapper>
    )
}

export default TrendingNews