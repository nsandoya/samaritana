import type { HomeSection } from '@/interfaces/HomeSection';
import {fetchData} from './fetchData'

export async function getHomeSections() {
    const fields = {
        populate: {
          image: {
            fields: ["name", "width", "height", "url"],
          },
          
        },
      }
    const homeSections:any = await fetchData(fields, "home-sections");

    return {
      body: homeSections.body as HomeSection[],
    };
  }
  