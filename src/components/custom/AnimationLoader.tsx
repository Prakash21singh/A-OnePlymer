import { motion } from "framer-motion";

export default function AnimatedLoader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <motion.div
        className="text-black text-3xl font-bold"
        animate={{
          y: [0, -20, 0],
          transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}>
        Loading...
      </motion.div>
      <div className="mt-8 text-black-1/50 text-sm w-3/4 max-w-md text-center">
        We're preparing something amazing for you. Just a moment while we get
        everything ready.
      </div>
    </div>
  );
}
