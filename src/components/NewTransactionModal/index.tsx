import Modal from "react-modal";
import { Container, TransactionContainer, RadioBoxButton } from "./styles";
import closeImg from "../../assets/close.svg";

import income from "../../assets/income.svg"
import outcome from "../../assets/outcome.svg"
import { useState } from "react";
interface INewOpenTransactionModal {
    isOpenModal: boolean;
    OnRequestCloseModal: () => void;
}
/* 
react-modal-overlay | é a parte de funda mais escura
react-modal-content
estão estilizadas no global.ts
*/

export function NewTransactionModal(props: INewOpenTransactionModal) {

    const [type, setType] = useState('deposito');

    return (
        <Modal isOpen={props.isOpenModal}
            onRequestClose={props.OnRequestCloseModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                onClick={props.OnRequestCloseModal}
                className="button-modal-close"
            >
                <img src={closeImg} alt="Close" />
            </button>
            <Container>
                <h2>Nova transação</h2>

                <input placeholder="Título" />
                <input placeholder="valor" type="number" />
                <input placeholder="Categorias" />
                <TransactionContainer>
                    <RadioBoxButton type="button"
                        onClick={() => { setType("deposito") }}
                        isActive={type === "deposito"}
                    >
                        <img src={income} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBoxButton>
                    <RadioBoxButton type="button"
                        onClick={() => { setType("retirada") }}
                        isActive={type === "retirada"}

                    >
                        <img src={outcome} alt="Saida" />
                        <span>Saída</span>
                    </RadioBoxButton>

                </TransactionContainer>
                <button type="submit">Cadastrar</button>

            </Container>
        </Modal>
    );
}