const analysisService = require('./analysis.service');


exports.analysisController = async (req, res, next) => {
    try {
        const {name, description, owner} = req.query
        console.log('owner', name, description, owner)
        const data =  await analysisService.analysisSearchService(name, description, owner)
        return res.status(200).json(data);
    } catch (err) {
        console.log('err', err)
        return res.status(400).json(err);
    }
}