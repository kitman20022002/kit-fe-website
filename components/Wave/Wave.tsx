import styles from './Wave.module.scss';

export const Wave = (props: any) => {
  const { bgColor, title } = props;
  return (
    <div className={[styles.section__de, bgColor].join(' ')}>
      <h2>{title}</h2>
      <img
        className={styles.de__img}
        src="https://cssmaterial.com/apetech/demo/img/bg-wave-sym.png"
        alt="decration"
        width={1903}
        height={233}
      />
    </div>
  );
};

export default Wave;
