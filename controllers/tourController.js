const fs = require('fs');

// Load data
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

// Middleware
exports.checkID = (req, res, next) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  next();
};

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missing name or price',
    });
  }
  next();
};

// Handlers
exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours: tours,
    },
  });
};

exports.getTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((t) => t.id === id);
  if (!tour)
    return res.status(404).json({
      status: 'fail',
      message: 'Not found',
    });

  res.status(200).json({
    status: 'success',
    data: {
      tour: tour,
    },
  });
};

exports.createTour = (req, res) => {
  const newId = tours.at(-1).id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);

  fs.writeFileSync(
    `${__dirname}/../dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
};

exports.updateTour = (req, res) => {
  //TODO; update the tour!
  res.status(200).json({
    status: 'success',
    data: {},
  });
};

exports.deleteTour = (req, res) => {
  //TODO; delete the tour!
  res.status(200).json({
    status: 'success',
    data: {},
  });
};
