import Menus from "@/app/_components/ui/Menus";
import Table from "@/app/_components/ui/Table";
import { useOffplanContext } from "./OffplanContext";
import OffplanRow from "./OffplanRow.jsx";
import { useOffplan } from "../useOffplan.js";
import Spinner from "@/app/_components/ui/Spinner.jsx";
import Empty from "@/app/_components/ui/Empty.jsx";

function OffplanTable() {
  const { filter, sort } = useOffplanContext();
  const { data, isLoading, error } = useOffplan();

  if (isLoading) return <Spinner />;
  if (error) return <div>Error loading Offplan: {error.message}</div>;

  const sortedOffplan = [...data].sort((a, b) => {
    if (sort === "startDate-desc")
      return new Date(b.startDate) - new Date(a.startDate);
    if (sort === "startDate-asc")
      return new Date(a.startDate) - new Date(b.startDate);
    if (sort === "name-dsc") return b.name.localeCompare(a.name);
    if (sort === "name-asc") return a.name.localeCompare(b.name);
    return 0;
  });

  let filteredOffplan = sortedOffplan;

  if (filter !== "All") {
    filteredOffplan = sortedOffplan.filter((el) => {
      if (filter.toLowerCase() === "active") {
        return el.status === true;
      } else if (filter.toLowerCase() === "inactive") {
        return el.status === false;
      }
      return false;
    });
  }

  if (!data.length) return <Empty resourceName="Property" />;
  return (
    <Menus>
      <Table columns="grid-cols-8">
        <Table.Header>
          <div>Name</div>
          <div>Deal Type</div>
          <div>Price</div>
          <div>Type</div>
          <div>Short Description</div>
          <div>Description</div>
          <div>Status</div>
          <div>Actions</div>
        </Table.Header>

        <Table.Body
          data={filteredOffplan}
          render={(property, index) => (
            <OffplanRow key={property._id || index} offplan={property} />
          )}
        />
        <Table.Footer>
          {/* <Pagination count={propertiesData.length} /> */}
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default OffplanTable;
