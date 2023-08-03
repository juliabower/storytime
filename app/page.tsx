"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import DropDown, { VibeType } from "../components/DropDown";
import Footer from "../components/Footer";
import Github from "../components/GitHub";
import Header from "../components/Header";
import { useCompletion } from "ai/react";

export default function Page() {
  const [name, setName] = useState("");
  const [animal, setAnimal] = useState("");
  const [setting, setSetting] = useState("");
  const { completion, complete } = useCompletion({
    api: "/api/completion",
  });

  const prompt = `Create a captivating and creative bedtime story suitable for children. It should include a main character called ${name}, their best friend and pet who is a ${animal}, and should take place in ${setting}. Let your imagination soar and start the adventures of ${name} and ${animal} in this magnificent ${setting}. The story should be no longer than 750 characters`;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    complete(prompt);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-bold mb-1 text-gray-700">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="animal"
            className="block font-bold mb-1 text-gray-700"
          >
            Animal:
          </label>
          <input
            type="text"
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="setting"
            className="block font-bold mb-1 text-gray-700"
          >
            Setting:
          </label>
          <input
            type="text"
            id="setting"
            value={setting}
            onChange={(e) => setSetting(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="block w-full py-2 px-4 font-semibold text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 focus:ring focus:ring-blue-200 focus:outline-none"
        >
          Generate Story
        </button>
      </form>
      <div>{completion}</div>
    </div>
  );
}
