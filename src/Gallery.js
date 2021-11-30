import pink_puddle from "./data/images/pink_puddle.gif";
import moon from "./data/images/moon.gif";
import flowers from "./data/images/flowers.gif";
import clouds from "./data/images/clouds.gif";

const Gallery = () => {
  const currently_reading = [
    "The Alignment Problem by Brian Christian",
    "As Long as Grass Grows by Dina Gilio-Whitaker",
  ];
  const finished_reading = [
    "Our Time is Now by Stacey Abrams",
    "The Problem with Work by Kathi Weeks",
    "Norwegian Wood by Haruki Murakami",
    "Klara and the Sun by Kazuo Ishiguro",
    "Valley of the Dolls by Jacqueline Susann",
    "How to be an Antiracist by Dr. Ibram X Kendi",
  ];

  return (
    <div className="home">
      <center>
      <h1>About Me!</h1>
      <div id="content" class="hof">
        <div id="about-me">
          <h2>Hello!</h2>
          <img src={pink_puddle} alt="pink puddle anime gif" />
          <h4>About Me...</h4>
          <p>Hi! My name is Sarah Zhang (she/they) and I am a freshman</p>
          <p>at the University of North Carolina at Chapel Hill.</p>
          <p>I am double majoring in computer science (BA) and </p> 
          <p>political science (BA), with a minor in data science.</p> 
          <p>In my free time, I enjoy traveling, cooking vegan food,</p> 
          <p>doing yoga, hiking with my dog, bullet journaling,</p>
          <p>listening to music, watching anime, and reading!</p>
        </div>
        
        <div id="favorite-books">
          <h2>My favorite books!</h2>
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
      </div>
      </center>
    </div>
  );
};

export default Gallery;
