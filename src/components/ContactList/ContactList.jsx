import data from "../../data.json";
import UserCard from "../UserCard/UserCard";
import "./ContactList.scss";
import inputsearchIcon from "../../assets/icons/input-search.png";
const ContactList = () => {
  const contactList = data.map((user) => (
    <UserCard key={user.id} name={user.name} job={user.job} />
  ));

  return (
    <div className="contactlist">
      <div className="contactlist-searchbar">
        <span>Search for a contact</span>
        <input placeholder="Name, email or phone number"></input>
        <div className="contactlist-searchbar__icon">
          <img src={inputsearchIcon} />
        </div>
      </div>
      <div className="contactlist-users">{contactList}</div>
    </div>
  );
};

export default ContactList;
