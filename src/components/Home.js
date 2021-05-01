import React from "react";
import image from "../galaxy.jpg";

export default function Home() {
  return (
    <main>
      <div class="row">
        <div class="grid grid-cols-1">
          <div class="relative flex items-top justify-center min-h-screen bg-gray-900 dark:bg-gray-900 sm:items-center sm:pt-0">
            <img
              src={image}
              alt="galaxy"
              className="absolute object-cover w-full h-full w-8 :w-16 :w-32 mx-auto justify-center"
            />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
              <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
                Hello, I'm Elijah.
              </h1>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
