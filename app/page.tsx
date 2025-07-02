'use client';

import Image from 'next/image';
import React from 'react';

export default function Home() {
  const benefits = [
    {
      title: "Boosts Immunity",
      description:
        "Daisy flowers contain antioxidants that help strengthen the immune system and protect against illnesses.",
      image: "/images/benefit1.jpg",
    },
    {
      title: "Anti-inflammatory Properties",
      description:
        "Extracts from daisies can reduce inflammation and soothe irritated skin or tissues.",
      image: "/images/benefit2.jpg",
    },
    {
      title: "Rich in Vitamins",
      description:
        "Daisies are a source of vitamins A and C, which promote healthy skin and overall wellness.",
      image: "/images/benefit3.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#fffdf5] text-gray-900">
      {/* Navbar */}
      <nav className="bg-yellow-400 text-green-800 p-4 flex items-center justify-between shadow-md">
        <div className="text-2xl font-bold">Daisy Benefits</div>
        <div className="space-x-4">
          <button className="px-3 py-1 rounded bg-white text-yellow-500 font-semibold hover:bg-yellow-100">
            English
          </button>
          <button className="px-3 py-1 rounded bg-transparent border border-white hover:bg-white hover:text-yellow-500 font-semibold">
            ไทย
          </button>
        </div>
      </nav>

      {/* Dropdown UI */}
      <div className="p-4 flex justify-center bg-[#f9f9f9]">
        <details className="dropdown">
          <summary className="btn m-1 bg-yellow-300 text-green-700 rounded px-4 py-2 cursor-pointer hover:bg-yellow-400">
            open or close
          </summary>
          <ul className="menu dropdown-content bg-white rounded-box z-10 w-52 p-2 shadow-md border border-yellow-300">
            <li><a className="hover:text-yellow-600 cursor-pointer">Item 1</a></li>
            <li><a className="hover:text-yellow-600 cursor-pointer">Item 2</a></li>
          </ul>
        </details>
      </div>

      {/* Main Content */}
      <main className="flex flex-1 p-8 gap-8 justify-center items-start bg-[#fffdf5]">
        {benefits.map(({ title, description, image }, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 max-w-xs text-center"
          >
            <div className="relative w-40 h-40 mb-4 rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                style={{ objectFit: 'cover' }}
                priority={idx === 0}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-yellow-600">{title}</h3>
            <p className="text-gray-700">{description}</p>
          </div>
        ))}
      </main>

      {/* Daisy History Section */}
      <section className="bg-white p-8 max-w-4xl mx-auto rounded-lg shadow-md my-8">
        <h2 className="text-2xl font-bold mb-4 text-yellow-600">History of the Daisy Flower</h2>
        <p className="text-gray-800 leading-relaxed">
          The daisy flower, belonging to the family Asteraceae, has been cherished for centuries for its simple beauty and symbolic meanings. Originating in Europe and temperate regions of Asia, daisies have been associated with purity, innocence, and new beginnings in various cultures.  
          In ancient times, the daisy was linked to the goddess Freya in Norse mythology, symbolizing love, fertility, and beauty. Over the centuries, the daisy has also been used in herbal medicine for its anti-inflammatory and healing properties. Today, daisies are popular in gardens and floral arrangements worldwide, celebrated for their cheerful appearance and natural charm.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-yellow-400 text-green-800 text-center p-4">
        &copy; 2025 Daisy Benefits. All rights reserved.
      </footer>
    </div>
  );
}
