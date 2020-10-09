const router = require("express").Router();
const tasksController = require("../controllers/TaskController");

router.get("/", tasksController.index);

router.post("/", tasksController.store);

router.post("/changeStatus", tasksController.changeStatusAjax);

router.post("/deleteTask", tasksController.deleteTask);

module.exports = router;
