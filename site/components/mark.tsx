type MarkProps = {
  className?: string;
  title?: string;
  draw?: boolean;
};

export function Mark({ className, title, draw = false }: MarkProps) {
  const labeled = Boolean(title);

  return (
    <svg
      viewBox="0 0 640 600"
      className={className}
      role={labeled ? "img" : undefined}
      aria-label={title}
      aria-hidden={labeled ? undefined : true}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        className={draw ? "mark-draw" : undefined}
      >
        <path
          pathLength={1}
          d="M306 164V72c0-20 16-36 36-36h44m-80 66h80"
        />
        <path
          pathLength={1}
          d="M104 180v36c0 62 50 112 112 112h184c38 0 68 31 68 70 0 42-33 74-74 74h-16v23c0 31-22 53-52 53s-52-22-52-53V386"
        />
        <path pathLength={1} d="M72 180h496" />
      </g>
    </svg>
  );
}
