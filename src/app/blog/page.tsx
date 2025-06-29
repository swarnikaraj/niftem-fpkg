// // app/blog/page.tsx
// import SidebarLayout from "../components/SidebarLayout";
// import Link from "next/link";

// export default function BlogPage() {
//   return (
//     <SidebarLayout>
//       <h1 className="text-3xl font-bold text-green-800 mb-4">Blog</h1>
//       <p className="text-gray-700 mb-6">
//         Read insights, updates, and stories on food packaging innovations and
//         research from the NIFTEM community.
//       </p>
//       <div className="space-y-4">
//         <article className="bg-white p-4 rounded shadow">
//           <h2 className="text-xl font-semibold text-green-700">
//             <Link href="#">5 Innovations in Biodegradable Food Packaging</Link>
//           </h2>
//           <p className="text-sm text-gray-500 mb-2">by Dr. R. Verma • Jan 15, 2024</p>
//           <p className="text-gray-700">
//             Explore how recent materials like PLA, seaweed films, and starch blends are
//             reshaping sustainable packaging practices.
//           </p>
//         </article>

//         <article className="bg-white p-4 rounded shadow">
//           <h2 className="text-xl font-semibold text-green-700">
//             <Link href="#">Challenges in Cold Chain Packaging for Perishables</Link>
//           </h2>
//           <p className="text-sm text-gray-500 mb-2">by Prof. S. Iyer • Mar 3, 2024</p>
//           <p className="text-gray-700">
//             Learn about the materials and technologies being used to keep food fresh
//             from farm to fork in cold chain logistics.
//           </p>
//         </article>
//       </div>
//     </SidebarLayout>
//   );
// }


// app/blog/page.tsx
import {client } from "../lib/sanity"

// type BlogPost = {
//   _id: string;
//   title: string;
//   excerpt: string;
//   slug: { current: string };
//   author: string;
//   publishedAt: string;
// };

// export default async function BlogPage() {
//   const posts: BlogPost[] = await client.fetch(
//     `*[_type == "blog"] | order(publishedAt desc)[0...5] {
//       _id, title, excerpt, slug, author, publishedAt
//     }`
//   );

//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold text-green-800 mb-6">Food Packaging Blogs</h1>
//       {posts.map((post) => (
//         <div key={post._id} className="mb-6 border-l-4 pl-4 border-green-600">
//           <h2 className="text-xl font-semibold text-green-700">{post.title}</h2>
//           <p className="text-sm text-gray-500">
//             by {post.author} • {new Date(post.publishedAt).toDateString()}
//           </p>
//           <p className="text-gray-600">{post.excerpt}</p>
//         </div>
//       ))}
//     </div>
//   );
// }


import Link from "next/link";
import { type SanityDocument } from "next-sanity";



const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Posts</h1>
      <ul className="flex flex-col gap-y-4">
        {posts.map((post) => (
          <li className="hover:underline" key={post._id}>
            <Link href={`/blog/${post.slug.current}`}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}