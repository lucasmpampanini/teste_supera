import React from 'react'
import NavBar from './navBar'
import BackgroundSlider from 'react-background-slider'
import imgHero_superMario from '../assets/images/super-mario-odyssey_hero.jpg'
import imgHero_horizonZeroDawn from '../assets/images/horizon-zero-dawn_hero.jpg'
import imgHero_fifa18 from '../assets/images/Fifa-18_hero.jpg'


export default function Hero() {
    return (
        <div>
            <BackgroundSlider
                images={[imgHero_superMario, imgHero_horizonZeroDawn, imgHero_fifa18]}
                duration={8}
                transition={2}
            />
            <NavBar />

        </div>
    )
}
