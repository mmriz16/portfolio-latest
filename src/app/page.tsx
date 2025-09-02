import Hero from '@/app/pages/home/hero';
import Photos from '@/app/pages/home/photos';
import Project from '@/app/pages/home/project';
import Articles from '@/app/pages/home/articles';
import Update from '@/app/pages/home/update';
import Work from '@/app/pages/home/work';
import Footer from '@/app/components/footer';
import Navbar from '@/app/components/navbar';

import Container from './components/container';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Photos />
      <Project />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="col-span-1 md:col-span-6 w-full h-full">
            <Articles />
          </div>
          <div className="col-span-1 md:col-span-6 gap-4 w-full flex flex-col md:pr-6 pr-0">
            <Update />
            <Work />
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
