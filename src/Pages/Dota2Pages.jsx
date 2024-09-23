import Dota2List from "../components/Dota2List";
import NewsBlock from "./NewsBlock";
import HeaderDota from "../components/HeaderDota";
import { Link } from "react-router-dom";


function Dota2Pages() {
    return(
    <>
        <HeaderDota/>
            <main>
                <div className="background">
                    <div className="container">
                        <div class="tabs" >
                            <span class="tab">Матчи</span>
                            <Link to="/tourney" class="tab">Турниры</Link>
                        </div>
                        <Dota2List/>
                    </div>
                </div>
                    <div class="background">
                        <div class="container">
                        </div>
                    </div>
                <NewsBlock/>
            </main>
    </>
    );
}

export default  Dota2Pages;