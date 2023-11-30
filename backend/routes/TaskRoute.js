const { Router } = require("express");

const { getTasks, saveTask, deleteTask, updateTask } = require("../controllers/TaskControllers");

// Create a new instance of the router
const router = Router();

// Change this line:
// router.get("/get", getTasks);

// To this:
router.get("/get", async (req, res, next) => {
    await getTasks(req, res, next);
});

router.post("/save", async (req, res, next) => {
    await saveTask(req, res, next);
});

router.put("/update/:id", async (req, res, next) => {
    await updateTask(req, res, next);
});

router.delete("/delete/:id", async (req, res, next) => {
    await deleteTask(req, res, next);
});

module.exports = router;