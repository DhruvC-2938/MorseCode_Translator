export default function MorseCard({ morse, char }) {

    if (char === ' ') {
        return <div className="w-6 h-10"></div>;
    }

    return (
        <div
            className="px-4 py-2 bg-stone-700 rounded-xl flex items-center justify-center transition-all duration-200 cursor-default
            text-amber-400 font-mono text-2xl tracking-[0.1em] font-bold
            shadow-[6px_6px_12px_rgba(0,0,0,0.4),_inset_-3px_-3px_6px_rgba(0,0,0,0.3),_inset_3px_3px_6px_rgba(255,255,255,0.08)]
            hover:shadow-[10px_10px_20px_rgba(0,0,0,0.6),_inset_-3px_-3px_6px_rgba(0,0,0,0.3),_inset_3px_3px_6px_rgba(255,255,255,0.1)] 
            hover:bg-stone-600 hover:scale-105 hover:-translate-y-1"
        >
            <span>{morse}</span>
        </div>
    );
}