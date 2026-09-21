"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Satellite, Scan, Cpu, Layers } from "lucide-react";

export const RasterHeroMotif = () => {
  const [mounted, setMounted] = useState(false);
  const [activeCell, setActiveCell] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none border border-hairline rounded bg-surface/80 p-5 overflow-hidden">
      {/* Top telemetry status bar */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-hairline text-[11px] text-content-muted">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-copper animate-pulse" />
          <span className="font-medium text-content-primary">RASTER CALIBRATION</span>
          <span className="text-content-dim">|</span>
          <span>IR $\to$ RGB PIPELINE</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px]">
          <span className="px-1.5 py-0.5 rounded bg-surface border border-hairline text-slateTeal font-medium">
            ISRO BAH &apos;26
          </span>
        </div>
      </div>

      {/* Main Raster Grid Visual */}
      <div className="relative aspect-[16/10] w-full rounded border border-hairline bg-[#0e0c0a] overflow-hidden">
        {/* Fine background grid lines */}
        <div className="absolute inset-0 bg-raster-grid opacity-60 pointer-events-none" />

        {/* Moving scanning raster line */}
        <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-copper to-transparent shadow-[0_0_8px_rgba(194,106,63,0.5)] pointer-events-none animate-satellite-scan" />

        {/* Interactive Spectral Pixel Array (8x5 grid) */}
        <div className="absolute inset-4 grid grid-cols-8 grid-rows-5 gap-1.5">
          {Array.from({ length: 40 }).map((_, idx) => {
            const isHovered = activeCell === idx;
            // Predefined spectral pattern representing road/vegetation/urban mapping
            const isVegetation = [10, 11, 12, 18, 19, 26, 27, 34].includes(idx);
            const isUrban = [4, 5, 13, 21, 22, 29, 30].includes(idx);
            const isRoad = [1, 9, 17, 25, 33, 37].includes(idx);

            let cellColor = "bg-surface/50 border-hairline/60";
            if (isVegetation) cellColor = "bg-slateTeal/15 border-slateTeal/40";
            if (isUrban) cellColor = "bg-copper/15 border-copper/40";
            if (isRoad) cellColor = "bg-content-muted/15 border-content-muted/30";

            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveCell(idx)}
                onMouseLeave={() => setActiveCell(null)}
                className={`relative rounded-sm border transition-all duration-200 cursor-crosshair flex items-center justify-center ${cellColor} ${
                  isHovered ? "!bg-copper/30 !border-copper scale-105 z-10" : ""
                }`}
              >
                {isHovered && (
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 px-1 py-0.5 rounded bg-bg text-[9px] text-copper border border-copper whitespace-nowrap z-20">
                    p_{idx}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Center reticle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex flex-col items-center">
          <div className="w-8 h-8 rounded-full border border-copper/40 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-copper rounded-full" />
          </div>
        </div>

        {/* Corner coordinates */}
        <div className="absolute bottom-2 left-3 text-[10px] text-content-dim font-mono pointer-events-none">
          LAT 08°30&apos;N · LON 76°57&apos;E
        </div>
        <div className="absolute bottom-2 right-3 text-[10px] text-content-dim font-mono pointer-events-none">
          RES: 0.5m / px
        </div>
      </div>

      {/* Bottom Pipeline Metadata Strip */}
      <div className="mt-4 pt-3 border-t border-hairline grid grid-cols-3 gap-2 text-left">
        <div className="flex flex-col">
          <span className="text-[10px] text-content-muted uppercase tracking-wider">Pipeline</span>
          <span className="text-xs font-medium text-content-primary">IR $\to$ RGB Gen</span>
        </div>
        <div className="flex flex-col border-l border-hairline pl-2">
          <span className="text-[10px] text-content-muted uppercase tracking-wider">Metrics</span>
          <span className="text-xs font-medium text-content-primary">PSNR · SSIM · FID</span>
        </div>
        <div className="flex flex-col border-l border-hairline pl-2">
          <span className="text-[10px] text-content-muted uppercase tracking-wider">Domain</span>
          <span className="text-xs font-medium text-slateTeal">Satellite Sensing</span>
        </div>
      </div>
    </div>
  );
};
