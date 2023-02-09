import { HomeContainer } from "./styles";
import { Link } from 'react-router-dom';

export function Home() {
    return (
        <HomeContainer>
            <Link to={'./calculator'}>Calculadora</Link>
        </HomeContainer>
    )
}