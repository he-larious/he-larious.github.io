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
          <div className="scene-marquee">
            <p className="scene-label">Scene Selection</p>
            <div className="scene-divider" aria-hidden="true" />
          </div>
          <div className="scene-stage">
            <div className="scene-screen" aria-hidden="true">
              <div className="scene-screen-overlay" />
              <div className="scene-preview-title">Helarious Archives</div>
              <div className="scene-preview-subtitle">Select a reel to begin.</div>
              <div className="scene-thumbs">
                <div className="scene-thumb scene-thumb--about">ABOUT</div>
                <div className="scene-thumb scene-thumb--cs">CS</div>
                <div className="scene-thumb scene-thumb--creative">CREATIVE</div>
                <div className="scene-thumb scene-thumb--film">FILM</div>
              </div>
            </div>
            <div className="scene-menu">
              <p className="scene-menu-title">Chapters</p>
              <nav className="scene-list" aria-label="Scene selection">
                <Link className="scene-link" to="/about">ABOUT</Link>
                <Link className="scene-link" to="/cs-projects">CS</Link>
                <Link className="scene-link" to="/creative-projects">CREATIVE</Link>
                <Link className="scene-link" to="/film">FILM</Link>
              </nav>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Home;
