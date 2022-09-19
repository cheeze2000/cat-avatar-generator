import { useState } from "react";

function Selector({ cur, max, name, onChange }) {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex justify-between select-none">
                <div
                    className="flex items-center px-3 text-xl sm:text-2xl text-white bg-pcorange rounded-l-lg cursor-pointer"
                    onClick={() => onChange((cur + max - 2) % max + 1)}
                >
                    <svg width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18.29 17.29a.996.996 0 0 0 0-1.41L14.42 12l3.88-3.88a.996.996 0 1 0-1.41-1.41L12.3 11.3a.996.996 0 0 0 0 1.41l4.59 4.59c.38.38 1.01.38 1.4-.01z"></path><path fill="currentColor" d="M11.7 17.29a.996.996 0 0 0 0-1.41L7.83 12l3.88-3.88a.996.996 0 1 0-1.41-1.41L5.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59c.38.38 1.01.38 1.4-.01z"></path></svg>
                </div>
                <div className="grow py-3 font-source text-xl sm:text-2xl text-center border-y border-pcorange">
                    {name} {cur}
                </div>
                <div
                    className="flex items-center px-3 text-xl sm:text-2xl text-white bg-pcorange rounded-r-lg cursor-pointer"
                    onClick={() => onChange(cur % max + 1)}
                >
                    <svg width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5.7 6.71a.996.996 0 0 0 0 1.41L9.58 12L5.7 15.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L7.12 6.71c-.39-.39-1.03-.39-1.42 0z"></path><path fill="currentColor" d="M12.29 6.71a.996.996 0 0 0 0 1.41L16.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L13.7 6.7c-.38-.38-1.02-.38-1.41.01z"></path></svg>
                </div>
            </div>
        </div>
    );
}

export default Selector;
