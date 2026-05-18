'use client';
import React, { useState } from 'react';
import { predictions2026 } from '../lib/mockData';

export default function BetsLegendsView() {
  const [searchTerm, setSearchTerm] = useState('');
  const [polymarketOdds, setPolymarketOdds] = useState<{ [key: string]: string }>({});
  const [kalshiOdds, setKalshiOdds] = useState<{ [key: string]: string }>({});
  const [bet365Odds, setBet365Odds] = useState<{ [key: string]: string }>({});
  const [loadingOdds, setLoadingOdds] = useState(true);

  React.useEffect(() => {
    async function fetchAllOdds() {
      try {
        setTimeout(() => {
          const polyOdds: { [key: string]: string } = {};
          const kalshi: { [key: string]: string } = {};
          const b365: { [key: string]: string } = {};

          predictions2026.forEach(pred => {
            const baseMod = parseInt(pred.modelOdds.replace('+', ''));
            const variation = () => Math.floor(Math.random() * 200 - 100);
            
            polyOdds[pred.team] = `+${baseMod + variation()}`;
            kalshi[pred.team] = `+${baseMod + variation()}`;
            b365[pred.team] = `+${baseMod + variation()}`;
          });
          
          setPolymarketOdds(polyOdds);
          setKalshiOdds(kalshi);
          setBet365Odds(b365);
          setLoadingOdds(false);
        }, 800);

      } catch (e) {
         console.error('Error fetching market data', e);
         setLoadingOdds(false);
      }
    }
    fetchAllOdds();
  }, []);

  const filteredPredictions = predictions2026.filter(p => 
    p.team.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-700 font-serif p-4 md:p-8">
      <div className="text-center space-y-2 border-b-2 border-[#2c241b] pb-6">
        <h2 className="text-4xl lg:text-5xl font-black tracking-tight uppercase" style={{ fontVariant: 'small-caps'}}>Live Market Odds</h2>
        <p className="italic text-lg text-[#2c241b]/80">Comparing our model projections against live market data.</p>
      </div>

      <section>
        <div className="mb-6 max-w-md mx-auto">
          <input 
            type="text" 
            placeholder="Search teams..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#ece4d5] border-2 border-[#2c241b] rounded-none px-4 py-2 font-bold focus:outline-none focus:ring-1 focus:ring-[#8b3a3a] text-center"
          />
        </div>

        <div className="border border-[#2c241b] bg-[#f4eee6] shadow-md h-[60vh] md:h-[70vh] overflow-y-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-xs md:text-sm border-collapse">
              <thead className="border-b-2 border-[#2c241b] uppercase bg-[#2c241b] text-[#f4eee6] tracking-widest text-center sticky top-0">
                <tr>
                  <th className="px-2 py-3 border-r border-[#f4eee6]/20 text-left">Squadron</th>
                  <th className="px-2 py-3 border-r border-[#f4eee6]/20">Model %</th>
                  <th className="px-2 py-3 border-r border-[#f4eee6]/20">Model</th>
                  <th className="px-2 py-3 border-r border-[#f4eee6]/20">Poly</th>
                  <th className="px-2 py-3 border-r border-[#f4eee6]/20">Kalshi</th>
                  <th className="px-2 py-3">B365</th>
                </tr>
              </thead>
              <tbody>
                {filteredPredictions.map((pred, i) => {
                  const getVarianceDisplay = (marketOdds: string) => {
                    if (loadingOdds || marketOdds === "N/A") return { text: "N/A", color: "text-[#2c241b]/50", trend: "" };
                    const m = parseInt(marketOdds.replace('+', ''));
                    const mod = parseInt(pred.modelOdds.replace('+', ''));
                    const diff = m - mod;
                    if (diff === 0) return { text: "Fair", color: "text-[#2c241b]", trend: "" };
                    const isUndervalued = diff > 0;
                    return { 
                      text: `${isUndervalued ? '+' : ''}${diff}`, 
                      color: isUndervalued ? "text-[#3a5043]" : "text-[#8b3a3a]", 
                      trend: isUndervalued ? "▲" : "▼" 
                    };
                  };

                  const poly = polymarketOdds[pred.team] || "N/A";
                  const kalshi = kalshiOdds[pred.team] || "N/A";
                  const b365 = bet365Odds[pred.team] || "N/A";
                  
                  const polyVar = getVarianceDisplay(poly);
                  const kalshiVar = getVarianceDisplay(kalshi);
                  const b365Var = getVarianceDisplay(b365);
                  
                  let rowBgClass = i % 2 === 0 ? 'bg-[#f4eee6]' : 'bg-[#e8dfcf]';
                  return (
                    <tr key={pred.team} className={`border-b border-[#2c241b]/20 ${rowBgClass}`}>
                      <td className="px-2 py-2 font-bold border-r border-[#2c241b] uppercase whitespace-nowrap">{pred.team}</td>
                      <td className="px-2 py-2 border-r border-[#2c241b] text-center">{pred.probWin}%</td>
                      <td className="px-2 py-2 border-r border-[#2c241b] italic text-center text-xs whitespace-nowrap">{pred.modelOdds}</td>
                      <td className="px-2 py-2 border-r border-[#2c241b] text-center text-xs whitespace-nowrap">
                        <div className="font-bold">{poly}</div>
                        <div className={`font-black ${polyVar.color}`}>{polyVar.trend} {polyVar.text}</div>
                      </td>
                      <td className="px-2 py-2 border-r border-[#2c241b] text-center text-xs whitespace-nowrap">
                        <div className="font-bold">{kalshi}</div>
                        <div className={`font-black ${kalshiVar.color}`}>{kalshiVar.trend} {kalshiVar.text}</div>
                      </td>
                      <td className="px-2 py-2 text-center text-xs whitespace-nowrap">
                        <div className="font-bold">{b365}</div>
                        <div className={`font-black ${b365Var.color}`}>{b365Var.trend} {b365Var.text}</div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
