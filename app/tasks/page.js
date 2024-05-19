import prisma from "@/utils/db";
import TaskList from "@/components/TaskList";
import TaskFormCustom from "@/components/TaskFormCustom";

export const dynamic = "force-dynamic";

const handleTaskSubmit = async () => {};

function TasksPage() {
  return (
    <div className="max-w-lg">
      <TaskFormCustom />
      <TaskList />
    </div>
  );
}

export default TasksPage;
