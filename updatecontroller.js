

//CONTROLLER//


const updateapi =require ('../models/updateModel');

exports.getusers = async (req, res) => {
    try {
        const users = await updateapi.find();
        res.status(200).json({ success: true, count: users.length, data: users })
    }
    catch (error) {
        res.status(404).json({ success: false, error: err.message })

    }
};

exports.createusers = async (req, res) => {
    try {
        const newusers = new updateapi({ name: req.body.name });
        const savedusers = await updateapi.save(newusers);
         res.status(200).json({ success: true, message: "data successfully update ho gaya ha", data: savedusers })
    
    } catch (error) {
        res.status(404).json({ success: false, error: err.message })
    }
};

exports.updateusers = async (req, res) => {
    try {
        const targetname = req.params.oldname;
        const newname = req.body.name;

        const updatedata = await updateapi.findOneAndUpdate(
            { name: targetname },
            { $set: { name: newname } },
            { new: true, runValidators: true }
        );
        res.status(200).json({ success: true, message: "data successfully update ho gaya ha", data: updatedata })
    }
    catch (error) {
        res.status(404).json({ success: false, error: error.message });
    }
};

exports.deleteusers = async (req, res) => {

    try {

        const targetname = req.params.name;
        const deleteddata = await updateapi.findOneAnddelete({ name: targetname });
        res.status(200).json({ success: true, message: "data successfully update ho gaya ha", data: deleteddata })
    }
    catch (error) {
        res.status(404).json({ success: false, error: err.message })
    }

}




