import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Clock } from 'lucide-react';
import Card from './Card';
import { motion } from "framer-motion";

const ClockWidget = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>

      {/* Background Glow */}
      <motion.div
        className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-500 rounded-full blur-3xl opacity-20"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-20"
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative flex flex-col items-center justify-center text-center">

        {/* Digital Time */}
        <div className="flex items-center gap-2 md:gap-3 text-3xl md:text-5xl font-bold text-white tracking-widest">

          <TimeBlock value={format(currentTime, 'HH')} />

          <BlinkColon />

          <TimeBlock value={format(currentTime, 'mm')} />

          <BlinkColon />

          <TimeBlock value={format(currentTime, 'ss')} />

        </div>

        {/* Date */}
        <p className="text-gray-400 mt-3 text-sm">
          {format(currentTime, 'EEEE, MMMM dd, yyyy')}
        </p>

      </div>
    </>
  );
};

const TimeBlock = ({ value }) => {
  return (
    <div
      className="
        px-4 py-3 rounded-xl
        bg-[#1a1b2e]/80 backdrop-blur-md
        border border-white/10
        shadow-[inset_0_0_20px_rgba(99,102,241,0.05),0_0_15px_rgba(99,102,241,0.1)]
        hover:shadow-[inset_0_0_25px_rgba(99,102,241,0.2),0_0_20px_rgba(99,102,241,0.2)]
        hover:bg-[#1a1b2e] transition-all duration-300 ease-in-out
      "
    >
      {value}
    </div>
  );
};

const BlinkColon = () => {
  return (
    <motion.span
      className="text-indigo-400/80 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]"
      animate={{ opacity: [1, 0.3, 1] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    >
      :
    </motion.span>
  );
};

export default ClockWidget;