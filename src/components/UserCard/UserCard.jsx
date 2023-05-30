import PropTypes from "prop-types";
import "./UserCard.scss";
const UserCard = (props) => {
  return (
    <div className="user-card">
      <div className="user-card-name">{props.name}</div>
      <div className="user-card-job">{props.job}</div>
    </div>
  );
};
UserCard.propTypes = {
  name: PropTypes.string,
  job: PropTypes.string
};

export default UserCard;
