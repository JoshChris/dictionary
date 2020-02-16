import request from 'supertest';
import app from '../index'

beforeEach(() => {
    fetch.resetMocks();
});

describe('Test that the health check is up', () => {
    test('It should respond 200 to the GET method', async () => {
        const response = await request(app).get('/api/health-check');
        expect(response.statusCode).toBe(200);
    });
})

//Happy Path Tests
describe('Test creating a new dictionary', () => {
    it('It should go to the correct URL, respond 200 to the POST method and send back the created ID', async () => {
        fetch.mockResponseOnce(JSON.stringify({ id: '55531632-efd9-4abc-8be6-321298653ae3' }))
        const response = await request(app).post('/api/v1/dictionary/new');
        expect(response.statusCode).toBe(200);
        expect(response.body.data.id).toBe("55531632-efd9-4abc-8be6-321298653ae3");
        expect(fetch.mock.calls.length).toEqual(1)
        expect(fetch.mock.calls[0][0]).toEqual('https://dictionary.iachieved.it/dictionary')
    });
})

describe('Test deleting a dictionary', () => {
    it('It should go to the correct URL and respond 200 to the DELETE method', async () => {
        fetch.mockResponseOnce(JSON.stringify({ }))
        const response = await request(app).delete('/api/v1/dictionary/55531632-efd9-4abc-8be6-321298653ae3/delete');
        expect(response.statusCode).toBe(200);
        expect(fetch.mock.calls.length).toEqual(1)
        expect(fetch.mock.calls[0][0]).toEqual('https://dictionary.iachieved.it/dictionary/55531632-efd9-4abc-8be6-321298653ae3')
    });
})

describe('Test creating a key', () => {
    it('It should go to the correct URL and respond 200 to the POST method', async () => {
        fetch.mockResponseOnce(JSON.stringify({ }))
        const response = await request(app).post('/api/v1/dictionary/55531632-efd9-4abc-8be6-321298653ae3/key/name').send({value: 'John'});
        expect(response.statusCode).toBe(200);
        expect(fetch.mock.calls.length).toEqual(1)
        expect(fetch.mock.calls[0][0]).toEqual('https://dictionary.iachieved.it/dictionary/55531632-efd9-4abc-8be6-321298653ae3/keys/name')
    });
})

describe('Test updating a key', () => {
    it('It should go to the correct URL and respond 200 to the PATCH method', async () => {
        fetch.mockResponseOnce(JSON.stringify({ }))
        const response = await request(app).patch('/api/v1/dictionary/55531632-efd9-4abc-8be6-321298653ae3/key/name').send({value: 'John'});
        expect(response.statusCode).toBe(200);
        expect(fetch.mock.calls.length).toEqual(1)
        expect(fetch.mock.calls[0][0]).toEqual('https://dictionary.iachieved.it/dictionary/55531632-efd9-4abc-8be6-321298653ae3/keys/name')
    });
})

//unhappy paths
describe('Fail nicely when we go to a bad path', () => {
    it('It should respond 404', async () => {
        fetch.mockResponseOnce(JSON.stringify({ }))
        const response = await request(app).post('/api/v1/dictionary/bad/path').send({value: 'Testing'});
        expect(response.statusCode).toBe(404);
        expect(fetch.mock.calls.length).toEqual(0)
    });
})

describe('Fail nicely when the service is down', () => {
    it('It should respond 400 and give an error message', async () => {
        fetch.mockReject(new Error('fake error message'))
        const response = await request(app).post('/api/v1/dictionary/new');
        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBe('fake error message')
        expect(fetch.mock.calls.length).toEqual(1)
    });
})

