import styled from "styled-components";

export const HomeContainer = styled.div`
    background-color: #1D1829;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ListChallenges = styled.div`
    
    & > div > a {
        text-decoration: none;
        color: #ebebeb;

        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;

        & > strong {
            font-size: 1.5rem;
        }

        & > img {
            object-fit: cover;
        }
    }

    & > div {
        background-color: #241e33;
        border-radius: 8px;
        padding: 1.5rem 2rem;
    }
`