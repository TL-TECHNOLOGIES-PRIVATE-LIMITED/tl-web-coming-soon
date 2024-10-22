import React, { useState, useEffect } from 'react';
import bgImage from './assets/comingsoon.jpg';
import logoIcon from './assets/logo.svg';
import { 
  AiFillLinkedin,
  AiOutlineInstagram,
  AiFillYoutube,
} from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';  
import { FaWhatsapp } from 'react-icons/fa';
import { SiGooglemybusiness } from "react-icons/si";

const ComingSoon = () => {
  const targetDate = new Date('2024-11-01T00:00:00');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference < 0) {
        clearInterval(timer);
        setIsExpired(true);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const socialLinks = [
    { 
      icon: <FaWhatsapp className="w-5 h-5" />, 
      href: "https://api.whatsapp.com/send/?phone=%2B919061432814&text=Hello%2C+I+am+interested+to+know+more+about+PRODUCTS+%26+SERVICES&type=phone_number&app_absent=0",
      label: "WhatsApp"
    },
    { 
      icon: <SiGooglemybusiness className="w-5 h-5" />, 
      href: "https://g.co/kgs/ipTdxPB",
      label: "Google Business"
    },
    { 
      icon: <BiLogoFacebook className="w-5 h-5" />, 
      href: "https://www.facebook.com/tltechnologiespvtltd",
      label: "Facebook"
    },
    { 
      icon: <AiOutlineInstagram className="w-5 h-5" />, 
      href: "https://www.instagram.com/tltechnologiespvtltd/",
      label: "Instagram"
    },
    { 
      icon: <AiFillLinkedin className="w-5 h-5" />, 
      href: "https://www.linkedin.com/company/tltechnologiespvtltd/",
      label: "LinkedIn"
    },
    { 
      icon: <AiFillYoutube className="w-5 h-5" />, 
      href: "https://www.youtube.com/channel/UC66DHUJ0uCcSbAqhppInx5Q",
      label: "YouTube"
    },
  ];

  const day = targetDate.getDate();
  const month = targetDate.toLocaleString('en-US', { month: 'short' }).toUpperCase();
  const year = targetDate.getFullYear();
  const formattedDate = `${day} ${month} ${year}`;
  
  return (
    <div
      className="min-h-screen relative flex flex-col items-center justify-center p-4 md:p-8"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-4 md:mb-8 transition-transform duration-300 hover:scale-105">
          <img src={logoIcon} alt="Logo" className="w-16 h-16 md:w-20 md:h-20 mx-auto" />
        </div>

        {/* Company Name */}
        <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-8 hover:text-blue-400 transition-colors duration-300">
          TL TECHNOLOGIES
        </h2>

        {/* Main Content */}
        <div className="space-y-4 md:space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold uppercase bg-gradient-to-r from-blue-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">
            Coming Soon
          </h1>
          <p className="text-gray-300 max-w-xs sm:max-w-md md:max-w-2xl mx-auto hover:text-white transition-colors duration-300">
          Transforming Ideas into Reality with Cutting-Edge Technology Solutions
          </p>

          {/* Countdown Timer */}
          {isExpired ? (
            <div className="text-2xl md:text-3xl font-bold text-white">
              We Are Live!
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex flex-wrap justify-center gap-4 my-4">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="text-center group">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-lg flex items-center justify-center mb-2 transition-all duration-300 group-hover:bg-white/20">
                      <span className="text-2xl md:text-3xl font-bold text-white">
                        {value.toString().padStart(2, '0')}
                      </span>
                    </div>
                    <span className="text-gray-300 capitalize">
                      {unit}
                    </span>
                  </div>
                ))}
              </div>
              {/* Launch Date */}
              <div className="text-lg md:text-xl font-semibold text-white bg-white/10 inline-block px-4 py-1 md:px-6 md:py-2 rounded-full">
               {formattedDate}
              </div>
            </div>
          )}
        </div>

        {/* Social Links */}
        <div className="mt-8 md:mt-12">
          <h6 className="text-gray-300 font-semibold mb-2 md:mb-4">Connect with Us</h6>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/30 transition-all duration-300 text-white hover:scale-110"
                aria-label={link.label}
              >
                <div className="transform transition-transform duration-300 hover:scale-125">
                  {link.icon}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
