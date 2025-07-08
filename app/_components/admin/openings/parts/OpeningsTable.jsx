import Menus from "@/app/_components/ui/Menus";
import Table from "@/app/_components/ui/Table";
import { useOpeningsContext } from "./OpeningsContext";
import OpeningsRow from "./OpeningsRow.jsx";
import { useOpenings } from "../useOpenings.js";
import Spinner from "@/app/_components/ui/Spinner.jsx";
import Empty from "@/app/_components/ui/Empty.jsx";

function OpeningsTable() {
  const { filter, sort } = useOpeningsContext();
  const { data, isLoading, error } = useOpenings();

  if (isLoading) return <Spinner />;
  if (error) return <div>Error loading Openings: {error.message}</div>;

  const sortedOpenings = [...data].sort((a, b) => {
    if (sort === "startDate-desc")
      return new Date(b.startDate) - new Date(a.startDate);
    if (sort === "startDate-asc")
      return new Date(a.startDate) - new Date(b.startDate);
    if (sort === "name-dsc") return b.name.localeCompare(a.name);
    if (sort === "name-asc") return a.name.localeCompare(b.name);
    return 0;
  });

  let filteredOpenings = sortedOpenings;

  if (filter !== "All") {
    filteredOpenings = sortedOpenings.filter((el) => {
      if (filter.toLowerCase() === "active") {
        return el.status === true;
      } else if (filter.toLowerCase() === "inactive") {
        return el.status === false;
      }
      return false;
    });
  }

  if (!data.length) return <Empty resourceName="Openings" />;
  return (
    <Menus>
      <Table columns="grid-cols-6">
        <Table.Header>
          <div>Id</div>
          <div>Position</div>
          <div>location</div>
          <div>Type</div>
          <div>JD</div>
          <div>Action</div>
        </Table.Header>

        <Table.Body
          data={filteredOpenings}
          render={(Openings, index) => (
            <OpeningsRow key={Openings.id || index} Openings={Openings} />
          )}
        />
        <Table.Footer>
          {/* <Pagination count={OpeningsData.length} /> */}
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default OpeningsTable;
