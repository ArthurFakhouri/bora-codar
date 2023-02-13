import { Rocket } from "phosphor-react";
import { BoardingInfo, BoardingPassContainer, BoardingPassPage, FlyDescription, FlyInfo, PassengerInfo, Ticket } from "./styles";
import qrCode from '../../assets/qrcode.png';

export function BoardingPass() {
    return (
        <BoardingPassPage>
            <BoardingPassContainer>
                <p>Cartão de embarque</p>
                <Ticket>
                    <FlyDescription>
                        <header>
                            <section>
                                <span>Voo Espacial</span>
                                <h3>RS655</h3>
                            </section>
                            <section>
                                <span>Data</span>
                                <h3><time dateTime="13/12/2023">13/12/2023</time></h3>
                            </section>
                        </header>
                        <FlyInfo>
                            <div>
                                <span>Nível Atual</span>
                                <h2>NVA</h2>
                                <time dateTime="19:00">19:00</time>
                            </div>
                            <div>
                                <Rocket size={32} weight="fill" />
                            </div>
                            <div>
                                <span>Próximo nivel</span>
                                <h2>PNV</h2>
                                <time dateTime={Infinity.toString()}>∞</time>
                            </div>
                        </FlyInfo>
                    </FlyDescription>
                    <PassengerInfo>
                        <section>
                            <span>Passageiro</span>
                            <h3>Arthur G. Fakhouri</h3>
                        </section>
                        <section>
                            <span>Assento</span>
                            <h3>28A</h3>
                        </section>
                    </PassengerInfo>
                    <BoardingInfo>
                        <div>
                            <div>
                                <div>
                                    <span>Embarque</span>
                                    <strong><time dateTime="15:00">15:00</time></strong>
                                </div>
                                <div>
                                    <span>Terminal</span>
                                    <strong>47</strong>
                                </div>
                                <div>
                                    <span>Portão</span>
                                    <strong>57</strong>
                                </div>
                            </div>
                            <div>
                                <img src={qrCode} alt="QR Code" />
                                <span>Grupo de embarque: 3</span>
                            </div>
                        </div>
                        <p><strong>Atenção:</strong> o portão fecha as 16:00</p>
                    </BoardingInfo>
                </Ticket>
                <span>Qualquer problema procure o balcão de atendimento da <strong>Rocketseat</strong></span>
            </BoardingPassContainer>
        </BoardingPassPage>
    )
}