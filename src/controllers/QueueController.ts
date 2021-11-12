import { Request, Response } from 'express'
import { Queue } from '../models/Queue'
import { getRepository } from 'typeorm'
import { User } from '../models/User'

class QueueController{
    async getQueues (req: Request, res: Response){
        const {id} = req.params
        const queue = await getRepository(User).findOne(id, {
            relations: ['queues'],
            select: ['nome', 'username', 'email']
        })
    
        if(!queue) {
            return res.json({message: "Nenhuma fila cadastrada"})
        }
    
        return res.json(queue)
    }

    async createQueue (req: Request, res: Response) {
        const newQueue = await getRepository(Queue).save(req.body)
    
        return res.json({message: 'Cadastro feito com sucesso.'})
    }

    async updateQueue (req: Request, res: Response) {
        const {id} = req.params
        const {nome, timeout} = req.body
    
        const queue = await getRepository(Queue).find({where: {id}})
    
        if(!queue){
            return res.status(404).json({message: "Não há nenhuma fila existente para atualizar."})
        }
    
        const updateQueue = await getRepository(Queue).update(id, {nome, timeout})
    
        return res.status(200).json({message: "Fila atualizada com sucesso."})
    }

    async deleteQueue (req: Request, res: Response) {
        const { id } = req.params
    
        const queue = await getRepository(Queue).find({where: {id}})
        if(!queue){
            return res.status(404).json({message: "Não há fila para deletar."})
        }
    
        const deletedQueue = await getRepository(Queue).delete(id)
    
        return res.status(200).json({message: "Fila deletada com sucesso."})
    }
}

export default new QueueController()