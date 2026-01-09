import { Link } from "react-router-dom";

function SceneMenuLink({
  to,
  label,
  onMouseEnter,
  onFocus,
  onPointerDown,
  onClick,
}) {
  return (
    <Link
      className="scene-link"
      to={to}
      onMouseEnter={onMouseEnter}
      onFocus={onFocus}
      onPointerDown={onPointerDown}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}

export default SceneMenuLink;
