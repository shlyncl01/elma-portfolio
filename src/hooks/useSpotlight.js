import { useEffect, useRef } from "react";

// Soft glow that follows the cursor. Attach the returned ref to a fixed full-screen div.
export default function useSpotlight() {
  const ref = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (ref.current) {
        ref.current.style.background = `radial-gradient(480px circle at ${e.clientX}px ${e.clientY}px, var(--glow), transparent 70%)`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return ref;
}
