import Container from '../../ui/Container';
import LinkBtn from '../../ui/LinkBtn';
// import img from '../../assets/images/sliderimg.png';
// import img from '../../assets/images/nobgHair.png';
import img from '../../assets/images/blackhair.png';
import HeroSection from './HeroStyles';

const Hero = () => {
  return (
    <HeroSection>
      <Container type='relative'>
        <div className=' circle circle-1'></div>
        <div className='circle circle-2'></div>
        <div className='grid'>
          <div className='image-box'>
            <img src={img} alt='product image' />
          </div>
          <div className='msg-box'>
            <h1>Luxury and affordable hair? you are at the right place</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              non est rerum quod odio deserunt magni assumenda, architecto
              libero beatae?
            </p>
            <LinkBtn btnText='shop now' url='/products' type='white' />
          </div>
        </div>
      </Container>
    </HeroSection>
  );
};

export default Hero;
