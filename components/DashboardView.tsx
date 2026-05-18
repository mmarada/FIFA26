'use client';
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { worldCupHistory, teamPerformance } from '../lib/mockData';

const INK = '#2c241b';

export default function DashboardView() {
  const sortedPerformance = [...teamPerformance].sort((a,b) => b.winRate - a.winRate).slice(0, 8);
  
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="text-center space-y-2 border-b-2 border-[#2c241b] pb-6 mb-8">
        <h2 className="text-4xl font-bold tracking-tight uppercase">Historical Analytics & Records</h2>
        <p className="italic text-lg">A meticulous exploration of tournament trends since the inaugural games of 1930.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center uppercase tracking-widest">
        <div className="border border-[#2c241b] p-6 bg-[#f4eee6]">
          <div className="text-sm border-b border-[#2c241b] pb-2 mb-2">Total Tournaments Held</div>
          <div className="text-5xl font-black">{worldCupHistory.length}</div>
        </div>
        <div className="border border-[#2c241b] p-6 bg-[#f4eee6]">
          <div className="text-sm border-b border-[#2c241b] pb-2 mb-2">Sum Total of Goals Scored</div>
          <div className="text-5xl font-black">{worldCupHistory.reduce((sum, wc) => sum + wc.goalsScored, 0)}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="border-y-4 border-double border-[#2c241b] py-6">
          <h3 className="text-xl font-bold mb-6 text-center uppercase">Goals Scored per Tournament</h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={worldCupHistory} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="0" stroke={INK} strokeOpacity={0.2} vertical={false} />
                <XAxis dataKey="year" stroke={INK} fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke={INK} fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#f4eee6', borderColor: INK, color: INK, borderRadius: 0 }} 
                  itemStyle={{ color: INK, fontWeight: 'bold' }} 
                />
                <Area type="monotone" dataKey="goalsScored" name="Goals" stroke={INK} strokeWidth={2} fillOpacity={0.1} fill={INK} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="border-y-4 border-double border-[#2c241b] py-6">
          <h3 className="text-xl font-bold mb-6 text-center uppercase">All-Time Win Rate (%)</h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sortedPerformance} layout="vertical" margin={{ top: 0, right: 0, left: 30, bottom: 0 }}>
                <CartesianGrid strokeDasharray="0" stroke={INK} strokeOpacity={0.2} horizontal={true} vertical={false} />
                <XAxis type="number" domain={[0, 100]} stroke={INK} fontSize={12} tickLine={false} axisLine={false} />
                <YAxis dataKey="team" type="category" stroke={INK} fontSize={13} tickLine={false} axisLine={false} />
                <Tooltip 
                  cursor={{fill: INK, opacity: 0.1}} 
                  contentStyle={{ backgroundColor: '#f4eee6', borderColor: INK, color: INK, borderRadius: 0 }} 
                />
                <Bar dataKey="winRate" name="Win Rate %" fill={INK} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="border-4 border-double border-[#2c241b] overflow-hidden bg-[#f4eee6]">
        <div className="p-4 border-b-2 border-[#2c241b] text-center">
          <h3 className="text-2xl font-bold uppercase tracking-widest">Chronicle of Champions</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left font-serif">
            <thead className="uppercase border-b border-[#2c241b] bg-[#ece4d5]/50">
              <tr>
                <th className="px-6 py-4 font-bold border-r border-[#2c241b]">Year</th>
                <th className="px-6 py-4 font-bold border-r border-[#2c241b]">Host</th>
                <th className="px-6 py-4 font-bold border-r border-[#2c241b]">Victor</th>
                <th className="px-6 py-4 font-bold border-r border-[#2c241b]">Runner-up</th>
                <th className="px-6 py-4 font-bold">Goals</th>
              </tr>
            </thead>
            <tbody>
              {[...worldCupHistory].reverse().map((wc, idx) => (
                <tr key={wc.year} className={`${idx !== 0 ? 'border-t border-[#2c241b]/20' : ''} hover:bg-[#ece4d5] transition-colors`}>
                  <td className="px-6 py-3 font-bold border-r border-[#2c241b]">{wc.year}</td>
                  <td className="px-6 py-3 border-r border-[#2c241b]">{wc.host}</td>
                  <td className="px-6 py-3 border-r border-[#2c241b] font-bold text-[#8b3a3a]">{wc.winner}</td>
                  <td className="px-6 py-3 border-r border-[#2c241b]">{wc.runnerUp}</td>
                  <td className="px-6 py-3 text-center">{wc.goalsScored}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
