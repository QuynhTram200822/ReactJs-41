import { Toast } from 'primereact/toast';
import React,{ useRef, createContext, useContext } from 'react';

// Tạo Context để quản lý Toast
const ToastContext = createContext(null);

/**
 * Component GlobalToast khởi tạo Toast.
 */
export const GlobalToast = ({ children }) => {
  const toastRef = useRef(null);

  return (
    <ToastContext.Provider value={toastRef}>
      <Toast ref={toastRef} />
      {children}
    </ToastContext.Provider>
  );
};


export const useToast = () => {
  const toastRef = useContext(ToastContext);

  if (!toastRef) {
    throw new Error('useToast must be used within a GlobalToast provider');
  }

  return toastRef;
};


export const showToast = (toastRef, severity, summary, detail, life = 3000) => {
  if (!toastRef.current) {
    console.error('Toast reference is not initialized.');
    return;
  }

  if (!['success', 'info', 'warn', 'error'].includes(severity)) {
    console.error('Invalid severity type. Allowed values: success, info, warn, error');
    return;
  }

  toastRef.current.show({
    severity,
    summary,
    detail,
    life,
  });
};