const analysisService = require('./analysis.service');


exports.analysisController = async (req, res, next) => {
    try {

        const data =  await analysisService.analysisService()
        return res.status(200).json(data);
    } catch (err) {
        console.log('err', err)
        return res.status(400).json(err);
    }
}