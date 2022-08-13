const request = require('supertest')
const app = require('../index.js')

describe('User API', () => {
    it('should response 200 status code', async () => {
        const res = await request(app).get('/api')
        expect(res.statusCode).toEqual(200)
    }),

    it('should show drivers', async () => {
        const res = await request(app).get('/api/driver')
        expect(res.statusCode).toEqual(200)
    })
})