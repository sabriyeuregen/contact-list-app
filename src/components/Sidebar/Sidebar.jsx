import "./Sidebar.scss";
import Logo from "../../assets/icons/Logo.png";
import calendarIcon from "../../assets/icons/sidebar-menu/calendarIcon.png";
import computerIcon from "../../assets/icons/sidebar-menu/computerIcon.png";
import folderIcon from "../../assets/icons/sidebar-menu/folderIcon.png";
import homeIcon from "../../assets/icons/sidebar-menu/homeIcon.png";
import messagesIcon from "../../assets/icons/sidebar-menu/messagesIcon.png";
import settingsIcon from "../../assets/icons/sidebar-menu/settingsIcon.png";
import phoneIcon from "../../assets/icons/sidebar-menu/phoneIcon.png";
import usersIcon from "../../assets/icons/sidebar-menu/usersIcon.png";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={Logo} />
      </div>
      <div className="sidebar-menus">
        <img src={homeIcon} />
        <img src={messagesIcon} />
        <img src={phoneIcon} />
        <img src={computerIcon} />
        <img src={usersIcon} />
        <img src={folderIcon} />
        <img src={calendarIcon} />
        <img src={settingsIcon} />
      </div>
    </div>
  );
};

export default Sidebar;
