// app/videos/page.tsx
import SidebarLayout from "../components/SidebarLayout";

export default function VideosPage() {
  return (
    <SidebarLayout>
      <h1 className="text-3xl font-bold text-green-800 mb-4">Lab Videos</h1>
      <p className="text-gray-700 mb-6">
        Watch food packaging lab demonstrations, experiments, and equipment usage.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <iframe
          className="w-full h-64 rounded-lg shadow"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Lab Demo 1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          className="w-full h-64 rounded-lg shadow"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Lab Demo 2"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </SidebarLayout>
  );
}
