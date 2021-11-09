import yup = require('yup')

const queueSchema = yup.object({
    nome: yup.string().required(),
    timeout:yup.number().min(30).max(50).required()
})

export default queueSchema