import { SubMenu } from '@/components/home/submenu';
import { HomeProps } from '@/types/home';
import { getDataHome } from '@/utils/actions/getData';

export default async function Home() {
  const { object }: HomeProps = await getDataHome();

  return (
    <main>
      <div>
        <SubMenu />
      </div>
    </main>
  );
}
