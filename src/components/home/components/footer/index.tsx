import { HomeProps } from '@/types/home';
import styles from './styles.module.scss';
import { Mail, Map, Phone, Clock } from 'lucide-react';

export function Footer({ object }: HomeProps) {
  return (
    <footer className={styles.footer} id="contatos">
      <section className={styles.section}>
        <h2 className={styles.title}>Contatos</h2>

        <div className={styles.content}>
          <div className={styles.item}>
            <Mail size={28} color="#FFFFFF" />
            <div>
              <strong>Email</strong>
              <p>{object.metadata.contact.email}</p>
            </div>
          </div>

          <div className={styles.item}>
            <Phone size={28} color="#FFFFFF" />
            <div>
              <strong>Telefone</strong>
              <p>{object.metadata.contact.phone}</p>
            </div>
          </div>

          <div className={styles.item}>
            <Map size={28} color="#FFFFFF" />
            <div>
              <strong>Endereço</strong>
              <p>{object.metadata.contact.address}</p>
            </div>
          </div>

          <div className={styles.item}>
            <Clock size={28} color="#FFFFFF" />
            <div>
              <strong>Horário de funcionamento</strong>
              <p>{object.metadata.contact.time}</p>
            </div>
          </div>
        </div>
      </section>

      <a
        href={object.metadata.cta_button.url}
        target="_blank"
        className={styles.link}
      >
        <Phone size={24} color="#FFFFFF" />
        {object.metadata.cta_button.title}
      </a>

      <p className={styles.copyText}>
        Todos os direitos reservados {object.title} @
        {`${new Date().getFullYear()}`}
      </p>
    </footer>
  );
}
