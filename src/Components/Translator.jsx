import { useState } from 'react';
import { MORSE_CODE_DICT } from '../utils/morsecode';
export default function Translator() {
    const [text, setText] = useState('');

    const renderMorseBoxes = (input) => {
        return input
            .toUpperCase()
            .split('')
            .map((char, index) => {
                if (char === ' ') {
                    return <div key={`space-${index}`} className="w-6 h-10"></div>;
                }

                const morse = MORSE_CODE_DICT[char] || '?';

                return (
                    <div
                        key={`${char}-${index}`}
                        className="px-4 py-2 bg-stone-700 rounded-xl flex items-center justify-center transition-all duration-200 cursor-default
                        text-amber-400 font-mono text-2xl tracking-[0.1em] font-bold
                        shadow-[6px_6px_12px_rgba(0,0,0,0.4),_inset_-3px_-3px_6px_rgba(0,0,0,0.3),_inset_3px_3px_6px_rgba(255,255,255,0.08)]
                        hover:shadow-[10px_10px_20px_rgba(0,0,0,0.6),_inset_-3px_-3px_6px_rgba(0,0,0,0.3),_inset_3px_3px_6px_rgba(255,255,255,0.1)] 
                        hover:bg-stone-600 hover:scale-105 hover:-translate-y-1"
                        style={{ animationDelay: `${index * 0.03}s` }}
                    >
                        <span>{morse}</span>
                    </div>
                );
            });
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 font-sans text-stone-100 bg-stone-900 overflow-hidden
            bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] 
            bg-[size:40px_40px]">
            <div className="relative z-10 w-full max-w-3xl">


                <div className="bg-stone-800 rounded-[40px] p-8 md:p-12 w-full flex flex-col border-none shadow-[20px_20px_40px_rgba(0,0,0,0.6),_inset_-10px_-10px_20px_rgba(0,0,0,0.5),_inset_10px_10px_20px_rgba(255,255,255,0.06)]">


                    <div className="pb-5 mb-8 flex justify-between items-end border-b border-white-900/50">
                        <div>
                            <h2 className="text-3xl font-bold text-white tracking-wide">Morse Code Translator</h2>
                        </div>
                    </div>

                    <div className="space-y-8">

                        <div>
                            <label htmlFor="english-text" className="block text-sm font-semibold text-stone-300 mb-3 tracking-widest uppercase ml-2">
                                Input: English Text
                            </label>
                            <textarea
                                id="english-text"
                                rows="3"
                                className="w-full p-5 bg-stone-900/80 rounded-2xl text-white font-mono placeholder-stone-500 resize-none border-none outline-none focus:ring-2 focus:ring-amber-400/50 transition-all
                                shadow-[inset_6px_6px_12px_rgba(0,0,0,0.6),_inset_-6px_-6px_12px_rgba(255,255,255,0.03)]"
                                placeholder="Enter text to translate..."
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            ></textarea>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-stone-300 mb-3 tracking-widest uppercase ml-2">
                                Output: Morse Code
                            </label>

                            <div className={`w-full min-h-[160px] p-6 rounded-3xl flex flex-wrap gap-3 items-start content-start transition-all duration-300 relative border-none ${text
                                ? 'bg-stone-900/80 shadow-[inset_6px_6px_12px_rgba(0,0,0,0.6),_inset_-6px_-6px_12px_rgba(255,255,255,0.03)]'
                                : 'bg-stone-800 shadow-[inset_8px_8px_16px_rgba(0,0,0,0.4),_inset_-8px_-8px_16px_rgba(255,255,255,0.02)]'
                                }`}>

                                {text ? (
                                    renderMorseBoxes(text)
                                ) : (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-500 select-none">
                                        <svg className="w-12 h-12 mb-4 opacity-40 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                        <span className="text-sm font-bold tracking-widest uppercase opacity-70">Awaiting Transmission...</span>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
}