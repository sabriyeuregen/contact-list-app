import "./Header.scss";
import  menuIcon from "../../assets/icons/menuIcon.png";
import searchIcon from "../../assets/icons/searchIcon.png";
import userIcon from "../../assets/icons/userIcon.png";
import userImg from "../../assets/images/userImg.png";
const Header = () => {
  return (
    <div className="header">
        <div className="header-menu">
           <button className="header-menu-icon"><img src={menuIcon}/></button> 
           <span>Contacts</span>
        </div>
        <div className="header-user">
           <div className="header-user__user-icon"><img src={userIcon}/></div> 
            <div className="header-user__search-icon"><img  src={searchIcon}/></div>
            <span className="seperator"></span>
            <img  className="header-user__img" src={userImg}/>
        </div>
    </div>
  )
}

export default Header;