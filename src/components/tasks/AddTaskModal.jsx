import { useDispatch } from "react-redux";
import MyModal from "./modal";
import { useForm } from "react-hook-form";
import { addTask } from "../../redux/features/task/taskSlice";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const handleCancel = () => {
    reset();
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    // console.log(data);

    dispatch(addTask(data));

    handleCancel();
  };

  return (
    <div>
      <MyModal isOpen={isOpen} setIsOpen={setIsOpen} title={"Tanjil Ahamed"}>
        <form className="my-3" onSubmit={handleSubmit(onSubmit)}>
          {/* Title */}
          <div className="flex flex-col gap-2">
            <label className="font0-semibold" htmlFor="">
              Title
            </label>
            <input
              required
              {...register("title")}
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
              {...register("desc")}
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
              {...register("date")}
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
              {...register("assin")}
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
            <select
              {...register("priority")}
              className="select select-bordered w-full max-w-xs"
            >
              <option selected>low</option>
              <option>medium</option>
              <option>High</option>
            </select>
          </div>

          <div className="flex gap-2 items-center mt-4 justify-end">
            <button
              onClick={handleCancel}
              className="btn btn-danger"
              type="submit"
            >
              cancel
            </button>
            <button className="btn btn-primary" type="submit">
              submit
            </button>
          </div>
        </form>
      </MyModal>
    </div>
  );
};

export default AddTaskModal;
