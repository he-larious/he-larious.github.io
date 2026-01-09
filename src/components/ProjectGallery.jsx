import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./ProjectGallery.css";

function ProjectGallery({ title, items, rows }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.matchMedia("(min-width: 901px)").matches : false
  );
  const galleryRows = rows || [{ title, items }];
  const flatItems = [];
  const rowsWithIndex = galleryRows.map((row) => ({
    ...row,
    items: row.items.map((item) => {
      const entry = { ...item, rowTitle: row.title, index: flatItems.length };
      flatItems.push(entry);
      return entry;
    }),
  }));
  const activeItem = flatItems[activeIndex] || flatItems[0];
  const rowRefs = useRef([]);

  const hasImage = Boolean(activeItem?.image);
  const hasEmbed = Boolean(activeItem?.embedUrl);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }
    const mediaQuery = window.matchMedia("(min-width: 901px)");
    const handleChange = (event) => setIsDesktop(event.matches);
    handleChange(mediaQuery);
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);
  const scrollRow = (rowIndex, direction) => {
    const rowEl = rowRefs.current[rowIndex];
    if (!rowEl) {
      return;
    }
    rowEl.scrollBy({ left: direction * rowEl.clientWidth, behavior: "smooth" });
  };

  return (
    <section className="project-gallery">
      <div className="project-gallery-layout">
        <div className="project-hero" role="region" aria-live="polite">
          <div className={`project-hero-media ${hasImage || hasEmbed ? "" : "is-fallback"}`}>
            {hasImage && !hasEmbed && <img src={activeItem.image} alt={activeItem.title} />}
            {hasEmbed && (
              <iframe
                title={activeItem.title}
                frameBorder="0"
                allowFullScreen
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking="true"
                execution-while-out-of-viewport="true"
                execution-while-not-rendered="true"
                web-share="true"
                src={activeItem.embedUrl}
              ></iframe>
            )}
            {!hasImage && !hasEmbed && (
              <div className="project-fallback">
                <span>{activeItem?.title}</span>
              </div>
            )}
          </div>
          <div className="project-hero-overlay">
            <p className="project-hero-eyebrow">Now Showing</p>
            <h3>{activeItem?.title}</h3>
            {activeItem?.description && (
              <p className="project-hero-description">{activeItem.description}</p>
            )}
            {activeItem?.links?.[0] && (
              <a
                className="project-hero-button"
                href={activeItem.links[0].url}
                target="_blank"
                rel="noreferrer"
              >
                {activeItem.links[0].label}
              </a>
            )}
          </div>
        </div>
        <div className="project-rows">
          {rowsWithIndex.map((row, rowIndex) => (
            <div className="project-strip" key={row.title}>
              <h2>{row.title}</h2>
              <div className="project-strip-row-wrap">
                {isDesktop && row.items.length > 4 && (
                  <button
                    type="button"
                    className="project-strip-control project-strip-control-left"
                    onClick={() => scrollRow(rowIndex, -1)}
                    aria-label={`Scroll ${row.title} left`}
                  >
                    <ChevronLeft size={20} />
                  </button>
                )}
                <div
                  className="project-strip-row"
                  aria-label={`${row.title} thumbnails`}
                  ref={(node) => {
                    rowRefs.current[rowIndex] = node;
                  }}
                >
                  {row.items.map((item) => {
                    const isActive = item.index === activeIndex;
                    const hasThumb = Boolean(item.image);
                    return (
                      <button
                        key={`${row.title}-${item.title}`}
                        type="button"
                        className={`project-thumb ${isActive ? "is-active" : ""} ${hasThumb ? "" : "is-fallback"}`}
                        onClick={() => setActiveIndex(item.index)}
                      >
                        {hasThumb ? (
                          <img src={item.image} alt={item.title} />
                        ) : (
                          <span className="project-thumb-label">{item.title}</span>
                        )}
                      </button>
                    );
                  })}
                </div>
                {isDesktop && row.items.length > 4 && (
                  <button
                    type="button"
                    className="project-strip-control project-strip-control-right"
                    onClick={() => scrollRow(rowIndex, 1)}
                    aria-label={`Scroll ${row.title} right`}
                  >
                    <ChevronRight size={20} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectGallery;
