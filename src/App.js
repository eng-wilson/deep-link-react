import { useEffect } from "react";
import logo from "./assets/icon.png";
import "./App.css";

function App() {
  const getQueryVariable = (path) => {
    const query = path.split("?path=")[1];

    console.log(query);

    if (query) {
      window.location.replace("eurekka://deep.eurekka.me/" + query);
    } else {
      window.location.replace("eurekka://deep.eurekka.me/");
    }
  };

  useEffect(() => {
    getQueryVariable(document.URL);
  }, []);

  return (
    <main>
      <div className="content">
        <img src={logo} alt="Eurekka logo" />
        <h1>Estamos te redirecionando ao nosso App...</h1>

        <p>
          Caso o redirecionamento esteja demorando, você pode clicar no botão
          abaixo:
        </p>

        <button onClick={() => getQueryVariable(document.URL)}>
          Abrir App
        </button>
      </div>

      <footer>
        <p>
          Lembre-se de verificar se o nosso aplicativo está instalado nesse
          dispositivo.
        </p>
        <span>
          Em caso de dúvida, entre em contato com nosso suporte{" "}
          <a href="mailto:contato@eurekka.me">contato@eurekka.me</a>.
        </span>
      </footer>
    </main>
  );
}

export default App;
