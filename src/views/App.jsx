import { useState } from "react";
import { useEffect } from "react";
import { alerts } from "../alerts/alerts";
import CardsUsers from "../components/CardsUsers";

function App() {
  const [data, setdata] = useState([]);
  const { errormodal } = alerts();

  const api = "https://jsonplaceholder.typicode.com/users/";

  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    try {
      const response = await fetch(api); // Espera la respuesta de la API

      if (response.ok) {
        const json = await response.json();
        setdata(json);
      } else {
        errormodal();
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      errormodal();
    }
  };

  return (
    <>
      <div>
        <h1 className="fancy-text text-4xl">Users</h1>
      </div>

      <div>
       <CardsUsers data={data} />
      </div>
    </>
  );
}

export default App;
