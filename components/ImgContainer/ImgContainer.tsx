import Image from 'next/image';
import style from './ImgContainer.module.css';

export const ImgContainer = () => (
  <div className={style.ImgContainer}>
    <Image
      src="/marmoset-1631607598715.png"
      alt="test"
      width={312}
      height={450}
    />
  </div>
);

export default ImgContainer;
