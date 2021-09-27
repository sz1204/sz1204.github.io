import ReactMarkdown from "react-markdown";

const Lesson = ({ Lessons }) => {
  return (
    <div className="home">
      <div id="content">
        <ReactMarkdown source={Lessons} />
      </div>
    </div>
  );
};

export default Lesson
