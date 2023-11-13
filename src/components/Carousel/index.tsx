import { FC } from "react";
import styles from "components/carousel/index.module.css";
import { Carousel as AntCarousel } from "antd";

const Carousel: FC = () => {
  return (
    <AntCarousel autoplay className={styles.slider}>
      {Array.from({ length: 3 }, (_, index) => (
        <div>{index}</div>
      ))}
    </AntCarousel>
  );
};

export default Carousel;
