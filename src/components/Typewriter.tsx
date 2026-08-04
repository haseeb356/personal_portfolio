import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  words: string[];
  delay?: number; // Time each word stays complete (ms)
  typingSpeed?: number;
  deletingSpeed?: number;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  words,
  delay = 2500,
  typingSpeed = 80,
  deletingSpeed = 40,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        setCurrentText(word.substring(0, currentText.length + 1));
        if (currentText === word) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), delay);
          return;
        }
      } else {
        // Deleting back
        setCurrentText(word.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
      }
    };

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, delay, typingSpeed, deletingSpeed]);

  return (
    <span className="inline-flex items-center text-cyan-400 font-semibold font-mono tracking-tight">
      <span>{currentText}</span>
      <span className="w-[3px] h-[1.1em] bg-cyan-400 ml-1 inline-block animate-pulse shadow-[0_0_8px_#22d3ee]" />
    </span>
  );
};
