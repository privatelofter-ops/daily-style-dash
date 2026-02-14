import { Outlet } from "react-router-dom";
import BottomTabs from "@/components/BottomTabs";

const AppLayout = () => {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <main className="flex-1 pb-20">
        <Outlet />
      </main>
      <BottomTabs />
    </div>
  );
};

export default AppLayout;
