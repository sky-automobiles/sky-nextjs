"use client";

import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

const ModalConf = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Ensure the code only runs on the client side
    if (typeof window !== "undefined") {
      // Set initial dimensions and update on window resize
      setDimensions({ width: window.innerWidth, height: window.innerHeight });

      const handleResize = () => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
      };

      window.addEventListener("resize", handleResize);

      // Disable scrolling by setting body overflow to hidden
    //   document.body.style.overflow = "hidden";

      // Stop confetti and re-enable scrolling after a few seconds
      const timer = setTimeout(() => {
        setShowConfetti(false);
        // document.body.style.overflow = ""; // Re-enable scrolling
      }, 6000);

      return () => {
        clearTimeout(timer);
        window.removeEventListener("resize", handleResize);
        // document.body.style.overflow = ""; // Ensure scrolling is enabled on cleanup
      };
    }
  }, []);

  if (!showConfetti) return null;

  return (
    <div>
      <Confetti width={dimensions.width-10} height={dimensions.height} />
    </div>
  );
};

export default ModalConf;
