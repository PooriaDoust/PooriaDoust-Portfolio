import { motion } from "framer-motion";

interface SimpleTitleProps {
  children: string;
  className?: string;
}

const SimpleTitle: React.FC<SimpleTitleProps> = ({ children, className = "" }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`text-center font-bold text-gradient-heading ${className}`}
      style={{
        fontSize: 'clamp(2rem, 6vw, 4rem)',
        lineHeight: 1.2,
        marginBottom: '2rem'
      }}
    >
      {children}
    </motion.h2>
  );
};

export default SimpleTitle; 