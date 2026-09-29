const getapi = require('./getmodel');

exports.getusers = async (req, res) => {
    try {
        const finduser = await getapi.find({ _id: { $in: [id1, id2] } });
        res.status(200).json({ success: true, message: "data get ho gaya ha ", data: finduser })
    }
    catch (error) {
        res.status(404).json({
            message: "data get nhe huwa", error: error.message
        })
    }
};

exports.postusers = async (req, res) => {
    try {
       
        const savedusers = await getapi.create(req.body);
       
        res.status(200).json({ success: true, message: "new data add ho gaya database ma ", data: savedusers });
    } catch (error) {
        res.status(404).json({ message: "data add nhe huwa", error: error.message })
    }
}

exports.putusers = async (req, res) => {
    try {
        const targetid= req.params.id;    
            const userid=req.body;

        const updatedData = await getapi.findByIdAndUpdate(
            targetid, 
            { $set: userid },     
            { new: true },{ returnDocument: 'after', runValidators: true }
        );


        return res.status(200).json({
            success: true,
            message: "Update ho gaya!",
            data: updatedData
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
exports.deleteusers = async (req, res) => {
    try {
       
        const resuilt = await getapi.deleteMany({ _id: { $in: req.body.ids } });
        
        res.status(200).json({ 
            success: true, 
            message: ` documents delete ho gaye`, 
            deletedCount: resuilt 
        });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};


