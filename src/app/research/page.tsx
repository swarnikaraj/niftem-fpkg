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
