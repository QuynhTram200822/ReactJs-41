import React from "react";
import "./Studenttable.css";
import { Button } from "primereact/button";

import { useToast } from "../../Context/ToastContext"; 
import {
  showSuccess,
  showError,
  showInfo,
  showWarning,
} from "../../Utils/utils"; 

function StudentTable() {
  const toastRef = useToast();

  const handleSuccess = () => {
    showSuccess(toastRef, "Success!", "This is a success message.");
  };

  const handleError = () => {
    showError(toastRef, "Error!", "Something went wrong.");
  };

  const handleInfo = () => {
    showInfo(toastRef, "Info", "Here is some important information.");
  };

  const handleWarning = () => {
    showWarning(toastRef, "Warning", "This is a warning message.");
  };
  return (
    <div className="card flex justify-content-center">
      <div className="flex flex-wrap gap-2 justify-content-center align-items-center">
        <Button label="Success" severity="success" onClick={handleSuccess} />
        <Button label="Info" severity="info" onClick={handleInfo} />
        <Button label="Warn" severity="warning" onClick={handleWarning} />
        <Button label="Error" severity="danger" onClick={handleError} />
      </div>
    </div>
  );
}

export default StudentTable;
