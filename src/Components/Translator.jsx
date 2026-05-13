import { useState } from 'react';
import InputBox from './InputBox';
import MorseOutput from './MorseOutput';

export default function Translator() {
    const [text, setText] = useState('');

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 font-sans text-stone-100 bg-stone-900 overflow-hidden
            bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] 
            bg-[size:40px_40px]">

            <div className="relative z-10 w-full max-w-3xl">

                <div className="bg-stone-800 rounded-[40px] p-8 md:p-12 w-full flex flex-col border-none shadow-[20px_20px_40px_rgba(0,0,0,0.6),_inset_-10px_-10px_20px_rgba(0,0,0,0.5),_inset_10px_10px_20px_rgba(255,255,255,0.06)]">

                    <div className="pb-5 mb-8 flex justify-between items-end border-b border-white-900/50">
                        <div>
                            <h2 className="text-3xl font-bold text-white tracking-wide">
                                Morse Code Translator
                            </h2>
                        </div>
                    </div>

                    <div className="space-y-8">

                        <InputBox text={text} setText={setText} />

                        <MorseOutput text={text} />

                    </div>

                </div>
            </div>
        </div>
    );
}