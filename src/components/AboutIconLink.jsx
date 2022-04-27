import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

function AboutIconLink() {
  return (
    <div className='about-link'>
      <Link to='/about'>
        <FaQuestion size={30} />
      </Link>
      {/* 
      // if we wanted to use query params we could 
      // do it this way
      <Link
        to={{
          pathname: "/about",
          search: "?sort=name",
          hash: "#hello",
        }}
      >
        <FaQuestion size={30} />
      </Link>
      */}
    </div>
  );
}

export default AboutIconLink;
