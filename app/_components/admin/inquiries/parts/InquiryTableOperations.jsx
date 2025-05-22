import TableOperations from "@/app/_components/ui/TableOperations";
import { useInquiryContext } from "./InquiryContext";
import SortBy from "@/app/_components/ui/SortBy.jsx";
import Filter from "@/app/_components/ui/Filter";
import Modal from "@/app/_components/ui/Modal";
import CreateInquiryForm from "@/app/_components/features/Inquiry/CreateInquiryForm";

function InquiryTableOperations() {
  const { filter, setFilter, sort, setSort } = useInquiryContext();
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
      {/* <Modal>
        <Modal.Open opens="Inquiry-form">
          <button className="font-outfit bg-blue-950 text-white p-2 font-light text-[1rem] leading-[1.5rem] border-[1.5px] border-white hover:bg-blue-900  rounded-[41px]">
            Add Inquiry
          </button>
        </Modal.Open>
        <Modal.Window name="Inquiry-form">
          <CreateInquiryForm resourceName="Inquiry" />
        </Modal.Window>
      </Modal> */}
    </TableOperations>
  );
}

export default InquiryTableOperations;
