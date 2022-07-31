import { FC } from "react"
import { EmployeeList } from "../components/employee/EmployeeList"
import { Error } from "../components/Error"
import { FilterForm } from "../components/FilterForm"
import { Loader } from "../components/Loader"
import { Pagination } from "../components/Pagination"
import { casesShowOnPage } from "../config/viewOptions"
import { useFiltersViewEmployees } from "../hooks/useFiltersViewEmployees"
import { rolesList } from "../models/rolesList"
import { useLazyGetAllQuery } from "../store/employeesAPI/employees.api"
import { calcTotalPages } from "../utils/pagination"

export const ViewEmployeePage: FC = () => {
  const [fetchEmployees, { data: dataObject, isError, isLoading }] = useLazyGetAllQuery()
  const { filters, setFilters } = useFiltersViewEmployees(fetchEmployees)
  const setPage = (page: number) => {
    setFilters({ ...filters, page })
  }

  if (isLoading) return <Loader />
  if (isError) return <Error />

  return (
    <div className="w-full h-full sm:w-[70%] flex flex-col sm:mx-auto">
      <div className="basis-14 min-h-14">
        <FilterForm currentFilter={filters} changeFilters={setFilters} roles={rolesList} showOnPage={casesShowOnPage} />
      </div>
      <div className="flex-auto overflow-y-auto">
        <EmployeeList employees={dataObject?.employees || []} />
      </div>
      {dataObject && filters.showOnPage > 0 && dataObject!.totalCount > filters.showOnPage && (
        <div className="flex justify-center items-center w-full basis-[50px] min-h-[50px]">
          <Pagination currentPage={filters.page} totalPages={calcTotalPages(dataObject.totalCount, filters.showOnPage)} setPage={setPage} />
        </div>
      )}
    </div>
  )
}
