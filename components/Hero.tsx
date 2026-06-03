import Image from 'next/image';
import heroData from '@/data/hero.json';
import heroBg from '../images/hero-bg.svg';

export default function Hero() {
  const { name, title, ctaLabel, ctaHref } = heroData;

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <Image src={heroBg} alt="" fill priority style={{ objectFit: 'cover', objectPosition: 'top center' }} />
      </div>
      <div className="hero-overlay" />

      <div className="container hero-container">
        <div className="hero-content">
          <h1>{name}</h1>
          <p className="subtitle">{title}</p>
          <a href={ctaHref} className="cta-button">{ctaLabel}</a>
        </div>
      </div>
    </section>
  );
}
