import { useRef, useEffect } from "react";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const innerCursorRef = useRef(null);
  const circleRef = useRef(null);
  const rafRef = useRef(null);
  const cursorPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorPosRef.current = { x: e.clientX, y: e.clientY };
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(updateCursor);
      }
    };

    const updateCursor = () => {
      const innerCursor = innerCursorRef.current;
      const circle = circleRef.current;
      const cursorPos = cursorPosRef.current;
      if (innerCursor && circle) {
        innerCursor.style.left = `${cursorPos.x}px`;
        innerCursor.style.top = `${cursorPos.y}px`;
        circle.style.left = `${cursorPos.x}px`;
        circle.style.top = `${cursorPos.y}px`;
      }
      rafRef.current = null;
    };

    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("mouseover", () => {
        innerCursorRef.current.classList.add("is-hovering");
      });

      link.addEventListener("mouseout", () => {
        innerCursorRef.current.classList.remove("is-hovering");
      });
    });
    const videoElements = document.querySelectorAll(".swiper-slide");
    videoElements.forEach((video) => {
      video.addEventListener("mouseover", () => {
        innerCursorRef.current.classList.add("is-video");
        innerCursorRef.current.textContent = "MISSGUIDED";
      });
      video.addEventListener("mouseout", () => {
        innerCursorRef.current.classList.remove("is-video");
        innerCursorRef.current.textContent = "";
      });
    });

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <main data-scroll-container>
      <Component />
      <div ref={innerCursorRef} className="innerCursor"></div>
      <div ref={circleRef} className="gold-gradient-circle"></div>
    </main>
  );
}
