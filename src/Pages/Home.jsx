import React, { useEffect, useState } from "react";
import Preloader from "../Components/Preloader";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    const totalItems = 100;
    let loadedItems = 0;

    const interval = setInterval(() => {
      if (loadedItems < totalItems) {
        loadedItems += 15;
        setPercentage(Math.min(loadedItems, 100));
      } else {
        clearInterval(interval);
        setIsLoading(false);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {isLoading && <Preloader percentage={percentage} />}
      {!isLoading && (
        <div className="bg-[#C97164] w-ful h-screen overflow-hidden"></div>
      )}
    </>
  );
}

export default Home;
