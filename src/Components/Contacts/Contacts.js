import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteContact,
  getContacts,
  sendContact,
} from "../../Redux/contactsSliceOperations";
import Filter from "../Filter/Filter";
import Modal from "../Modal";

const Contacts = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [changeContactId, setChangeContactId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const filteredContacts = () =>
    contacts.filter((el) => {
      return el.name.toLowerCase().includes(filter);
    });

  useEffect(() => {
    console.log(filteredContacts());
  }, [filter]);

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  const postContact = () => {
    dispatch(sendContact({ name, number }));
    dispatch(getContacts());
  };

  const removeContact = (id) => {
    dispatch(deleteContact(id));
    dispatch(getContacts());
  };

  const changeContactButton = (id, name, number) => {
    setNewName(name);
    setNewNumber(number);
    setChangeContactId(id);
    toggleModal();
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <input
        className="inputName"
        onChange={(e) => setName(e.target.value)}
        placeholder="Имя"
        type={""}
      ></input>
      <input
        className="inputNumber"
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Номер телефона"
        type={"number"}
      ></input>
      <button onClick={() => postContact()}>Создать контакт</button>
      <Filter></Filter>
      {contacts && (
        <ul>
          {filteredContacts().map((el) => {
            return (
              <li className="contactsItem" key={el.id}>
                <h1>{el.name}</h1>
                <h2>{el.number}</h2>
                <button
                  onClick={() => changeContactButton(el.id, el.name, el.number)}
                >
                  Изменить
                </button>
                <button onClick={() => removeContact(el.id)}>Удалить</button>
              </li>
            );
          })}
        </ul>
      )}
      {isModalOpen && (
        <Modal
          toggleModal={toggleModal}
          getContacts={getContacts}
          id={changeContactId}
          newName={newName}
          setNewName={setNewName}
          newNumber={newNumber}
          setNewNumber={setNewNumber}
        />
      )}
    </div>
  );
};

export default Contacts;
