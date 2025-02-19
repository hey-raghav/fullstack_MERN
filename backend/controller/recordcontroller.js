const ExpenseModel = require('../models/Expenses');

const find = (req, res) => {
    res.send("FIND")
}

const insert = async(req, res) => {
    try {
        const { title,amount,type,date,email } = req.body;
        
        const expenseModel = new ExpenseModel({ title,amount,type,date,email });
        
        
        await expenseModel.save();
        res.status(201)
            .json({
                message: "Expense Saved Successfully",
                success: true
            })
    }
    catch {
        res.status(500)
            .json({
                message: "Internal Server Error",
                success: false
            })
    }
}

const del = (req, res) => {
    res.send("Delete")
}

const modify = (req, res) => {
    res.send("Modify")
}

const reset = (req, res) => {
    res.send("Reset")
}


module.exports = {
    find, insert, del, modify,reset

}