export default function CreateGroupForm() {
    return (
        <div className="max-w-lg m-auto my-9">
            <h1 className="font-bold text-slate-50 text-4xl mb-2">Flow</h1>
            <div className="flex gap-4">
                <input 
                    type="text"
                    className="w-full py-2 px-3 outline-none bg-slate-900 border-2 border-slate-800 rounded-md font-sans text-sm font-semibold text-slate-300 focus:border-violet-500"
                    placeholder="Type your task"
                />
                <button
                    className="py-2 px-3 bg-violet-500 outline-none rounded-md font-sans text-sm font-semibold text-slate-50 hover:bg-violet-400 active:bg-violet-300"
                >Create</button>
            </div>
        </div>
    )
}