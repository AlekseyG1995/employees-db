import React, { FC } from "react"
import { IFilters } from "../types/IFilters"

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
    <div className="filter-form w-full border flex justify-between">
      <div className="filter-form__role">
        <label>
          Sorting by role
          <select defaultValue={currentFilter.role} onChange={selectRoleHandler}>
            <option value="">All</option>
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="filter-form__archive">
        <label>
          Archived
          <input type="checkbox" defaultChecked={currentFilter.isArchive} onChange={isArchiveChangeHandler} />
        </label>
      </div>
      <div className="filter-form__show-on-page">
        <select defaultValue={currentFilter.showOnPage} onChange={selectCountPageHandler}>
          {showOnPage.map((pageNum) => (
            <option key={pageNum} value={pageNum}>
              {pageNum}
            </option>
          ))}
          <option value={0}>All</option>
        </select>
      </div>
    </div>
  )
}
