export default function LandingPage({ onEnter }) {
    return (

        <div className="min-h-screen flex flex-col items-center justify-center p-6 font-sans text-stone-100 bg-stone-900 overflow-hidden
            bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] 
            bg-[size:40px_40px]">


            <div className="bg-stone-800 rounded-[40px] p-20 max-w-xl w-full text-center border-none shadow-[20px_20px_40px_rgba(0,0,0,0.6),_inset_-10px_-10px_20px_rgba(0,0,0,0.5),_inset_10px_10px_20px_rgba(255,255,255,0.06)]">

                <h1 className="text-3xl font-bold mb-2 text-white font-mono tracking-wide">Morse Code Translator</h1>
                <p className="text-stone-400 mb-6 text-sm font-medium uppercase tracking-[4px]">
                    React JS Mini Project
                </p>


                <hr className="mb-6 border-none h-[2px] bg-white shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5),_inset_-1px_-1px_2px_rgba(255,255,255,0.05)]" />

                <p className="text-stone-300 mb-8 leading-relaxed">
                    A web application designed to convert standard English text into Morse code dots and dashes in real-time.
                </p>


                <button
                    onClick={onEnter}
                    className="px-8 py-3 bg-stone-700 rounded-2xl text-white font-bold tracking-[5px] transition-all duration-200 cursor-pointer 
                    shadow-[8px_8px_16px_rgba(0,0,0,0.4),_inset_-4px_-4px_8px_rgba(0,0,0,0.3),_inset_4px_4px_8px_rgba(255,255,255,0.1)] 
                    hover:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.6),_inset_-6px_-6px_12px_rgba(255,255,255,0.05)] hover:bg-stone-800 hover:scale-[0.98]"
                >
                    START
                </button>
            </div>

        </div>
    );
}