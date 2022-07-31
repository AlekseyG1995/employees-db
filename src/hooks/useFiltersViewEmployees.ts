import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { casesShowOnPage } from "../config/viewOptions"
import { IFilters } from "../types/types"

export const useFiltersViewEmployees = (fetchEmployees: (filters: IFilters, preferCacheValue: boolean) => {}) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const changeParams = ({ isArchive, page, role, showOnPage }: IFilters): void => {
    setSearchParams({
      role,
      page: String(page),
      isArchive: String(isArchive),
      limit: String(showOnPage),
    })
  }

  const [filters, setFilters] = useState<IFilters>({
    isArchive: searchParams.has("isArchive") && searchParams.get("isArchive") === "true" ? true : false || false,
    showOnPage: searchParams.has("limit") ? Number(searchParams.get("limit")) : 0,
    role: searchParams.get("role") || "",
    page: Number(searchParams.get("limit")) || 1,
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
