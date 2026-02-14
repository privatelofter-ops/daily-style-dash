import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center px-6 pt-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md text-center"
      >
        <h1 className="font-display text-3xl font-bold tracking-tight text-foreground">
          Abbinami
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Il tuo outfit di oggi è pronto per competere?
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-10 flex w-full max-w-md flex-col items-center gap-4"
      >
        <div className="flex h-64 w-full items-center justify-center rounded-2xl border-2 border-dashed border-border bg-card">
          <div className="text-center">
            <p className="text-lg font-medium text-muted-foreground">
              Nessun outfit postato oggi
            </p>
            <p className="mt-1 text-sm text-muted-foreground/70">
              Posta il tuo look per competere
            </p>
          </div>
        </div>

        <button className="w-full rounded-2xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-transform active:scale-[0.98]">
          Posta il tuo Outfit
        </button>
      </motion.div>
    </div>
  );
};

export default HomePage;
