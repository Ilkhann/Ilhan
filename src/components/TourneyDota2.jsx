import dota2Img from "../assets/images/game-icon/dota-2-icon.svg";

function TourneyDota2({post}) {
    return(
    <>
        <div class="card">
                <div class="tourney">
                    <div class="tourney-name">
                        <img src={dota2Img} alt="" />
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

export default TourneyDota2;