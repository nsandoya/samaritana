import type { CloudinaryResource, Resource } from '@/interfaces/CloudinaryResource';
import {fetchData} from '../api/fetchData';
//const cloudinary = require('cloudinary').v2;
import { v2 as cloudinary } from 'cloudinary';



const fetchMedia = async (url:string) => {
    try {
        //console.log("Img a pedir", url)
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
// Cloudinary config
cloudinary.config({
  cloud_name: import.meta.env.CLOUDINARY_NAME,
  api_key: import.meta.env.CLOUDINARY_KEY,
  api_secret: import.meta.env.CLOUDINARY_SECRET,
})

// Busca por nombre de archivo
async function searchImageByName(filename:any) {
  try {
    const response = await cloudinary.search
      .expression(`filename:${filename}`)
      .execute();
      
    return response.resources //as Resource[];
  } catch (error) {
    console.error('Error buscando la imagen:', error);
  }
}

// Valida si el link original es correcto/si existe
async function isValidCloudinaryURL(url:string) {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok; // Devuelve true si el código de estado es 200-299
  } catch (error) {
    console.error('Error validando la URL:', error);
    return false;
  }
}

export const getMedia = async (imgUrl:string, imgName:string) => {
    const url = "https://res.cloudinary.com/samaritana/image";
    const newImgUrl = imgUrl.replace("/uploads/", "/upload/")
    let queryUrl = `${url}${newImgUrl}`

    try{
      const isValid = await isValidCloudinaryURL(queryUrl);
      // Si el link no es válido, se busca el link correcto:
      if(!isValid){
        const resources = await searchImageByName(imgName)
        queryUrl = resources[0].url
      }
      //console.log("Link de imagen",queryUrl)
      // Finalmente, se retorna el link a usar
      return queryUrl

    }catch(error){
      console.error('Invaid input: wrong image data', error);
    }

}