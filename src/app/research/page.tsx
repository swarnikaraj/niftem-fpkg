// app/research/page.tsx
import SidebarLayout from "../components/SidebarLayout";

export default function ResearchPage() {
  return (
    <SidebarLayout>
      <h1 className="text-3xl font-bold text-green-800 mb-4">Research Papers</h1>
      <p className="text-gray-700 mb-6">
        Dive into key research findings in the field of food packaging conducted by
        NIFTEM and other institutions.
      </p>
      <ul className="space-y-2 text-gray-500">
        <li className="p-4 bg-white shadow rounded">
          &quot;Active Packaging Techniques for Extended Shelf Life&quot; – Dr. A. Kumar (2022)
        </li>
        <li className="p-4 bg-white shadow rounded">
          &quot;Sustainable Packaging Alternatives&quot; – Prof. B. Sharma (2023)
        </li>
        <li className="p-4 bg-white shadow rounded">
          &quot;Nanomaterials in Food Packaging&quot; – M.Tech Thesis (2021)
        </li>
      </ul>
    </SidebarLayout>
  );
}

// import { client } from "../lib/sanity";
// import { type SanityDocument } from "next-sanity";
// import SidebarLayout from "../components/SidebarLayout";
// import Link from "next/link";

// const RESEARCH_QUERY = `*[_type == "researchPaper"] | order(publishedAt desc) {
//   _id,
//   title,
//   authors,
//   abstract,
//   publishedAt,
//   "pdfUrl": pdf.asset->url,
//   tags
// }`;

// export default async function ResearchPage() {
//   const papers = await client.fetch<SanityDocument[]>(RESEARCH_QUERY, {}, { next: { revalidate: 30 } });

//   return (
//     <SidebarLayout>
//       <div className="p-8 max-w-4xl mx-auto">
//         <h1 className="text-3xl font-bold text-green-800 mb-6">Research Papers</h1>
//         <ul className="space-y-6">
//           {papers.map((paper) => (
//             <li key={paper._id} className="bg-green-50 rounded-lg p-6 shadow hover:shadow-md transition">
//               <h2 className="text-xl font-semibold text-green-800 mb-1">{paper.title}</h2>
//               <p className="text-sm text-gray-600 mb-2">
//                 By {paper.authors} • {new Date(paper.publishedAt).toLocaleDateString()}
//               </p>
//               <p className="text-sm text-gray-700 mb-3 line-clamp-3">{paper.abstract}</p>
//               {paper.pdfUrl && (
//                 <a
//                   href={paper.pdfUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block text-green-700 font-medium hover:underline"
//                 >
//                   📄 Download PDF
//                 </a>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </SidebarLayout>
//   );
// }

