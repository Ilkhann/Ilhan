import CS2Icon from "../assets/images/game-icon/counter-strike.svg";

function TourneyCS2({post}) {
    return(
    <>
        <div class="card">
                <div class="tourney">
                    <div class="tourney-name">
                        <img src={CS2Icon} alt="" />
                        {post.TourneyName}
                    </div>
                    <div class="tourney-date">
                        {post.TourneyDate}
                    </div>
                </div>
            <div class="border"></div>
        </div>
    </>
    );
}

export default TourneyCS2;