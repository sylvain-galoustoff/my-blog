import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useNavigate, useOutlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import pages from "./utils/pages";

const AnimatedOutlet = () => {
  const o = useOutlet();
  const [outlet] = useState(o);

  return <>{outlet}</>;
};

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [pageIndex, setPageIndex] = useState(0);
  const [appClassName, setAppClassName] = useState("accueil");

  useEffect(() => {
    navigate(pages[pageIndex]);
  }, [pageIndex]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY >= 100) {
        const newpageIndex = pageIndex + 1;
        if (newpageIndex !== pages.length) {
          setPageIndex(newpageIndex);
        }
      } else if (e.deltaY <= 100) {
        const newPageIndex = pageIndex - 1;
        if (newPageIndex >= 0) {
          setPageIndex(newPageIndex);
        }
      }
    };
    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  });

  useEffect(() => {
    const splitPathname = location.pathname.split("/");
    const pathname = splitPathname[splitPathname.length - 1];
    setAppClassName(pathname);
  }, [location.pathname]);

  return (
    <div id="app" className={appClassName}>
      <Nav />
      <AnimatePresence>
        <motion.div
          key={location.key}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.3 }}
          className={`route-animation-wrapper`}
        >
          <AnimatedOutlet />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
