const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/User');
var nodemailer = require('nodemailer');



const forget = async(req, res) => {
    try {
        const {password,email} = req.body;
        const pass = await bcrypt.hash(password, 10);
        await UserModel.findOneAndUpdate({email:email},{password:pass})
        res.status(205).json({
            message:"Your Password Has been reset please login",
            success:true
        })
    }
    catch {
        res.status(500)
            .json({
                message: "Internal Server Error",
                success: false
            })
    }

}

const sendEmail = async(req, res) => {
    try {
        const { email } = req.body;

        const user = await UserModel.findOne({ email });
        console.log("user ", user);
        if (!user) {
            return res.status(404)
                .json({ message: 'User does not exist, please signup', success: false });
        }

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'raghavcreates1@gmail.com',
                pass: process.env.Pass
            }
        });

        var otp = Math.floor(100000 + Math.random() * 900000);
        var msg = "OTP to reset your password is " + otp.toString();
        console.log("Email ", msg, email);

        var mailOptions = {
            from: 'raghavcreates1@gmail.com',
            to: email,
            subject: 'Password Reset Code',
            text: msg
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                res.status(500).json({
                    message: "Internal Server Error",
                    success: false
                })
            } else {
                console.log('Email sent: ' + info.response);
                res.status(200).json({
                    message: "Email Sent",
                    otp:otp,
                    success: true

                })
            }
        });
    }
    catch {
        res.status(500)
            .json({
                message: "Internal Server Error",
                success: false
            })
    }
}

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409)
                .json({ message: 'User already exists, you can login', success: false });
        }
        const userModel = new UserModel({ name, email, password });
        userModel.password = await bcrypt.hash(password, 10);
        console.log("SIGNUP data ", userModel)
        await userModel.save();
        res.status(201)
            .json({
                message: "Signup Successfully",
                success: true
            })
    }
    catch {
        res.status(500)
            .json({
                message: "Internal Server Error",
                success: false
            })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        console.log("user ", user);
        if (!user) {
            return res.status(404)
                .json({ message: 'User does not exist, please signup', success: false });
        }



        const pass = await bcrypt.compare(password, user.password);
        console.log("pass ", pass);
        if (pass == false) {
            return res.status(403)
                .json({ message: 'invalid credentials', success: false });
        }

        const token = jwt.sign({ email: email, name: user.name }, process.env.JWT_KEY, { expiresIn: '24h' })

        res.status(200)
            .json({
                message: "Login Successful",
                success: true,
                name: user.name,
                email: user.email,
                token: token
            })
    }
    catch {
        res.status(500)
            .json({
                message: "Internal Server Error",
                success: false
            })
    }
}

module.exports = {
    signup, login, forget, sendEmail
}