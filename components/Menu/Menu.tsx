import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import { useState } from 'react';
import style from './Menu.module.css';
import configuration from '../../config/apis';

const websiteName = '< KitSkills />';
const delay = ['delay-dot25s', 'delay-dot50s', 'delay-dot75s', 'delay-1s'];

export const Menu = (props: any) => {
  const { classes } = props;
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={[style.menu, classes].join(' ')}>
      <div className={style.container}>
        <Link href="/" passHref>
          <h1 className={style.header}>{websiteName}</h1>
        </Link>
        <FiMenu
          className={style.mobileMenu}
          onClick={() => setShowMenu(!showMenu)}
        />
        <div
          className={[
            style.links,
            showMenu ? style.mobileShow : style.mobileHide,
          ].join(' ')}
        >
          <Link href="/" passHref>
            <button
              type="button"
              className={[
                style.menuButton,
                style.fadeInDown,
                style.fadeInRight,
              ].join(' ')}
            >
              HOME
            </button>
          </Link>
          {configuration.categories.map((item: any, index) => (
            <Link href={`/${item.slug}`} passHref key={item.slug}>
              <button
                type="button"
                className={[
                  style.menuButton,
                  style.fadeInDown,
                  style.fadeInRight,
                  delay[index],
                ].join(' ')}
              >
                {item.slug.toUpperCase()}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
