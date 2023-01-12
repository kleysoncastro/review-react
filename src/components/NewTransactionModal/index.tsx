import Modal from "react-modal";
import { Container } from "./styles";
import closeImg from "../../assets/close.svg";


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
                <button type="submit">Cadastrar</button>

            </Container>
        </Modal>
    );
}