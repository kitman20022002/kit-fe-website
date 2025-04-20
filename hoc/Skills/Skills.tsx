import './Skills.module.css';
// eslint-disable-next-line import/extensions
import CanvasImage from '../../components/CanvasImage/CanvasImage';

type SkillsProps = {
  title: string;
  classes: string;
  children: any;
};

export const Skills = ({ title, classes, children }: SkillsProps) => (
  <div className={classes}>
    <h2>
      <span className="theme--color">{' > '}</span>
      {title}
    </h2>
    {/*<CanvasImage />*/}
    <div>{children}</div>
  </div>
);

export default Skills;
