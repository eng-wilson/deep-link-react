import { useEffect } from "react";

function App() {
  const getQueryVariable = (path) => {
    const query = path.split("?path=")[1];

    window.location.replace("eurekka://deep.eurekka.me/" + query);
  };

  useEffect(() => {
    getQueryVariable(document.URL);
  }, []);
  return <div></div>;
}

export default App;
