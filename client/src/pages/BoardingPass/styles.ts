import styled from "styled-components";

export const BoardingPassPage = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    background: linear-gradient(167.96deg, #8257E5 0%, #271A45 100%);
`

export const BoardingPassContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    max-width: 20.4375rem;
    gap: 1.25rem;

    & > p {
        font-weight: 500;
        font-size: 1.25rem;
        color: white;
    }

    & > span {
        margin: 0rem 2rem;
        font-size: .825rem;
        color: #ffffff8e;
    }
`

export const Ticket = styled.div`
    display: flex;
    text-align: initial;
    flex-direction: column;
    border-radius: 24px;
    filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.25));
`

export const FlyDescription = styled.div`
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    padding: 1.5rem 2rem;
    background-color: white;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    --mask: radial-gradient(12px at 12px 100%,#0000 98%,#000) -12px;
    -webkit-mask: var(--mask);
    mask: var(--mask);

    & > header{
        display: flex;
        justify-content: space-between;

        & > section:last-child {
            text-align: right;
        }
    }
`

export const FlyInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div:nth-child(2) {
        transform: rotateZ(90deg);
        color: #633BBC;
    }
    & > div:last-child {
        text-align: right;
    }
`

export const PassengerInfo = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 2rem;

    position: relative;
    background-color: white;
    z-index: 1;

    --mask: radial-gradient(12px at 12px 12px,#0000 98%,#000) -12px -12px;
    -webkit-mask: var(--mask);
    mask: var(--mask);
    border-top: dashed 1px rgba(0, 0, 0, .32);
    border-bottom: dashed 1px rgba(0, 0, 0, .32);

    & > section:last-child {
        text-align: right;
    }
`

export const BoardingInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    position: relative;
    background-color: white;
    padding: 1.5rem 2rem;

    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;

    --mask: radial-gradient(12px at 12px 0,#0000 98%,#000) -12px;
    -webkit-mask: var(--mask);

    & > div {
        display: flex;
        justify-content: space-between;

        & > div:first-child {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            & strong:has(time) {
                background-color: #633bbc;
                border-radius: 8px;
                color: white;

                padding: .25rem .5rem;
            }

            & span {
                font-size: .825rem;
            }
            & > div {
                display: flex;
                flex-direction: column;
            }
        }

        & > div:last-child {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: .825rem;

            & > img {
                height: 10rem;
            }
        }
    }
`