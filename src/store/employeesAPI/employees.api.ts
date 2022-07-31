import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IEmployeeDTO } from '../../models/employee.dto'
import { IEmployee } from '../../models/employee.model'
import { IDataFromServer, IFilters, IUpdateParams } from '../../types/types'

const generateParams = (object: IFilters) => {
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
  reducerPath: 'employees_api',
  tagTypes: ['Employees', 'Employee'],
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API }), // may be ENV
  endpoints: (build) => ({
    getAll: build.query<IDataFromServer, IFilters>({
      query: (filterParams: IFilters) => ({
        url: 'employees',
        params: generateParams(filterParams),
      }),
      transformResponse(employees: IEmployee[], meta: any) {
        return {
          employees,
          totalCount: Number(meta.response.headers.get('X-Total-Count')),
        }
      },
      providesTags: () => ['Employees'],
      keepUnusedDataFor: 3,
    }),
    getOne: build.query<IEmployee, number>({
      query: (id: number) => ({
        url: `employees/${id}`,
      }),
      providesTags: () => ['Employee'],
    }),
    add: build.mutation<IEmployee, IEmployeeDTO>({
      query: (employeeDTO: IEmployeeDTO) => ({
        url: 'employees',
        method: 'POST',
        body: employeeDTO,
      }),
      invalidatesTags: ['Employees'],
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
    udpate: build.mutation<IEmployee, IUpdateParams>({
      query: ({ employeeDTO, id }) => ({
        url: `employees/${id}`,
        method: 'PUT',
        body: employeeDTO,
      }),
      invalidatesTags: ['Employees', 'Employee'],
    }),
    delete: build.mutation<IEmployee, number>({
      query: (id) => ({
        url: `employees/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Employees', 'Employee'],
    }),
  }),
})

export const {
  useLazyGetAllQuery,
  useGetOneQuery,
  useAddMutation,
  useUdpateMutation,
  useDeleteMutation,
} = employeesApi
