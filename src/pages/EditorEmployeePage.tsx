import React, { FC, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { EmployeeForm } from "../components/EmployeeForm"
import { Error } from "../components/Error"
import { Loader } from "../components/Loader"
import { useDeleteMutation, useGetOneQuery, useUdpateMutation } from "../store/employeesAPI/employees.api"

export const EditorEmployeePage: FC = () => {
  const [updateEmployee] = useUdpateMutation()
  const [deleteEmployee] = useDeleteMutation()
  const { id } = useParams()
  const { data, isError, isLoading } = useGetOneQuery(Number(id))

  const navigate = useNavigate()
  if (isLoading) return <Loader/>
  if (isError) return <Error/>

  return (
    <div className="w-[90%] sm:w-[50%] mx-auto">
      <div className="my-2">
        <button onClick={() => navigate(-1)} className=" absolute border rounded-xl py-1 px-3">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <h2 className="pt-1 text-xl font-bold text-center "> Edit employee</h2>
      </div>
      <EmployeeForm updateEmployee={updateEmployee} isEditMode preData={data} deleteEmployee={deleteEmployee}></EmployeeForm>
    </div>
  )
}
