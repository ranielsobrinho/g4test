import { Request, Response } from "express";
import { getRepository } from 'typeorm'
import { User } from '../models/User'

export const getUsers = async (req: Request, res: Response) => {
    const users = await getRepository(User).find()
    
    if(!users){
        return res.json({message: "Nenhum usuário cadastrado."})
    }

    return res.json(users)
}

export const getOneUser = async (req: Request, res: Response) => {
    const { id } = req.params
    const user = await getRepository(User).findOne(id)

    if(!user){
        return res.json({message: "Usuário não existente."})
    }
    
    return res.json(user)
}

export const createUser = async (req: Request, res: Response) => {
    const { nome, username, CPF, email, codigo_agente } = req.body

    if(nome.length === 0 || username.length === 0 || CPF.length === 0 || email.length === 0 || codigo_agente.length === 0){
        return res.status(400).json({message: 'Preencha todos os campos antes de enviar.'})
    }

    const user = await getRepository(User).save(req.body)

    return res.json(user)
}

export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params
    const user = await getRepository(User).findOne(id)

    if(!user){
        return res.status(404).json({message: 'Usuário não existente.'})
    }

    const updatedUser = await getRepository(User).update(id, req.body)

    return res.status(200).json({message:'Usuário atualizado com sucesso.'})

}

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params
    const user = await getRepository(User).findOne(id)

    if(!user){
        return res.status(404).json({message: 'Usuário não existente.'})
    }

    const deleted = await getRepository(User).delete(id)

    return res.status(200).json({message: 'Usuário deletado com sucesso.'})
}