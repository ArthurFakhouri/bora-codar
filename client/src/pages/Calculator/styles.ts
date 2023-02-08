import styled from "styled-components";

interface ButtonProps {
    variant: string;
}

export const CalculatorPage = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, #807ECE 0%, #8E7ECE 100%);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CalculatorContainer = styled.div`
    max-width: 22.25rem;
    max-height: 35.375rem;
    width: 22.25rem;
    height: 35.375rem;
    border-radius: 48px;
    padding: 2.375rem 2rem 2rem;

    display: flex;
    flex-direction: column;

    background: #2D2A37;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 188px 52px rgba(0, 0, 0, 0.01), 0px 120px 48px rgba(0, 0, 0, 0.04), 0px 68px 41px rgba(0, 0, 0, 0.15), 0px 30px 30px rgba(0, 0, 0, 0.26), 0px 8px 17px rgba(0, 0, 0, 0.29), inset 0px 6px 8px rgba(255, 255, 255, 0.1), inset 0px -4px 5px rgba(0, 0, 0, 0.22);
`

export const CalculatorHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: .5rem;

    & > p {
        margin-right: .75rem;
        font-size: 1.25rem;
        height: 1.75rem;
        color: #6B6B6B;
    }
`

export const InputBox = styled.div`
    width: 100%;
    height: 3.125rem;
    display: flex;
    justify-content: center;
    align-items: center;

    & > span {
        background-color: transparent;
        border-radius: 6px;
        border: 0;
        font-size: 2.25rem;
        color: #EBEBEB;
        text-align: right;
        width: 100%;
        padding: 0 .5rem;

        &.light{
            font-size: 2rem;
        }
        &.thin{
            font-size: 1.75rem;
        }
    }
`

export const CalculatorButtons = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);   
    gap: .75rem;
    margin-top: auto;
`

export const Button = styled.button<ButtonProps>`
    border-radius: 50%;
    border: 0;
    max-width: 4rem;
    max-height: 4rem;
    width: 4rem;
    height: 4rem;

    box-shadow: 0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29), inset 0px 2px 3px rgba(255, 255, 255, 0.06);
    font-size: 1.5rem;
    line-height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    cursor: pointer;

    &.active {
        filter: brightness(85%);
    }

    &:hover {
        transition: .1s filter;
        filter: brightness(85%);
    }

    color: ${props => props.variant === 'CE' ? "#975DFA" : "#ebebeb"};

    background: ${props => props.variant === 'operator' ?
        'linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0.01%, rgba(255, 255, 255, 0.05) 100%), #462878'
        : props.variant === 'equals' ?
            'linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%), #7F45E2'
            : 'linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #2D2A37'};
`