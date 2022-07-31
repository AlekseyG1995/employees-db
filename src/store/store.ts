import { configureStore } from '@reduxjs/toolkit'
import { employeesApi } from './employeesAPI/employees.api'

export const store = configureStore({
  reducer: {
    [employeesApi.reducerPath]: employeesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(employeesApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
