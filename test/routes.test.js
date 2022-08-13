const request = require('supertest')
const app = require('../index.js')

describe('User API', () => {
    it('should response 200 status code', async () => {
        const res = await request(app).get('/api')
        expect(res.statusCode).toEqual(200)
    }),

    it('should show drivers', async () => {
        const res = await request(app).get('/api/driver')
        expect(res.status).toEqual(200)
        expect(res.body).toHaveProperty('data')
    }),

    it('should show one driver', async () => {
        const res = await request(app).get('/api/driver/1')
        expect(res.status).toEqual(200)
        expect(res.body).toHaveProperty('data')
    }),


    it('should create a new driver', async () => {
        const res = await request(app)
            .post('/api/driver')
            .send({
                name: "Kurniadi Ahmad Wijaya",
                phone: "08124047478",
                id_card: "https://images.bisnis-cdn.com/thumb/posts/2019/02/27/894082/e-ktp-guohui-chen.jpg?w=600&h=400",
                license: "https://imgx.gridoto.com/crop/0x0:1173x826/700x465/photo/gridoto/2018/03/17/1527580033.jpg"
            })
        expect(res.statusCode).toEqual(201)
        expect(res.body).toHaveProperty('message')
    })

    it('should update a driver', async () => {
        const res = await request(app)
            .put('/api/driver/1')
            .send({
                name: "Kurniadi Ahmad Wijaya",
                phone: "08124047478",
                id_card: "https://images.bisnis-cdn.com/thumb/posts/2019/02/27/894082/e-ktp-guohui-chen.jpg?w=600&h=400",
                license: "https://imgx.gridoto.com/crop/0x0:1173x826/700x465/photo/gridoto/2018/03/17/1527580033.jpg"
            })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('message')
    })
})