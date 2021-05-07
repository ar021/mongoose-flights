const Flight = require("../models/flight");

function index(req, res) {
  Flight.find({}, function (err, flightsArry) {
    console.log(flightsArry);
    res.render("flights", { flightsArry });
  });
}

function newFlight(req, res) {
  res.render("flights/new");
}

function create(req, res) {
  const flight = new Flight(req.body);
  flight.save(function (err) {
    if (err) return res.render("flights/new");
    console.log(flight);
    res.redirect("flights");
  });
}

function show(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    res.render("flights/show", { flight });
  });
}

module.exports = {
  index,
  new: newFlight,
  create,
  show,
};
