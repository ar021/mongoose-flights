const Flight = require("../models/flight");

function create(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    console.log(flight);
    flight.destinations.push(req.body);
    flight.save(function (err) {
      console.log(flight);
      res.redirect(`/flights/${flight.id}`);
    });
  });
}

module.exports = {
  create,
};
