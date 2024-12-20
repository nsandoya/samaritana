import type { BookData } from '@/interfaces/BookData';
import {fetchData} from './fetchData'

export async function getBooks() {
    const fields = {
        populate: {
          image: {
            fields: ["name", "width", "height", "url"],
          },
          reviews: {
            populate: {
              fields: ["author", "wrote_at", "content", "visibility"],
            },
          },
        },
      }
    const books:any = await fetchData(fields, "books");
  
    return {
      body: books.body as BookData[],
    };
  }
  