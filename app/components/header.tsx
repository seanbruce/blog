type DarkModeSwitchProps = Pick<HeaderProps, "darkMode" | "toggleDarkMode">;

function DarkModeSwitch({ darkMode, toggleDarkMode }: DarkModeSwitchProps) {
  return (
    <label>
      {darkMode ? "light mode" : "dark mode"}
      <input
        type="checkbox"
        checked={darkMode}
        onChange={() => {
          console.log("onChange");
          toggleDarkMode();
        }}
      />
    </label>
  );
}

type HeaderProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

export default function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  return (
    <header>
      <h1 className="text-4xl font-extrabold">Sean's Blog</h1>
      <DarkModeSwitch darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </header>
  );
}
