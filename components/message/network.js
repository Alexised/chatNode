const express = require("express");
const router = express.Router();
const response = require("../../network/response");
const controller = require("./controller");

router.get("/", function (req, res) {
  const filterMessages = req.query.user || null;
  controller.getMessages(filterMessages)
  .then((messageList) => {
    response.success(req, res, messageList, 200);
  }).catch(e => {
    response.error(req, res, "Unexpected Error", 500, e);
  });
});

router.post("/", function (req, res) {
  controller
    .addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201);
    })
    .catch((e) => {
      response.error(
        req,
        res,
        "informacion invalida",
        400,
        "error en el controlador"
      );
    });
});

router.patch("/:id", function (req, res) {
  controller.updateMessage(req.params.id, req.body.message)
  .then((data) => {
    response.success(req, res, data, 200);
  })
  .catch(e => {
    response.error(req, res, "Error interno", 500, e);
  });
});

router.delete("/:id", function (req, res) {
  controller.deleteMessage(req.params.id)
  .then(() => {
    response.success(req, res, `mensaje ${req.params.id} eliminado`, 200);
  })
  .catch(e => {
    response.error(req, res, "Error interno", 500, e);
  });
});

module.exports = router;
