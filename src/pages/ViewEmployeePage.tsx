import React, { FC, useEffect, useState } from "react"
import { EmployeeList } from "../components/employee/EmployeeList"
import { FilterForm } from "../components/FilterForm"
import { Pagination } from "../components/Pagination"
import { rolesList } from "../models/rolesList"
import { useLazyGetAllQuery } from "../store/employeesAPI/employees.api"
import { IFilters } from "../types/types"
import { calcTotalPages } from "../utils/pagination"

const casesShowOnPage: number[] = [5, 10, 25]

export const ViewEmployeePage: FC = () => {
  const [filters, setFilters] = useState<IFilters>({
    isArchive: false,
    showOnPage: casesShowOnPage[0],
    role: "", // case "all"
    page: 1,
  })

  const setPage = (page: number) => {
    setFilters({ ...filters, page })
  }

  useEffect(() => {
    fetchUsers(filters)
  }, [filters])

  useEffect(()=>{
    setPage(1) // reFetch after change limit
  }, [filters.showOnPage])

  const [fetchUsers, { data: dataObject, isError, isLoading }] = useLazyGetAllQuery()
  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Something went wrong</p>

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
