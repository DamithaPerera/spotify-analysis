const playListModel = require('../../models/playlist')


exports.analysisCreateRepo = async (playlists) => {
    return playListModel.create(playlists)
}

exports.analysisRepo = async (name, description, owner) => {
    return playListModel.find({
        $or: [
            {name: {$regex: name, $options: 'i'}},
            {description: {$regex: description, $options: 'i'}},
            {'owner.name': {$regex: owner, $options: 'i'}},
        ]
    }).sort({createdAt: -1})
}