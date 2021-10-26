import request from "supertest"
import routes from './routes'

describe('Test routes', () => {
    it('testing get tasks', async () => {
        const res = await request(routes).get('/')

        console.log(res.body)
        expect(res.statusCode).toEqual(200)
    })
})

/* 
    it('shoul test equals to true', () => {
        const result = true
        expect(result).toBe(true)
    })


*/