import crypto from "crypto";
import path from "path";
import seedrandom from "seedrandom";
import sharp from "sharp";

const cache = new Map();
const dir = path.join(process.cwd(), "assets");

async function buildCat(parts) {
    const cat = await cacheCat(parts.slice(0, 3));

    const names = ["mouth", "accessorie"];
    const paths = names.map((name, i) => {
        const n = parts[i + 3].toString().padStart(2, "0");
        const png = `${name}_${n}.png`;
        return path.join(dir, png);
    });

    return sharp(cat)
        .composite(paths.map(a => ({ input: a })))
        .png()
        .toBuffer();
}

async function cacheCat(parts) {
    const key = parts.join(" ");
    if (cache.has(key)) return cache.get(key);

    const names = ["body", "fur", "eyes"];
    const paths = names.map((name, i) => {
        const n = parts[i].toString().padStart(2, "0");
        const png = `${name}_${n}.png`;
        return path.join(dir, png);
    });

    const buffer = await sharp({
        create: {
            width: 256,
            height: 256,
            channels: 4,
            background: { r: 0, g: 0, b: 0, alpha: 0 },
        },
    })
        .composite(paths.map(a => ({ input: a })))
        .png()
        .toBuffer();

    cache.set(key, buffer);
    return buffer;
}

function hash(input) {
    return crypto.createHash("sha256").update(input ?? "").digest("hex");
}

function randInt(rng, n) {
    return Math.floor(rng() * n) + 1;
}

function randomParts(seed) {
    const rng = seedrandom(seed);
    return [15, 10, 15, 10, 20].map(n => randInt(rng, n));
}

export default async function handler(req, res) {
    let buffer;
    if ("parts" in req.query) {
        const parts = req.query.parts.split(",").map(Number);
        try {
            buffer = await buildCat(parts);
        } catch (_) {
            return res.status(422).end();
        }
    } else {
        const seed = hash(req.query.name ?? "");
        const parts = randomParts(seed);
        buffer = await buildCat(parts);
    }

    res.setHeader("Content-Type", "image/png");
    res.send(buffer);
}
