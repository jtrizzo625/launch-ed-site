// A figure with technical-drawing corner marks, used for the hero drawing and the headshot.
export default function Frame({ caption, light = false, children }) {
  return (
    <div className="figure">
      {caption && (
        <div className="fig-caption">
          <span>{caption[0]}</span>
          <span>{caption[1]}</span>
        </div>
      )}
      <div className={light ? "frame light" : "frame"}>
        {children}
        <span className="corner tl" />
        <span className="corner tr" />
        <span className="corner bl" />
        <span className="corner br" />
      </div>
    </div>
  );
}
