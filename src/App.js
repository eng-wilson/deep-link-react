import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.location.replace(
      "eurekka://deep.eurekka.me/" + document.URL.split("/")[1]
    );
  }, []);
  return <div></div>;
}

export default App;
