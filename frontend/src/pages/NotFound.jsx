import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// Yoga Illustration for 404
const Yoga404Illustration = ({ className = "w-48 h-48" }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background Circle */}
    <circle cx="100" cy="100" r="80" fill="url(#bgGradient)" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="8 4"/>
    
    {/* Yoga Pose - Meditation */}
    <circle cx="100" cy="60" r="15" fill="url(#headGradient)" stroke="#8B5CF6" strokeWidth="2"/>
    <path d="M100 75L100 110" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round"/>
    <path d="M85 90L100 75L115 90" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <path d="M85 90L70 130" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round"/>
    <path d="M115 90L130 130" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round"/>
    <path d="M70 130L85 150" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round"/>
    <path d="M130 130L115 150" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round"/>
    
    {/* Meditation Lines */}
    <path d="M60 60Q40 50 60 40" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6"/>
    <path d="M140 60Q160 50 140 40" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6"/>
    <path d="M50 100Q30 90 50 80" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6"/>
    <path d="M150 100Q170 90 150 80" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6"/>
    
    {/* 404 Text */}
    <text x="100" y="180" textAnchor="middle" fill="#8B5CF6" fontSize="24" fontFamily="Arial, sans-serif" fontWeight="bold">
      404
    </text>
    
    <defs>
      <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.1"/>
        <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.1"/>
      </linearGradient>
      <linearGradient id="headGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3"/>
        <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.3"/>
      </linearGradient>
    </defs>
  </svg>
)

const NotFound = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full text-center"
      >
        {/* Animated Yoga Illustration */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <Yoga404Illustration className="w-64 h-64" />
            <div className="absolute -inset-8 bg-linear-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-2xl"></div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-6xl font-bold bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            404
          </h1>
          
          <h2 className="text-3xl font-semibold text-white">
            Om Shanti - Page Not Found
          </h2>
          
          <p className="text-xl text-slate-300 max-w-md mx-auto leading-relaxed">
            The path you're seeking in your yoga journey doesn't exist. 
            Let's return to your practice and find balance together.
          </p>

          {/* Action Buttons */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
          >
            <Link
              to="/dashboard"
              className="inline-flex items-center px-8 py-3 bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Back to Dashboard
            </Link>
            
            <Link
              to="/yoga-videos"
              className="inline-flex items-center px-8 py-3 border border-slate-600 text-slate-300 bg-slate-800/50 hover:bg-slate-700/50 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Explore Yoga Videos
            </Link>
          </motion.div>

          {/* Additional Help */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="pt-8 border-t border-slate-700/50 mt-8"
          >
            <p className="text-slate-400 text-sm">
              Need help finding your way?{' '}
              <Link 
                to="/" 
                className="text-purple-400 hover:text-purple-300 transition-colors duration-300 underline"
              >
                Return to login
              </Link>
            </p>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-purple-500 rounded-full opacity-50"
        />
        <motion.div
          animate={{
            y: [0, 10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-blue-500 rounded-full opacity-50"
        />
      </motion.div>
    </div>
  )
}

export default NotFound;

