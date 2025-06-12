import TableOperations from "@/app/_components/ui/TableOperations";
import { useAreasContext } from "./AreaContext";
import SortBy from "@/app/_components/ui/SortBy.jsx";
import Filter from "@/app/_components/ui/Filter";
import Modal from "@/app/_components/ui/Modal";
import CreateArea from "@/app/_components/features/Area/CreateArea";

function AreasTableOperations() {
  const { filter, setFilter, sort, setSort } = useAreasContext();
  return (
    <TableOperations>
      <Filter
        filterField="status"
        filter={filter}
        setFilter={setFilter}
        options={[
          { value: "All", label: "All" },
          { value: "Active", label: "Active" },
          { value: "Inactive", label: "Inactive" },
        ]}
      />

      <SortBy
        sort={sort}
        setSort={setSort}
        options={[
          { value: "startDate-desc", label: "Sort by date (recent first)" },
          { value: "startDate-asc", label: "Sort by date (earlier first)" },
          { value: "name-dsc", label: "Sort by name (Z - A)" },
          { value: "name-asc", label: "Sort by name (A - Z)" },
        ]}
      />
      <Modal>
        <Modal.Open opens="Areas-form">
          <button className="font-outfit bg-blue-950 text-white p-2 font-light text-[1rem] leading-[1.5rem] border-[1.5px] border-white hover:bg-blue-900  rounded-[41px]">
            Add Areas
          </button>
        </Modal.Open>
        <Modal.Window name="Areas-form">
          <CreateArea resourceName="Areas" />
        </Modal.Window>
      </Modal>
    </TableOperations>
  );
}

export default AreasTableOperations;
