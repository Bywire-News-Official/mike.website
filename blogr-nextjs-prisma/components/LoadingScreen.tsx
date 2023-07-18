import React, { useEffect, useState } from 'react';

const LoadingScreen = ({ setLoadingDone }) => {
  const messages = [
    "Loading...",
    "MO V2.0 DOS Version GUI Version",
    "Web V3.3 System Master 1983....Update...2023...",
    "Initiate Connection",
    "Connection started...HTML...CSS...JS...",
    "PretendLoading V 1.34",
    "Start console...",
    "Clear",
    "Hello world.",
    "Welcome to Mike.website.",
    "Click anywhere or hit Enter to start!"
  ];
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (currentMessageIndex >= messages.length) {
      return;
    }

    if (messages[currentMessageIndex] === 'Clear') {
      setText("");
      setCurrentMessageIndex(currentMessageIndex + 1);
      setCharIndex(0);
      return;
    }

    if (charIndex < messages[currentMessageIndex].length) {
      const timeoutId = setTimeout(() => {
        setText((text) => text + messages[currentMessageIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 120);

      return () => clearTimeout(timeoutId);
    } else {
      setText((text) => text + '<br /><br />');
      setCurrentMessageIndex(currentMessageIndex + 1);
      setCharIndex(0);
    }
  }, [charIndex, currentMessageIndex]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter' || event.key === 'Escape') {
        setLoadingDone(true);
      }
    };

    const handleClick = () => {
      setLoadingDone(true);
    };

    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('click', handleClick);
    }
  }, [setLoadingDone]);

  return (
    <div className="loading-screen">
      <pre className="typewriter" dangerouslySetInnerHTML={{ __html: text }} />
      <style jsx>{`
        .loading-screen {
          background-color: black;
          color: green;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: ${currentMessageIndex >= messages.length ? 'pointer' : 'default'};
          font-size: 2rem;
        }

        .typewriter {
          text-align: center;
          border-right: .15em solid green;
          animation: blink-caret .75s step-end infinite;
        }

        /* The typewriter cursor effect */
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: green; }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
