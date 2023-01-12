import Modal from "react-modal";
import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './global';
import { NewTransactionModal } from "./components/NewTransactionModal";
Modal.setAppElement("#root");
export function App() {

  const [isNewOpenTransacitonModal, setIsNewOpenTransacitonModal] = useState(false);

  function handleOpenNewTransaction() {
    setIsNewOpenTransacitonModal(true);
  }
  function handleCloseNewTransaction() {
    setIsNewOpenTransacitonModal(false);
  }

  return (

    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransaction} />
      <Dashboard />
      <NewTransactionModal OnRequestCloseModal={handleCloseNewTransaction} isOpenModal={isNewOpenTransacitonModal} />
      <GlobalStyle />
    </>
  );
}
