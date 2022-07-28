import React, { FC } from "react"
import { EmployeeForm } from "../components/EmployeeForm"
import { Error } from "../components/Error"
import { useAddMutation } from "../store/employeesAPI/employees.api"

export const AddEmployeePage: FC = () => {
  const [addEmployee, { isError }] = useAddMutation()

  return (
    <div>
      <EmployeeForm addEmployee={addEmployee} />
      {isError && <Error />}
    </div>
  )
}
