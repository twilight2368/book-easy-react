import { BellAlertIcon } from "@heroicons/react/24/outline";
import { Alert } from "@material-tailwind/react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const PushNotification = (props) => {
    const { open, handleClose, notification } = props;
    const icon = (
      <BellAlertIcon className="w-6 h-6" />
    );

    const navigate = useNavigate();

    const handleClick = () => {
        if (notification?.href) navigate(notification.href);
    }

    return (
        <Link to={notification?.href}>
            <Alert 
                icon={icon} 
                color='green' 
                className="w-1/3 fixed top-0 right-0 z-30" 
                open={open} 
                onClose={handleClose}
            >
                {notification?.content}
            </Alert>
        </Link>
    )
}

export default PushNotification;