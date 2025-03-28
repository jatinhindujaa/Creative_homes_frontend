import Menus from "@/app/_components/ui/Menus";
import Table from "@/app/_components/ui/Table";
import { useAgentsContext } from "./AgentsContext";
import AgentsRow from "./AgentsRow.jsx";
import { useAgents } from "../useAgents.js";
import Spinner from "@/app/_components/ui/Spinner.jsx";
import Empty from "@/app/_components/ui/Empty.jsx";

function AgentsTable() {
  const { filter, sort } = useAgentsContext();
  const { data, isLoading, error } = useAgents();

  if (isLoading) return <Spinner />;
  if (error) return <div>Error loading Agents: {error.message}</div>;

  const sortedAgents = [...data].sort((a, b) => {
    if (sort === "startDate-desc")
      return new Date(b.startDate) - new Date(a.startDate);
    if (sort === "startDate-asc")
      return new Date(a.startDate) - new Date(b.startDate);
    if (sort === "name-dsc") return b.name.localeCompare(a.name);
    if (sort === "name-asc") return a.name.localeCompare(b.name);
    return 0;
  });

  let filteredAgents = sortedAgents;

  if (filter !== "All") {
    filteredAgents = sortedAgents.filter((el) => {
      if (filter.toLowerCase() === "active") {
        return el.status === true;
      } else if (filter.toLowerCase() === "inactive") {
        return el.status === false;
      }
      return false;
    });
  }

  if (!data.length) return <Empty resourceName="Agent" />;
  return (
    <Menus>
      <Table columns="grid-cols-8">
        <Table.Header>
          <div>Name</div>
          <div>Designation</div>
          <div>Experience</div>
          <div>Phone No.</div>
          <div>About</div>
          <div>Image</div>
          <div>Status</div>
          <div>Actions</div>
        </Table.Header>

        <Table.Body
          data={filteredAgents}
          render={(agent) => <AgentsRow key={agent.id} agent={agent} />}
        />
        <Table.Footer>
          {/* <Pagination count={agentsData.length} /> */}
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default AgentsTable;
