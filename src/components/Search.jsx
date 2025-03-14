import React from "react";

const Search = ({ data, setDataFilter }) => {
  const onInputChange = ({ target }) => {
    const { value } = target;
    if (value) {
      const filter = data.filter(
        ({ name }) => name && name.toLowerCase().includes(value.toLowerCase())
      );
      setDataFilter(filter);
    } else {
      setDataFilter(data);
    }
  };

  return (
    <>
      <input
        onChange={(event) => {
          onInputChange(event);
        }}
        type="text"
        className="input mt-4"
        placeholder="Filtrar por nombre"
      />
    </>
  );
};

export default Search;
