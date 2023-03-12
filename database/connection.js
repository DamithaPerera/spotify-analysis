const getDBConnectionString = () => {
    const connectionUri = `mongodb+srv://gembo-dev-appuser:P6JgkILWKqubRj3l@cluster0.fp3le.mongodb.net/spotify-search?retryWrites=true&w=majority`;
    console.log('Database connection URI: ', connectionUri);

    return connectionUri;
};

module.exports = getDBConnectionString;
