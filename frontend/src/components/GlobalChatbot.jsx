// src/components/GlobalChatbot.jsx
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { BsRobot } from "react-icons/bs";

const GlobalChatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const location = useLocation()

  // Hide chatbot on login and register pages
  const hiddenRoutes = ['/', '/login', '/register']
  const shouldShow = !hiddenRoutes.includes(location.pathname)

  if (!shouldShow) return null

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 text-white border-none rounded-full text-2xl cursor-pointer shadow-2xl z-50 hover:scale-110 transition-all duration-300 flex items-center justify-center"
        title="Chat with Yoga AI"
      >
       <BsRobot />
      </button>

      {/* Chatbot Iframe */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[600px] z-50 shadow-2xl rounded-2xl overflow-hidden border border-slate-600">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/5u51aUaOpTub3lCunT3wZ"
            className="w-full h-full border-none rounded-2xl"
            title="Yoga AI Chatbot"
          />
        </div>
      )}
    </>
  )
}

export default GlobalChatbot