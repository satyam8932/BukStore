import User from "../model/userModel.js"
import bcrypt from "bcrypt"

export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body
        // Check if user already exists
        const user = await User.findOne({email})
        if(user) {
            return res.status(409).json({ message: "User already exists" })
        }

        // Hash the password
        const hashPassword = await bcrypt.hash(password, 10)  // 10 salt rounds
        const createUser = new User({ name: name, email: email, password: hashPassword })
        await createUser.save()
        res.status(201).json({message: "User created successfully",  user: {
            _id: createUser._id,
            name: createUser.name,
            email: createUser.email
        }});

    } catch (error) {
        res.status(409).json({ message: "Problem with Registering User" })
    }
};


export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({email})
        if(!user) {
            return res.status(404).json({ message: "User not found" })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" })
        }
        res.status(200).json({ 
            message: "Logged in successfully", 
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        res.status(401).json({ message: "Invalid credentials" })
    }
};
