import yup = require('yup')

const userSchema = yup.object({
    nome: yup.string().required(),
    username: yup.string().min(4).required(),
    CPF: yup.string().min(11).max(11).required(),
    email: yup.string().email().required(),
    codigo_agente: yup.string().min(6).max(6).required()
})

export default userSchema