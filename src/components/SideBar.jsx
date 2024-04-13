import {
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  HomeIcon,
  CalendarDaysIcon,
  Cog6ToothIcon,
  Squares2X2Icon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/solid";

export function MySidebar() {
  return (
    <div className=" h-96 w-full max-w-[20rem] pt-5 pr-5 pl-0">
      <List>
        <ListItem>
          <ListItemPrefix>
            <HomeIcon className="h-5 w-5" />
          </ListItemPrefix>
          Home
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Squares2X2Icon className="h-5 w-5" />
          </ListItemPrefix>
          Explore
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <CalendarDaysIcon className="h-5 w-5" />
          </ListItemPrefix>
          Events
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <BuildingStorefrontIcon className="h-5 w-5" />
          </ListItemPrefix>
          Store
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
      </List>
    </div>
  );
}
