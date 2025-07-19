export default function ScrollingBanner() {
  const items = [
    "Expert Mentors",
    "Industry Knowledge",
    "Tech-first skills",
    "Accelerated Learning",
    "Career Growth",
    "Global Network",
    "Practical Projects",
    "Industry Certification",
  ]

  return (
    <div className="w-full overflow-hidden py-4  border-gray-100 mt-5">
      <div className="flex animate-scroll whitespace-nowrap">
        {/* First set of items */}
        <div className="flex items-center space-x-8 px-8">
          {items.map((item, index) => (
            <div key={index} className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <svg className="w-10 h-10 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9l-5 4.87 1.18 6.88L12 17.77l-6.18 2.98L7 14.87 2 9l6.91-1.74L12 2z" />
                </svg>
                <span className="text-lg font-medium text-purple-600 whitespace-nowrap">{item}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Duplicate set for seamless loop */}
        <div className="flex items-center space-x-8 px-8">
          {items.map((item, index) => (
            <div key={`duplicate-${index}`} className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9l-5 4.87 1.18 6.88L12 17.77l-6.18 2.98L7 14.87 2 9l6.91-1.74L12 2z" />
                </svg>
                <span className="text-lg font-medium text-purple-600 whitespace-nowrap">{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
