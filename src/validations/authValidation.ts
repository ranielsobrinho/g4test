import yup = require('yup')

const authSchema = yup.object({
    username: yup.string().required(),
    codigo_agente: yup.string().min(6).max(6).required()
})

export default authSchema