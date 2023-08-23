import { toast } from 'react-toastify';

export const showErrorMessage = (message) => {
    toast.error(message, {
        position: toast.POSITION.TOP_RIGHT
    });
};