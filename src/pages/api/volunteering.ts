import type { Volunteering } from '@/interfaces/Volunteering';
import {fetchData} from './general'

export async function getVolunteerings() {
    const fields = {
      populate: {
        image: {
          fields: ["name", "width", "height", "url"],
        }
      }
    }
    
    const volunteerings:any = await fetchData(fields, "volunteerings");
  
    return {
      body: volunteerings.body as Volunteering[],
    };
  }
  