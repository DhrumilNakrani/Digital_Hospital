import Slider from '../UI/Slider';
import classes from './StartingPageContent.module.css';
//import StartingImage from './StartingImage';

const StartingPageContent = () => {
  return (
    <section className={classes.starting}>
      <Slider></Slider>
    </section>
  );
};

export default StartingPageContent;
