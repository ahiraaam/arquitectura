const Task = require("../models/Task");

exports.index = async (req, res) => {
  await Task.all().then((todos) => {
    res.json(todos);
  });
};

exports.store = async (req, res) => {
  let task = {};
  task.description = req.body.description;
  task.status = req.body.status;
  await Task.create(task).then((id) => {
    console.log("Task created with id: ", id);
    res.json({ id: id });
  });
};

exports.changeStatusAjax = async (req, res) => {
  let id = req.body.id;
  console.log("taskid", id);
  return await Task.changeStatus(id).then(() => {
    console.log("Done ", id);
    res.json("Task updated");
  });
};

exports.deleteTask = async (req, res) => {
  let id = req.body.id;
  console.log("Delete with,", id);
  await Task.delete(id).then(() => {
    console.log("Task deleted with id: ", id);
    res.json("Task deleted");
  });
};
