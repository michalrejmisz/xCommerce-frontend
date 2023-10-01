import { useEffect, RefObject } from "react";

interface HookProps {
  ref: RefObject<HTMLElement>;
  callback: () => void;
}

const useClickOutside = ({ ref, callback }: HookProps) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && ref.current.contains(event.target as Node)) {
        return;
      }
      callback();
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback, ref]);
};

export default useClickOutside;
