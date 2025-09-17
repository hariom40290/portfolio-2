"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-[5rem] 2xl:min-h-[90vh]"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-white animate-gradient"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-20 animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full opacity-20 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-green-200 to-blue-200 rounded-full opacity-20 animate-float"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
                👋 Welcome to my portfolio
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                I&apos;m{" "}
                <span className="bg-gradient-to-r from-purple-600 text-5xl to-blue-600 bg-clip-text text-transparent">
                  Hariom Kushwah
                </span>
                <br />
                <span className="text-3xl sm:text-4xl lg:text-3xl text-gray-700">
                  UI/UX Designer
                </span>
              </h1>
              <p className="text-sm text-gray-600 mb-8 max-w-2xl">
                With 2 years of experience, I design clean, user-friendly, and
                engaging digital experiences. My focus is on creating intuitive
                interfaces that enhance usability and deliver impactful results
                for businesses and users alike.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
             <a href="#portfolio">
               <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white group"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
             </a>
              <a href="/resume (2).pdf" download>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-200 text-purple-700 hover:bg-purple-50"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </a>

            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12">
              {[
                { number: "10+", label: "Projects Completed" },
                // { number: "20+", label: "Happy Clients" },
                { number: "2+", label: "Years Experience" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-gray-900">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                {/* Main Profile Image */}
                <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4E35AQFBzwbCq7kUUw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1719457260265?e=1758643200&v=beta&t=0w99tGC6FY-U2u-iQbydKdu2cIk8h_DdSNXskqNn0R4"
                    alt="Hariom Kushwah - UI/UX Designer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-80 animate-pulse"></div>
                <div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full opacity-80 animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>

                {/* Floating Tools */}
                <div className="absolute top-8 -left-8 bg-white rounded-lg shadow-lg p-3 animate-float">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded"></div>
                </div>
                <div
                  className="absolute bottom-8 -right-8 bg-white rounded-lg shadow-lg p-3 animate-float"
                  style={{ animationDelay: "2s" }}
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
