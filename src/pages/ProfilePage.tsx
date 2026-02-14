import { motion } from "framer-motion";
import { User } from "lucide-react";

const ProfilePage = () => {
  return (
    <div className="flex flex-col items-center px-6 pt-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md text-center"
      >
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-card shadow-sm">
          <User className="h-8 w-8 text-muted-foreground" />
        </div>
        <h1 className="mt-4 font-display text-2xl font-bold text-foreground">Profilo</h1>
        <p className="mt-1 text-sm text-muted-foreground">Il tuo profilo</p>
      </motion.div>
    </div>
  );
};

export default ProfilePage;
