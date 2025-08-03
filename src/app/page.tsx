import Hero from '@/app/pages/home/hero';
import Available from '@/app/components/available';
import Project from '@/app/pages/project';
import Articles from '@/app/pages/articles';
import Update from '@/app/pages/home/update';
import Work from '@/app/pages/home/work';

import Container from './components/container';

export default function Home() {
  return (
    <div>
      <Available />
      <Hero />
      <Project />
      <Container>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-8 w-full">
            <Articles />
          </div>
          <div className="col-span-4 gap-4 w-full flex flex-col">
            <Update />
            <Work />
          </div>
        </div>
      </Container>
    </div>
  );
}
