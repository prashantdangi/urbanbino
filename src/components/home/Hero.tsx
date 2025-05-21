import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen bg-gray-100">
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/7691043/pexels-photo-7691043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Hero fashion" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-start">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">"Wear the vibe. Be the Trend."</h1>
          <p className="text-xl text-white mb-8">
            Urban Bino - Where comfort meets bold street style.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              variant="primary" 
              size="lg" 
              className="bg-black text-white hover:bg-gray-800"
              onClick={() => navigate('/new-arrivals')}
            >
              Shop New Arrivals
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-black !important"
              onClick={() => navigate('/mens')}
            >
              Explore Collection
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center">
          <div className="w-1 h-3 bg-white mt-2 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;