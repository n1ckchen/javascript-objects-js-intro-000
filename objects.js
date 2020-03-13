const playlist = {
  'Nick Chen': 'True Man'

}

function updateplaylist (playlist, artisName, songTile) {
  playtlist.artisName = songTile;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;

}
