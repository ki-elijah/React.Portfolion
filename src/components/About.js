import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import plumeria from "../falco.jpg";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
          name,
          "bio": bio[0].children[0].text,
          "authorImage": image.asset->url
      }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>;

  return (
    <main>
      <div class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
        <img
          src={plumeria}
          alt="galaxy-11098"
          className="absolute object-cover w-full h-full w-8 :w-16 :w-32 mx-auto justify-center"
        />
        <div className="px-5 py-5 lg:pt-20 lg:pb-20 container mx-auto relative">
          <section className="bg-blue-800 rounded-lg shadow-2xl lg:flex p-5  bg-opacity-75 mx-auto">
            <img
              src={urlFor(author.authorImage).url()}
              className="rounded w-32 h-38 lg:w-64 lg:h-64 mr-8"
              alt="Elijah"
            />
            <div className="text-lg flex flex-col justify-items-center mx-auto">
              <h1 className="cursive text-6xl text-blue-100 ml-2 mb-8 mx-auto">
                Hey there. I'm{" "}
                <span className="text-red-300 mx-auto">{author.name}</span>
              </h1>
              <p className="text-blue-100 text-lg mx-auto">{author.bio}</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
