import React from "react";
import { window } from "browser-monads";

export default function useMediaQuery(query) {
  const getMatches = query => window.matchMedia(query).matches;

  const [matches, setMatches] = React.useState(getMatches(query));

  const handleChange = () => setMatches(getMatches(query));

  React.useEffect(() => {
    const matchMedia = window.matchMedia(query);

    handleChange();

    matchMedia.addListener
      ? matchMedia.addListener(handleChange)
      : matchMedia.addEventListener("change", handleChange);

    return () =>
      matchMedia.removeListener
        ? matchMedia.removeListener(handleChange)
        : matchMedia.removeEventListener("change", handleChange);
  }, []);

  return matches;
}
