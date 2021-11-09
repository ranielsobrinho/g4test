import { Router, Request, Response } from 'express'

import { createUser, deleteUser, getOneUser, getUsers, updateUser } from './controllers/UserController'
import { createQueue, deleteQueue, getQueues, updateQueue } from './controllers/QueueController'
import validation from './middlewares/validationMiddleware'
import userSchema from './validations/userValidation'
import queueSchema from './validations/queueValidation'

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
    return res.json({message: "Bem-vindo ao CRUD de usuário e fila.!"})
})
routes.get('/users', getUsers)
routes.get('/users/:id', getOneUser)
routes.post('/users', validation(userSchema),createUser)
routes.put('/users/:id', validation(userSchema), updateUser)
routes.delete('/users/:id', deleteUser)

routes.get('/queue', getQueues)
routes.post('/queue', validation(queueSchema),createQueue)
routes.put('/queue/:id', validation(queueSchema), updateQueue)
routes.delete('/queue/:id', deleteQueue)

export default routes;