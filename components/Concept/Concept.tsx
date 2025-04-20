import { FaCheck } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import style from './Concept.module.css';
import Link from 'next/link';

type ConceptProps = {
  title: string;
  status: string;
  slug: string;
};

export const Concept = ({ title, status, slug }: ConceptProps) => (
  <div className={style.card__concept}>
    <h4 className="text-left">{title}</h4>
    <p className="text-center">
      {status.toLowerCase() === 'completed' ||
      status.toLowerCase() === 'done' ? (
        <IconContext.Provider
          value={{
            color: 'green',
            className: 'global-class-name',
          }}
        >
          <FaCheck />
        </IconContext.Provider>
      ) : (
        status
      )}
    </p>
    <div className="text-right">
      <Link href={`${slug}`} passHref className="button--xs">
        See more
      </Link>
    </div>
  </div>
);

export default Concept;
