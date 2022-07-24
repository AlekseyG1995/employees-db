import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IEmployee } from "../../models/employee.model"

export const employeesApi = createApi({
  reducerPath: "employees_api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }), // may be ENV
  endpoints: (build) => ({
    getAll: build.query<IEmployee[], void>({
      query: () => ({
        url: "employees",
        params: {
          // per_page: 10,
        },
      }),
    }),
    add: build.query<IEmployee, IEmployee>({
      query: (employee: IEmployee) => ({
        url: "employees",
        method: "POST",
        data: employee
      }),
    }),
    udpate: build.mutation<IEmployee, IEmployee>({
      query: (employee: IEmployee) => ({
        url: "employees/{id}",
        method: "PUT",
        data: employee
      }),
    }),
    delete: build.mutation<IEmployee, void>({
      query: () => ({
        url: "employees/{id}",
        method: "DELETE",
      }),
    }),
  }),
})

export const {useGetAllQuery} = employeesApi
