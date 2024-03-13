import MyModal from "./modal";

const TaskDetails = ({ isOpen, setIsOpen, task }) => {

  console.log(task)

  return (
    <div>
      <MyModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={"Tanjil Ahamed"}
        key={"hello"}
      >
        <div className="space-y-2">
          <div className="flex flex-col gap-2">
            <label className="font0-semibold" htmlFor="">
              Title
            </label>
            <h2>{task.title}</h2>
          </div>

          {/* description */}
          <div className="flex flex-col gap-2">
            <label className="font0-semibold" htmlFor="">
              Description
            </label>
            <h2>{task.desc}</h2>
          </div>

          {/* date */}
          <div className="flex flex-col gap-2">
            <label className="font0-semibold" htmlFor="">
              Date
            </label>
            <h2>{task.date}</h2>
          </div>

          {/* assin to */}
          <div className="flex flex-col gap-2">
            <label className="font0-semibold" htmlFor="">
              Assain-to
            </label>
            <h2>{task.assin}</h2>
          </div>

          {/* priority */}
          <div className="flex flex-col gap-2">
            <label className="font0-semibold" htmlFor="">
              Priority
            </label>
            <h2>{task.priority}</h2>
          </div>

          <div className="flex gap-2 items-center mt-4 justify-end">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn btn-primary"
            >
              Close
            </button>
          </div>
        </div>
      </MyModal>
    </div>
  );
};

export default TaskDetails;
