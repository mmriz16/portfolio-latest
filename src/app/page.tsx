import Hero from '@/app/pages/home/hero';
import Available from '@/app/components/available';
import Project from '@/app/pages/project';

export default function Home() {
  return (
    <div>
      <Available />
      <Hero />
      <Project />
    </div>
  );
}
