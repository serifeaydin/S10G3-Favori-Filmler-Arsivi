import { useDispatch } from "react-redux";
import { deleteFromFavs } from "../store/actions";

export default function FavMovie({ title, id }) {
  const dispatch = useDispatch();

  function favoridenCikart() {
    dispatch(deleteFromFavs(id));
  }

  return (
    <div className="flex p-3 pl-4 bg-white mb-2 shadow items-center group">
      <div className="pr-4 flex-1">{title}</div>
      <button
        onClick={favoridenCikart}
        className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white"
      >
        Listemden çıkart
      </button>
    </div>
  );
}