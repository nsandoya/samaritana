
import {fetchData} from './fetchData'
import type { BlogPost } from '@/interfaces/BlogPost';

export async function getBlogPosts() {
    const fields = {
      populate: {
        featuredImage: {
          fields: ["name", "width", "height", "url"],
        },
        author: {
          populate: {
            bioImage: {
              fields: ["name", "width", "height", "url"],
            },
          },
        },
        category: {
          populate: true,
        },
      },
    }
    
    const posts:any = await fetchData(fields, "posts");
  
    return {
      body: posts.body as BlogPost[],
    };
  }
  