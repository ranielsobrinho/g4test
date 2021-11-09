import { Router, Request, Response } from 'express'
import { createUser, deleteUser, getOneUser, getUsers, updateUser } from './controllers/UserController'

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
    return res.json({message: "Bem-vindo ao CRUD de usuário e fila.!"})
})
routes.get('/tasks', getUsers)
routes.get('/task/:id', getOneUser)
routes.post('/tasks', createUser)
routes.put('/task/:id', updateUser)
routes.delete('/task/:id', deleteUser)

export default routes;