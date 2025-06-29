// app/consult/page.tsx
import SidebarLayout from "../components/SidebarLayout";

export default function ConsultPage() {
  return (
    <SidebarLayout>
      <h1 className="text-3xl font-bold text-green-800 mb-4">Consult a Faculty</h1>
      <p className="text-gray-700 mb-6">
        Fill out the form below to ask questions or request guidance from NIFTEM’s
        food packaging experts.
      </p>
      <form className="space-y-6 bg-white p-6 rounded shadow-md max-w-2xl text-gray-500">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Affiliation</label>
          <input
            type="text"
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Student / Researcher / Industry Professional"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Your Query</label>
          <textarea
            rows={4}
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Describe your question or concern..."
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Attachment (optional)</label>
          <input title="upload" type="file" className="mt-2 block w-full text-sm text-gray-500" />
        </div>
        <button
          type="submit"
          className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800"
        >
          Submit Query
        </button>
      </form>
    </SidebarLayout>
  );
}
