import { motion } from "framer-motion";

export default function ProgressBar({ pageNumber = 1, total = 3 }) {
  return (
    <div className="mb-12 flex justify-center items-center gap-3">
      {Array.from({ length: total }).map((_, i) => {
        const active = i < pageNumber;

        return (
          <div
            key={i}
            className="h-1 w-16 rounded-full bg-surface-container-highest overflow-hidden"
          >
            <motion.div
              className="h-full rounded-full bg-primary-container"
              initial={false}
              animate={{
                width: active ? "100%" : "0%",
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
