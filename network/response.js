exports.success = function (req, res, message, status) {
  res.status(status || 200).send({ error: "", body: message });
};

exports.error = function (req, res, message, status,details) {
  console.error('[error]',details)
  res.status(status || 200).send({ error: message, body: '' });
};
