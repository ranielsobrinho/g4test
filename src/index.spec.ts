import * as request from "supertest"
import app from './index'
// import { User } from './models/User'
// import { Queue } from './models/Queue'
// import {getRepository} from 'typeorm'

describe('Testing routes', () => {
    it('should return http status 200 in main route', async () => {
        const response = await request(app).get('/')

        expect(response.statusCode).toBe(200)
    })

    it('should return http status 200 in users route',async () => {
        const response = await request(app).get('/users')

        expect(response.statusCode).toBe(200)
    })

    it('should return token when post credentials', async () => {
        const response = await request(app)
            .post('/auth')
            .send({
                username: "raniel25",
                codigo_agente: "350124" 
            })
            
            expect(response.statusCode).toBe(200)
    })
})
