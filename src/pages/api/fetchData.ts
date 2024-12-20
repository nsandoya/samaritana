import qs from "qs";
const baseUrl = import.meta.env.STRAPI_URL;

export async function fetchData(fields:Object, page:string) {
  const query = qs.stringify(
      fields,
    { encode: false }
  );

  try {
    const response = await fetch(`${baseUrl}/api/${page}?${query}`);
    if (!response.ok) throw new Error(`Failed to fetch data: ${response.statusText}`);
    
    const data = await response.json();

    return {
      body: data.data,
    };
  } catch (error) {
    console.error("Error fetching books:", error);
    return { status: 500, body: JSON.stringify({ error: "Failed to fetch data" }) };
  }
}
