import { Alert } from "@mui/material"

interface Props {
    severity: 'error' | 'info' | 'success' | 'warning';
    message: String;
    handleClose: () => void;
}

const AlertComponent = ({ severity, message, handleClose }: Props): JSX.Element => {
    return (
        <Alert severity={severity} onClose={handleClose}>
            {message}
        </Alert>
    )
}

export default AlertComponent