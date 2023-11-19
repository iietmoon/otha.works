import React, { useState, useEffect } from 'react';

interface TypingTextProps{
    texts: string[]
}
const TypingText = ({texts}:TypingTextProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const text = texts[currentTextIndex];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        // Pause for a moment and then start deleting text
        clearInterval(intervalId);
        setTimeout(() => {
          const deleteIntervalId = setInterval(() => {
            if (currentIndex >= 0) {
              setDisplayedText(text.substring(0, currentIndex));
              currentIndex--;
            } else {
              clearInterval(deleteIntervalId);
              // Move to the next text
              setCurrentTextIndex((currentTextIndex + 1) % texts.length);
            }
          }, 100);
        }, 1000);
      }
    }, 100);

    // Clean up the interval on unmount
    return () => clearInterval(intervalId);
  }, [currentTextIndex, texts]);

  return <>{displayedText}</>;
};

export default TypingText;