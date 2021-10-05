import pink_puddle from "./data/images/pink_puddle.gif";
import moon from "./data/images/moon.gif";
import flowers from "./data/images/flowers.gif";
import clouds from "./data/images/clouds.gif";

const Gallery = () => {
  const artists = [
    "taylor swift - 'call it what you want'",
    "lana del rey - 'beautiful people beautiful problems'",
    "sza - 'broken clocks'",
    "tyler, the creator - 'wusyaname'",
    "wallows - 'just like a movie'",
    "lorde - 'mood ring'",
    "clairo - 'bags'",
    "phoebe bridgers - 'graceland too'",
    "arctic monkeys - 'i wanna be yours'",
    "frank ocean - 'lost'",
  ];
  const currently_reading = [
    "our time is now by stacey abrams",
    "the alignment problem by brian christian",
    "as long as grass grows by dina gilio-whitaker",
  ];
  const finished_reading = [
    "the problem with work by kathi weeks",
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
      <center>
      <h1>about me :')</h1>
      <div id="content" class="hof">
        <div id="about-me">
          <h2>hello!</h2>
          <img src={pink_puddle} alt="pink puddle anime gif" />
          <h4>about me...</h4>
          <p>hi! my name is sarah zhang (she/they) and i am a freshman</p>
          <p>at the university of north carolina at chapel hill.</p>
          <p>i am double majoring in computer science (ba) and </p> 
          <p>political science (ba), with a minor in data science.</p> 
          <p>in my free time, i enjoy traveling, cooking vegan food,</p> 
          <p>doing yoga, hiking with my dog, bullet journaling,</p>
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
          <p><i>"she knows she lived through it to get to this moment."</i></p>
          <img src={moon} alt="pink anime moon gif" />
          <h4>artists + my favorite song of theirs;;-</h4>
          {artists.map((artists) => (
            <li>{artists}</li>
          ))}
        </div>

        <div id="anime">
          <h2>anime i like!</h2>
          <p><i>"the world cannot live without love."</i></p>
          <img src={clouds} alt="anime clouds gif" />
          <h4>watched recently ;;-</h4>
          {anime.map((anime) => (
            <li>{anime}</li>
          ))}
        </div>
      </div>
      </center>
    </div>
  );
};

export default Gallery;
