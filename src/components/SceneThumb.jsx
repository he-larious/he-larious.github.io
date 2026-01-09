import { Link } from "react-router-dom";

function SceneThumb({
  isActive,
  to,
  label,
  Icon,
  onMouseEnter,
  onFocus,
  onPointerDown,
  onClick,
}) {
  return (
    <Link
      className={`scene-thumb ${isActive ? "is-active" : ""}`}
      to={to}
      onMouseEnter={onMouseEnter}
      onFocus={onFocus}
      onPointerDown={onPointerDown}
      onClick={onClick}
    >
      <span className="scene-icon" aria-hidden="true">
        <Icon className="scene-icon-svg" />
      </span>
      <span className="scene-thumb-label">{label}</span>
    </Link>
  );
}

export default SceneThumb;
