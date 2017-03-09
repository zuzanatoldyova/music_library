function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

function Playlist(name) {
  this.name = name;
  this.tracks = [];
}

function Track(title, rating, length) {
  this.title = title;
  this.rating = Number(rating);
  this.length = Number(length);
}

Library.prototype.addPlaylist = function(playlist) {
  this.playlists.push(playlist);
};

Playlist.prototype.addTrack = function(track) {
  this.tracks.push(track);
};

Playlist.prototype.overallRating = function() {
  let sum = this.tracks.reduce((acc, track) => {
    return acc + track.rating;
  }, 0);
  return (sum / this.tracks.length);
};

Playlist.prototype.totalDuration = function() {
  return this.tracks.reduce((acc, track) => {
    return acc + track.length;
  }, 0);
};

let library = new Library('new', 'zuzana');
let playlist = new Playlist('dancing');
let track = new Track('hello', 4, 4525);
let track2 = new Track('hi', 3, 4512);
let track3 = new Track('bye', 1, 1862);
let track4 = new Track('bye', 'no', 1862);

library.addPlaylist(playlist);
playlist.addTrack(track);
playlist.addTrack(track2);
playlist.addTrack(track3);
console.log(playlist.overallRating());

console.log(playlist.totalDuration());
console.log(track4);
console.log(playlist);
console.log(library);