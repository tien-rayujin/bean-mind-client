import { FaUserCog } from "react-icons/fa";
import { GiJellyBeans } from "react-icons/gi";

const AppLogo = () => {
  return (
    <div>
      <h2 className="bg-gradient-to-r from-primary to-primary/90 bg-clip-text text-3xl font-semibold text-transparent">
        BeanMind
      </h2>
      <p className="flex -translate-y-2 items-center justify-center gap-x-1 text-sm font-semibold uppercase">
        <FaUserCog /> manager
      </p>
    </div>
  );
};

const AppLogoIcon = () => {
  return (
    <div className="grid h-12 w-12 place-items-center rounded-full bg-background">
      <GiJellyBeans size={24} className={"text-primary"} />
    </div>
  );
};

export { AppLogo, AppLogoIcon };
