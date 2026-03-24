/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowUpRight, Menu } from "lucide-react";
import heroVideo from "./bg_hero_animation2.mp4";

export default function App() {
  return (
    <div className="h-screen overflow-hidden flex flex-col relative">
      {/* Grid Background Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 shrink-0 flex justify-between items-center px-6 md:px-8 py-3 md:py-5 text-[10px] tracking-[0.2em] font-medium uppercase text-gray-400">
        <div className="hidden md:flex gap-12">
          <a href="#" className="relative text-white transition-colors">
            Project
            <span className="absolute -bottom-1 left-0 right-0 flex justify-center">
              <span className="w-1 h-1 rounded-full bg-brand-orange" />
            </span>
          </a>
          <a href="#" className="hover:text-white transition-colors">About Us</a>
        </div>
        <div className="text-white text-sm font-display font-bold tracking-[0.3em]">
          ARCHITEKT
        </div>
        <div className="hidden md:flex gap-12">
          <a href="#" className="hover:text-white transition-colors">Our Teams</a>
          <a href="#" className="hover:text-white transition-colors">Services</a>
        </div>
        <button className="md:hidden text-gray-400 hover:text-white transition-colors">
          <Menu className="w-5 h-5" />
        </button>
      </nav>

      <main className="flex-1 flex flex-col md:flex-row relative px-6 md:px-8 pt-2 md:pt-6 pb-3 gap-3 md:gap-5 min-h-0">

        {/* Left Sidebar */}
        <div className="hidden md:flex flex-col items-center justify-center z-20 shrink-0">
          <div className="[writing-mode:vertical-rl] text-[10px] tracking-widest text-gray-500 uppercase font-medium">
            Firm Est 1896 © Architectural
          </div>
        </div>

        {/* Main content column */}
        <div className="flex-1 flex flex-col min-w-0 min-h-0">

          {/* Hero Text */}
          <div className="relative z-10 shrink-0">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[8vw] md:text-[5vw] leading-[0.85] font-display font-bold tracking-tighter uppercase"
            >
              Building <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">Different</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hidden md:flex items-center gap-3 mt-2"
            >
              <div className="w-8 h-px bg-white/30" />
              <span className="text-[10px] text-gray-500 uppercase tracking-[0.25em]">Architecture & Design Studio</span>
            </motion.div>

            {/* Barcode — desktop only */}
            <div className="hidden md:flex absolute top-0 right-1/4 flex-col gap-1 opacity-40">
              <div className="flex gap-1">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className={`h-8 w-[1px] bg-white ${i % 3 === 0 ? 'w-[2px]' : ''}`}></div>
                ))}
              </div>
              <div className="text-[8px] font-mono tracking-widest">89372261</div>
            </div>
          </div>

          {/* Video + Right Panel row */}
          <div className="flex flex-row gap-3 md:gap-5 mt-3 md:mt-4 flex-1 min-h-0 lg:max-h-[50vh]">

            {/* Video card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative flex-1 min-w-0 min-h-[200px] md:min-h-0 bg-gray-900/50 rounded-[30px] md:rounded-[60px] border border-white/10 overflow-hidden"
            >
              <video
                src={heroVideo}
                autoPlay
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Top-left scrim */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/10 to-transparent pointer-events-none" />

              {/* Bottom fade */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

              {/* Project Info Overlay */}
              <div className="absolute top-6 left-6 md:top-10 md:left-10 z-10 max-w-xs">
                <h3 className="text-base md:text-lg font-display font-bold uppercase tracking-wider mb-1">The Pavillion</h3>
                <div className="text-[9px] md:text-[10px] text-gray-400 uppercase tracking-widest leading-relaxed">
                  Residence<br />
                  Cronulla, NSW<br />
                  2022
                </div>
              </div>

              {/* Pagination dots */}
              <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-10 flex gap-2 items-center">
                {[...Array(4)].map((_, i) => (
                  i === 0
                    ? <span key={i} className="relative flex w-2 h-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-50" />
                        <span className="relative inline-flex rounded-full w-2 h-2 bg-white" />
                      </span>
                    : <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/20" />
                ))}
              </div>
            </motion.div>

            {/* Right Panel — desktop only */}
            <div className="hidden md:flex flex-col items-center justify-between py-2 shrink-0">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-orange w-14 h-48 rounded-full flex flex-col items-center justify-between py-6 group cursor-pointer"
              >
                <span className="[writing-mode:vertical-rl] text-black font-bold text-xs tracking-widest uppercase">
                  Contact Us
                </span>
                <div className="bg-white/20 p-2 rounded-full group-hover:bg-white/40 transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-black" />
                </div>
              </motion.button>

              {/* Stats with divider */}
              <div className="flex flex-col gap-5 text-center pt-5 border-t border-white/10 w-full">
                <div>
                  <div className="text-xl font-display font-bold">30+</div>
                  <div className="text-[8px] text-gray-500 uppercase tracking-widest mt-1">Projects</div>
                </div>
                <div>
                  <div className="text-xl font-display font-bold">15</div>
                  <div className="text-[8px] text-gray-500 uppercase tracking-widest mt-1">Awards</div>
                </div>
              </div>
            </div>

          </div>

          {/* Mobile Contact Us row */}
          <div className="flex md:hidden items-center justify-between mt-4 px-1">
            <div className="text-[9px] text-gray-500 uppercase tracking-widest leading-relaxed">
              Firm Est 1896<br />© Architectural
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-orange rounded-full flex items-center gap-2 px-5 py-3 group cursor-pointer"
            >
              <span className="text-black font-bold text-xs tracking-widest uppercase">Contact Us</span>
              <div className="bg-white/20 p-1 rounded-full group-hover:bg-white/40 transition-colors">
                <ArrowUpRight className="w-3 h-3 text-black" />
              </div>
            </motion.button>
          </div>

        </div>
      </main>

      {/* Marquee Footer */}
      <div className="relative z-10 shrink-0 mt-3 md:mt-4 mb-3 md:mb-4 overflow-hidden bg-white/5 border border-white/10 rounded-full mx-6 md:mx-8 py-3 md:py-5">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-4 md:gap-8 px-4 md:px-8">
              <div className="bg-brand-orange p-1.5 md:p-2 rounded-full">
                <ArrowUpRight className="w-4 h-4 md:w-6 md:h-6 text-white" />
              </div>
              <span className="text-white font-display font-bold text-2xl md:text-4xl uppercase tracking-tighter">
                Get Started
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
