import { useEffect, useState } from "react";

const useScrollPosition = (page) => {
  const [moreThanHalf, setMoreThanHalf] = useState(false);

  const scrollValues = {
    marvel: "posScrollMarvel",
    dc: "posScrollDC",
    search: "posScrollSearch",
  };

  const pageValue = scrollValues[page];

  useEffect(() => {
    const scroll = localStorage.getItem(pageValue) || 0;
    window.scrollTo({ top: scroll, behavior: "instant" });
  }, []);

  useEffect(() => {
    const updatePosition = () => {
      const maxScroll = document.body.scrollHeight;
      localStorage.setItem(pageValue, window.pageYOffset);

      if (window.pageYOffset >= maxScroll / 2.68) {
        setMoreThanHalf(true);
      } else {
        setMoreThanHalf(false);
      }
    };

    window.addEventListener("scroll", updatePosition);

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return moreThanHalf;
};

export default useScrollPosition;
