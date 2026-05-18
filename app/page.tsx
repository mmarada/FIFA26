'use client';

import React, { useState } from 'react';
import FrontPageView from '@/components/FrontPageView';
import DashboardView from '@/components/DashboardView';
import BetsLegendsView from '@/components/BetsLegendsView';
import FanZoneView from '@/components/FanZoneView';
import { AuthProvider } from '@/components/AuthProvider';

export default function Home() {
  const [currentView, setCurrentView] = useState<'frontpage' | 'records' | 'betslegends' | 'fanzone'>('frontpage');

  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col bg-[#f0e9df] text-[#2c241b] font-serif selection:bg-[#2c241b] selection:text-[#f0e9df]">
        
        {/* Newspaper Header */}
        <header className="border-b-[4px] border-double border-[#2c241b] pt-4 pb-4 px-4 md:px-8 w-full max-w-7xl mx-auto relative">
          <div className="flex flex-col md:flex-row justify-between items-center uppercase tracking-widest text-[10px] font-bold border-b border-[#2c241b] pb-2 mb-2">
            <div>Vol. CCXL &mdash; No. 1</div>
            <div>Monday, July 12, 2026</div>
            <div>Price Two Pence</div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-center tracking-tighter uppercase mb-2 opacity-90" style={{ fontVariant: 'small-caps'}}>
             The World Cup Chronicle
          </h1>
          <p className="text-center italic text-sm px-4 md:px-12 max-w-3xl mx-auto leading-relaxed">
            A compendium of historical feats, sporting marvels, and prognostications concerning the global tournament of football.
          </p>
        </header>

        {/* Navigation Sections */}
        <nav className="border-b-[4px] border-double border-[#2c241b] w-full max-w-7xl mx-auto bg-[#ece4d5] sticky top-0 z-40 shadow-sm">
          <ul className="flex flex-wrap justify-center font-bold text-xs md:text-sm uppercase tracking-widest divide-x divide-[#2c241b]/30">
            <li>
              <button 
                onClick={() => setCurrentView('frontpage')}
                className={`px-4 py-2 transition-colors ${currentView === 'frontpage' ? 'bg-[#2c241b] text-[#f0e9df]' : 'hover:bg-[#e0d6c4]'}`}
              >
                I. Front Page
              </button>
            </li>
            <li>
              <button 
                onClick={() => setCurrentView('records')}
                className={`px-4 py-2 transition-colors ${currentView === 'records' ? 'bg-[#2c241b] text-[#f0e9df]' : 'hover:bg-[#e0d6c4]'}`}
              >
                II. Records
              </button>
            </li>
            <li>
              <button 
                onClick={() => setCurrentView('betslegends')}
                className={`px-4 py-2 transition-colors ${currentView === 'betslegends' ? 'bg-[#2c241b] text-[#f0e9df]' : 'hover:bg-[#e0d6c4]'}`}
              >
                III. Odds
              </button>
            </li>
            <li>
              <button 
                onClick={() => setCurrentView('fanzone')}
                className={`px-4 py-2 transition-colors ${currentView === 'fanzone' ? 'bg-[#2c241b] text-[#f0e9df]' : 'hover:bg-[#e0d6c4]'}`}
              >
                IV. Opinion
              </button>
            </li>
          </ul>
        </nav>

        {/* Main Content Area */}
        <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 relative w-full flex-grow">
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]" />
          {currentView === 'frontpage' && <FrontPageView />}
          {currentView === 'records' && <DashboardView />}
          {currentView === 'betslegends' && <BetsLegendsView />}
          {currentView === 'fanzone' && <FanZoneView />}
        </main>

        <footer className="border-t-[4px] border-double border-[#2c241b] mt-8 py-8 text-center uppercase tracking-widest text-xs font-bold bg-[#ece4d5] w-full max-w-7xl mx-auto">
          <p>Printed & Published by The World Cup Chronicle Press.</p>
          <p className="mt-1 text-[#2c241b]/70">&copy; 2026 All Rights Reserved.</p>
        </footer>
      </div>
    </AuthProvider>
  );
}
