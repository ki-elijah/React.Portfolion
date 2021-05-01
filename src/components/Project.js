import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
          title,
          date,
          place,
          description,
          projectType,
          link,
          tags
      }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main>
      <hr></hr>
      <div class="relative flex items-top justify-center min-h-screen bg-gray-900 dark:bg-gray-900 sm:items-center sm:pt-0">
        <div class="container mx-auto">
          <h1 className="text-5xl text-gray-400 flex justify-center cursive">
            My Projects
          </h1>
          <div class="grid grid-cols-1 mr-5 ml-5 mt-5 mb-5 md:grid-cols-2">
            {projectData &&
              projectData.map((project, index) => (
                <article className="relative rounded-lg shadow-xl bg-white p-16">
                  <h3 className="text-gray-800 m-auto p-sm-5 text-3xl font-bold mb-2 hover:text-red-700">
                    <a
                      href={project.link}
                      alt={project.title}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <div className="text-gray-500 text-xs space-x-4">
                    <span>
                      <strong className="font-bold">Finished on</strong>:{" "}
                      {new Date(project.date).toLocaleDateString()}
                    </span>
                    <span>
                      <strong className="font-bold">Location</strong>:{" "}
                      {project.place}
                    </span>
                    <span>
                      <strong className="font-bold">Type</strong>:{" "}
                      {project.projectType}
                    </span>
                    <p className="my-6 text-lg text-gray-700 leading-relaxed">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl"
                    >
                      View The Project{" "}
                      <span role="img" aria-label="right pointer">
                        👉
                      </span>
                    </a>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
