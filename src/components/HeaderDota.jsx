import headerIcon from "../assets/images/header-icon/Menu.svg"
import searchIcon from "../assets/images/header-icon/Search.svg"
import userIcon from "../assets/images/header-icon/User.svg"
import moreIcon from "../assets/images/header-icon/more-icon.svg"
import { Link } from "react-router-dom"

function HeaderDota() {
    return (
    <header>
        <div class="header">
            <div class="container">
                <div class="nav">
                    <Link to="/menu" class="menu">
                        <img src={headerIcon} alt="menu" />
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
                    <span>Dota 2</span>
                    <Link to="/cs2" className="game-link">CS 2</Link>
                    <span>
                        Ещё
                        <img src={moreIcon} alt="" />
                    </span>
                </div>
            </div>
        </div>
        <div class="game-name">Dota 2</div>
    </header>
    
    );
}

export default HeaderDota;