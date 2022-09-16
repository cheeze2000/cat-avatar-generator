import crypto from "crypto";
import path from "path";
import seedrandom from "seedrandom";
import sharp from "sharp";

function hash(input) {
    return crypto.createHash("sha256").update(input ?? "").digest("hex");
}

function randInt(rng, n) {
    return Math.floor(rng() * n) + 1;
}

function randomAssets(seed) {
    const dir = path.join("public", "cat");
    const rng = seedrandom(seed);

    const assets = [
        ["body", randInt(rng, 15)],
        ["fur", randInt(rng, 10)],
        ["eyes", randInt(rng, 15)],
        ["mouth", randInt(rng, 10)],
        ["accessorie", randInt(rng, 20)],
    ];

    return assets.map(([part, i]) => {
        const n = i.toString().padStart(2, "0");
        const png = `${part}_${n}.png`;
        return path.join(dir, png);
    });
}

export default async function handler(req, res) {
    const { name } = req.query;
    const seed = hash(name);
    const assets = randomAssets(seed);

    const buffer = await sharp({
        create: {
            width: 256,
            height: 256,
            channels: 4,
            background: { r: 0, g: 0, b: 0, alpha: 0 },
        },
    })
        .composite(assets.map(a => ({ input: a })))
        .png()
        .toBuffer();

    res.setHeader("Content-Type", "image/png");
    res.send(buffer);
}
