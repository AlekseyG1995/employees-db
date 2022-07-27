import React, { FC, useEffect } from "react"
import { useParams } from "react-router-dom"
import { EmployeeForm } from "../components/EmployeeForm"
import { IEmployee } from "../models/employee.model"
import { useAddMutation, useLazyGetOneQuery } from "../store/employeesAPI/employees.api"

export const EditorEmployeePage: FC = () => {
  const [updateEmployee, {}] = useAddMutation() // !!!! _temp
  const { id } = useParams()

  const data: IEmployee = {
    id: 1,
    name: "Илья Емельянов",
    isArchive: false,
    role: "frontend",
    phone: "+7 (883) 508-3269",
    birthday: "12.02.1982",
  }


  return (
    <div>
      <h2 className="text-2xl font-bold">Edit employee</h2>
      <EmployeeForm sendData={updateEmployee} isEditMode preData={data}></EmployeeForm>
    </div>
  )
}
