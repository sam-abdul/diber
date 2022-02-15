import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import { Grid, Grow, Card } from "@material-ui/core";
import "./NewsCards.css";
import { FaInstagram, FaTwitter, FaEnvelope} from 'react-icons/fa';

const NewsCards = ({ articles, activeArticle }) => {
  if (!articles.length) {
    return (
      <Grow in>
        <Grid>
          <div id="welcome">
            <div id="welNote">
              <div class="cater3-movingBG">
                <div class="flyinTxtCont">
                  <div class="flyIn lineOne">WELCOME</div>
                  <div class="flyIn lineTwo">TO </div>
                  <div class="flyIn lineThree">diber</div>
                </div>
              </div>
            </div>
          </div>
          <div className="tutorMain">
            Welcome diber. diber is an AI that reads all news and article from Technology to Science to Business to even Games.
            This AI serves all news and article in one site. With this AI you can get all latest news and article of a particlar subject in one site, meaning you can the latest news and article about facebook from CNN, BBC, Times etc on this site intead searching on different site which is time consuming.
            To get started all you have to do is tap that MICROPHONE icon below and speak to it. The AI will read all the news you want by just talking to it.
            Try the App by tapping that MICROPHONE button and saying: give me the latest news. Ask it to tell you a fact. To kow what the AI can do read the follow instructions below.
          </div>
          <div className="tutor">
            <div className="one"> Say: give me the latest news </div>
            <div className="two">
              Search for article/News from any source. Say: give me news from BBC news.
              Sources: BBC * Tech Crunch * Time * CNN * ABC * etc
            </div>
            <div className="three">
              Search for any Categories of news. Say: tell me Technology news.
              Categories: Technology * Health * Science * Sports * Entertainment
              * General
            </div>
          </div>

          <div className="tutor2">
            <div className="four">
              Search for any Terms. Say: Tell me about Xbox. Terms: Omicron *
              Climate * Nigeria * Crypto *
            </div>
            <div className="five">
              You can also chat with diber. Say: tell me something i do not know
              or say how do I look. Ask it to tell you a fact.
            </div>
          </div>
          <footer> Sam Abdul <br/>
           <a className="insta" href="https://www.instagram.com/samabdul_/"><FaInstagram/></a>  <a className="twit" href="https://twitter.com/SamAbdul_"><FaTwitter/></a> <a className="mail" href="mailto:arovstudios@gmail.com"><FaEnvelope/></a>
          </footer>
        </Grid>
      </Grow>
    );
  }
  return (
    <Card>
      <div className="carrier">
        <div className="back">Say go back</div>
        <div className="open">Say Open Article 1</div>
      </div>
      <Grow in>
        <Grid>
          {articles.map((article, i) => (
            <Grid>
              <NewsCard activeArticle={activeArticle} i={i} article={article} />
            </Grid>
          ))}
        </Grid>
      </Grow>
    </Card>
  );
};

export default NewsCards;
