const playListModel = require('../../models/playlist')


exports.analysisRepo =  async (playlists) => {
     return playListModel.create(playlists)
}