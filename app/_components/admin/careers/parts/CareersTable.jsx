import Menus from "@/app/_components/ui/Menus";
import Table from "@/app/_components/ui/Table";
import { useCareersContext } from "./CareersContext";
import CareersRow from "./CareersRow.jsx";
import { useCareers } from "../useCareers.js";
import Spinner from "@/app/_components/ui/Spinner.jsx";
import Empty from "@/app/_components/ui/Empty.jsx";

function CareersTable() {
  const { filter, sort } = useCareersContext();
  const { data, isLoading, error } = useCareers();

  if (isLoading) return <Spinner />;
  if (error) return <div>Error loading Careers: {error.message}</div>;

  const sortedCareers = [...data].sort((a, b) => {
    if (sort === "startDate-desc")
      return new Date(b.startDate) - new Date(a.startDate);
    if (sort === "startDate-asc")
      return new Date(a.startDate) - new Date(b.startDate);
    if (sort === "name-dsc") return b.name.localeCompare(a.name);
    if (sort === "name-asc") return a.name.localeCompare(b.name);
    return 0;
  });

  let filteredCareers = sortedCareers;

  if (filter !== "All") {
    filteredCareers = sortedCareers.filter((el) => {
      if (filter.toLowerCase() === "active") {
        return el.status === true;
      } else if (filter.toLowerCase() === "inactive") {
        return el.status === false;
      }
      return false;
    });
  }

  if (!data.length) return <Empty resourceName="Careers" />;
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
          data={filteredCareers}
          render={(Careers, index) => (
            <CareersRow key={Careers.id || index} Careers={Careers} />
          )}
        />
        <Table.Footer>
          {/* <Pagination count={CareersData.length} /> */}
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default CareersTable;
