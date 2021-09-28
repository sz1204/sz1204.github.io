import pink_puddle from "./data/images/pink_puddle.gif";
import moon from "./data/images/moon.gif";
import flowers from "./data/images/flowers.gif";
import clouds from "./data/images/clouds.gif";

const Gallery = () => {
  const artists = [
    "taylor swift",
    "lana del rey",
    "sza",
    "tyler, the creator",
    "wallows",
    "lorde",
    "clairo",
    "phoebe bridgers",
    "arctic monkeys",
  ];
  const currently_reading = [
    "the problem with work by kathi weeks",
    "our time is now by stacey abrams",
    "the alignment problem by brian christian",
    "as long as grass grows by dina gilio-whitaker",
  ];
  const finished_reading = [
    "norwegian wood by haruki murakami",
    "klara and the sun by kazuo ishiguro",
    "valley of the dolls by jacqueline susann",
    "how to be an antiracist by dr. ibram x kendi",
  ];
  const anime = [
    "jujutsu kaisen",
    "porco rosso",
    "whisper of the heart",
    "haikyuu!!",
    "horimiya",
    "words bubble up like soda pop",
    "when marnie was there",
    "weathering with you",
    "demon slayer",
  ];

  return (
    <div className="home">
      <h1>about me :')</h1>
      <div id="content" class="hof">
        <div id="about-me">
          <h2>hello!</h2>
          <img src={pink_puddle} alt="pink puddle anime gif" />
          <h4>about me...</h4>
          <p>hi! my name is sarah zhang (she/they) and i am a freshman</p>
          <p>at the university of north carolina at chapel hill.</p>
          <p>i am double majoring in computer science (ba) and </p> 
          <p>political science (ba), with a minor in data science</p> 
          <p>in my free time, i enjoy traveling, cooking vegan food,</p> 
          <p>listening to music, watching anime, and reading!</p>
        </div>
        
        <div id="favorite-books">
          <h2>my favorite books!</h2>
          <img src={flowers} alt="anime flowers gif" />
          <h4>what i'm currently reading</h4>
          {currently_reading.map((books) => (
            <li>{books}</li>
          ))}
          <h4>what i've finished recently</h4>
          {finished_reading.map((books) => (
            <li>{books}</li>
          ))}
        </div>

        <div id="music">
          <h2>music i like!</h2>
          <img src={moon} alt="pink anime moon gif" />
          <h4>artists ;;-</h4>
          {artists.map((artists) => (
            <li>{artists}</li>
          ))}
        </div>

        <div id="anime">
          <h2>anime i like!</h2>
          <img src={clouds} alt="anime clouds gif" />
          <h4>watched recently ;;-</h4>
          {anime.map((anime) => (
            <li>{anime}</li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
