import Swal from "sweetalert2";

export const alerts = () => {
  const success = () => {
    Swal.fire({
      title: "Todo bien por aqui!",
      text: "Do you want to continue",
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
      allowOutsideClick: false,
    });
  };

  const errormodal = () => {
    Swal.fire({
      title: "Upps sucedio algun error!",
      text: "Salio algun error",
      icon: "error",
      timer: 2000,
      showConfirmButton: false,
      allowOutsideClick: false,
    });
  };


  const options = async () => {
    const response = await Swal.fire({
      title: "Do you want to save the changes?",
      showCancelButton: true,
    }).then((result) => {
      return result.isConfirmed;
    });
    return response
  };

  return {
    success,
    errormodal,
    options,
  };
};
