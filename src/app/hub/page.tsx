// app/hub/page.tsx
"use client";

import SidebarLayout from "../components/SidebarLayout";
import { motion } from "framer-motion";
import { BookOpen, Video, Zap } from "lucide-react";

export default function HubPage() {
  return (
    <SidebarLayout>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-8 rounded shadow mb-6"
      >
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          Welcome to the Food Packaging Knowledge Hub
        </h1>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-700 mb-4"
        >
          Food packaging is not just about containment—it&apos;s about preservation,
          safety, sustainability, and communication.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="text-md text-gray-600"
        >
          From biodegradable wraps to intelligent sensors, NIFTEM explores
          cutting-edge solutions that extend shelf life, reduce waste, and ensure
          consumer protection. Dive into our resources, research, and labs to
          understand how science meets design in food packaging.
        </motion.p>
      </motion.section>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
      >
        {[
          {
            title: "Packaging Materials",
            desc: "Explore polymers, papers, metals and biodegradable options.",
            icon: <BookOpen className="text-green-600 w-8 h-8 mb-3" />,
          },
          {
            title: "Lab Videos",
            desc: "Watch live demonstrations and lab experiments in action.",
            icon: <Video className="text-green-600 w-8 h-8 mb-3" />,
          },
          {
            title: "Smart Packaging",
            desc: "Learn how sensors and indicators enhance food safety.",
            icon: <Zap className="text-green-600 w-8 h-8 mb-3" />,
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="p-6 bg-green-50 rounded shadow hover:shadow-lg transition text-center"
          >
            {card.icon}
            <h2 className="text-xl font-bold text-green-800 mb-2">
              {card.title}
            </h2>
            <p className="text-gray-700 text-sm">{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white p-6 rounded shadow"
      >
        <h2 className="text-2xl font-semibold text-green-800 mb-4">
          Latest from Blog
        </h2>
        <div className="space-y-4">
          <div className="border-l-4 border-green-600 pl-4">
            <p className="text-green-700 font-medium">Bioplastics and Their Role in Packaging</p>
            <p className="text-sm text-gray-600">
              Bioplastics made from renewable sources are reshaping eco-packaging design. Learn how they&apos;re used in flexible wraps and rigid containers.
            </p>
          </div>
          <div className="border-l-4 border-green-600 pl-4">
            <p className="text-green-700 font-medium">Heat Sealing Techniques for Pack Safety</p>
            <p className="text-sm text-gray-600">
              Different heat sealing processes play a key role in maintaining product freshness and tamper-proofing.
            </p>
          </div>
        </div>
      </motion.section>
    </SidebarLayout>
  );
}
