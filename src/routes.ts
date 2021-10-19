import { Router, Request, Response } from 'express'
import { createTask, getOneTask, getTasks } from './controllers/TaskController'

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
    return res.json({message: "Hello everyone!"})
})
routes.get('/tasks', getTasks)
routes.get('/task/:id', getOneTask)
routes.post('/tasks', createTask)

export default routes;