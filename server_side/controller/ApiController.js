const userModel = require('../model/userModel');

const addUser = async (req, res) => {
    try {
        const User = await new userModel({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            salary: req.body.salary,
        })
        const result = await User.save()
        res.status(201).json({ success: true, msg: "data added successfully", data: result })

    }
    catch (ex) {
        console.log(ex);

        res.status(404).json({ success: false, msg: "data not save" })
    }
}

const getuser = async (req, res) => {
    try {
        const alldata = await userModel.find()
        res.status(200).json({ success: true, msg: "fetch data", data: alldata })
    }
    catch (ex) {
        res.status(404).json({ success: false, msg: "Data not found" })
    }
}
//edit
const edit = async (req, res) => {

    try {
        const id = req.params.id
        const edit = await userModel.findById(id);
        res.status(200).json({ success: true, msg: "get Single data", data: edit })
    } catch (error) {
        res.status(404).json({ success: false, msg: "data not found" })
    }
}


//update
const Userupdate = async (req, res) => {
    try {
        const _id = req.params.id
        const updateUser = await userModel.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.status(201).json({ success: true, msg: "Employee succussfully Update", data: updateUser })

    } catch (ex) {
        res.status(404).json({ success: false, msg: "Employee Not Update" })
    }
}


// delete
const deleteUser = async (req, res) => {
    try {
        const alldata = await userModel.findByIdAndDelete(req.params.id)
        return res.status(206).json({ success: true, msg: "delete successfully", data: alldata })

    }
    catch (ex) {
        res.status(500).json({ success: false, msg: "data not delete" })
    }
}



module.exports = {
    addUser,
    getuser,
    edit,
    Userupdate,
    deleteUser
}