import Link from 'next/link';
import style from './TextContainer.module.css';
import { homeColorTheme } from '../../config/apis';

export const TextContainer = (props: any) => {
  const { item } = props;
  const color: any = item.themeColor ? item.themeColor : '';
  const lightColor = homeColorTheme[color]?.lightColor;
  const borderColor = homeColorTheme[color]?.borderColor;
  const priColor = homeColorTheme[color]?.priColor;
  return (
    <div className={style.textContainer}>
      <ul className={style.list}>
        {item.item.map((i: any) => (
          <Link href={`/${item.slug}#`} passHref key={item.slug}>
            <li
              key={i.language}
              className={[style.list__item, lightColor].join(' ')}
            >
              {i.icon}
              <p>{i.language}</p>
            </li>
          </Link>
        ))}
      </ul>
      <Link href={`/${item.slug}`} passHref>
        <button
          type="button"
          className={['button', borderColor, priColor].join(' ')}
        >
          View more
        </button>
      </Link>
    </div>
  );
};

export default TextContainer;
