

//CONTROLLER//


const updateapi = require('./updatemodel');
exports.getusers = async (req, res) => {
    try {
        const users = await updateapi.find();
        res.status(200).json({ success: true, count: users.length, data: users })
    }
    catch (error) {
        res.status(404).json({ success: false, error: error.message })

    }
};

exports.createusers = async (req, res) => {
    try {
        const newusers = new updateapi(req.body);
        const savedusers = await newusers.save();
        
        res.status(200).json({ success: true, message: "data successfully update ho gaya ha", data: savedusers })
    }
     catch (error) {
        res.status(404).json({ success: false, error: error.message })
    }
};

exports.patchusers= async (req, res) => {
    try {
        const id= req.params.id;
        const updates = req.body; 
     const updated = await updateapi.findByIdAndUpdate(
    id,
    { $set: updates },
    { 
        new: true, 
        runValidators: true,
        strict: false // 👈 Yeh line lazmi add karein taake nayi fields allow hon
    }
);

        res.status(200).json({
            message: "Document successfully update ho gaya!", data: updated });

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}



exports.deleteusers = async (req, res) => {
    try {
        const id= req.params.id;
        const deleteddata = await updateapi.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "data successfully delete ho gaya ha", data: deleteddata });
    }
    catch (error) {
        res.status(404).json({ success: false, error: error.message });
    }
}




