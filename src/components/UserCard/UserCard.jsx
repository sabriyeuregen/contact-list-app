import PropTypes from "prop-types";
import "./UserCard.scss";
import endpoint from "../../assets/icons/endpoint.png";
import messagesIcon from "../../assets/icons/sidebar-menu/messagesIcon.png";
import phoneIcon from "../../assets/icons/sidebar-menu/phoneIcon.png";
const UserCard = (props) => {
  return (
    <div className="user-card">
      <div className="user-card-info">
      <div className="user-card-info__image"><img src={props.image}/></div>
      <div className="user-card-info__name">{props.name}</div>
      <div className="user-card-info__job">{props.job}</div>
      </div>
      <div className="user-card-icons">
         <div className="user-card-icons__messagesIcon">
          <img src={messagesIcon}/>
         </div>
         <div className="user-card-icons__phoneIcon">
          <img src={phoneIcon}/>
         </div>
         <div className="user-card-icons__endpoint">
          <img src={endpoint}/>
         </div>
      </div>
    </div>
  );
};
UserCard.propTypes = {
  name: PropTypes.string,
  job: PropTypes.string,
  image: PropTypes.string
};

export default UserCard;
