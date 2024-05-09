import { Hero } from '@/components/hero';
import { SubMenu } from '@/components/home/submenu';
import { HomeProps } from '@/types/home';
import { getDataHome } from '@/utils/actions/getData';
import { Phone } from 'lucide-react';

export default async function Home() {
  const { object }: HomeProps = await getDataHome();

  return (
    <main>
      <div>
        <SubMenu />

        <Hero
          heading={object.metadata.heading}
          buttonTitle={object.metadata.cta_button.title}
          buttonUrl={object.metadata.cta_button.url}
          bannerUrl={object.metadata.banner.url}
          icon={<Phone size={24} color="#FFFFFF" />}
        />
      </div>
    </main>
  );
}
