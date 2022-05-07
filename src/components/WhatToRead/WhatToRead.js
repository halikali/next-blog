import { useRef, useState } from "react";

import Post from "../Post/Post";
import style from "./WhatToRead.module.scss";

const WhatToRead = () => {
  const eye1 = useRef(null);
  const eye2 = useRef(null);
  const [deg, setDeg] = useState(0);

  const eyesRefs = [eye1.current, eye2.current];

  const eyeTracker = (e) => {
    eyesRefs &&
      eyesRefs.forEach((eye) => {
        const rect = eye && eye.getBoundingClientRect();
        const x = rect && rect.left + rect.width / 2;
        const y = rect && rect.top + rect.height / 2;
        const rad = Math.atan2(e.clientX - x, e.clientY - y);
        const deg = rad * (180 / Math.PI) * -1 + 120;
        setDeg(deg);
      });
  };

  return (
    <div className={style.container} onMouseMove={(e) => eyeTracker(e)}>
      <span className={style.line}></span>
      <div className={style.eyeWrapper}>
        <div className={style.pupil}>
          <span
            className={style.eye}
            ref={eye1}
            style={{ transform: `rotate(${deg}deg)` }}
          ></span>
        </div>
        <div className={style.pupil}>
          <span
            className={style.eye}
            ref={eye2}
            style={{ transform: `rotate(${deg}deg)` }}
          ></span>
        </div>
      </div>

      <h4 className={style.title}>What to read next</h4>

      <div className={style.postWrapper}>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default WhatToRead;
