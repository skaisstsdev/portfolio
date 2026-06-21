import React from 'react';

export const BentoGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {children}
    </div>
  );
};

export const BentoItem = ({ 
  title, 
  content, 
  colSpan = 1 
}: { 
  title: string; 
  content: React.ReactNode;
  colSpan?: 1 | 2;
}) => {
  return (
    <div className={`p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md flex flex-col justify-center ${colSpan === 2 ? 'md:col-span-2' : ''}`}>
      <p className="text-xs text-white/50 uppercase tracking-widest mb-2">{title}</p>
      <div className="font-light text-lg text-white/90">
        {content}
      </div>
    </div>
  );
};
