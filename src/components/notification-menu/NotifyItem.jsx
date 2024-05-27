import { CheckCircleIcon, ExclamationTriangleIcon, InformationCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { MenuItem, Typography } from "@material-tailwind/react";
import React from "react";
import { useNavigate } from "react-router";

const NotifyItem = (props) => {
    const { notification } = props;
    notification.type = notification.type.toLowerCase();

    let url;
    if (notification.href === 'transaction') {
        url = '/transactions';
    } else if (notification.href.includes('/')) {
        const parts = notification.href.split('/');
        if (parts[0] === 'book') {
            url = `books/${parts[1]}`;
        }
    }

    const icons = {
        'information': InformationCircleIcon,
        'success': CheckCircleIcon,
        'error': XCircleIcon,
        'warning': ExclamationTriangleIcon
    }

    const navigate = useNavigate();

    return (
        <MenuItem
              onClick={url ? () => navigate(url) : null}
              className={`flex items-center gap-2 h-12 rounded`}
            >
              {React.createElement(icons[notification.type || 'information'], {
                className: `h-5 w-5 ${notification.type || 'information'}`,
                strokeWidth: 2,
              })}
              <Typography as="span" variant="small" className="font-normal">
                {notification.content}
              </Typography>
        </MenuItem>
    );
}

export default NotifyItem;