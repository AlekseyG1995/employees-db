import React, { FC, useEffect } from "react"
import { useParams } from "react-router-dom"
import { EmployeeForm } from "../components/EmployeeForm"
import { useDeleteMutation, useGetOneQuery, useUdpateMutation } from "../store/employeesAPI/employees.api"

export const EditorEmployeePage: FC = () => {
  const [updateEmployee] = useUdpateMutation()
  const [deleteEmployee] = useDeleteMutation()
  const { id } = useParams()
  const { data, isError, isLoading } = useGetOneQuery(Number(id))

 
  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Something went wrong</p>

  return (
    <div>
      <h2 className="text-2xl font-bold">Edit employee</h2>
      <EmployeeForm updateEmployee={updateEmployee} isEditMode preData={data} deleteEmployee={deleteEmployee}></EmployeeForm>
    </div>
  )
}
