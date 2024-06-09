import { Container } from '@/components/container';
import { Hero } from '@/components/hero';
import { About } from '@/components/home/components/about';
import { Footer } from '@/components/home/components/footer';
import { SubMenu } from '@/components/home/submenu';
import { HomeProps } from '@/types/home';
import { MenuProps } from '@/types/menu';
import { getDataHome, getSubMenu } from '@/utils/actions/getData';
import { Phone } from 'lucide-react';

export default async function Home() {
  const { object }: HomeProps = await getDataHome();
  const menu: MenuProps = await getSubMenu();

  return (
    <main>
      <div>
        {menu.objects.length > 0 && <SubMenu menu={menu} />}

        <Hero
          heading={object.metadata.heading}
          buttonTitle={object.metadata.cta_button.title}
          buttonUrl={object.metadata.cta_button.url}
          bannerUrl={object.metadata.banner.url}
          icon={<Phone size={24} color="#FFFFFF" />}
        />

        <Container>
          <About object={object} />
          <Footer object={object} />
        </Container>
      </div>
    </main>
  );
}
