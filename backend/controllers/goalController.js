// @des     Get Goals
// @route   GET /api/goals
// @access  Private
const getGoals = (req, res) => {
    res.status(200).json({message:'Get Goals'})
}

// @des     Set Goals
// @route   POST /api/goals
// @access  Private
const setGoal = (req, res) => {
    res.status(200).json({message:'Post Goals'})
}

// @des     Upate Goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = (req, res) => {
    res.status(200).json({message: `Update Goals ${req.params.id}` })
}

// @des     Delete Goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = (req, res) => {
    res.status(200).json({message: `Delete Goals ${req.params.id}`}) 
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}