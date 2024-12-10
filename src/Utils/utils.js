// ./utils/utils.js
import { useToast } from '../Context/ToastContext';

// Function để hiển thị Toast theo trạng thái
export const showToast = (toastRef, severity, summary, detail) => {
  if (toastRef.current) {
    toastRef.current.show({
      severity: severity,
      summary: summary,
      detail: detail,
      life: 3000, // Thời gian hiển thị Toast (3 giây)
    });
  }
};

export const showSuccess = (toastRef, summary, detail) => {
  showToast(toastRef, 'success', summary, detail);
};

export const showInfo = (toastRef, summary, detail) => {
  showToast(toastRef, 'info', summary, detail);
};

export const showWarning = (toastRef, summary, detail) => {
  showToast(toastRef, 'warn', summary, detail);
};

export const showError = (toastRef, summary, detail) => {
  showToast(toastRef, 'error', summary, detail);
};
