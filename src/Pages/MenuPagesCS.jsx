import xMarkIcon from "../assets/images/header-icon/x-mark.png"
import { Link } from "react-router-dom";

function MenuPagesCS(){
    return(
        <header>
        <div class="header">
            <div class="container">
                <div class="nav">
                    <Link to="/cs2" class="menu">
                        <img src={xMarkIcon} alt="" class="x-mark" />
                    </Link>
                    <span class="right">    
                        
                    </span>
                </div> 
            </div>
        </div>
        <div class="menu-card">
            <Link to="/cs2" class="nav-txt">Матчи</Link>
            <Link to="/tourneyCs2" class="nav-txt">Турниры</Link>
            <div class="nav-txt">Команды и игроки</div>
            <div class="nav-txt">Блоги</div>
            <div class="nav-txt">Игры</div>
            <div class="nav-txt">Прогнозы</div>
            <div class="nav-txt">Косплей</div>  
        </div>
    </header>
    );
}

export default  MenuPagesCS;