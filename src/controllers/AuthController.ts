import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { sign } from 'jsonwebtoken'

import { User } from '../models/User'

class AuthController {
    async authenticate(req: Request, res: Response){
        const repository = getRepository(User)
        const { username, codigo_agente } = req.body

        const user = await repository.findOne({where: {username}})

        if(!user){
            return res.status(404).json({message: 'Nenhum usuário cadastrado.'})
        }

        const token = sign({id: user.id}, process.env.secretKey, {expiresIn: '1d'})

        if(codigo_agente === user.codigo_agente){
            return res.json({
                token,
                userId: user.id
            })
        }
    }
}

export default new AuthController()