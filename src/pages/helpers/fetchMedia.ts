import {fetchData} from '../api/fetchData';

const fetchMedia = async (url:string) => {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to fetch data: ${response.statusText}`);
        
        const data = await response.json();
        //console.log("URL usada, fetchMedia", `${url}${page}`)
    
        return {img:data};

      } catch (error) {
        console.error("Error fetching books:", error);
        return { status: 500, body: JSON.stringify({ error: "Failed to fetch data" }) };
      }
}

export const getMedia = async (url:string, id:number) => {
    const queryUrl = `${url}/api/upload/files/${id}`
    const res = await fetchMedia(queryUrl);
    //console.log("URL enviada", queryUrl)
    console.log("Imagen en respuesta",res)

    return res
}