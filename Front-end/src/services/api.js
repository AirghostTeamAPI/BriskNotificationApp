import {create} from 'apisauce';

const api = create({
    baseURL: 'http://localhost:5000',
});

api.addAsyncResponseTransform(response => {
    if(!response.ok)  throw response;
})
export default api;