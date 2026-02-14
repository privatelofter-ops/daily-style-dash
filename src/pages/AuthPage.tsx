import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin },
        });
        if (error) throw error;
        toast({
          title: "Controlla la tua email",
          description: "Ti abbiamo inviato un link di conferma.",
        });
      }
    } catch (error: any) {
      toast({
        title: "Errore",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center px-6 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-sm"
      >
        <div className="mb-10 text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground">
            Abbinami
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            La tua competizione di stile quotidiana
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.form
            key={isLogin ? "login" : "signup"}
            initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
            transition={{ duration: 0.2 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 rounded-xl bg-card text-base"
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="h-12 rounded-xl bg-card text-base"
            />
            <Button
              type="submit"
              disabled={loading}
              className="h-12 rounded-xl text-base font-semibold shadow-lg"
            >
              {loading ? "..." : isLogin ? "Accedi" : "Registrati"}
            </Button>
          </motion.form>
        </AnimatePresence>

        <button
          onClick={() => setIsLogin(!isLogin)}
          className="mt-6 w-full text-center text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          {isLogin ? "Non hai un account? Registrati" : "Hai già un account? Accedi"}
        </button>
      </motion.div>
    </div>
  );
};

export default AuthPage;
