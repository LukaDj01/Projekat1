export function getRandomIndex(niz:Array<any>) {
    return Math.floor(Math.random() * niz.length);
}

export function getRandomInterval() {
    return Math.random() * 3000 + 100;
}