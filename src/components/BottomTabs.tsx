import { NavLink, useLocation } from "react-router-dom";
import { Home, Flame, Trophy, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const tabs = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/vote", icon: Flame, label: "Vota" },
  { to: "/rankings", icon: Trophy, label: "Classifica" },
  { to: "/profile", icon: User, label: "Profilo" },
];

const BottomTabs = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/80 backdrop-blur-xl safe-bottom">
      <div className="mx-auto flex max-w-lg items-center justify-around px-2 py-1">
        {tabs.map(({ to, icon: Icon, label }) => {
          const isActive = location.pathname === to;
          return (
            <NavLink
              key={to}
              to={to}
              className="relative flex flex-col items-center gap-0.5 px-4 py-2"
            >
              {isActive && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute -top-1 h-0.5 w-8 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <Icon
                className={cn(
                  "h-5 w-5 transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
                strokeWidth={isActive ? 2.5 : 1.8}
              />
              <span
                className={cn(
                  "text-[10px] font-medium transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                {label}
              </span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomTabs;
