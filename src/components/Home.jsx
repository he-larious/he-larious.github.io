import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [introPhase, setIntroPhase] = useState("text");
  const [introMuted, setIntroMuted] = useState(true);

  useEffect(() => {
    if (!showIntro) {
      return undefined;
    }

    setIntroPhase("text");
    setIntroMuted(true);
    const textTimer = setTimeout(() => setIntroPhase("video"), 4400);

    return () => clearTimeout(textTimer);
  }, [showIntro]);

  useEffect(() => {
    if (!showIntro) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [showIntro]);

  const handleSkip = () => {
    setShowIntro(false);
  };

  const handleUnmute = () => {
    setIntroMuted(false);
  };

  const renderLine = (text, className, lineDelay) => (
    <p className={`intro-line ${className}`} style={{ "--line-delay": lineDelay }}>
      {text.split(" ").map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="intro-word"
          style={{ "--word-index": index }}
        >
          {word}
        </span>
      ))}
    </p>
  );

  return (
    <div className="home-video">
      {showIntro && (
        <div className="intro-overlay" role="presentation">
          <button
            className="intro-skip"
            type="button"
            onClick={handleSkip}
          >
            Skip Intro
          </button>
          <div className={`intro-frame ${introPhase === "video" ? "intro-frame--video" : ""}`}>
            {introPhase === "text" && (
              <>
                {renderLine("A Helarious Production", "line-1", "0s")}
                {renderLine("Directed by Helena He", "line-2", "2.2s")}
              </>
            )}
            {introPhase === "video" && (
              <>
                <video
                  src="/Intro.mp4"
                  autoPlay
                  muted={introMuted}
                  playsInline
                  className="intro-video"
                  onEnded={() => setShowIntro(false)}
                />
                {introMuted && (
                  <button
                    className="intro-audio"
                    type="button"
                    onClick={handleUnmute}
                  >
                    Unmute
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      )}

      {!showIntro && (
        <section className="scene-selection">
          <div className="scene-header">
            Scene Selection
          </div>
          <div className="scene-grid">
            <Link className="scene-card" to="/about">ABOUT</Link>
            <Link className="scene-card" to="/cs-projects">CS</Link>
            <Link className="scene-card" to="/creative-projects">CREATIVE</Link>
            <Link className="scene-card" to="/film">FILM</Link>
          </div>
        </section>
      )}
    </div>
  );
}

export default Home;
