const SpotifyWebApi = require('spotify-web-api-node');
const axios = require("axios");
const {analysisRepo} = require("./analysis.repo");
const cron = require('node-cron');


const spotifyApi = new SpotifyWebApi({
    clientId: 'c4829b6cb907446882351fc71edd1043',
    clientSecret: '4141ecf0216b4370aeb66a613d1436c5',
});

analysisService = async () => {
    const token = await spotifyApi.clientCredentialsGrant();

    const query = 'Summer,phonk,car music, workout, running, morning music, electronic music, deep house';
    const limit = 50;

    let playlists = [];
    let total = limit;

    while (playlists.length < total) {
        const response = await axios.get('https://api.spotify.com/v1/search', {
            params: {
                q: query,
                type: 'playlist',
                market: 'ES',
                limit: limit,
                offset: playlists.length,
                include_external: 'href'
            },
            headers: {
                'Authorization': 'Bearer ' + token.body['access_token'],
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        playlists = playlists.concat(response.data.playlists.items);
        total = response.data.playlists.total;
        console.log('ddd', total);
        await analysisRepo(playlists);
    }

    console.log('Retrieved', playlists.length, 'playlists.');
    return playlists;

}

// Schedule the function to run once per day at 12:00 AM
cron.schedule('0 0 * * *', async () => {
    console.log('Fetching playlists from Spotify API...');
    const playlists = await analysisService();
    console.log('Done!');
});