import { HomeProps } from '@/types/home';
import styles from './styles.module.scss';
import Image from 'next/image';

export function About({ object }: HomeProps) {
  return (
    <>
      <section className={styles.containerAbout} id="servicos">
        <article className={styles.innerAbout}>
          <h1 className={styles.title}>Sobre</h1>
          <p>{object.metadata.about.description}</p>
        </article>

        <div className={styles.bannerAbout}>
          <Image
            className={styles.imageAbout}
            src={object.metadata.about.banner.url}
            alt="Imagem ilustrativa sobre a empresa"
            quality={100}
            fill
            sizes="(max-width: 480px) 100vw, (max-width: 1024) 75vw, 60vw"
          />
        </div>
      </section>

      <h2 className={styles.servicesTitle}>
        Conheça nossos serviços
      </h2>

      <section className={styles.services}>
        {object.metadata.services.map((item) => (
          <article className={styles.serviceItem}>
            <div className={styles.innerService}>
              <Image
                className={styles.imageService}
                src={item.image.url}
                alt="Imagem do serviço"
                quality={100}
                fill
                sizes="(max-width: 480px) 100vw, (max-width: 1024) 75vw, 60vw"
              />
            </div>
            <p>{item.description}</p>
          </article>
        ))}
      </section>
    </>
  );
}
