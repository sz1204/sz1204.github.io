import great_wall from "./data/gallery/great_wall.jpeg";
import golden_gate from "./data/gallery/golden_gate.jpeg";

const photos = () => {

    return (
        <div>
        <center>
        <h1>Photo Gallery</h1>
            <p>Photos taken by me of beautiful places and beautiful things.</p>
        </center>

        <img src={golden_gate} alt="Horizontal photo of the Golden Gate Bridge in San Francisco." />
        <img src={great_wall} alt="Horizontal photo of the Great Wall of China. The wall is set amongst a backdrop of green mountains." />

        </div>
    )
    };
    
export default photos;    