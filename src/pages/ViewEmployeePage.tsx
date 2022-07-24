import React from "react"
import { EmployeeList } from "../components/employee/EmployeeList"
import { useGetAllQuery } from "../store/employeesAPI/employees.api"

export const ViewEmployeePage = () => {
  const { data, isError, isLoading } = useGetAllQuery()

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Something went wrong</p>

  return (
    <div>
      <EmployeeList employees={data || []} />
    </div>
  )
}
