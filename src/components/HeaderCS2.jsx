import headerIcon from "../assets/images/header-icon/Menu.svg"
import searchIcon from "../assets/images/header-icon/Search.svg"
import userIcon from "../assets/images/header-icon/User.svg"
import moreIcon from "../assets/images/header-icon/more-icon.svg"
import { Link } from "react-router-dom"

function HeaderCS2() {
    return (
    <header>
        <div class="header">
            <div class="container">
                <div class="nav">
                    <Link to="/menuCS2" class="menu">
                        <img src={headerIcon} alt="" />
                    </Link>
                    <span class="right">    
                        <img src={searchIcon} alt="" />
                        <Link to="/auth"><img src={userIcon} alt="" /></Link>
                    </span>
                </div> 
            </div>
        </div>
        <div class="category">
            <div class="container">
                <div class="category-game">
                    <Link to="/" className="game-link">Dota 2</Link>
                    <span>CS 2</span>
                    <span>
                        Ещё
                        <img src={moreIcon} alt="" />
                    </span>
                </div>
            </div>
        </div>
        <div class="game-name">CS</div>
    </header>
    
    );
}

export default HeaderCS2;