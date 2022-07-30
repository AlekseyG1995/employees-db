import React, { FC } from "react"
import { useNavigate } from "react-router-dom"
import { EmployeeForm } from "../components/EmployeeForm"
import { Error } from "../components/Error"
import { useAddMutation } from "../store/employeesAPI/employees.api"

export const AddEmployeePage: FC = () => {
  const navigate = useNavigate()
  const [addEmployee, { isError }] = useAddMutation()

  return (
    <div>
      <EmployeeForm addEmployee={addEmployee} />
      {isError && <Error />}
      <button onClick={() => navigate(-1)} className="border">
        Go back
      </button>
    </div>
  )
}
