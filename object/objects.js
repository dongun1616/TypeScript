function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
printName({ first: "Lim", last: "Dongun" });
var singer = { first: "Mick", last: "Jagger", age: 47 };
printName(singer);
var coordinate = { x: 34, y: 2 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 12873321,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
};
calculatePayout(mySong);
printSong(mySong);
