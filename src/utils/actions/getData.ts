import { redirect } from 'next/navigation';

export async function getDataHome() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/663c12689d4852270e6b7201?read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata`,
    );
    if (!response.ok) throw new Error('Failed to fetch data');

    return response.json();
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
}

export async function getSubMenu() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,`,
    );
    if (!response.ok) throw new Error('Failed to fetch menu data');

    return response.json();
  } catch (error) {
    throw new Error('Failed to fetch menu data');
  }
}

export async function getItemBySlug(itemSlug: string) {
  const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/objects`;

  const queryParams = new URLSearchParams({
    query: JSON.stringify({
      slug: itemSlug,
    }),
    props: 'slug,title,metadata',
    read_key: process.env.READ_KEY as string,
  });

  const url = `${baseUrl}?${queryParams.toString()}`;

  try {
    const response = await fetch(url, { next: { revalidate: 120 } });

    if (!response.ok) throw new Error('Failed get item by slug');

    return response.json();
  } catch (error) {
    console.log(error);
    redirect('/');
  }
}
