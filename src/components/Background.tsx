import React from 'react';

const Background: React.FC = () => {
  return (
    <>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576692155415-95f820a2c4c1?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/90 to-red-900/90" />
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Background;