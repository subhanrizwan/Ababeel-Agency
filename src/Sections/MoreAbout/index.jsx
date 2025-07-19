"use client"

import { useState } from "react"
// import Image from "next/image"
import { AccessTime, Person, ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"

const featuredArticles = [
  {
    category: "FEATURED / COMPANY NEWS",
    title: "From the Founders' Desk: Our Journey So Far",
    author: "Harkunwar Singh",
    date: "02 May 23",
    readTime: "8 mins",
    image: "../../../assets/images/MoreAbout/slider-img.jpg",
  },
  {
    category: "FEATURED / COMPANY NEWS",
    title: "The Data that Drives Us",
    author: "Novatar Team",
    date: "03 May 23",
    readTime: "6 mins",
    image: "../../../assets/images/MoreAbout/slider-img1.jpg",
  },
]

const editorsPicks = [
  {
    category: "Company News",
    title: "AEC is Broken. Novatar is Here to End Exploitation!",
    author: "Novatar Team",
    date: "01 May 24",
    readTime: "5 mins",
  },
  {
    category: "Architecture & Construction",
    title: "The Architect's Dilemma: Proficiency vs. Expertise - Novatar is Your Answer",
    author: "Rohan Bhattacharya",
    date: "02 Feb 24",
    readTime: "8 mins",
  },
]

const articles = [
  {
    category: "Architecture & Construction",
    title: "The BIM Revolution is Here: Will You Lead or Lag Behind?",
    author: "Shefayu",
    date: "10 Feb 24",
    readTime: "7 mins",
    backgroundImage: "../../../assets/images/MoreAbout/first.jpg",
  },
  {
    category: "Technology & Innovation",
    title: "The Digital Tsunami Has Hit AEC and There's Nowhere Left to Hide",
    author: "Kartiye",
    date: "12 Feb 24",
    readTime: "12 mins",
    backgroundImage: "../../../assets/images/MoreAbout/first.jpg",
  },
  {
    category: "Industry Trends",
    title: "BIM Metamorphosis - A Paradigm Shift in the AEC Industry",
    author: "Kartiye",
    date: "02 Feb 24",
    readTime: "8 mins",
    backgroundImage: "../../../assets/images/MoreAbout/first.jpg",
  },
]

export default function ResourcesSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredArticles.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredArticles.length) % featuredArticles.length)
  }

  const currentFeaturedArticle = featuredArticles[currentSlide]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-medium text-gray-600 mb-2">Resources</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Learn More About <span className="text-purple-600">Your Industry</span>
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Helpful insights on AEC niches, technology, industry trends, and careers that you won't find anywhere else!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Article Slider */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden relative">
              <div className="relative ">
                {" "}
                {/* Increased height for full image visibility */}
                <img
               
                  src={currentFeaturedArticle.image || "/placeholder.svg"}
                  alt={currentFeaturedArticle.title}
                  fill
                  className="object-cover object-center" // Ensure image covers and is centered
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-xs font-medium text-gray-700">
                    {currentFeaturedArticle.category}
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-3xl font-bold mb-2 leading-tight">{currentFeaturedArticle.title}</h3>
                  <div className="flex items-center text-sm text-gray-200 mb-4">
                    <Person className="w-4 h-4 mr-1" />
                    <span className="mr-4">{currentFeaturedArticle.author}</span>
                    <AccessTime className="w-4 h-4 mr-1" />
                    <span>
                      {currentFeaturedArticle.date} • {currentFeaturedArticle.readTime}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      {featuredArticles.map((_, index) => (
                        <span
                          key={index}
                          className={`block w-2 h-2 rounded-full cursor-pointer ${
                            index === currentSlide ? "bg-white" : "bg-gray-400"
                          }`}
                          onClick={() => setCurrentSlide(index)}
                        />
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={prevSlide}
                        className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                        aria-label="Previous slide"
                      >
                        <ArrowBackIos className="w-5 h-5 text-white" />
                      </button>
                      <button
                        onClick={nextSlide}
                        className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                        aria-label="Next slide"
                      >
                        <ArrowForwardIos className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Editor's Picks Sidebar */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Editor's Picks</h3>
            <div className="space-y-6">
              {editorsPicks.map((article, index) => (
                <div key={index} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
                  <p className="text-xs font-medium text-purple-600 mb-2">{article.category}</p>
                  <h4 className="font-semibold text-gray-900 mb-2 leading-tight">{article.title}</h4>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center">
                      <Person className="w-3 h-3 mr-1" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span>{article.date}</span>
                      <span>•</span>
                      <div className="flex items-center">
                        <AccessTime className="w-3 h-3 mr-1" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col"
            >
              {/* Background image using Tailwind arbitrary values for background-image */}
              <div
                className="relative h-48 w-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center"
                style={{
                  backgroundImage: `url(${article.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-gray-700">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-4 flex-grow flex flex-col justify-between">
                <h4 className="font-semibold text-gray-900 mb-3 leading-tight line-clamp-2 min-h-[2.5em]">
                  {" "}
                  {/* Added min-h to prevent collapse */}
                  {article.title}
                </h4>
                <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
                  <div className="flex items-center">
                    <Person className="w-3 h-3 mr-1" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>{article.date}</span>
                    <span>•</span>
                    <div className="flex items-center">
                      <AccessTime className="w-3 h-3 mr-1" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
