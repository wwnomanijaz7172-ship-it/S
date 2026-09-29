
const postapi = require('./postmodels');


exports.getuser = async (req, res) => {
    try {
        const serchusers = await postapi.find();
        res.status(200).json({ success: true, message: "sare users search ho gaye ha ", data: serchusers })
    } catch (error) {
        res.status(500).json({ success: false, message: "sare users find nahe howa ha ", error: message.error })
    }
};
exports.postuser = async (req, res) => {
    try {

        const newclient = await postapi.create(req.body);
        res.status(200).json({ success: true, message: "sare users search ho gaye ha ", data: newclient })
    }
    catch (error) {
        res.status(500).json({ success: false, message: "sare users find nahe howa ha ", error: message.error })
    }
};
exports.updateuser = async (req, res) => {
    try {
        const userid = req.params.id;
        const updatedata = req.body;
        const updateddata = await postapi.findByIdAndUpdate(
            userid,
            { $set: updatedata },
            { new: true }
        );

        res.status(200).json({ success: true, message: "data update ho gaya ha ", data: updateddata });
    }
    catch (error) {
        res.status(500).json({ success: false, message: "data update nhe huwa", error: error.message });
    }
};
exports.deleteuser = async (req, res) => {
    try {
        const deletedata = await postapi.deleteMany({ _id: { $in: req.body.ids } })
        res.status(200).json({ success: true, message: "data delete ho gaya ha ", data: deletedata });
    } catch (error) {
        res.status(500).json({ success: false, message: "data delete nhe huwa", error: error.message });
    }
}
                       0