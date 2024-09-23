import { Link } from "react-router-dom";
import searchIcon from "../assets/images/header-icon/Search.svg"
import userIcon from "../assets/images/header-icon/User.svg"
import xMarkIcon from "../assets/images/header-icon/x-mark.png"

function MenuHeader() {
    return (
        <header>
        <div class="header">
            <div class="container">
                <div class="nav">
                    <span class="menu">
                        <img src={xMarkIcon} alt="" className="x-mark"  />
                    </span>
                    <span class="right">    
                        <img src={searchIcon} alt="" />
                        <img src={userIcon} alt="" />
                    </span>
                </div> 
            </div>
        </div>
        <div class="menu-card">
            <Link to="/dota2" class="nav-txt">Матчи</Link>
            <Link to="/dota2" class="nav-txt">Турниры</Link>
            <div class="nav-txt">Команды и игроки</div>
            <div class="nav-txt">Блоги</div>
            <div class="nav-txt">Игры</div>
            <div class="nav-txt">Прогнозы</div>
            <div class="nav-txt">Косплей</div>
        </div>
    </header>
    
    );
}

export default MenuHeader;