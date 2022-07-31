import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { IFilters } from "../types/types"

export const useFiltersViewEmployees = (fetchEmployees: (filters: IFilters, preferCacheValue: boolean) => {}) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const defaultFilters: IFilters = {
    isArchive: false,
    showOnPage: 0,
    role: "",
    page: 1,
  }

  const changeParams = ({ isArchive, page, role, showOnPage }: IFilters): void => {
    const obj: any = {} 
    if (role !== defaultFilters.role) obj.role = role
    if (isArchive !== defaultFilters.isArchive) obj.isArchive = String(isArchive)
    if (showOnPage !== defaultFilters.showOnPage) {
      obj.limit = String(showOnPage)
      obj.page = String(page)
    }
    setSearchParams(obj)
  }

  const [filters, setFilters] = useState<IFilters>({
    isArchive: searchParams.has("isArchive") && searchParams.get("isArchive") === "true" ? true : false || defaultFilters.isArchive,
    showOnPage: searchParams.has("limit") ? Number(searchParams.get("limit")) : defaultFilters.showOnPage,
    role: searchParams.get("role") || defaultFilters.role,
    page: Number(searchParams.get("limit")) || defaultFilters.page,
  })

  useEffect(() => {
    fetchEmployees(filters, true)
    changeParams(filters)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.page])

  useEffect(() => {
    changeParams(filters)
    setFilters({ ...filters, page: 1 })
    fetchEmployees(filters, true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.showOnPage, filters.isArchive, filters.role])

  return { filters, setFilters }
}
