import React, { FC } from "react"
import { useNavigate } from "react-router-dom"
import { EmployeeForm } from "../components/employee/EmployeeForm"
import { Error } from "../components/Error"
import { useAddMutation } from "../store/employeesAPI/employees.api"

export const AddEmployeePage: FC = () => {
  const navigate = useNavigate()
  const [addEmployee, { isError }] = useAddMutation()

  return (
    <div className="w-[90%] sm:w-[50%] mx-auto">
      <div className="my-2">
        <button onClick={() => navigate(-1)} className="absolute hover:opacity-50  border rounded-xl py-1 px-3">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <h2 className="pt-1 text-xl font-bold text-center"> Add new employee</h2>
      </div>

      <EmployeeForm addEmployee={addEmployee} />
      {isError && <Error />}
    </div>
  )
}
