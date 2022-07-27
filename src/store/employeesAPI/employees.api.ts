import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IEmployeeDTO } from "../../models/employee.dto"
import { IEmployee } from "../../models/employee.model"
import { IDataFromServer, IFilters } from "../../types/types"

const generateParams = (object: IFilters) => {
  // !!! type any
  const obj: any = {
    isArchive: object.isArchive,
  }
  if (object.role.length > 0) obj.role = object.role // case All
  if (object.showOnPage > 0) {
    // case All
    obj._limit = object.showOnPage
    obj._page = object.page
  }
  return obj
}


export const employeesApi = createApi({
  reducerPath: "employees_api",
  tagTypes: ["Employees"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }), // may be ENV
  endpoints: (build) => ({
    getAll: build.query<IDataFromServer, IFilters>({
      query: (filterParams: IFilters) => ({
        url: "employees",
        params: generateParams(filterParams),
      }),
      transformResponse(employees: IEmployee[], meta: any) {
        return { employees, totalCount: Number(meta.response.headers.get("X-Total-Count")) }
      },
      providesTags: () => ["Employees"],
    }),
    add: build.mutation<IEmployee, IEmployeeDTO>({
      query: (employeeDTO: IEmployeeDTO) => ({
        url: "employees",
        method: "POST",
        body: employeeDTO,
      }),
      invalidatesTags: ["Employees"],
      // async onQueryStarted(_, { dispatch, queryFulfilled }) {
      //   queryFulfilled.then(({ data }) => {
      //     dispatch(
      //       employeesApi.util.updateQueryData("getAll", undefined, (draft) => {
      //         // ... UPDATE - add ID...
      //         draft.push(data)
      //       })
      //     )
      //   })
      // },
    }),
    udpate: build.mutation<IEmployee, IEmployee>({
      query: (employee: IEmployee) => ({
        url: "employees/{id}",
        method: "PUT",
        body: employee,
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

export const { useLazyGetAllQuery, useAddMutation } = employeesApi
