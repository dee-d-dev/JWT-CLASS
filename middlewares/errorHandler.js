const { CustomAPIError } = require("../errors/custom-error");
const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(500).json({ msg: err.message });
  }
  return res.status(500).json("something went wrong");
};

module.exports = errorHandler;
