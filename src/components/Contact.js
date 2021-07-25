import React from "react";
import emailjs from "emailjs-com";

export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_o9ph0q7', 'template_yb4imf9', e.target, 'user_UtegOerXwCwjUEkLDy2yW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }

  return (
    <main className="bg-gray-900 text-white min-h-screen p-12">
      <hr></hr>
      <div class="relative flex items-top justify-center min-h-screen bg-gray-900 dark:bg-gray-900 sm:items-center sm:pt-0">
        <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div class="mt-8 overflow-hidden">
            <div class="grid grid-cols-1 md:grid-cols-2">
              <div class="p-6 mr-2 bg-gray-400 dark:bg-gray-900 sm:rounded-lg">
                <h1 class="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                  Get in touch
                </h1>
                <p class="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                  Kindly fill in the form to get in touch with me
                </p>
                <br></br>
                <hr></hr>
                <br></br>
                <h6 class="text-sm-6 text-gray-800 dark:text-white font-extrabold tracking-tight">
                  “Do what you can, with what you have, where you are.” –
                  Theodore Roosevelt.
                </h6>
                <br></br>
                <hr></hr>
                <br></br>
                <div class="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    class="w-8 h-8 text-gray-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div class="ml-4 text-md tracking-wide font-semibold w-40">
                    kisaasi-Kulambiro, Kampala, Uganda.
                  </div>
                </div>
              </div>

              <form
                class="p-6 flex flex-col justify-items-center"
                onSubmit={sendEmail}
              >
                <div class="flex flex-col">
                  <label for="name" class="hidden">
                    Full Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  ></input>
                </div>
                <div class="flex flex-col mt-2">
                  <label for="email" class="hidden">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  ></input>
                </div>
                <div class="flex flex-col mt-2">
                  <label for="tel" class="hidden">
                    Number
                  </label>
                  <input
                    type="tel"
                    name="tel"
                    id="tel"
                    placeholder="Telephone Number"
                    class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  ></input>
                </div>
                <div class="flex flex-col mt-2">
                  <label for="tel" class="hidden">
                    Subject
                  </label>
                  <input
                    type="sub"
                    name="sub"
                    id="sub"
                    placeholder="Subject"
                    class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  ></input>
                </div>
                <div class="flex flex-col mt-2">
                  <label for="mess" class="hidden">
                    Message
                  </label>
                  <textarea
                    type="mes"
                    name="mes"
                    id="mes"
                    placeholder="Message"
                    class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  class="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
