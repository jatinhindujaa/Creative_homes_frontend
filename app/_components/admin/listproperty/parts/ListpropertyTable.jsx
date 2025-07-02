import Menus from "@/app/_components/ui/Menus";
import Table from "@/app/_components/ui/Table";
import { useListpropertyContext } from "./ListpropertyContext";
import ListpropertyRow from "./ListpropertyRow.jsx";
import Spinner from "@/app/_components/ui/Spinner.jsx";
import Empty from "@/app/_components/ui/Empty.jsx";
import { useListProperty } from "../useListproperty";

function ListpropertyTable() {
  const { filter, sort } = useListpropertyContext();
  const { data, isLoading, error } = useListProperty();

  if (isLoading) return <Spinner />;
  if (error) return <div>Error loading Listproperty: {error.message}</div>;

  const sortedListproperty = [...data].sort((a, b) => {
    if (sort === "startDate-desc")
      return new Date(b.startDate) - new Date(a.startDate);
    if (sort === "startDate-asc")
      return new Date(a.startDate) - new Date(b.startDate);
    if (sort === "name-dsc") return b.name.localeCompare(a.name);
    if (sort === "name-asc") return a.name.localeCompare(b.name);
    return 0;
  });

  let filteredListproperty = sortedListproperty;

  if (filter !== "All") {
    filteredListproperty = sortedListproperty.filter((el) => {
      if (filter.toLowerCase() === "active") {
        return el.status === true;
      } else if (filter.toLowerCase() === "inactive") {
        return el.status === false;
      }
      return false;
    });
  }

  if (!data.length) return <Empty resourceName="Listproperty" />;
  return (
    <Menus>
      <Table columns="grid-cols-7">
        <Table.Header>
          <div>Name</div>
          <div>Phone</div>
          <div>Email</div>
          <div className="min-w-[150px]">Listing type</div>
          <div>Property type</div>
          <div>Address</div>
          <div>Action</div>
        </Table.Header>

        <Table.Body
          data={filteredListproperty}
          render={(Listproperty, index) => (
            <ListpropertyRow
              key={Listproperty.id || index}
              Listproperty={Listproperty}
            />
          )}
        />
        <Table.Footer>
          {/* <Pagination count={ListpropertyData.length} /> */}
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default ListpropertyTable;
