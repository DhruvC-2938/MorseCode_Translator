import { MORSE_CODE_DICT } from '../utils/morsecode';
import MorseCard from './MorseCard';

export default function MorseOutput({ text }) {

    const renderMorseBoxes = (input) => {
        return input
            .toUpperCase()
            .split('')
            .map((char, index) => {

                const morse = MORSE_CODE_DICT[char] || '?';

                return (
                    <MorseCard
                        key={`${char}-${index}`}
                        morse={morse}
                        char={char}
                    />
                );
            });
    };

    return (
        <div>

            <label className="block text-sm font-semibold text-stone-300 mb-3 tracking-widest uppercase ml-2">
                Output: Morse Code
            </label>

            <div
                className={`w-full min-h-[160px] p-6 rounded-3xl flex flex-wrap gap-3 items-start content-start transition-all duration-300 relative border-none ${text
                    ? 'bg-stone-900/80 shadow-[inset_6px_6px_12px_rgba(0,0,0,0.6),_inset_-6px_-6px_12px_rgba(255,255,255,0.03)]'
                    : 'bg-stone-800 shadow-[inset_8px_8px_16px_rgba(0,0,0,0.4),_inset_-8px_-8px_16px_rgba(255,255,255,0.02)]'
                    }`}
            >

                {text ? (
                    renderMorseBoxes(text)
                ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-500 select-none">

                        <svg
                            className="w-12 h-12 mb-4 opacity-40 drop-shadow-md"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                        </svg>

                        <span className="text-sm font-bold font-mono tracking-widest uppercase opacity-70">
                            Awaiting Transmission...
                        </span>

                    </div>
                )}

            </div>
        </div>
    );
}