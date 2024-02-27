import MyModal from "./modal";

const TaskDetails = ({ isOpen, setIsOpen }) => {


  return (
    <div>
      <MyModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={"Tanjil Ahamed"}
        key={"hello"}
      >
        <form className="my-3">
          {/* Title */}
          <div className="flex flex-col gap-2">
            <label className="font0-semibold" htmlFor="">
              Title
            </label>
            <input
              required
              
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>

          {/* description */}
          <div className="flex flex-col gap-2">
            <label className="font0-semibold" htmlFor="">
              Description
            </label>
            <textarea
              required
              
              className="textarea textarea-bordered"
              placeholder="desc"
            ></textarea>
          </div>

          {/* date */}
          <div className="flex flex-col gap-2">
            <label className="font0-semibold" htmlFor="">
              Date
            </label>
            <input
              required
              
              type="date"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>

          {/* assin to */}
          <div className="flex flex-col gap-2">
            <label className="font0-semibold" htmlFor="">
              Assain-to
            </label>
            <select
              
              className="select select-bordered w-full max-w-xs"
            >
              <option selected>Goku</option>
              <option>Tozii</option>
              <option>naruto</option>
              <option>Captain levi</option>
              <option>Gojo sensai</option>
            </select>
          </div>

          {/* priority */}
          <div className="flex flex-col gap-2">
            <label className="font0-semibold" htmlFor="">
              Priority
            </label>
           <h2></h2>
          </div>

          <div className="flex gap-2 items-center mt-4 justify-end">
            <button className="btn btn-primary" type="submit">
              Close
            </button>
          </div>
        </form>
      </MyModal>
    </div>
  );
};

export default TaskDetails;
