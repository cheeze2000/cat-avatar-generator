import { useState } from "react";

import Selector from "~/components/Selector";

function randInt(n) {
    return Math.floor(Math.random() * n) + 1;
}

function Customiser() {
    const [body, setBody] = useState(randInt(15));
    const [fur, setFur] = useState(randInt(10));
    const [eyes, setEyes] = useState(randInt(15));
    const [mouth, setMouth] = useState(randInt(10));
    const [acc, setAcc] = useState(randInt(20));

    return (
        <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
                <Selector name="Body" cur={body} max={15} onChange={setBody} />
                <Selector name="Fur" cur={fur} max={10} onChange={setFur} />
                <Selector name="Eyes" cur={eyes} max={15} onChange={setEyes} />
                <Selector name="Mouth" cur={mouth} max={10} onChange={setMouth} />
                <Selector name="Accessory" cur={acc} max={20} onChange={setAcc} />
            </div>
            <div className="relative mx-auto max-w-[256px] aspect-square">
                <img
                    src={`/api/cat?parts=${[body, fur, eyes, mouth, acc]}`}
                    alt="generated cat avatar"
                    width="256"
                    height="256"
                />
            </div>
        </div>
    );
}

export default Customiser;
