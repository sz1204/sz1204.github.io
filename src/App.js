import ReactMarkdown from "react-markdown";
import { resume } from "./data/markdown";

const App = () => {
  return (
    <div className="home">
      <div id="content">
        <ReactMarkdown source={resume} />
      </div>
    </div>
  );
};

export default App;
