import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { specifyUser, updateTask } from "../../redux/features/task/taskSlice";
import { useEffect, useState } from "react";
import TaskDetails from "./TaskDetails";

const MyTasks = () => {
  const { task, userTask } = useSelector((state) => state.taskSlice);
  const { assignedTo } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    dispatch(specifyUser(assignedTo));
  }, [dispatch, task,assignedTo]);

  return (
    <div>
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {userTask?.map((item) => (
          <div
            key={item.id}
            className="bg-secondary/10 rounded-md p-3 flex justify-between"
          >
            <h1>{item.title}</h1>
            <div className="flex gap-3">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="grid place-content-center"
                title="Details"
              >
                <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
              </button>
              <TaskDetails task={item} isOpen={isOpen} setIsOpen={setIsOpen} />

              <button
                onClick={() =>
                  dispatch(updateTask({ id: item.id, status: "complete" }))
                }
                className="grid place-content-center"
                title="Done"
              >
                <CheckIcon className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTasks;
