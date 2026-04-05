import Hero          from '../components/home/Hero';
import WhyChoose     from '../components/home/WhyChoose';
import Services      from '../components/home/Services';
import HomeFaqs      from '../components/home/HomeFaqs';
import About         from '../components/home/About';
import Accreditation from '../components/home/Accreditation';
import CtaBanner     from '../components/ui/CtaBanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <Services />
      <HomeFaqs />
      <About />
      <Accreditation />
      <CtaBanner title="Don't Compromise on Safety – Book Your Certificate Today!" />
    </>
  );
}
