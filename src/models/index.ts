import http from '../../http'

function request(time: number) {
    return http.post('/api/v1/loan/list', {
        data: {
            category: 0,
            deadline: "0",
            job: 0,
            money: "0",
            nextOffset: 0,
            order: 1,
            payType: 0,
            tgGroup: 0
        }
    })
}
console.log(222, process.env.AA)
export default {
    state: 0,
    reducers: {
        add(state: any, action: any) {
            return state + action.payload;
        },
    },
    effects: {
        *addAfter1Second(action: any, { call, put }: any) {
            const res = yield call(request, 1000);
            console.log(res)
            yield put({ type: 'add', payload: action.payload });
        },
    }
};