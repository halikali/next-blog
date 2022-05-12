import { useEffect, useState } from "react";
import style from "./Author.module.scss";

const Author = ({ info }) => {
  const [createdAt, setCreatedAt] = useState("");
  const [readTime, setReadTime] = useState(0);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const formattedDate = (date) => {
    const assignedDate = new Date(date);
    const month = assignedDate.getMonth();
    const day = assignedDate.getDate();
    const year = assignedDate.getFullYear();

    setCreatedAt(`${monthNames[month]} ${day},${year}`);
  };

  useEffect(() => {
    formattedDate(info.postCreated);
    setReadTime(Number.parseInt(Math.random() * 10 + 2));
  }, []);

  return (
    <div className={style.author}>
      <div className={style.imageWrapper}>
        <img src={info.avatarUrl} className={style.image} />
      </div>
      <div className={style.textWrapper}>
        <h5 className={style.title}>{info.name}</h5>
        <p className={style.createdAt}>
          {`${createdAt}  `}
          <span>{`${readTime} min. read `} </span>
        </p>
      </div>
    </div>
  );
};

export default Author;
