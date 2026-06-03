import { getProjects } from '@/lib/projects';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default async function Home() {
  const { personal, school } = await getProjects();
  return (
    <main>
      <Hero />
      <Projects personal={personal} school={school} limit={6} />
      <About />
      <Contact />
    </main>
  );
}
