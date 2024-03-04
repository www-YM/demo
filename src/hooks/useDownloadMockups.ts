import { useContext, useState } from 'react';
import { SnackBarAlertContext } from './useSnackBarAlertContext';

const useDownloadMockups = (
  id: string | number,
  handler: (id: string | number) => Promise<{ url: string }>,
) => {
  const [preparingImages, setPreparingImages] = useState(false);
  const { setSnackbarAlertProps } = useContext(SnackBarAlertContext);

  const downloadMockups = async () => {
    setPreparingImages(true);

    try {
      const { url } = await handler(id);
      const downloadElement = document.createElement('a');
      downloadElement.setAttribute('href', url);
      downloadElement.click();
    } catch (err) {
      const msg = err?.response?.data?.message || err.message;
      setSnackbarAlertProps((prev) => ({
        ...prev,
        open: true,
        severity: 'error',
        content: msg,
      }));
    }

    setPreparingImages(false);
  };

  return { preparingImages, setPreparingImages, downloadMockups };
};

export default useDownloadMockups;
