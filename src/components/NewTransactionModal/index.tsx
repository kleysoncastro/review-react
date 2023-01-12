import Modal from "react-modal";

interface INewOpenTransactionModal {
    isOpenModal: boolean;
    OnRequestCloseModal: () => void;
}

export function NewTransactionModal(props: INewOpenTransactionModal) {

    return (
        <Modal isOpen={props.isOpenModal} onRequestClose={props.OnRequestCloseModal}>
            <h2>Nova transação</h2>
        </Modal>
    );
}