"use client";

const AnimatedBackground = ({ 
  color1 = "rgba(67, 217, 173, 0.2)",
  color2 = "rgba(147, 51, 234, 0.2)",  
  size1 = 500,
  size2 = 400,
  blur = 50,
  duration1 = 20,
  duration2 = 25,
  className = ""
}) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div 
        className="absolute animate-blob1"
        style={{
          width: size1,
          height: size1,
          background: color1,
          borderRadius: '50%',
          filter: `blur(${blur}px)`,
          animation: `float ${duration1}s ease-in-out infinite`
        }}
      />
      <div 
        className="absolute animate-blob2"
        style={{
          width: size2,
          height: size2,
          background: color2,
          borderRadius: '50%',
          filter: `blur(${blur}px)`,
          animation: `float2 ${duration2}s ease-in-out infinite`
        }}
      />
    </div>
  );
};

export default AnimatedBackground;