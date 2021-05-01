import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import image from "../galaxy.jpg";

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "project"]{title, date, place, description, projectType, link, tags}`).then((data) => setProjectData(data)).catch(console.error); }, []);
  return (
    <main>
      <div class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
        <img src={image} alt="galaxy" className="absolute object-fill w-full h-full" />
        <section className="container mx-auto">
          <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
          <h2 className="text-lg text-gray-600 flex justify-center mb-10">
            Welcome to my projects page!
          </h2>
          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
            {projectData &&
              projectData.map((project, index) => (
                <article className="relative rounded-lg shadow-xl bg-white p-4 border-2 border-dark-blue-900">
                  <h3 className="text-gray-800 text-xl font-bold mb-2 hover:text-red-700 mx-auto">
                    <a
                      href={project.link}
                      alt={project.title}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <div className="text-gray-500 text-xs space-x-4 mx-auto">
                    <ul>
                      <li>
                        <strong className="font-bold mx-auto">
                          Finished on
                        </strong>
                        : {new Date(project.date).toLocaleDateString()}
                      </li>
                      <li>
                        <strong className="font-bold mx-auto">Company</strong>:{" "}
                        {project.company}
                      </li>
                      <li>
                        <strong className="font-bold mx-auto">Type</strong>:{" "}
                        {project.projectType}
                      </li>
                    </ul>
                    <p className="m-1 text-xs text-gray-700 leading-normal">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      rel="noopener noreferrer mx-auto"
                      target="_blank"
                      className="text-blue-500 font-bold hover:underline hover:text-red-400 text-xs mx-auto"
                    >
                      View The Project{" "}
                      <span role="img" aria-label="right pointer">
                        👉
                      </span>
                    </a>
                  </div>
                </article>
              ))}
          </section>
        </section>
      </div>
    </main>
  );
}