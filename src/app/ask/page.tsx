// app/ask/page.tsx
import SidebarLayout from "../components/SidebarLayout";

export default function AskPage() {
  return (
    <SidebarLayout>
      <h1 className="text-3xl font-bold text-green-800 mb-4">Ask the Expert</h1>
      <p className="text-gray-700 mb-6">
        Submit your food packaging-related question. Our faculty or moderators will
        respond as soon as possible.
      </p>
      <form className="space-y-6 bg-white p-6 rounded shadow-md max-w-2xl text-gray-500">
        <div>
          <label className="block text-sm font-medium text-gray-700">Your Name</label>
          <input
            type="text"
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Your Email</label>
          <input
            type="email"
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Question Topic</label>
          <input
            type="text"
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="e.g. Sustainable packaging for dairy"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Your Question</label>
          <textarea
            rows={4}
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Type your question here..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800"
        >
          Submit Question
        </button>
      </form>
    </SidebarLayout>
  );
}
