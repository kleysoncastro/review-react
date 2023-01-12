import Modal from "react-modal";
import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './global';
Modal.setAppElement("#root");
export function App() {

  const [isNewOpenTransacitonModal, setIsNewOpenTransacitonModal] = useState(false);

  function handleOpenNewTransaction() {
    setIsNewOpenTransacitonModal(true);
  }
  function handleClaseNewTransaction() {
    setIsNewOpenTransacitonModal(false);
  }

  return (

    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransaction} />
      <Dashboard />
      <Modal isOpen={isNewOpenTransacitonModal} onRequestClose={handleClaseNewTransaction}>
        <h2>Nova transação</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}
