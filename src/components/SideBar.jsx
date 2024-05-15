import { List, ListItem, ListItemPrefix, Button } from "@material-tailwind/react";
import {
  HomeIcon,
  CalendarDaysIcon,
  Cog6ToothIcon,
  Squares2X2Icon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";
import Home from "../pages/Home";
import { StarIcon } from "@heroicons/react/24/outline";

export function MySidebar() {
  return (
    <div className="min-h-96 w-full max-w-[20rem] bg-secondary pt-5 pr-5 pl-5">
      <List>
        <Link to="/home">
          <ListItem>
            <ListItemPrefix>
              <HomeIcon className="h-5 w-5" />
            </ListItemPrefix>
            Home
          </ListItem>
        </Link>
        <Link to="/explore">
          <ListItem>
            <ListItemPrefix>
              <Squares2X2Icon className="h-5 w-5" />
            </ListItemPrefix>
            Explore
          </ListItem>
        </Link>
        <Link to="/events">
          <ListItem>
            <ListItemPrefix>
              <CalendarDaysIcon className="h-5 w-5" />
            </ListItemPrefix>
            Events
          </ListItem>
        </Link>
        <Link to="/interest">
          <ListItem>
            <ListItemPrefix>
              <StarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Interest
          </ListItem>
        </Link>
        <Link to="/mybook/1">
          <ListItem>
            <ListItemPrefix>
              <BookOpenIcon className="h-5 w-5" />
            </ListItemPrefix>
            My books
          </ListItem>
        </Link>
        <Link to="/setting">
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
        </Link>
      </List>
    </div>
  );
}
