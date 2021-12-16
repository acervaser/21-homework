import { useEffect, useState } from "react";
import Contact from "../Contact/Contact";
import './Contacts.css';
import  {getContacts}  from "./data_contacts";


const Contacts = () => {
    let contacts =  getContacts();
    console.log(contacts);
    const [userContacts, setUserContacts] = useState(contacts);
    const [filteredContacts, setFilteredContacts] = useState(contacts);
    const [genders, setGenders] = useState({
      female: true,
      male: true,
      unknown: true,
    });
    const [search, setSearch] = useState("");
    const handleFieldChange = (e) => {
        setSearch(e.target.value);
      };
    useEffect(() => {
      const chosenGenders = Object.entries(genders)
        .filter((item) => item[1])
        .map((item) => item[0]);
        console.log(chosenGenders)
      setFilteredContacts(
        userContacts.filter(
          (contact) =>
          contact.lastName.includes(search) && chosenGenders.includes(contact.gender)
        )
      );
    }, [search, genders]);
    
    const handleCheckboxChange = (e) => {
      setGenders({
        ...genders,
        [e.target.name]: e.target.checked,
      });
    };
    return (
      <div className="contacts">
        <div>
          <label>
            Жінки
            <input
            className="checkbox-input"
              type={"checkbox"}
              name="female"
              checked={genders.female}
              onChange={handleCheckboxChange}
            />
          </label>
          <label>
            Чоловіки
            <input
            className="checkbox-input"
              type={"checkbox"}
              name="male"
              checked={genders.male}
              onChange={handleCheckboxChange}
            />
          </label>
          <label>
            Анонімус
            <input
            className="checkbox-input"
              type={"checkbox"}
              name="unknown"
              checked={genders.unknown}
              onChange={handleCheckboxChange}
            />
          </label>
        </div>
        <input className="input" value={search} onChange={handleFieldChange} />
        {filteredContacts.map((item) => (
          <Contact 
            firstName={item.firstName}
            lastName={item.lastName}
            phone={item.phone}
            gender={item.gender}
          />
        ))}
      </div>
    );
  };
  
  export default Contacts