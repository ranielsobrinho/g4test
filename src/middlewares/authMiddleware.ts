import { Response, Request, NextFunction } from "express";
import { verify } from 'jsonwebtoken'

export default function authenticate (req: Request, res: Response, next: NextFunction){

    try{
        const token = req.headers.authorization.split(' ')[1]
        const decode = verify(token, process.env.secretKey)
        if(decode){
            next()
        }
    }catch (error) {
        return res.status(401).json({message: 'Falha na autenticação'})
    }
}