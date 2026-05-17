import React from 'react';
import { motion } from 'motion/react';

interface BreezerInteriorProps {
  image: string;
  type: 'black' | 'gold' | 'white' | 'champagne' | 'copper' | 'silver';
  title: string;
  subtitle: string;
  className?: string;
}

export const BreezerInterior: React.FC<BreezerInteriorProps> = ({ 
  image, 
  type, 
  title, 
  subtitle, 
  className = "" 
}) => {
  const getStyles = () => {
    switch (type) {
      case 'black':
        return {
          body: 'bg-[#1A1A1B] border-zinc-800',
          led: 'bg-[#007AFF] shadow-[0_0_15px_rgba(0,122,255,0.8)]',
          reflection: 'bg-gradient-to-br from-white/5 to-transparent'
        };
      case 'gold':
        return {
          body: 'bg-[#B5A642] border-[#B5A642]/50',
          led: 'bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]',
          reflection: 'bg-gradient-to-br from-white/20 to-transparent'
        };
      case 'copper':
        return {
          body: 'bg-[#B15D39] border-[#B15D39]/50',
          led: 'bg-[#ff7700] shadow-[0_0_15px_rgba(255,119,0,0.8)]',
          reflection: 'bg-gradient-to-br from-white/10 to-transparent'
        };
      case 'white':
        return {
          body: 'bg-[#FAFAFA] border-zinc-200',
          led: 'bg-[#f2ca50] shadow-[0_0_15px_rgba(242,202,80,0.8)]',
          reflection: 'bg-gradient-to-br from-white/40 to-transparent'
        };
      case 'champagne':
        return {
          body: 'bg-[#F5F1E6] border-[#F5F1E6]/50',
          led: 'bg-[#f2ca50] shadow-[0_0_15px_rgba(242,202,80,0.8)]',
          reflection: 'bg-gradient-to-br from-white/30 to-transparent'
        };
      case 'silver':
        return {
          body: 'bg-[#8E8E93] border-[#8E8E93]/50',
          led: 'bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]',
          reflection: 'bg-gradient-to-br from-white/20 to-transparent'
        };
      default:
        return {
          body: 'bg-zinc-900 border-zinc-800',
          led: 'bg-[#f2ca50]',
          reflection: 'bg-white/10'
        };
    }
  };

  const styles = getStyles();

  return (
    <div className={`relative overflow-hidden group bg-zinc-900/50 ${className}`}>
      {/* Interior Image */}
      {image && (
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
      )}
      {!image && <div className="w-full h-full bg-zinc-900" />}
      
      {/* Remove the CSS device overlay as we now use photorealistic renders */}

      {/* Info Overlay */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 md:p-12">
        <span className="text-[#f2ca50] font-display text-[10px] md:text-xs uppercase tracking-[0.3em] mb-2 block">{subtitle}</span>
        <h4 className="text-white font-display text-xl md:text-3xl tracking-tight">{title}</h4>
      </div>
    </div>
  );
};
