const find = (req, res) => {
    res.send("FIND")
}

const insert = (req, res) => {
    res.send("Insert")
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