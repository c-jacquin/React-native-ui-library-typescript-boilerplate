import { Observable } from 'rxjs'
import configureMockStore, { MockStore } from 'redux-mock-store'
import { Store } from 'redux'
import { createEpicMiddleware, EpicMiddleware } from 'redux-observable'
import * as languageAction from '../actions'
import languageApi from '../api'
import getLocaleEpic from '../epic'
import { dependencies } from 'store/epicDependencies'
import { AppState, ReduxAction, EpicDependancies } from 'store/types'
import config from 'config'

jest.mock('store/language/api')

describe('language epic', () => {
    let epicMiddleware: EpicMiddleware<ReduxAction, AppState, EpicDependancies>
    let store: MockStore<any>

    beforeEach(() => {
        epicMiddleware = createEpicMiddleware<
            ReduxAction,
            AppState,
            EpicDependancies
        >(getLocaleEpic, { dependencies })
        const mockStore = configureMockStore([epicMiddleware])
        store = mockStore()
    })

    afterEach(() => {
        epicMiddleware.replaceEpic(getLocaleEpic)
    })

    it('should get the device locale when GET_LOCALE_PENDING', () => {
        const spy = jest.spyOn(languageApi, 'getLanguage')
        store.dispatch(languageAction.getLocale())

        expect(spy).toHaveBeenCalled()
    })

    it('should dispatch the success action when getLocale successed', () => {
        store.dispatch(languageAction.getLocale())

        expect(store.getActions()).toEqual([
            languageAction.getLocale(),
            languageAction.getLocaleSuccess('en'),
        ])
    })

    describe('when local is not supported', () => {
        beforeEach(() => {
            epicMiddleware = createEpicMiddleware<
                ReduxAction,
                AppState,
                any
            >(getLocaleEpic, {
                dependencies: {
                    languageApi: {
                        getLanguage() {
                            return Observable.of('test')
                        },
                    },
                },
            })
            const mockStore = configureMockStore([epicMiddleware])
            store = mockStore()
        })

        it('should set the default locale when GET_LOCALE_PENDING', () => {
            store.dispatch(languageAction.getLocale())

            expect(store.getActions()).toEqual([
                languageAction.getLocale(),
                languageAction.getLocaleSuccess(config.LANGUAGE.DEFAULT_LOCALE),
            ])
        })
    })
})
