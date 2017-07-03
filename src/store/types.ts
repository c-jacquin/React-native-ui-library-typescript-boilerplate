import { Action } from 'redux'
import { Observable } from 'rxjs'
import { LanguageState } from 'store/language/types'

export interface AppState {
    language: LanguageState
}

export interface ReduxAction extends Action {
    payload?: any
}

export interface ErrorReduxAction extends Action {
    error?: Error
}

export interface RxObservable<T> extends Observable<T> {
    ofType: (type: any) => RxObservable<T>
}