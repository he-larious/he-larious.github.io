import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [introPhase, setIntroPhase] = useState("text");
  const [introMuted, setIntroMuted] = useState(true);
  const [activeScene, setActiveScene] = useState("about");

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
                <div className={`scene-thumb ${activeScene === "about" ? "is-active" : ""}`}>
                  <span className="scene-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="img">
                      <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" />
                      <path d="M5 20a7 7 0 0 1 14 0" />
                    </svg>
                  </span>
                </div>
                <div className={`scene-thumb ${activeScene === "cs" ? "is-active" : ""}`}>
                  <span className="scene-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="img">
                      <rect x="7" y="7" width="10" height="10" rx="2" />
                      <path d="M4 10h3M4 14h3M17 10h3M17 14h3M10 4v3M14 4v3M10 17v3M14 17v3" />
                    </svg>
                  </span>
                </div>
                <div className={`scene-thumb ${activeScene === "creative" ? "is-active" : ""}`}>
                  <span className="scene-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="img">
                      <path d="m12 20 8-8-4-4-8 8-2 6 6-2Z" />
                      <path d="m14 6 4 4" />
                    </svg>
                  </span>
                </div>
                <div className={`scene-thumb ${activeScene === "film" ? "is-active" : ""}`}>
                  <span className="scene-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="img">
                      <rect x="3" y="8" width="18" height="12" rx="2" />
                      <path d="M3 8h18M7 4l2 4M12 4l2 4M17 4l2 4" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="scene-menu">
              <p className="scene-menu-title">Scenes</p>
              <nav className="scene-list" aria-label="Scene selection">
                <Link
                  className="scene-link"
                  to="/about"
                  onMouseEnter={() => setActiveScene("about")}
                >
                  ABOUT
                </Link>
                <Link
                  className="scene-link"
                  to="/cs-projects"
                  onMouseEnter={() => setActiveScene("cs")}
                >
                  CS
                </Link>
                <Link
                  className="scene-link"
                  to="/creative-projects"
                  onMouseEnter={() => setActiveScene("creative")}
                >
                  CREATIVE
                </Link>
                <Link
                  className="scene-link"
                  to="/film"
                  onMouseEnter={() => setActiveScene("film")}
                >
                  FILM
                </Link>
              </nav>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Home;
