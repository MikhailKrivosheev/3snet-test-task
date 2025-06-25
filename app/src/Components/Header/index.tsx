import Navigation from "./Navigation";
import SubNavigation from "./SubNavigation";
import UserSettings from "./UserSettings";

export const Header = () => {
  return (
    <header className="w-full text-white">
      <div className="bg-bckg-blue flex h-full w-full items-center justify-between gap-4 p-5 px-10">
        <Navigation />
        <UserSettings />
      </div>
      <SubNavigation />
    </header>
  );
};
