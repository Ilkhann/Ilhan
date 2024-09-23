import HeaderDota from "../components/HeaderDota";
import TourneyList from "../components/TourneyList";
import NewsBlock from "./NewsBlock";
import { Link } from "react-router-dom";

function TourneyPages() {
    return(
    <>
    <HeaderDota/>
        <main>
            <div className="background">
                <div className="container">
                    <div class="tabs" >
                        <Link to="/" class="tab2">Матчи</Link>
                        <span class="tab2">Турниры</span>
                    </div>
                    <TourneyList/>
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

export default TourneyPages;