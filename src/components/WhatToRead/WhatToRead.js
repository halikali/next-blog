import { useRef, useState, useEffect } from "react";

import sanityClient from "../../../sanity";
import Post from "../Post/Post";
import style from "./WhatToRead.module.scss";

const WhatToRead = () => {
  const eye1 = useRef(null);
  const eye2 = useRef(null);
  const [deg, setDeg] = useState(0);
  const [randomizedItems, setRandomizedItems] = useState([]);

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

  const fetchPosts = () => {
    function getRandomItem(arr) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      const randomIndex2 = Math.floor(Math.random() * arr.length);
      const randomIndex3 = Math.floor(Math.random() * arr.length);
      setRandomizedItems([
        arr[randomIndex],
        arr[randomIndex2],
        arr[randomIndex3],
      ]);
    }

    const query = `*[_type == "post"]{
     slug,
     _id,
     title,
      mainImage{
        asset->{
          _id,
          url
        }
      }
    } `;

    sanityClient.fetch(query).then((bikes) => {
      getRandomItem(bikes);
    });
  };

  useEffect(() => {
    fetchPosts();

    return () => {
      setRandomizedItems([]);
    };
  }, []);

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
        {randomizedItems.map((post, i) => (
          <Post post={post} key={i} />
        ))}
      </div>
    </div>
  );
};

export default WhatToRead;
