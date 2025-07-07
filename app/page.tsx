"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
}

const Home = () => {
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

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#fffdf5] text-gray-900">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-green-900 p-5 flex items-center justify-between shadow-lg sticky top-0 z-20">
        <div className="flex items-center space-x-3">
          <span className="text-3xl">🌼</span>
          <div className="text-3xl font-extrabold tracking-wide select-none">
            Daisy Benefits
          </div>
        </div>
        <div className="space-x-4 flex items-center">
          <button className="px-4 py-2 rounded-full bg-white text-yellow-600 font-semibold shadow-md hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition">
            English
          </button>
          <button className="px-4 py-2 rounded-full border-2 border-white bg-transparent text-white font-semibold hover:bg-white hover:text-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition">
            ไทย
          </button>
        </div>
      </nav>

      {/* Users list */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      {/* Dropdown UI */}
      <div className="p-4 flex justify-center bg-[#f9f9f9]">
        <details className="dropdown">
          <summary className="btn m-1 bg-yellow-300 text-green-700 rounded px-4 py-2 cursor-pointer hover:bg-yellow-400">
            open or close
          </summary>
          <ul className="menu dropdown-content bg-white rounded-box z-10 w-52 p-2 shadow-md border border-yellow-300">
            <li>
              <a className="hover:text-yellow-600 cursor-pointer">Item 1</a>
            </li>
            <li>
              <a className="hover:text-yellow-600 cursor-pointer">Item 2</a>
            </li>
          </ul>
        </details>
      </div>

      {/* Main Content */}
      <main className="flex flex-1 p-8 gap-8 justify-center items-start bg-[#fffdf5] flex-wrap">
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
                style={{ objectFit: "cover" }}
                priority={idx === 0}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-yellow-600">
              {title}
            </h3>
            <p className="text-gray-700">{description}</p>
          </div>
        ))}
      </main>

      {/* Hero Section for Daisy History */}
      <section className="hero bg-base-200 min-h-[60vh] flex items-center justify-center px-6 py-12">
        <div className="hero-content flex-col lg:flex-row max-w-6xl bg-white rounded-lg shadow-lg p-8">
          <div className="lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              alt="Daisy flower"
              className="max-w-sm rounded-lg shadow-2xl object-cover"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-12 text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-6 text-yellow-600 select-none">
              History of the Daisy Flower
            </h1>
            <p className="py-4 text-gray-800 leading-relaxed mb-6">
              The daisy flower, belonging to the family Asteraceae, has been
              cherished for centuries for its simple beauty and symbolic
              meanings. Originating in Europe and temperate regions of Asia,
              daisies have been associated with purity, innocence, and new
              beginnings in various cultures. In ancient times, the daisy was
              linked to the goddess Freya in Norse mythology, symbolizing love,
              fertility, and beauty. Over the centuries, the daisy has also been
              used in herbal medicine for its anti-inflammatory and healing
              properties. Today, daisies are popular in gardens and floral
              arrangements worldwide, celebrated for their cheerful appearance
              and natural charm.
            </p>
            <button className="btn bg-yellow-400 text-green-900 hover:bg-yellow-500 hover:text-green-950 font-semibold px-6 py-3 rounded-lg shadow-md transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-yellow-400 text-green-800 text-center p-4 select-none">
        &copy; 2025 Daisy Benefits. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
