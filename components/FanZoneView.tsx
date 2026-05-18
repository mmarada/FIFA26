'use client';
import React, { useState } from 'react';

export default function FanZoneView() {
  const [activeTab, setActiveTab] = useState<'discussions'|'polls'>('discussions');

  return (
    <div className="space-y-10 animate-in fade-in duration-700 font-serif">
      <div className="text-center space-y-2 border-b-2 border-[#2c241b] pb-6 mb-8">
        <h2 className="text-4xl font-bold tracking-tight uppercase">The Publick Square</h2>
        <p className="italic text-lg">Letters to the Editor & Consultations of the Masses.</p>
      </div>
      
      <div className="flex justify-center border-y border-[#2c241b] py-2 mb-8">
        <div className="flex space-x-8 uppercase tracking-widest text-sm font-bold">
          <button 
            onClick={() => setActiveTab('discussions')} 
            className={`transition-colors ${activeTab === 'discussions' ? 'text-[#8b3a3a] underline underline-offset-4 decoration-2' : 'hover:text-[#8b3a3a]'}`}
          >
            I. Letters to the Editor
          </button>
          <span className="text-[#2c241b]">&#9830;</span>
          <button 
            onClick={() => setActiveTab('polls')} 
            className={`transition-colors ${activeTab === 'polls' ? 'text-[#8b3a3a] underline underline-offset-4 decoration-2' : 'hover:text-[#8b3a3a]'}`}
          >
            II. Consultations (Polls)
          </button>
        </div>
      </div>

      <div className="border border-[#2c241b] bg-[#ece4d5] p-12 text-center max-w-xl mx-auto shadow-sm">
        <p className="mb-4 italic">
          The publick square is presently closed for renovations by order of the magistrate.
          Couriers have been delayed and the ink-wells run dry. 
        </p>
        <p className="uppercase tracking-widest font-bold text-xs mt-6">
          Pray, return on the morrow.
        </p>
      </div>

    </div>
  );
}
