// app/materials/page.tsx
import SidebarLayout from "../components/SidebarLayout";

export default function MaterialsPage() {
  return (
    <SidebarLayout>
      <h1 className="text-3xl font-bold text-green-800 mb-4">Materials Library</h1>
      <p className="text-gray-700 mb-6">
        Explore various food packaging materials including plastic, metal, glass,
        paper-based, and bio-degradable options.
      </p>
      <ul className="space-y-2 text-gray-500">
        <li className="p-4 bg-white shadow rounded">Plastic Packaging – PET, HDPE, LDPE</li>
        <li className="p-4 bg-white shadow rounded">Glass Containers – Jars, Bottles</li>
        <li className="p-4 bg-white shadow rounded">Metal Cans – Aluminum, Tin</li>
        <li className="p-4 bg-white shadow rounded">Paper-based Packaging – Cartons, Wraps</li>
        <li className="p-4 bg-white shadow rounded">Biodegradable Films – PLA, Starch Blends</li>
      </ul>
    </SidebarLayout>
  );
}
