import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";

function Card() {
  let icones = [faHeart, faComment, faPaperPlane];
  let nomes = ["a", "b", "c"]
  return (
    <div className="card">
      <img
        src="https://stories.cnnbrasil.com.br/wp-content/uploads/sites/9/2024/02/michael-jackson-210aa5866c7d4dd58de8e3af57fe919a.jpg"
        alt="Avatar"
        style={{ width: "70%" }}
      />
      <div className="icons">
        {icones.map((item, index) =>  <FontAwesomeIcon key={index} icon={item} />)}
      </div>
      <ul>
        {nomes.map((nome, index) => <li key={index}>{nome} </li> )}
      </ul>
      <div className="container">
        <h4>
          <b>John Doe</b>
        </h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
  );
}

export default Card;
