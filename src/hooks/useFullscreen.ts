import { useRef } from "react";
const useFullscreen = () => {
  const element = useRef();
  const triggerFull = () => {
    console.log(element.current.children);

    element.current.requestFullscreen();
  };

  return { element, triggerFull };
};

export default useFullscreen;
