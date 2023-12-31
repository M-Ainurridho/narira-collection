import { configureStore } from '@reduxjs/toolkit'
import { alertReducer, authReducer, generalMenuReducer } from './reducers'

export default configureStore({
   reducer: {
      auth: authReducer.reducer,
      generalMenu: generalMenuReducer.reducer,
      alert: alertReducer.reducer,
   },
})
