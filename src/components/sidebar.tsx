import { cn } from "@/lib/utils";
import { DockIcon, HomeIcon, SearchIcon } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="flex flex-col items-center justify-start gap-8 px-4 py-8 border-r border-gray-700/50 shadow">
      <MenuItem text="Home">
        <HomeIcon className="text-gray-300" size={18} />
      </MenuItem>

      <MenuItem text="Explore" isCurrent>
        <SearchIcon className="text-gray-300" size={18} />
      </MenuItem>

      <MenuItem text="Resume">
        <DockIcon className="text-gray-300" size={18} />
      </MenuItem>
    </aside>
  );
}

const MenuItem = ({
  text,
  isCurrent,
  children,
}: {
  text: string;
  isCurrent?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col items-center cursor-pointer">
      <span
        className={cn(
          isCurrent && "bg-gray-700/40 rounded-xl",
          "hover:bg-gray-700/40 p-2 hover:rounded-xl transition-colors duration-200 ease-in"
        )}
      >
        {children}
      </span>
      <p className="text-xs font-medium text-gray-300">{text}</p>
    </div>
  );
};
