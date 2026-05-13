export default function InputBox({ text, setText }) {
    return (
        <div>
            <label
                htmlFor="english-text"
                className="block text-sm font-semibold text-stone-300 mb-3 tracking-widest uppercase ml-2"
            >
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
    );
}