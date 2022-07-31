import React, { FC } from 'react'
import { IFilters } from '../types/types'

interface FilterFormProps {
  roles?: string[]
  showOnPage?: number[]
  currentFilter: IFilters
  changeFilters: (filters: IFilters) => void
}

export const FilterForm: FC<FilterFormProps> = ({ currentFilter, changeFilters, roles = [], showOnPage = [10] }) => {
  const selectRoleHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeFilters({ ...currentFilter, role: e.target.value })
  }

  const selectCountPageHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeFilters({ ...currentFilter, showOnPage: Number(e.target.value) })
  }

  const isArchiveChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeFilters({ ...currentFilter, isArchive: e.target.checked })
  }

  return (
    <div className="w-full px-1 flex justify-between text-center py-1">
      <div className="basis-2/5">
        <label>
          Sorting by role
          <select
            className="my-input sm:block sm:w-[70%] sm:mx-auto text-sm sm:text-base"
            defaultValue={currentFilter.role}
            onChange={selectRoleHandler}
          >
            <option value="">All</option>
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className=" basis-1/5">
        <label>
          archived
          <input
            className="w-full my-1 h-5 sm:h-6"
            type="checkbox"
            defaultChecked={currentFilter.isArchive}
            onChange={isArchiveChangeHandler}
          />
        </label>
      </div>
      <div className=" basis-2/5 ">
        <label>
          show on Page
          <select
            className="my-input px-1 sm:block sm:w-[70%] sm:mx-auto text-sm sm:text-base"
            defaultValue={currentFilter.showOnPage}
            onChange={selectCountPageHandler}
          >
            {showOnPage.map((pageNum) => (
              <option key={pageNum} value={pageNum}>
                {pageNum}
              </option>
            ))}
            <option value={0}>All</option>
          </select>
        </label>
      </div>
    </div>
  )
}
