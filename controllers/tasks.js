const getAllTasks = (req, res) =>{
    res.send("タスク全取得");
}
const createTask = (req, res) =>{
    res.send("タスク新規作成");
}

const getSingleTask = (req, res) =>{
    res.send("タスク新規作成");
}

const updateTask = (req, res) =>{
    res.send("タスク更新");
}

const deleteTask = (req, res) =>{
    res.send("タスク削除");
}

module.exports = {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
}