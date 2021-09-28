import ReactMarkdown from "react-markdown";
import resume from "./resume";

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
