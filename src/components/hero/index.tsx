import { ReactNode } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';

interface HeroProps {
  heading: string;
  buttonUrl: string;
  buttonTitle: string;
  bannerUrl: string;
  icon: ReactNode;
}

export function Hero({
  bannerUrl,
  buttonTitle,
  heading,
  buttonUrl,
  icon,
}: HeroProps) {
  return (
    <main className={styles.main}>
      <div className={styles.containerHero}>
        <h1 className={styles.title}>{heading}</h1>

        <a href={buttonUrl} target="_blank" className={styles.link}>
          {icon}
          {buttonTitle}
        </a>
      </div>

      <div className={styles.contentBanner}>
        <Image
          src={bannerUrl}
          alt={heading}
          priority
          quality={100}
          fill
          className={styles.banner}
        />
      </div>
    </main>
  );
}
