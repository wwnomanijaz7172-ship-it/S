// Controller
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        
    
        const newUser = await User.create({ name, email, password });
        
        res.status(201).json({ success: true, message: "User registered!", data: newUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await user.comparePassword(password))) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user._id);
    res.status(200).json({ success: true, token });
};




const getProducontrotById = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ success: true, product });
};



const createPost = async (req, res) => {
  const imagePath = req.file ? req.file.path : null; 
    const { title, content } = req.body;

    const newPost = await Post.create({ title, content, image: imagePath });
    res.status(201).json({ message: "Post created successfully", newPost });
};


const updateProfile = async (req, res) => {
    const userId = req.user.id; 
    
    const updatedData = await User.findByIdAndUpdate(userId, req.body, { new: true });
    res.status(200).json({ message: "Profile updated", updatedData });
};



const deleteProduct = async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    
    res.status(200).json({ success: true, message: "Product deleted by Admin" });
};


const processPayment = async (req, res) => {
    const { amount, currency, source } = req.body;

    const charge = await stripe.charges.create({ amount, currency, source });

    res.status(200).json({ success: true, receipt: charge.receipt_url });
};
const updateProfile = async (req, res) => {
    
    const userId = req.user.id; 
    
    const updatedData = await User.findByIdAndUpdate(userId, req.body, { new: true });
    res.status(200).json({ message: "Profile updated", updatedData });
};