const Projects = ({ item }) => {
  return (
    <li className="project">
      <a href={item.link} target="_blank" rel="noopener noreferrer">
        <img
          src={item.image}
          alt={item.imageAlt}
          title={item.title}
          width="250"
          height="250"
        />
        <div className="project__content">
          <h2 className="no-anchor">{item.title}:</h2>
            <span>{item.text} </span>
            <span>{item.technology}</span>
        </div>
      </a>
    </li>
  );
};

export default Projects;
