import { Router, Request, Response } from 'express'
import { createTask, deleteTask, finishTask, getOneTask, getTasks, updateTask } from './controllers/TaskController'

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
    return res.json({message: "Hello everyone!"})
})
routes.get('/tasks', getTasks)
routes.get('/task/:id', getOneTask)
routes.post('/tasks', createTask)
routes.put('/task/:id', updateTask)
routes.patch('/finish/:id', finishTask)
routes.delete('/task/:id', deleteTask)

export default routes;