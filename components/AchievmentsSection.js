"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Data pencapaian dengan ID unik
const achievementsList = [
  {
    id: 1,
    metric: "Projects",
    value: 3,
    postfix: "+",
  },
  {
    id: 2,
    metric: "Years",
    value: 1,
    postfix: "", // Tambahkan postfix untuk konsistensi
  },
];

// Komponen pengganti AnimatedNumbers yang lebih sederhana
const SimpleAnimatedNumber = ({ value, postfix }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1000; // Durasi animasi dalam ms
    const startTime = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setDisplayValue(Math.floor(progress * end));

      if (progress === 1) {
        clearInterval(timer);
      }
    }, 16); // ~60fps

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {displayValue}
      {postfix}
    </span>
  );
};

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement) => (
          <div
            key={achievement.id}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2 className="text-white text-4xl font-bold flex flex-row">
              {achievement.prefix}
              <SimpleAnimatedNumber
                value={achievement.value}
                postfix={achievement.postfix}
              />
            </h2>
            <motion.p
              key={`metric-text-${achievement.id}`}
              className="text-[#ADB7BE] text-base"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: achievement.id * 0.2 }}
            >
              {achievement.metric}
            </motion.p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
