// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="p-8 max-w-6xl mx-auto">
      <div className="flex justify-between">
      <h1 className="text-4xl font-bold text-green-800 mb-6">
        Welcome to NIFTEM Food Packaging Portal
      </h1>
      <div className="lg:flex  xl:flex gap-4">
        <div className="">
        {/* <Link
            href={"login"}

            className="w-full mx-2 bg-green-700 px-6 text-white py-2 rounded hover:bg-green-800"
          >
            Login
          </Link> */}
          <Link
            href={"hub"}

            className="w-full bg-green-700 px-6 text-white py-2 rounded hover:bg-green-800"
          >
            Explore
          </Link>
          </div>
          </div>
      </div>
      <p className="text-lg text-gray-700 mb-8">
        Explore packaging materials, cutting-edge research, and expert insights from
        India&apos;s leading institute in food technology.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Image
          src="/images/img1.jpeg"
          alt="NIFTEM Campus View 1"
          width={600}
          height={400}
          className="rounded-lg shadow-md"
        />
        <Image
          src="/images/img2.webp"
          alt="NIFTEM Campus View 2"
          width={600}
          height={400}
          className="rounded-lg shadow-md"
        />
      </div>
    </section>
  );
}
