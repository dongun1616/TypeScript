class Player {
    readonly first: string;
    readonly last: string;
    private score: number = 0;
    // #score: number = 0;
    constructor(first: string, last: string) {
        this.first = first;
        this.last = last
    }

    private secretMethod(): void {
        console.log("secret method!")
    }
}
const elton = new Player("Elton", "Steele")