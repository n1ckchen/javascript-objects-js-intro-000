const playlist = {
  'Nick Chen': 'True Man'

}

function updateplaylist(playlist, artisName, songTitle) {
  playlist[artisName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;

}
