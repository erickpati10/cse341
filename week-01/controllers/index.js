const personName = (req, res, next) => {
  res.json("Ashley");
};

const fullName = (req, res, next) => {
  res.json("Ashley Patino");
};

module.exports = { personName, fullName };
