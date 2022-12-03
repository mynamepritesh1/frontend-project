import { Router } from "express";
import { sample_users } from "../data";
import jwt from "jsonwebtoken";
import asynceHandler from 'express-async-handler'
import { User, UserModel } from "../models/user.model";
import { HTTP_BAD_REQUEST, HTTP_UNAUTHORIZED } from "../constants/http_status";
import bcrypt from 'bcryptjs'



const router = Router();

router.get("/seed", asynceHandler(
    async (req, res) => {
        const usersCount = await UserModel.countDocuments();
        if (usersCount > 0) {
            res.send("Seed is already done!")
            return;
        }
        await UserModel.create(sample_users);
        res.send("Seed is Done");

    }
))


router.post("/login", asynceHandler(
    async (req, res) => {
        const { email, password } = req.body

        const user = await UserModel.findOne({ email, password });

        if (user) {
            res.send(generateTokenResponse(user));
        } else {
            res.status(HTTP_BAD_REQUEST).send("username or password is invalid");
        }
    }))

router.post("/register", asynceHandler(async (req, res) => {
    const { name, email, password, address } = req.body

    const user = await UserModel.findOne({ email });
    if (user) {
        res.status(HTTP_BAD_REQUEST).send("User already presend please login");
        return;
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const newUser: User = {
        id: '',
        name,
        email: email.toLowerCase(),
        password: encryptedPassword,
        address,
        isAdmin: false
    }

    const dbUser = await UserModel.create(newUser);
    res.send(generateTokenResponse(dbUser));
}))
const generateTokenResponse = (user: any) => {
    const token = jwt.sign({
        id: user.id, email: user.email, isAdmin: user.isAdmin

    }, process.env.JWT_SECRET! , {
        expiresIn: "30d"
    });

    return {
        id: user.id,
        email: user.email,
        name: user.name,
        address: user.address,
        isAdmin: user.isAdmin,
        token: token
    }

}

export default router;
// function asynceHandler(arg0: (req: any, res: any) => Promise<void>): import("express-serve-static-core").RequestHandler<{}, any, any, import("qs").ParsedQs, Record<string, any>> {
//     throw new Error("Function not implemented.");
// }

