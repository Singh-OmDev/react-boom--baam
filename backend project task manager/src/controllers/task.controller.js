import Task from "../models/Task.js";



//delete task

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      user: req.userId, // 🔥 ownership check again
    });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found or unauthorized",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Task deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



 
//update task 

export const updateTask = async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      user: req.userId, // 🔥 ownership check
    });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found or unauthorized",
      });
    }

    task.title = req.body.title ?? task.title;
    task.description = req.body.description ?? task.description;

    await task.save();

    return res.status(200).json({
      success: true,
      task,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



/* GET MY TASKS */
export const getMyTasks = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;

    const skip = (page - 1) * limit;

    const tasks = await Task.find({ user: req.userId })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalTasks = await Task.countDocuments({
      user: req.userId,
    });

    return res.status(200).json({
      success: true,
      page,
      totalPages: Math.ceil(totalTasks / limit),
      totalTasks,
      tasks,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    const task = await Task.create({
      title,
      description,
      user: req.userId, // comes from auth middleware
    });

    res.status(201).json({
      success: true,
      message: "Task created",
      task,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }


  

};
