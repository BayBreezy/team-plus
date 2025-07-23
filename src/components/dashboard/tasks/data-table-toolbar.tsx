"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import type { Table } from "@tanstack/react-table";

import { priorities, statuses } from "./data";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { DataTableViewOptions } from "./data-table-view-options";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({ table }: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="grid grid-cols-1 justify-between gap-3 md:flex md:items-center lg:gap-0">
      <div className="grid gap-2 md:flex md:flex-1 md:items-center">
        <Input
          placeholder="Filter tasks..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn("title")?.setFilterValue(event.target.value)}
          className="h-8 lg:w-[250px]"
        />
        {table.getColumn("status") && (
          <DataTableFacetedFilter
            column={table.getColumn("status")}
            title="Status"
            options={statuses}
          />
        )}
        {table.getColumn("priority") && (
          <DataTableFacetedFilter
            column={table.getColumn("priority")}
            title="Priority"
            options={priorities}
          />
        )}
        {isFiltered && (
          <Button variant="ghost" size="sm" onClick={() => table.resetColumnFilters()}>
            Reset
            <X />
          </Button>
        )}
      </div>
      <div className="grid grid-cols-1 gap-2 md:flex md:items-center">
        <DataTableViewOptions table={table} />
        <Button size="sm">Add Task</Button>
      </div>
    </div>
  );
}
