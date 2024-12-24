
import {fetchData} from './fetchData'
import {blogPostsStore} from '@/store/posts'

import type { BlogPost } from '@/interfaces/BlogPost';

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

export async function getBlogPosts() {
    // Get blog posts
    const posts:any = await fetchData(fields, "posts");
    // Set data into blog store
    blogPostsStore.set(posts.body);

    return {
      body: posts.body as BlogPost[],
    };
}

export async function getPostByID(id:string) {
    const post:any = await fetchData(fields, `posts/${id}`);

    return {
      body: post.body as BlogPost 
    };   
}

export async function initializePostsStore() {
  let  posts = blogPostsStore.get();
  if (!posts || posts.length === 0) {
    const { body } = await getBlogPosts() as any
    //console.log("Posts a guardar en el store", body)
    blogPostsStore.set(body);
    posts = blogPostsStore.get()
  }
  return posts;
}