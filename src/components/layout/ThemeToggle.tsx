'use client';
import { useEffect, useState, useRef, useCallback } from "react";
import { SwatchIcon } from "@heroicons/react/24/solid";
const themes = ["", "theme-spot", "theme-mux", "theme-tar", "theme-ardi", "theme-chit", "theme-Blåhaj"];

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string>("");
  const [mounted, setMounted] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "";
    setTheme(storedTheme);
    document.documentElement.className = storedTheme;
    setMounted(true); // Set mounted to true after theme is set
  }, []);
      
  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.className = newTheme;
  };

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target as Node) &&
      !(event.target as HTMLElement).closest(".dropdown-item")
    ) {
      setThemeMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  if (!mounted) return null;

  return (
    <>
      <div className="absolute top-0 left-0 z-50">
        <SwatchIcon className="h-10 w-10 md:h-12 md:w-12 text-white cursor-pointer hover:text-accent bg-foreground rounded-br-lg p-2" onClick={() => setThemeMenuOpen((prev) => !prev)} />
      </div>

      {themeMenuOpen && (
        <div ref={modalRef} className="flex flex-col bg-background p-5 rounded-b-md shadow-2xl absolute left-0 top-12 space-y-4 z-40">
          <div>
            <h1 className="text-white text-lg font-semibold">Themes</h1>
            <p className="text-muted text-sm">Choose from a beautifully curated list of themes</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {themes.map((t) => (
              <button key={t || "default"} onClick={() => handleThemeChange(t)} className="px-4 py-2 rounded border text-white bg-foreground hover:bg-background transition-colors">
                {t ? t.replace("theme-", "") : "Default"}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}