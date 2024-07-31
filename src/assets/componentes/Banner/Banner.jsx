import "./Banner.css";
function Banner(props) {
  return (
    <figure>
        <img src={props.imagem} />
        <figcaption> {props.texto}</figcaption>
    </figure>
  )
  }
export default Banner;