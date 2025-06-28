import Menus from "@/app/_components/ui/Menus";
import Table from "@/app/_components/ui/Table";
import { useWhatsapContext } from "./WhatsapContext";
import WhatsapRow from "./WhatsapRow.jsx";
import Spinner from "@/app/_components/ui/Spinner.jsx";
import Empty from "@/app/_components/ui/Empty.jsx";
import { useWhtsap } from "../../inquiries/useInquiry";

function WhatsapTable() {
  const { filter, sort } = useWhatsapContext();
  const { data, isLoading, error } = useWhtsap();

  if (isLoading) return <Spinner />;
  if (error) return <div>Error loading Whatsap: {error.message}</div>;

  const sortedWhatsap = [...data].sort((a, b) => {
    if (sort === "startDate-desc")
      return new Date(b.startDate) - new Date(a.startDate);
    if (sort === "startDate-asc")
      return new Date(a.startDate) - new Date(b.startDate);
    if (sort === "name-dsc") return b.name.localeCompare(a.name);
    if (sort === "name-asc") return a.name.localeCompare(b.name);
    return 0;
  });

  let filteredWhatsap = sortedWhatsap;

  if (filter !== "All") {
    filteredWhatsap = sortedWhatsap.filter((el) => {
      if (filter.toLowerCase() === "active") {
        return el.status === true;
      } else if (filter.toLowerCase() === "inactive") {
        return el.status === false;
      }
      return false;
    });
  }

  if (!data.length) return <Empty resourceName="Whatsap" />;
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
          data={filteredWhatsap}
          render={(Whatsap, index) => (
            <WhatsapRow key={Whatsap.id || index} Whatsap={Whatsap} />
          )}
        />
        <Table.Footer>
          {/* <Pagination count={WhatsapData.length} /> */}
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default WhatsapTable;
