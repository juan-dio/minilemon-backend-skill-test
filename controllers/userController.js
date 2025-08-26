const { User } = require('../models');

const createUser = async (req, res, next) => {
  try {
    const { name, email, phone, department } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.code = 400;
      throw new Error('User already exists');
    }

    const user = new User({ name, email, phone, department, isActive: true });

    await user.save();
    
    res.status(201).json({
      code: 201,
      status: true,
      message: 'User created successfully',
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          department: user.department
        }
      }
    });
  } catch (error) {
    next(error);
  }
}

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(200).json({
      code: 200,
      status: true,
      message: 'Users retrieved successfully',
      data: {
        users
      }
    });
  } catch (error) {
    next(error);
  }
}

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, email, phone, department } = req.body;

    // check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser && existingUser._id.toString() !== id) {
      res.code = 400;
      throw new Error('Email already in use');
    }

    const user = await User.findByIdAndUpdate(id, { name, email, phone, department }, { new: true });
    if (!user) {
      res.code = 404;
      throw new Error('User not found');
    }

    res.status(200).json({
      code: 200,
      status: true,
      message: 'User updated successfully',
      data: {
        user
      }
    });
  } catch (error) {
    next(error);
  }
}

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      res.code = 404;
      throw new Error('User not found');
    }

    res.status(200).json({
      code: 200,
      status: true,
      message: 'User deleted successfully',
      data: null
    });
  
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser
};
