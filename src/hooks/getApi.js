export const useApi = () => {
  const getApi = async (api) => {
    try {
      const response = await fetch(api); // Espera la respuesta de la API
      if (response.ok) {
        const json = await response.json();
        return json;
      } else {
        console.error("Error en la solicitud:");
        //errormodal();
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      //errormodal();
    }
  };

  return {
    getApi,
  };
};
