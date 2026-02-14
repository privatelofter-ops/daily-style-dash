import { motion } from "framer-motion";
import { Flame } from "lucide-react";

const VotePage = () => {
  return (
    <div className="flex flex-col items-center px-6 pt-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md text-center"
      >
        <h1 className="font-display text-2xl font-bold text-foreground">Vota</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Swipe per votare gli outfit di oggi
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-10 flex h-96 w-full max-w-md flex-col items-center justify-center rounded-2xl bg-card shadow-sm"
      >
        <Flame className="h-12 w-12 text-muted-foreground/40" />
        <p className="mt-4 text-muted-foreground">
          Nessun outfit da votare ora
        </p>
      </motion.div>
    </div>
  );
};

export default VotePage;
