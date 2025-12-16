export const toggleTheme = () => {
  const theme = document.documentElement.getAttribute("data-theme");
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
    window.localStorage.setItem("theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    window.localStorage.setItem("theme", "dark");
  }
};
