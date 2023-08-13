export function getRandomIndex(niz:Array<any>) : number {
    return Math.floor(Math.random() * niz.length);
}

export function getRandomInterval() : number {
    return Math.random() * 800 + 400;
}