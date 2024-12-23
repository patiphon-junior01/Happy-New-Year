import React from 'react';

const GeometricShapes: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top right shape */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl" />
      
      {/* Bottom left shape */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-red-500/20 to-yellow-500/20 rounded-full blur-3xl" />
      
      {/* Floating triangles */}
      <div className="absolute top-1/4 left-10 w-8 h-8 border-2 border-white/10 transform rotate-45 animate-float" />
      <div className="absolute bottom-1/4 right-10 w-12 h-12 border-2 border-white/10 transform -rotate-12 animate-float-delayed" />
    </div>
  );
};

export default GeometricShapes;