import Modal from "react-modal";
import { Container, TransactionContainer, RadioBoxButton } from "./styles";
import closeImg from "../../assets/close.svg";

import income from "../../assets/income.svg"
import outcome from "../../assets/outcome.svg"
import { FormEvent, useState } from "react";
import { api } from "../../services/api";
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
    const [value, setValue] = useState(0);
    const [categories, setCategories] = useState("");
    const [titulo, setTitulo] = useState("");


    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        const data = {
            type,
            value,
            categories,
            titulo
        };
        api.post("/transactions", data)
    }

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
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Nova transação</h2>

                <input placeholder="Título" value={titulo} onChange={event => setTitulo(event.target.value)} />
                <input placeholder="valor" type="number" value={value} onChange={event => setValue(Number(event.target.value))} />
                <input placeholder="Categorias" value={categories} onChange={event => setCategories(event.target.value)} />
                <TransactionContainer>
                    <RadioBoxButton type="button"
                        onClick={() => { setType("deposito") }}
                        isActive={type === "deposito"}
                        activeColor="green"
                    >
                        <img src={income} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBoxButton>
                    <RadioBoxButton type="button"
                        onClick={() => { setType("retirada") }}
                        isActive={type === "retirada"}
                        activeColor="red"


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