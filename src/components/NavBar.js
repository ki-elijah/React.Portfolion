import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-gray-900 mx-auto p-5">
      <div>
        <nav className="flex items-center text-gray-400 bg-gray-900 flex-wrap mr-20 ml-20pr-10 pl-10">
          <div class="top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto justify-start">
            <a href="/" class="p-2 mr-4 inline-flex items-center">
              <span class="text-6xl text-white font-bold tracking-wide">
                Elijah K
              </span>
            </a>
          </div>

          <div class="top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto justify-center">
            {/*
            <NavLink to="/blog">
              <div class="top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto justify-start">
                <a href="/blog" class="p-2 mr-4 inline-flex items-center">
                  <span class="text-white tracking-wide">Blog</span>
                </a>
              </div>
            </NavLink>
            */}
            <NavLink to="/project">
              <div class="top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto justify-start">
                <a href="/project" class="p-2 mr-4 inline-flex items-center">
                  <span class="text-white tracking-wide">Portfolio</span>
                </a>
              </div>
            </NavLink>
            <NavLink to="/about">
              <div class="top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto justify-start">
                <a href="/about" class="p-2 mr-4 inline-flex items-center">
                  <span class="text-white tracking-wide">About Me!</span>
                </a>
              </div>
            </NavLink>
            {/*<NavLink to="/cv">
              <a href="/cv" class="p-2 mr-4 inline-flex items-center">
                <span class="tracking-wide">My CV</span>
              </a>
  </NavLink>*/}
            <NavLink to="/contact">
              <div class="top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto justify-start">
                <a href="/contact" class="p-2 mr-4 inline-flex items-center">
                  <span class="text-white tracking-wide">Contact Me</span>
                </a>
              </div>
            </NavLink>
          </div>
          <br></br>
          <hr></hr>
          <div class="top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto justify-end">
            <SocialIcon
              url="https://twitter.com/ki_elijah"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://github.com/ki-elijah"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://www.linkedin.com/in/elijahknsub"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="http://linktree-web.s3-website.us-east-2.amazonaws.com"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
          </div>
        </nav>
      </div>
    </header>
  );
}
