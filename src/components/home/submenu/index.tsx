'use client';
import Link from 'next/link';
import styles from './styles.module.scss';
import { X, Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { MenuProps } from '@/types/menu';

interface SubmenuProps {
  menu: MenuProps;
}

export function SubMenu({ menu }: SubmenuProps) {
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

      <ul className={`${styles.ul} ${isOpen ? styles.submenuOpen : ''}`}>
        {isOpen && (
          <button onClick={toggleMenu} className={styles.closeButton}>
            <X size={54} color="#121212" />
          </button>
        )}

        {menu.objects.map((item) => (
          <li key={item.slug}>
            <Link href={`/post/${item.slug}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
