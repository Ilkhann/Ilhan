import CS2List from "../components/CS2List";
import NewsBlock from "./NewsBlock";
import HeaderCS2 from "../components/HeaderCS2";
import { Link } from "react-router-dom";
import NewsBlockCS from "./NewsBlockCS";

function CS2Pages() {
    return(
    <>
        <HeaderCS2/>
            <main>
                <div className="background">
                    <div className="container">
                        <div class="tabs" >
                            <span class="tab">Матчи</span>
                            <Link to="/tourneyCs2" class="tab">Турниры</Link>
                        </div>
                        <CS2List/>
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

export default  CS2Pages;