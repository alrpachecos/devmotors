export async function getDataHome() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/663c12689d4852270e6b7201?read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata`)
        if(!response.ok) throw new Error('Failed to fetch data');

        return response.json();
    } catch (error) {
        throw new Error('Failed to fetch data')
    }
}