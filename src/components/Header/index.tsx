import React, { useState } from "react";
import Modal from "react-modal";
import { Container, Content } from "./styles"
import logoImg from "../../assets/logo.svg"
export function Header() {
    const [isNewOpenTransacitonModal, setIsNewOpenTransacitonModal] = useState(false);

    function handleOpenNewTransaction() {
        setIsNewOpenTransacitonModal(true);
    }
    function handleClaseNewTransaction() {
        setIsNewOpenTransacitonModal(false);
    }

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="money" />
                <button type="button"
                    onClick={handleOpenNewTransaction}>Nova Transação</button>
                <Modal isOpen={isNewOpenTransacitonModal} onRequestClose={handleClaseNewTransaction}>
                    <h2>Nova transação</h2>
                </Modal>
            </Content>
        </Container>
    )
}