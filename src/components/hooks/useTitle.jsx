import { useEffect } from "react";

const useTitle =(title) => {
  useEffect(() => {
    document.title = `${title} | Foody BD`;
  }, [title]);
}

export default useTitle;