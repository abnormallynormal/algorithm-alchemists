import { motion } from "framer-motion";

export interface OptionCardType {
  title: string;
  description: string;
  icon: string;
  iconBg: string;
  glow: string;
}

interface OptionCardProp {
  option: OptionCardType;
  onSelect: (option: OptionCardType) => void;
}

export default function OptionCard({ option, onSelect }: OptionCardProp) {
  return (
    <button
      onClick={() => onSelect?.(option)}
      className={`group flex flex-col items-start p-6 rounded-xl bg-surface-container-low border border-white/5 transition-all duration-300 text-left ${option.glow}`}
    >
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${option.iconBg}`}
        >
          <span className="material-symbols-outlined">{option.icon}</span>
        </div>

        <h3 className="font-h3 text-white text-lg mb-2">{option.title}</h3>

        <p className="text-on-surface-variant text-sm">{option.description}</p>
      </motion.div>
    </button>
  );
}
