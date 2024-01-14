const awesomeFunction = (req, res, next) => {
  res.json("Ashley Patino");
};

const fullName = (req, res, next) => {
  res.json("Erick Patino");
};

module.exports = { awesomeFunction, fullName };
