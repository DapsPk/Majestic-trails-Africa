'use client';

import Image from 'next/image';
import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  quality?: number;
  priority?: boolean;
  className?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 85,
  priority = false,
  className = '',
  objectFit = 'cover',
}: OptimizedImageProps) {
  const [error, setError] = useState<boolean>(false);

  // Use the original src directly
  const imageSrc = src;

  return (
    <div className={`relative ${fill ? 'w-full h-full' : ''} overflow-hidden bg-gray-100 dark:bg-gray-800`}>
      <Image
        src={imageSrc}
        alt={alt}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        fill={fill}
        sizes={sizes}
        quality={quality}
        priority={priority}
        className={`${className}`} // REMOVED all fade transitions
        style={{ objectFit }}
        onError={() => {
          setError(true);
          console.error(`Failed to load image: ${src}`);
        }}
      />
      
      {/* Show error state if image fails to load */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
          <span className="text-gray-500 dark:text-gray-400 text-sm">🖼️</span>
        </div>
      )}
    </div>
  );
}