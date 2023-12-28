import { configureStore } from '@reduxjs/toolkit'
import { authReducer, generalMenuReducer } from './reducers'

export default configureStore({
   reducer: {
      auth: authReducer.reducer,
      generalMenu: generalMenuReducer.reducer,
   },
})
