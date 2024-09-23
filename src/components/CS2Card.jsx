import CS2Icon from"../assets/images/game-icon/counter-strike.svg";
import FnaticLogo from "../assets/images/team-logo/fnatic.png";
import AstralisLogo from "../assets/images/team-logo/Astralis_logo.png";

function CS2Card({post}) {
    return(
                <div class="card">
                    <div class="event">
                        <span class="event-name">
                            <img src={CS2Icon} alt="" />
                            {post.eventName}
                        </span>
                        <span class="event-time">{post.time}</span>
                    </div>
                        <div class="team-container">
                            <div class="team1">
                                <img src={FnaticLogo} alt="" class="team-icon" />
                                <span class="team-name">{post.teamName}</span>
                                <span class="team-score">{post.teamScore}</span>
                            </div>
                            <div class="team2">
                                <img src={AstralisLogo} alt="" class="team-icon" />
                                <span class="team-name">{post.teamName1}</span>
                                <span class="team-score">{post.teamScore1}</span>
                            </div>
                            <a href="#" class="link-match">Перейти на матч</a>
                        </div>
                    <div class="border"></div>
                </div>
    );
}

export default CS2Card;
