/************
 * DATABASE *
 ************/
var db = require("../models");
// GET /api/albums
function index(req, res) {
  console.log('in index, res is', res)
  // send back all albums as JSON
  db.Album.find({}).exec(function(err,albums){
    res.json(albums);
  })
}

// POST /api/albums
function create(req, res) {
  var genre = req.body.genre.split(",");
  db.Album.create({
    artistName: req.body.artist,
    name: req.body.album,
    releaseDate: req.body.releaseDate,
    genres: genre,
  },function(err,album){
  });
}

// GET /api/albums/:albumId
function show(req, res) {
  // find one album by id and send it back as JSON
}

// DELETE /api/albums/:albumId
function destroy(req, res) {
  // find one album by id, delete it, and send it back as JSON
}

// PUT or PATCH /api/albums/:albumId
function update(req, res) {
  // find one album by id, update it based on request body,
  // and send it back as JSON
}


// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
