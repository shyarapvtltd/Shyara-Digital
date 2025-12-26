import { motion } from "framer-motion";
import { ReactNode, useEffect } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition: {
          duration: 0.4,
          ease: "easeOut",
        },
      }}
      exit={{ 
        opacity: 0,
        transition: {
          duration: 0.2,
          ease: "easeIn",
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
