import { useTheme, Theme, Themed } from "~/utils/theme-provider";

function DarkModeSwitch() {
  const [theme, setTheme] = useTheme();
  return (
    <div
      className="ml-auto cursor-pointer select-none	"
      onClick={() => {
        setTheme((prevTheme) =>
          prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        );
      }}
    >
      <svg id="sunmoon" width="40" height="40">
        <defs>
          <mask id="hole">
            <rect width="100%" height="100%" fill="white" />
            <circle
              id="overlay"
              r="15"
              cx="50"
              cy="0"
              fill="black"
              className="transition duration-300 ease-in-out dark:-translate-x-[22px] dark:translate-y-[10px]"
            />
          </mask>

          <filter id="blur">
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="2"
              floodColor={theme === "dark" ? "white" : "gold"}
              className="transition duration-300 ease-in-out"
            />
          </filter>
        </defs>

        <g filter="url(#blur)">
          <circle
            fill={theme === "dark" ? "white" : "gold"}
            id="donut"
            r="15"
            cx="20"
            cy="20"
            mask="url(#hole)"
            className="transition duration-300 ease-in-out"
          />
        </g>
      </svg>
      <span className="sr-only">
        <Themed dark="switch to light mode" light="switch to dark mode" />
      </span>
    </div>
  );
}

export default function Header() {
  return (
    <header className="mb-8 flex items-center	">
      <h1 className="text-3xl font-extrabold">Sean's Blog</h1>
      <DarkModeSwitch />
    </header>
  );
}
