import React, { FC, useEffect, useState } from "react"
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
  
  if (isLoading) return <Loader/>
  if (isError) return <Error/>

  return (
    <div className="w-full">
      <FilterForm currentFilter={filters} changeFilters={setFilters} roles={rolesList} showOnPage={casesShowOnPage} />
      <EmployeeList employees={dataObject?.employees || []} />
      <div className="flex justify-center w-full">
        {dataObject && dataObject!.totalCount > filters.showOnPage && (
          <Pagination currentPage={filters.page} totalPages={calcTotalPages(dataObject.totalCount, filters.showOnPage)} setPage={setPage} />
        )}
      </div>
    </div>
  )
}
