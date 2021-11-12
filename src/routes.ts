import { Router, Request, Response } from 'express'

import UserController from './controllers/UserController'
import QueueController from './controllers/QueueController'
import AuthController from './controllers/AuthController'
import authMiddleware from './middlewares/authMiddleware'

import validation from './middlewares/validationMiddleware'
import userSchema from './validations/userValidation'
import queueSchema from './validations/queueValidation'
import authSchema from './validations/authValidation'

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
    return res.json({message: "Bem-vindo ao CRUD de usuário e fila.!"})
})
routes.get('/users', UserController.getUsers)
routes.get('/users/:id', UserController.getOneUser)
routes.post('/users', validation(userSchema), UserController.createUser)
routes.put('/users/:id', authMiddleware, validation(userSchema), UserController.updateUser)
routes.delete('/users/:id', authMiddleware, UserController.deleteUser)

routes.get('/queue/:id', authMiddleware, QueueController.getQueues)
routes.post('/queue', authMiddleware, validation(queueSchema), QueueController.createQueue)
routes.put('/queue/:id', authMiddleware, validation(queueSchema), QueueController.updateQueue)
routes.delete('/queue/:id', authMiddleware, QueueController.deleteQueue)

routes.post('/auth', validation(authSchema),AuthController.authenticate)

export default routes;