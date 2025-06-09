import Filters from "@/components/filter";
import { FilterSheet } from "@/components/filter-sheet";
import { SortSelect } from "@/components/sorting";
import { Separator } from "@/components/ui/separator";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <div className="bg-background sticky top-0 z-20 flex w-full items-center justify-between max-w-screen-2xl mx-auto  py-2 px-4">
        <FilterSheet />
        <Separator orientation="vertical" className="mr-2 h-4 " />
        <SortSelect />
      </div>
      <main className="flex flex-col items-center mx-auto max-w-screen-2xl gap-[32px] row-start-2">
        <div className="w-full mx-auto flex gap-8 pb-4 px-2">
          <aside className="hidden lg:flex w-1/4 min-w-[220px] max-w-xs py-4 border rounded-2xl my-2 shadow">
            <Filters />
          </aside>
          <section className="flex-1 border border-dashed rounded-xl p-1 px-2">
            all the list of the products will be here...
          </section>
        </div>
      </main>
    </Fragment>
  );
}
