import HeaderCS2 from "../components/HeaderCS2";
import CSTourneyList from "../components/CSTourneyList";
import NewsBlock from "./NewsBlock";
import { Link } from "react-router-dom";
import NewsBlockCS from "./NewsBlockCS";

function TourneyCs2() {
    return(
    <>
    <HeaderCS2/>
        <main>
            <div className="background">
                <div className="container">
                    <div class="tabs" >
                        <Link to="/cs2" class="tab2">Матчи</Link>
                        <span class="tab2">Турниры</span>
                    </div>
                    <CSTourneyList/>
                </div>
            </div>
            <div class="background">
                    <div class="container">
                    </div>
            </div>
        <NewsBlockCS/>
    </main>
    </>
    );
}

export default TourneyCs2;