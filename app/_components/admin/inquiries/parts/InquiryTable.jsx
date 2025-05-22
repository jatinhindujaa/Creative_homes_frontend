import Menus from "@/app/_components/ui/Menus";
import Table from "@/app/_components/ui/Table";
import { useInquiryContext } from "./InquiryContext";
import InquiryRow from "./InquiryRow.jsx";
import { useInquiry } from "../useInquiry.js";
import Spinner from "@/app/_components/ui/Spinner.jsx";
import Empty from "@/app/_components/ui/Empty.jsx";

function InquiryTable() {
  const { filter, sort } = useInquiryContext();
  const { data, isLoading, error } = useInquiry();

  if (isLoading) return <Spinner />;
  if (error) return <div>Error loading Inquiry: {error.message}</div>;

  const sortedInquiry = [...data].sort((a, b) => {
    if (sort === "startDate-desc")
      return new Date(b.startDate) - new Date(a.startDate);
    if (sort === "startDate-asc")
      return new Date(a.startDate) - new Date(b.startDate);
    if (sort === "name-dsc") return b.name.localeCompare(a.name);
    if (sort === "name-asc") return a.name.localeCompare(b.name);
    return 0;
  });

  let filteredInquiry = sortedInquiry;

  if (filter !== "All") {
    filteredInquiry = sortedInquiry.filter((el) => {
      if (filter.toLowerCase() === "active") {
        return el.status === true;
      } else if (filter.toLowerCase() === "inactive") {
        return el.status === false;
      }
      return false;
    });
  }

  if (!data.length) return <Empty resourceName="Inquiry" />;
  return (
    <Menus>
      <Table columns="grid-cols-6">
        <Table.Header>
          <div>Name</div>
          <div>Phone</div>
          <div>Email</div>
          <div>Category</div>
          <div>Message</div>
          <div>Action</div>
        </Table.Header>

        <Table.Body
          data={filteredInquiry}
          render={(Inquiry, index) => (
            <InquiryRow key={Inquiry.id || index} Inquiry={Inquiry} />
          )}
        />
        <Table.Footer>
          {/* <Pagination count={InquiryData.length} /> */}
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default InquiryTable;
