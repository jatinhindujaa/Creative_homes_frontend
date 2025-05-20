import Menus from "@/app/_components/ui/Menus";
import Table from "@/app/_components/ui/Table";
import { usePropertiesContext } from "./PropertiesContext";
import PropertiesRow from "./PropertiesRow.jsx";
import { useProperties } from "../useProperties.js";
import Spinner from "@/app/_components/ui/Spinner.jsx";
import Empty from "@/app/_components/ui/Empty.jsx";

function PropertiesTable() {
  const { filter, sort } = usePropertiesContext();
  const { data, isLoading, error } = useProperties();

  if (isLoading) return <Spinner />;
  if (error) return <div>Error loading Properties: {error.message}</div>;

  const sortedProperties = [...data].sort((a, b) => {
    if (sort === "startDate-desc")
      return new Date(b.startDate) - new Date(a.startDate);
    if (sort === "startDate-asc")
      return new Date(a.startDate) - new Date(b.startDate);
    if (sort === "name-dsc") return b.name.localeCompare(a.name);
    if (sort === "name-asc") return a.name.localeCompare(b.name);
    return 0;
  });

  let filteredProperties = sortedProperties;

  if (filter !== "All") {
    filteredProperties = sortedProperties.filter((el) => {
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
          data={filteredProperties}
          render={(property, index) => (
            <PropertiesRow key={property.id || index} property={property} />
          )}
        />
        <Table.Footer>
          {/* <Pagination count={propertiesData.length} /> */}
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default PropertiesTable;
