import { useState } from "react";
import "./App.css";
import Card from "./assets/componentes/Card";
import Banner from "./assets/componentes/Banner/Banner";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Banner imagem="https://stories.cnnbrasil.com.br/wp-content/uploads/sites/9/2024/02/michael-jackson-210aa5866c7d4dd58de8e3af57fe919a.jpg" /> */}
      {/* <Banner texto="Pedro" /> */}
      <Card/>
    </>
  );
}

export default App;
