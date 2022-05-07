import Image from "next/image";

import style from "./Author.module.scss";

const Author = () => {
  return (
    <div className={style.author}>
      <div className={style.imageWrapper}>
        <Image
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          width={56}
          height={56}
          layout="responsive"
          className={style.image}
        />
      </div>
      <div className={style.textWrapper}>
        <h5 className={style.title}>mıka matıkaınen</h5>
        <p className={style.createdAt}>Apr 15,2020 . 4 min read</p>
      </div>
    </div>
  );
};

export default Author;
