import { Request, Response } from "express";
import { getRepository } from 'typeorm'
import { Task } from '../entity/Task'

export const getTasks = async (req: Request, res: Response) => {
    const tasks = await getRepository(Task).find()
    
    if(!tasks){
        return res.json({message: "There's no task here."})
    }

    return res.json(tasks)
}

export const getOneTask = async (req: Request, res: Response) => {
    const { id } = req.params
    const task = await getRepository(Task).findOne(id)

    if(!task){
        return res.json({message: "There's no task here."})
    }
    
    return res.json(task)
}

export const createTask = async (req: Request, res: Response) => {
    const { title, description } = req.body

    if(title.length === 0 || description.length === 0){
        return res.status(400).json({message: 'Preencha todos os campos antes de enviar.'})
    }

    const task = await getRepository(Task).save(req.body)

    return res.json(task)
}

export const finishTask = async (req: Request, res: Response) => {
    const { id } = req.params
    const task = await getRepository(Task).findOne(id)

    if(!task) {
        return res.status(404).json({message: 'Tarefa não encontrada.'})
    }

    const finishedTask = await getRepository(Task).update(id, {
        finished: true
    })

    return res.status(200).json({message:'OK'})
}

export const updateTask = async (req: Request, res: Response) => {

}

export const deleteTask = async (req: Request, res: Response) => {

}