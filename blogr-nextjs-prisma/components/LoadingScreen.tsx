import React, { useEffect, useState } from 'react';

const LoadingScreen = ({ setLoadingDone }) => {
  const messages = [
    "Loading...",
    "Hit enter or touch to skip...MO V2.0 DOS Version GUI Version",
    "Web V3.3 System Master 1983...Update...2023...",
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
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (currentMessageIndex >= messages.length) {
      return;
    }

    const timeoutId = setTimeout(() => {
      setCharIndex((prevIndex) => prevIndex + 1);
    }, 120);

    return () => clearTimeout(timeoutId);
  }, [charIndex, currentMessageIndex]);

  useEffect(() => {
    if (charIndex === messages[currentMessageIndex]?.length) {
      if (messages[currentMessageIndex] === 'Clear') {
        setDisplayedMessages([]);
      } else {
        setDisplayedMessages(oldArray => [...oldArray, messages[currentMessageIndex]]);
      }
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
      <pre className="typewriter">
        {displayedMessages.map((msg, index) => (
          <span key={index}>{msg}<br/><br/></span>
        ))}
        {messages[currentMessageIndex]?.slice(0, charIndex)}
      </pre>
      <style jsx>{`
        .loading-screen {
          background-color: black;
          color: green;
          height: 100vh;
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem;
          box-sizing: border-box;
          cursor: ${currentMessageIndex >= messages.length ? 'pointer' : 'default'};
          font-size: 2rem;
        }

        .typewriter {
          text-align: center;
          white-space: pre-wrap;
          border-right: .15em solid green;
          animation: blink-caret .75s step-end infinite;
          max-width: 100%;
          overflow-wrap: break-word;
        }

        /* The typewriter cursor effect */
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: green; }
        }

        @media (max-width: 600px) {
          .loading-screen {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 400px) {
          .loading-screen {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
