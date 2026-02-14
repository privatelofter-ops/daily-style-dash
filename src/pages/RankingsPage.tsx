import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const RankingsPage = () => {
  return (
    <div className="flex flex-col items-center px-6 pt-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md text-center"
      >
        <h1 className="font-display text-2xl font-bold text-foreground">Classifica</h1>
        <p className="mt-2 text-sm text-muted-foreground">Milano</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-10 flex h-64 w-full max-w-md flex-col items-center justify-center rounded-2xl bg-card shadow-sm"
      >
        <Trophy className="h-12 w-12 text-muted-foreground/40" />
        <p className="mt-4 text-muted-foreground">
          La classifica sarà disponibile presto
        </p>
      </motion.div>
    </div>
  );
};

export default RankingsPage;
