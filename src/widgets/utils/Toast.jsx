import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = ({ message = "", type = "default", position = "top-right" }) => {
  const properties = {
    position: position,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  switch (type) {
    case "success":
      toast.success(message, properties);
      break;
    case "info":
      toast.info(message, properties);
      break;
    case "error":
      toast.error(message, properties);
      break;
    case "earning":
      toast.warning(message, properties);
      break;
    default:
      toast(message, properties);
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      Welcome
      <ToastContainer />
    </>
  );
};

export default Toast;
