import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

export default function Post() {
  const [postData, setPost] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        '*[_type == "post"]{ title, slug, mainImage{asset -> {_id, url}, alt} }'
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <main>
      <hr></hr>
      <div class="relative flex items-top justify-center min-h-screen bg-gray-900 dark:bg-gray-900 sm:items-center sm:pt-0">
        <section className="container mx-auto justify-center">
          <h1 className="text-5xl text-gray-400 flex justify-center cursive">
            Blog
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {postData &&
              postData.map((post, index) => (
                <article>
                  <Link
                    to={"/post/" + post.slug.current}
                    key={post.slug.current}
                  >
                    <span
                      className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-blue-400"
                      key={index}
                    >
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt}
                        className="w-full h-full rounded-r object-cover absolute"
                      />
                      <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                        <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">
                          {post.title}
                        </h3>
                      </span>
                    </span>
                  </Link>
                </article>
              ))}
          </div>
        </section>
      </div>
    </main>
  );
}
