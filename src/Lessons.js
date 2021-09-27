import { Link } from "react-router-dom";

const Lessons = () => {
  const lesson_map = [
    {
      path: "/resume",
      name: "resume + background",
    },
    {
      path: "/projects",
      name: "projects + portfolio",
    },
  ];

  return (
    <div className="home">
      <div id="content">
        {lesson_map.map(({ path, name }) => (
          <Link to={path}>
            <li>{name}</li>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Lessons;
