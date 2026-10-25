import { useEffect, useState } from "react";

// Types each word, holds, erases back to the first word, repeats.
export default function useTypewriter(words, { type = 110, erase = 55, hold = 1400 } = {}) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i];
    let delay = deleting ? erase : type;

    if (!deleting && text === word) delay = hold;
    if (deleting && text === words[0] && i === 0) delay = hold;

    const t = setTimeout(() => {
      if (!deleting && text === word) {
        if (i === words.length - 1) setDeleting(true);
        else { setI(i + 1); }
        return;
      }
      if (deleting) {
        if (text === words[0]) { setDeleting(false); setI(0); return; }
        setText(text.slice(0, -1));
        return;
      }
      setText(word.slice(0, text.length + 1));
    }, delay);

    return () => clearTimeout(t);
  }, [text, i, deleting, words, type, erase, hold]);

  return text;
}
