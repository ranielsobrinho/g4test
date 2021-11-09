import { Router, Request, Response } from 'express'
import { createUser, deleteUser, getOneUser, getUsers, updateUser } from './controllers/UserController'
import validation from './middlewares/validationMiddleware'
import userSchema from './validations/userValidation'

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
    return res.json({message: "Bem-vindo ao CRUD de usuário e fila.!"})
})
routes.get('/users', getUsers)
routes.get('/users/:id', getOneUser)
routes.post('/users', validation(userSchema),createUser)
routes.put('/users/:id', validation(userSchema), updateUser)
routes.delete('/users/:id', deleteUser)

export default routes;