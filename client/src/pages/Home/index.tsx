import { HomeContainer, ListChallenges } from "./styles";
import { Link } from 'react-router-dom';
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useEffect, useState } from "react";
import boardingPassImg from '../../assets/boardingPass.svg';
import calculadoraImg from '../../assets/calculadora.svg';

export function Home() {

    function screenBps() {
        if (typeof window !== 'undefined') {
            if (window.innerWidth > 1200)
                return 3;
            else if (window.innerWidth > 768)
                return 2;
            return 1;
        }
        return 3;
    }

    const [defaultHeight, setDefaultHeight] = useState(400);
    const [perView, setPerView] = useState(() => {
        return screenBps();
    });
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider(
        {
            slideChanged(slider) {
                setCurrentSlide(slider.track.details.rel)
            },
            created() {
                setLoaded(true);
            },
            slides: {
                perView,
                spacing: 32,
                origin: 'center'
            }
        },
    )

    useEffect(() => {
        function handleResize() {
            let bpsResult = screenBps();
            setPerView(bpsResult);
            if(bpsResult === 1)
                setDefaultHeight(300);
            else
                setDefaultHeight(400);
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return (
        <HomeContainer>
            <ListChallenges ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide">
                    <Link to={'./calculator'}>
                        <img src={calculadoraImg} alt="Calculadora" height={defaultHeight} />
                        <strong>Calculadora</strong>
                    </Link>
                </div>
                <div className="keen-slider__slide">
                    <Link to={'./boardingPass'}>
                        <img src={boardingPassImg} alt="Cartão de Embarque" height={defaultHeight} />
                        <strong>Cartão de Embarque</strong>
                    </Link>
                </div>
            </ListChallenges>
        </HomeContainer>
    )
}