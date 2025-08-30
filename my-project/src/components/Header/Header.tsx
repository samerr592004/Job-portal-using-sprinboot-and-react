import { Avatar, Indicator } from "@mantine/core";
import { IconAsset ,IconBell, IconSettings} from "@tabler/icons-react";
import NavLink from "./NavLink";

const Header = () => {
  return (
    <div className="w-full bg-mine-shaft-900 text-white h-28 flex justify-between items-center p-6">
      <div className="flex items-center gap-3 ">
        <IconAsset className="w-10 h-10 text-bright-sun-500" stroke={1.25} />
        <div className="text-3xl font-semibold text-bright-sun-500">iJob</div>
      </div>
      {NavLink()}
      <div className="flex items-center gap-5 text-lg">
       
        <div className="flex items-center gap-3">
            <div>
                <span>Sam</span>
            </div>
            <Avatar src="avatar.png" alt="it's me" />
        </div>
        <IconSettings className="w-6 h-6" stroke={1.25} />
        <Indicator color="brightSun.5" size={8} offset={6}  processing >
        <IconBell className="w-6 h-6" stroke={1.25} /> 
        </Indicator>
      </div>
    </div>
  );
};

export default Header;
