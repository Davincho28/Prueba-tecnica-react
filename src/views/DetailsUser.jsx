import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useApi } from "../hooks/getApi";

const DetailsUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const api = `https://jsonplaceholder.typicode.com/users/${id}`;

  const { getApi } = useApi();
  const [details, setdetails] = useState({});

  useEffect(() => {
    detailsdata();
  }, []);

  const detailsdata = async () => {
    const response = await getApi(api);
    const obj = {
      name: response.name,
      email: response.email,
      phone: response.phone,
      address: response.address.zipcode,
      company: response.company.name,
    };
    setdetails(obj);
  };

  return (
    <>
      <div className="flex flex-col items-center space-y-6">
        {/* Botón Regresar */}
        <button
          className="flex items-center gap-2 px-5 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all"
          onClick={() => navigate("/")}
        >
          ⬅️ Regresar
        </button>

        {/* Tarjeta de Información */}
        <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            {details.name}
          </h2>
          <div className="mt-4 space-y-2">
            {details.email && (
              <p className="text-gray-600">
                <span className="font-medium">📧 Email:</span> {details.email}
              </p>
            )}
            {details.phone && (
              <p className="text-gray-600">
                <span className="font-medium">📞 Teléfono:</span>{" "}
                {details.phone}
              </p>
            )}
            {details.address && (
              <p className="text-gray-600">
                <span className="font-medium">📍 Dirección:</span>{" "}
                {details.address}
              </p>
            )}
            {details.company && (
              <p className="text-gray-600">
                <span className="font-medium">🏢 Empresa:</span>{" "}
                {details.company}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsUser;
