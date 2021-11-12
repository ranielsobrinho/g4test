import { Request, Response } from "express";
import { getRepository } from 'typeorm'
import { User } from '../models/User'

class UserController {
    async getUsers (req: Request, res: Response) {
        const users = await getRepository(User).find()
        
        if(users.length === 0){
            return res.json({message: "Nenhum usuário cadastrado."})
        }
    
        return res.json(users)
    }

    async getOneUser (req: Request, res: Response) {
        const { id } = req.params
        const user = await getRepository(User).findOne({where: {id}})
    
        if(!user){
            return res.json({message: "Usuário não existente."})
        }
        
        return res.json(user)
    }

    async createUser (req: Request, res: Response) {
        const { CPF } = req.body
    
        const existUser = await getRepository(User).findOne({where: {CPF}})
    
        if(existUser){
            return res.status(400).json({message: "Usuário já existente"})
        }
    
        const user = await getRepository(User).save(req.body)
    
        return res.json(user)
    }

    async updateUser (req: Request, res: Response) {
        const { id } = req.params
        
        const user = await getRepository(User).findOne({where: {id}})
    
        if(!user){
            return res.status(404).json({message: 'Usuário não existente.'})
        }
    
        const updatedUser = await getRepository(User).save(req.body)
    
        return res.status(200).json({message:'Usuário atualizado com sucesso.'})
    
    }

    async deleteUser (req: Request, res: Response) {
        const { id } = req.params
        const user = await getRepository(User).findOne({where: {id}})
    
        if(!user){
            return res.status(404).json({message: 'Usuário não existente.'})
        }
    
        const deleted = await getRepository(User).query(`delete from users where id = ${id}`)
    
        return res.status(200).json({message: 'Usuário deletado com sucesso.'})
    }
}

export default new UserController()