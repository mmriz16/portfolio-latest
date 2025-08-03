import Hero from '@/app/pages/home/hero';
import Available from '@/app/components/available';
import Project from '@/app/pages/project';
import Articles from '@/app/pages/articles';
import Update from '@/app/pages/home/update';
import Work from '@/app/pages/home/work';
import Footer from '@/app/components/footer';

import Container from './components/container';

export default function Home() {
  return (
    <div>
      <Available />
      <Hero />
      <Project />
      <Container>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6 w-full h-full">
            <Articles />
          </div>
          <div className="col-span-6 gap-4 w-full flex flex-col pr-6">
            <Update />
            <Work />
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
