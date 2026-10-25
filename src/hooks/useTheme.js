import { useEffect, useState } from "react";

// Navy (dark) is the default theme.
export default function useTheme() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return [dark, () => setDark((d) => !d)];
}
