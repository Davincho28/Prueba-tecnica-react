import React from "react";
import { useNavigate } from "react-router-dom";
import { useApi } from "../hooks/getApi";

const CardsUsers = ({ data }) => {
  const navigate = useNavigate();
  const {getApi}=useApi()


  return (
    <>
      {data.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {data.map(({ name, phone, email, id }) => (
            <div
              key={id}
              className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition"
              onClick={() => {
                navigate(`/detalles/${id}`);
              }}
            >
              <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
              <p className="text-gray-600">{email}</p>
              <p className="text-gray-500">{phone}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default CardsUsers;
