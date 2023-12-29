import User from '../model/userSchema.js';

export const userLogIn = async (request, response) => {
    try {
        let user = await User.findOne({ email: request.body.email, password: request.body.password });
        if(user) {
            return response.status(200).json(user);
        } else {
            return response.status(401).json({message:error.message});
        }

    } catch (error) {
       return  response.status(500).json({message: error.message});        
    }
}

export const userSignUp = async (request, response) => {
    try {
        const exist = await User.findOne({ email: request.body.email });
        if(Boolean(exist)) {
            return response.status(401).json({ message: 'User already exist'});
        }
        const user = request.body;
        const newUser = new User(user);
        await newUser.save();
        response.status(200).json({ mesage: user });
        
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}



