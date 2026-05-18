'use client';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { featureImportance, squadValueTiers, geographicDistribution, predictions2026 } from '../lib/mockData';

const INK = '#2c241b';
const RED = '#8b3a3a';
const SEPIA = '#503f29';
const GREEN = '#3a5043';
const BLUE = '#2b3f54';
const ORANGE = '#93582e';

export default function FrontPageView() {
  const topContender = [...predictions2026].sort((a,b) => b.probWin - a.probWin)[0];

  return (
    <div className="space-y-12 animate-in fade-in duration-1000 font-serif relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b-[6px] border-double border-[#2c241b] pb-16">
        {/* Main Feature - 8 columns */}
        <article className="lg:col-span-8 space-y-8 lg:pr-12 lg:border-r-[3px] border-[#2c241b]">
          {/* Top Favorite Highlight - Engraving Style */}
          <div className="mb-6 p-1 border-[-2px] border-double border-[#2c241b]">
             <div className="p-6 md:p-8 bg-gradient-to-b from-[#2c241b] to-[#1c1813] text-[#f4eee6] text-center shadow-[6px_6px_0_0_#8b3a3a] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/crissxcross.png')] opacity-10 pointer-events-none mix-blend-overlay" />
                <h3 className="uppercase tracking-[0.2em] text-[#e0a96d] text-xs font-bold mb-2 relative z-10 opacity-80">— The Mathematical Engine's Decree —</h3>
                <div className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-[#eae3d9] my-4 relative z-10" style={{ fontVariant: 'small-caps'}}>
                  {topContender.team}
                </div>
                <div className="flex justify-center items-center gap-6 uppercase tracking-widest font-bold text-sm md:text-base mt-4 pt-4 border-t-2 border-[#f4eee6]/10 relative z-10">
                  <div className="flex flex-col items-center">
                    <div className="text-[#e0a96d] text-[10px] mb-1 tracking-[0.2em] font-black opacity-70">Likelihood</div>
                    <div className="text-2xl text-[#f4eee6]">{topContender.probWin}%</div>
                  </div>
                  <div className="h-8 w-px bg-[#f4eee6]/20"></div>
                  <div className="flex flex-col items-center">
                    <div className="text-[#e0a96d] text-[10px] mb-1 tracking-[0.2em] font-black opacity-70">Market Odds</div>
                    <div className="text-2xl text-[#f4eee6]">{topContender.marketOdds}</div>
                  </div>
                </div>
             </div>
          </div>

          <h3 className="text-3xl md:text-5xl font-black uppercase pb-3 text-center tracking-tighter leading-[0.9] border-b-[2px] border-[#2c241b] mb-6" style={{ fontVariant: 'small-caps' }}>
            The Alchemy of Wealth:<br/> <span className="text-[#8b3a3a]">A Portent of Victory?</span>
          </h3>
          
          <div className="columns-1 md:columns-2 gap-8 text-lg md:text-xl leading-relaxed text-justify relative">
            <p className="first-letter:text-[5rem] first-letter:font-black first-letter:mr-4 first-letter:float-left first-letter:leading-[0.8] first-letter:text-[#2c241b] mb-4">
              Which factors portend a nation's advance to the semi-finals? Our rigorous analysis of records betwixt 2002 and 2022 doth demonstrate that the market valuation of the collective squad dictates fortunes more severely than past historical pedigree. It appears that gold and silver pave the road to glory more often than mere passion.
            </p>
            <p className="mb-4">
              For generations, the scribes have sung of the "passion" of the South Americans and the "discipline" of the Europeans. Yet the engine of progress, powered by boundless data, cares not for such poetic whims. It examines the cold, hard currency. 
            </p>
            <p className="mb-4 font-bold italic text-xl border-l-[4px] border-[#8b3a3a] pl-4 py-1 my-6 leading-snug">
              "We divided the nations into tiers of opulence. Observe how the Top Tier possesses nearly half the semi-final berths."
            </p>
            <p className="mb-4">
              It is a truth universally acknowledged that wealth alone is no absolute guarantor. Observe the paupers of the lowest tier; they rarely sup at the final table. A stark warning to those who dare place their faith in romantic underdogs.
            </p>
          </div>
          
          {/* Chart Section - Callout */}
          <div className="border-[2px] border-[#2c241b] p-4 bg-[#f4eee6] shadow-[4px_4px_0_0_#2c241b] my-6">
            <h4 className="text-center font-bold mb-3 text-base uppercase tracking-widest pt-0 border-b border-[#2c241b]/30 pb-2">Predictors of the Semi-Finals</h4>
            <div className="h-[180px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={featureImportance} layout="vertical" margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="2 3" stroke={INK} strokeOpacity={0.3} horizontal={true} vertical={false} />
                  <XAxis type="number" stroke={INK} fontSize={10} tickLine={false} axisLine={false} fontWeight="bold" />
                  <YAxis dataKey="feature" type="category" stroke={INK} fontSize={10} tickLine={false} axisLine={false} fontWeight="bold" />
                  <Tooltip contentStyle={{ backgroundColor: '#f4eee6', borderColor: INK, color: INK, borderRadius: 0, fontSize: 12 }} />
                  <Bar dataKey="importance" name="Relative Importance" fill={SEPIA} barSize={12} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-[10px] text-center italic mt-1 font-bold opacity-70 border-t border-[#2c241b]/30 pt-1">Data from twenty years of tournament results.</p>
          </div>

          
        </article>

        {/* Sidebar News - 4 columns */}
        <aside className="lg:col-span-4 space-y-12">
          {/* North American Spectacle Section */}
          <div className="p-4 border-[2px] border-[#2c241b] bg-[#ece4d5] shadow-[4px_4px_0_0_#2c241b]">
            <h3 className="text-xl font-black uppercase mb-3 tracking-tighter border-b-2 border-[#2c241b] pb-2">The North American Spectacle</h3>
            <p className="text-sm leading-relaxed mb-3 font-medium italic">
                The 2026 World Cup graces North American shores. Hosted by the United States, Canada, and Mexico, this tournament promises unprecedented spectacle.
            </p>
            <h4 className="text-xs font-bold uppercase mb-2 tracking-widest text-[#8b3a3a]">United States Odds Comparison</h4>
            <div className="h-[150px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={[{ name: 'Model', odds: 1718 }, { name: 'Poly', odds: 2000 }, { name: 'Kalshi', odds: 2050 }, { name: 'B365', odds: 2100 }]} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" fontSize={10} />
                        <YAxis fontSize={10} />
                        <Tooltip />
                        <Bar dataKey="odds" fill={BLUE} name="Implied Odds" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
          </div>

          <article className="border-[2px] border-[#2c241b] p-4 bg-[#f4eee6]">
            <h4 className="text-2xl font-black uppercase border-b-2 border-[#2c241b] pb-2 mb-4 text-center leading-none tracking-tighter" style={{ fontVariant: 'small-caps'}}>The Shifting<br/>Sands of<br/>Geography</h4>
            <p className="text-justify leading-relaxed text-base mb-4 font-medium">
              Observe the transformation of global dominance over the epochs. The hegemony of the European powers remains resolute, yet recent years have seen the noble entry of the African continent to the penultimate stage. 
            </p>
            <div className="h-64 border-[2px] border-[#2c241b] p-2 bg-[#ece4d5] relative">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={geographicDistribution} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="0" stroke={INK} strokeOpacity={0.3} vertical={false} />
                  <XAxis dataKey="year" stroke={INK} fontSize={10} tickLine={false} axisLine={false} fontWeight="bold" />
                  <YAxis stroke={INK} fontSize={10} tickLine={false} axisLine={false} fontWeight="bold" />
                  <Tooltip cursor={{fill: INK, opacity: 0.1}} contentStyle={{ backgroundColor: '#f4eee6', borderColor: INK, color: INK, borderRadius: 0, borderWidth: '2px', fontWeight: 'bold' }} />
                  <Legend iconType="square" wrapperStyle={{ fontSize: 9, fontWeight: 'bold', paddingTop: '5px' }} />
                  <Bar dataKey="Europe" stackId="a" fill={BLUE} />
                  <Bar dataKey="SouthAm" name="S. America" stackId="a" fill={GREEN} />
                  <Bar dataKey="Asia" stackId="a" fill={ORANGE} />
                  <Bar dataKey="Africa" stackId="a" fill={RED} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </article>

          <div className="bg-[#8b3a3a] text-[#f4eee6] p-8 text-center shadow-[6px_6px_0_0_#2c241b] border-[3px] border-[#2c241b] relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#2c241b] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
            <div className="relative z-10">
              <h4 className="uppercase tracking-[0.2em] text-sm font-black border-b-[3px] border-[#f4eee6]/30 pb-3 mb-6">Urgent Dispatch</h4>
              <p className="font-black text-4xl md:text-5xl leading-[1.1] mb-4 tracking-tighter">EUROPE<br/> RETAINS <br/>ITS GRIP!</p>
              <p className="text-lg italic font-medium mt-6 border-t border-[#f4eee6]/30 pt-4">Our analysts confirm the Old World continues to dominate the final four.</p>
            </div>
          </div>
        </aside>
      </div>
      
      <div className="text-center italic text-xl text-[#2c241b]/80 font-bold pt-8 pb-4 tracking-widest border-b-2 border-[#2c241b]">
         * * * Flip to Page III for the latest Sporting Bets & Legends * * *
      </div>
    </div>
  );
}
