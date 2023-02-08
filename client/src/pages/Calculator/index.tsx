import { MouseEvent, useCallback, useEffect, useRef, useState } from "react";
import { Button, CalculatorButtons, CalculatorContainer, CalculatorHeader, CalculatorPage, InputBox } from "./styles";
import { buttons } from "../../services/calculator";
import equalsResult from '../../assets/SecondaryEquals.png'

type Operation = "Divider" | "Plus" | "Minus" | "X" | "Percent" | "C" | "CE" | "Equals"

export function Calculator() {

    const [isEqualsCalculated, setIsEqualsCalculated] = useState(false);
    const equationRef = useRef<HTMLInputElement>(null);
    const buttonsRef = useRef<HTMLButtonElement[]>([]);
    const [result, setResult] = useState("");
    const [equation, setEquation] = useState("0");
    const operations = {
        Divider() {
            setResult((value) => !value || isEqualsCalculated ?
                equation.replace(/\./g, '') + "÷"
                : value.substring(0, value.length - 1) + "÷"
            );
        },
        Plus() {
            setResult((value) => !value || isEqualsCalculated ?
                equation.replace(/\./g, '') + "+"
                : value.substring(0, value.length - 1) + "+"
            );
        },
        Minus() {
            setResult((value) => !value || isEqualsCalculated ?
                equation.replace(/\./g, '') + "-"
                : value.substring(0, value.length - 1) + "-"
            );
        },
        X() {
            setResult((value) => !value || isEqualsCalculated ?
                equation.replace(/\./g, '') + "×"
                : value.substring(0, value.length - 1) + "×"
            );
        },
        Percent() {
            const equationWithoutFormat = equation.replace(/\./g, '');
            const result = Number(equationWithoutFormat.replace(',', '.')) / 100;
            setResult(equationWithoutFormat + "%");
            handleEquationChange(result.toLocaleString('pt-BR'));
            setIsEqualsCalculated((value) => !value);
        },
        C() {
            setResult("");
            setEquation("0");
            setIsEqualsCalculated(false);
        },
        CE() {
            setEquation("0");
        },
        PlusMinus() {
            setEquation(value => {
                if (!value.includes("-") && value !== '0')
                    return "-" + value;
                return value.replace('-', '');
            });
        },
        Equals() {
            if (!result) {
                setResult(equation.replace(/\./g, ''))
                setIsEqualsCalculated((value) => !value)
            } else {
                const regExp = new RegExp(/[^\d,]$/);
                if (regExp.test(result)) {
                    const number = Number(result.replace(',', '.').substring(0, result.length - 1));
                    const operator = result.slice(result.length - 1);
                    const equationNumber = Number(equation.replace(/\./g, '').replace(',', '.'));

                    if (operator === '+') {
                        setResult(number + "+" + equationNumber.toLocaleString('pt-BR'));
                        handleEquationChange((number + equationNumber).toLocaleString('pt-BR'))
                    } else if (operator === '-') {
                        setResult(number + "-" + equationNumber.toLocaleString('pt-BR'));
                        handleEquationChange((number - equationNumber).toLocaleString('pt-BR'))
                    } else if (operator === '×') {
                        setResult(number + "×" + equationNumber.toLocaleString('pt-BR'));
                        handleEquationChange((number * equationNumber).toLocaleString('pt-BR'))
                    } else {
                        setResult(number + "÷" + equationNumber.toLocaleString('pt-BR'));
                        handleEquationChange((number / equationNumber).toLocaleString('pt-BR'))
                    }
                } else {
                    console.log('entrei');
                    setResult(equation.replace(/\./g, ''))
                }
                setIsEqualsCalculated(true);
            }
        }
    }

    if (equationRef.current) {
        if (equation.length > 18) {
            equationRef.current.classList.add('thin')
            equationRef.current.classList.remove('light');
        } else if (equation.length > 16) {
            equationRef.current.classList.add('light')
            equationRef.current.classList.remove('thin');
        } else {
            equationRef.current.className = ''
        }
    }

    function triggerButton(key: string) {
        const button = buttonsRef.current.find(button => {
            if (button)
                return button.classList.contains("case" + key)
            return false;
        })
        if (button) {
            button.classList.add('active');
            button.click();
            setTimeout(() => button.classList.remove('active'), 150);
        }
    }

    const keyPressListener = useCallback((event: KeyboardEvent) => {
        triggerButton(event.key)
        if (event.key === 'Backspace') {
            setEquation(value => handleEquationChange(value.substring(0, value.length - 1)))
        }
    }, [])

    useEffect(() => {
        document.title = 'Bora codar - Calculadora'

        window.addEventListener('keyup', keyPressListener);

        return () => window.removeEventListener('keyup', keyPressListener)
    }, [])

    function handleEquationChange(value: string) {
        let equationText = value;

        if (equationText.length > 21)
            equationText = equationText.substring(0, equationText.length - 1);

        equationText = equationText.replace(/[^\d,-]/g, '');
        equationText = equationText.replace(/^(0)(\d)/g, '$2');
        equationText = equationText.replace(/(,)(.*)(,|\.)/, '$1$2');
        equationText = equationText.replace(/(\d)(\d{3})$/, '$1.$2');
        while (equationText !== equationText.replace(/(\d{1,3})(\d{3}(\.|,))/, '$1.$2'))
            equationText = equationText.replace(/(\d{1,3})(\d{3}(\.|,))/, '$1.$2');
        equationText = equationText.replace(/^$|^-$/, '0');
        while (equationText !== equationText.replace(/(,)(.*)(\.)(.*)/g, '$1$2$4'))
            equationText = equationText.replace(/(,)(.*)(\.)(.*)/g, '$1$2$4')

        setEquation(equationText);

        return equationText;
    }

    function handleClickButton(event: MouseEvent<HTMLButtonElement>) {
        let data = event.currentTarget.innerHTML.replace(/<img src="\/src\/assets\/|.png" alt=".*">/g, '');
        const regExp = new RegExp(/[\d,]/);
        if (regExp.test(data) && equationRef.current) {
            handleEquationChange(equation + data);
        } else {
            const operation = event.currentTarget.innerHTML.replace(/<img src="\/src\/assets\/|.png" alt=".*">/g, '') as Operation
            operations[operation]();
        }
    }

    return (
        <CalculatorPage>
            <CalculatorContainer>
                <CalculatorHeader>
                    <p>{result}</p>
                    <InputBox>
                        {isEqualsCalculated ?
                            <div><img src={equalsResult} alt="simbolo de = cinza centralizado a esquerda" /></div>
                            : null}
                        <span ref={equationRef}>{equation}</span>
                    </InputBox>
                </CalculatorHeader>
                <CalculatorButtons>
                    {
                        buttons.map((button) => {
                            return (
                                <li key={button.description}>
                                    <Button className={"case" + button.hotkey} ref={(element: HTMLButtonElement) => buttonsRef.current.push(element)}
                                        variant={button.type} onClick={handleClickButton}>
                                        {button.image ? <img src={button.operator} alt={button.description} /> : button.operator}
                                    </Button>
                                </li>
                            )
                        })
                    }
                </CalculatorButtons>
            </CalculatorContainer>
        </CalculatorPage>
    )
}