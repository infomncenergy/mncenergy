import Hero       from '../components/home/Hero';
import WhyChoose  from '../components/home/WhyChoose';
import Services   from '../components/home/Services';
import Packages   from '../components/home/Packages';
import HomeFaqs   from '../components/home/HomeFaqs';
import About      from '../components/home/About';
import CtaBanner  from '../components/ui/CtaBanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <Services />
      <Packages />
      <HomeFaqs />
      <About />
      <CtaBanner title="Don't Compromise on Safety – Book Your Certificate Today!" />
    </>
  );
}
