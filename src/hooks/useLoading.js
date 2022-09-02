import { useState, useEffect } from "react";

export const useLoading = (options) => {
  const { time = 0, hasImages } = options;

  const [isLoading, setIsLoading] = useState(true);
  const [loadCount, setLoadCount] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const setImageLoaded = () => {
    console.log("image loaded");
    if (loadCount <= 1) {
      setLoadCount(loadCount + 1);
    } else {
      setImagesLoaded(true);
      console.log("All images loaded!");
    }
  };
  const handleLoading = () => {
    setTimeout(() => {
      console.log("en");
      setIsLoading(false);
    }, time);
  };

  useEffect(() => {
    window.addEventListener("load", handleLoading());
    return () => window.removeEventListener("load", handleLoading);
  }, []);

  if (hasImages) {
    return {
      setImageLoaded,
      imagesLoaded,
    };
  } else {
    return isLoading;
  }
};
