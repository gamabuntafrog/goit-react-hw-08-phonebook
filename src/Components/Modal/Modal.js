import React from "react";
import { useDispatch } from "react-redux";
import { changeContact } from "../../Redux/contactsSliceOperations";

const Modal = ({
  toggleModal,
  getContacts,
  id,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
}) => {
  const dispath = useDispatch();

  const changeOldContact = () => {
    dispath(changeContact({ newName, newNumber, id }));
    dispath(getContacts());
    toggleModal();
  };

  return (
    <div className="modal">
      <h2>Изменение контакта</h2>
      <input
        placeholder="имя"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      ></input>
      <input
        placeholder="номер"
        value={newNumber}
        onChange={(e) => setNewNumber(e.target.value)}
      ></input>
      <button onClick={() => changeOldContact()}>Изменить</button>
      <button onClick={() => toggleModal()}>Закрыть</button>
    </div>
  );
};

export default Modal;
