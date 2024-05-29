import { CheckCircleIcon, ExclamationTriangleIcon, InformationCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { MenuItem, Typography } from "@material-tailwind/react";
import React from "react";
import { useNavigate } from "react-router";
import { getTimeAgo } from "../../utils/getDateShit";
import environment from "../../environment";
import { useCookies } from "react-cookie";

const NotifyItem = (props) => {
    const { notification } = props;
    notification.type = notification.type.toLowerCase();

    const icons = {
        'information': InformationCircleIcon,
        'success': CheckCircleIcon,
        'error': XCircleIcon,
        'warning': ExclamationTriangleIcon
    }

    const navigate = useNavigate();

    const [cookies, setCookie] = useCookies(['user', 'accessToken']);
    const thisUser = cookies['user'];

    const handleClick = async () => {
      const response = await fetch(`${environment.apiUrl}/users/${thisUser.id}/notifications/${notification.id}`, {
        method: "POST"
      });
      const data = await response.json();
      console.log(data);
      if (notification.href) navigate(notification.href);
    }

    return (
        <MenuItem
              onClick={handleClick}
              className={`flex items-center gap-2 h-12 rounded `}
            >
              {React.createElement(icons[notification.type || 'information'], {
                className: `h-5 w-5 ${notification.type || 'information'}`,
                strokeWidth: 2,
              })}
              <Typography as="span" variant="small" className={notification.isRead ? "font-normal" : "font-semibold"}>
                {notification.content}
              </Typography>
              <Typography className="text-xs text-right">
                {getTimeAgo(notification.timestamp)}
              </Typography>
        </MenuItem>
    );
}

export default NotifyItem;