
const deleteapi = require('./delete model');


exports.getusers = async (req, res) => {
    try {
        const allusers = await deleteapi.find();
        res.status(201).json({ success: true, message: "all users find it", data: allusers })
    } catch (error) {
        res.status(500).json({ success: false, message: "all users can not find it", error: error.message })
    }
}
exports.postusers = async (req, res) => {
    try {
        const savedusers = await deleteapi.create(req.body)
        res.status(201).json({ success: true, message: "all users create it", data: savedusers })
    } catch (error) {
        res.status(500).json({
            success: false, message: "all users cannot create it", error: error.message
        })
    }
}
exports.putusers = async (req, res) => {
    try {
        const data = req.params.id;
        const newupdate = req.body;
        const updated = await deleteapi.findByIdAndUpdate(
             data ,
            { $set: newupdate },
            { new: true, runValidators: true, strict: false });
        res.status(202).json({ success: true, message: "all users update", data: updated });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "all users cannot update",
            error: error.message
        });
    }
}
exports.deleteusers = async (req, res) => {
    try {
        const {id}=req.params;
        const deletedata = await deleteapi.findByIdAndDelete(id);
        res.status(201).json({ success: true, message: "all usersA deleted", data: deletedata })
    } catch (error) {
        res.status(500).json({ success: false, message: "all users cannot deleted", error: error.message })
    }
} 