import { Request, Response, NextFunction } from "express";

export const verifySession = (req: Request, res: Response, next: NextFunction) => {
    if (req.session.user) {
        next();
    } else {
        res.status(401).json({ message: "Unauthorized access" });
    }
};

export const createSession = (req: Request, user: any) => {
    req.session.user = { id: user._id, username: user.username };
};
