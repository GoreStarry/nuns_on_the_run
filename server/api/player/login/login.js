var Player = require('../../../mongo/schema/sk_player');

var Login = function(req, res) {
    const name = req.body.name;
    Player
        .findOne({
            name: name
        })
        .exec()
        .then((data) => {
            console.log(data);
            if (!data) {
                var newPlayer = new Player({
                    name: name
                });
                newPlayer
                    .save()
                    .then((data) => {
                        res.send(data);
                        // res.redirect(`/player/cam/${name}`)
                    })
                    .catch((err) => {
                        res.send(err);
                    })
            } else {
                res.send(data);
                // res.redirect(`/player/cam/${name}`)

            }
        })
        .catch((err) => {
            console.log('err');
            console.log(err);
            res.send(err)
        })
}

module.exports = Login;