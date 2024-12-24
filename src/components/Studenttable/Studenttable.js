import React from "react";
import "./Studenttable.css";
import { Button } from "primereact/button";

import { useToast, showToast } from '../../Utils/utils';

function StudentTable() {
  const toastRef = useToast();

  const handleSuccess = () => {
    showToast(toastRef, 'success', 'Success', 'This is a reusable toast message!');
  };

   const handleInfo = () => {
    showToast(toastRef, 'info', "Info", "Here is some important information.");
  };

  const handleWarning = () => {
    showToast(toastRef, 'warn', "Warning", "This is a warning message.");
  };

  const handleError = () => {
    showToast(toastRef, 'error', "Error!", "Something went wrong.");
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
