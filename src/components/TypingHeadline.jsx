import { useEffect, useState } from "react";

const TypingHeadline = ({ text, speed = 28 }) => {
  const [output, setOutput] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      setOutput(text.slice(0, index));
      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <p className="text-lg lg:text-xl text-mist leading-relaxed">
      {output}
      <span className="text-neon">▋</span>
    </p>
  );
};

export default TypingHeadline;
