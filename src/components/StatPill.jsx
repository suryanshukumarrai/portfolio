import { useEffect, useState } from "react";

const StatPill = ({ value, label }) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 900;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const nextValue = Math.round(start + (value - start) * progress);
      setDisplay(nextValue);
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [value]);

  return (
    <div className="glass rounded-2xl px-4 py-3 text-left">
      <p className="text-2xl font-semibold text-frost">{display}</p>
      <p className="text-xs uppercase tracking-[0.25em] text-mist">
        {label}
      </p>
    </div>
  );
};

export default StatPill;
