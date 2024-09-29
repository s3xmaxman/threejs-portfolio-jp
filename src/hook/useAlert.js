import { useState } from "react";

const useAlert = () => {
  const [alert, setAlert] = useState({ show: false, type: "danger", text: "" });

  const showAlert = ({ text, type = "danger" }) => {
    setAlert({ show: true, type, text });
  };

  const hideAlert = () => {
    setAlert({ show: false, type: "danger", text: "" });
  };

  const successMessage = "Thank you for your message 😃";
  const errorMessage = "I didn't receive your message 😢";

  return { alert, showAlert, hideAlert, successMessage, errorMessage };
};

export default useAlert;
