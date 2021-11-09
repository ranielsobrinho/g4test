import request from "supertest"
import { getTasks } from './controllers/TaskController'

describe('Test routes', () => {
    it('should test equals to true', () => {
        const result = request(getTasks).get('/')
        expect(result).toHaveProperty('task')
    })
})

/* 
    it('shoul test equals to true', () => {
        const result = true
        expect(result).toBe(true)
    })


*/