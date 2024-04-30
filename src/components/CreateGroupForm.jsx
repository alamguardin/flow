export default function CreateGroupForm() {
    return (
        <div className="max-w-lg m-auto my-9">
            <h1 className="font-bold text-slate-950 text-4xl mb-2">Flow</h1>
            <div className="flex gap-4">
                <input 
                    type="text"
                    className="w-full py-2 px-3 outline-none bg-slate-50 border-2 border-slate-200 rounded-md font-sans text-sm font-semibold text-slate-800 focus:border-blue-300"
                    placeholder="Type a name group"
                />
                <button
                    className="py-2 px-3 bg-violet-500 outline-none rounded-md font-sans text-sm font-semibold text-slate-50"
                >Create</button>
            </div>
        </div>
    )
}