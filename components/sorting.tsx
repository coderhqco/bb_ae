import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SortSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort lists" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort based on</SelectLabel>
          <SelectItem value="newest">Newest</SelectItem>
          <SelectItem value="low-to-high">Price: Low to High</SelectItem>
          <SelectItem value="high-to-low">Price:High to Low</SelectItem>
          <SelectItem value="top-rated">Top Rated</SelectItem>
          <SelectItem value="most-papular">Most Papular</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
