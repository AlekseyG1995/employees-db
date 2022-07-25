import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IEmployeeDTO } from "../../models/employee.dto"
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
    add: build.mutation<IEmployee, IEmployeeDTO>({
      query: (employeeDTO: IEmployeeDTO) => ({
        url: "employees",
        method: "POST",
        body: employeeDTO
      }),
    }),
    udpate: build.mutation<IEmployee, IEmployee>({
      query: (employee: IEmployee) => ({
        url: "employees/{id}",
        method: "PUT",
        body: employee
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

export const {useGetAllQuery, useAddMutation} = employeesApi
