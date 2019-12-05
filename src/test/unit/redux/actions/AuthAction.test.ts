import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {LOGIN_ACTION} from "../../../../config/constants/actions";
import {Logout, Login} from "../../../../actions/AuthAction";
import HttpClient from "../../../../config/api/HttpClient";


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(HttpClient);

describe('AuthAction', () => {
    it('creates LOGIN_ACTION when sing in has been done', () => {
        mock.onPost('/users', { params: { searchText: 'John' } }).reply(200, {
            users: [
                { id: 1, name: 'John Smith' }
            ]
        });

        const loginForm = {
            username: 'abbas',
            password: '123456'
        };
        const expectedActions = [
            { type: LOGIN_ACTION, payload: {}}
        ];
        const store = mockStore({});

        // @ts-ignore
        return store.dispatch(Login(loginForm)).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
});
