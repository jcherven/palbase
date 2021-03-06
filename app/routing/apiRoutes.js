// API endpoint routing
/* 
Your apiRoutes.js file should contain two routes:
    A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
    A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
*/

const path = require('path');

module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        console.log('API endpoint hit: http get');
        res.sendFile(path.join(__dirname, '../data/pals.json'))

    });

    app.post('/api/friends', function(req, res){
        console.log('API enpoint hit: http post');

    });
};