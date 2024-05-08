'use client';
import Link from 'next/link';
import styles from './styles.module.scss';
import { X, Menu } from 'lucide-react';
import { useEffect, useState } from 'react';

export function SubMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className={styles.submenu}>
      <div className={styles.submenuIcon} onClick={toggleMenu}>
        <Menu size={34} color="#121212" />
        <p>Menu</p>
      </div>

      <ul
        className={`${styles.ul} ${isOpen ? styles.submenuOpen : ''}`}
      >
        <li>
          <Link href="/post/pagina-1">Pagina 1</Link>
        </li>
        <li>
          <Link href="/post/pagina-2">Pagina 2</Link>
        </li>
        <li>
          <Link href="/post/pagina-3">Pagina 3</Link>
        </li>
      </ul>
    </section>
  );
}
