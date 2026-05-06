"use client";
import { useEffect, useState } from "react";

const CHARS = "!@#$%^&*<>[]{}/_-+=?ABCDEFXYZ01";

export default function ScrambleText({ text, frameRate = 32, scrambleFrames = 14, startDelayFrames = 0 }) {
  const initial = text.split("").map((c) => (c === " " ? " " : " ")).join("");
  const [output, setOutput] = useState(initial);

  useEffect(() => {
    let frame = 0;
    const queue = text.split("").map((char, i) => ({
      to: char,
      start: startDelayFrames + i * 2,
      end: startDelayFrames + i * 2 + scrambleFrames,
    }));

    const interval = setInterval(() => {
      let result = "";
      let done = 0;
      for (const item of queue) {
        if (item.to === " ") {
          result += " ";
          done++;
          continue;
        }
        if (frame >= item.end) {
          done++;
          result += item.to;
        } else if (frame >= item.start) {
          result += CHARS[Math.floor(Math.random() * CHARS.length)];
        } else {
          result += " ";
        }
      }
      setOutput(result);
      frame++;
      if (done >= queue.length) clearInterval(interval);
    }, 1000 / frameRate);

    return () => clearInterval(interval);
  }, [text, frameRate, scrambleFrames, startDelayFrames]);

  return <span aria-label={text}>{output}</span>;
}
