import { homeActions } from "../../../handles/home/utils/data/homeActions";
import { useAppDispatch } from "../../../hooks/redux/hooks";

interface Props {
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export const Pagination = (props: Props) => {
  const dispatch = useAppDispatch();

  const { currentPage, setCurrentPage } = props;

  const onClickCell = (page: any) => {
    dispatch({
      type: homeActions.GET_EMPLOYEE,
      payload: { page },
    });
    setCurrentPage(page);
  };

  return (
    <nav aria-label="Page navigation example">
      <div className="inline-flex -space-x-px">
        <div
          onClick={() => onClickCell(currentPage - 1)}
          className="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Previous
        </div>
        <div className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          1
        </div>
        <div
          onClick={() => onClickCell(currentPage + 1)}
          className="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
        </div>
      </div>
    </nav>
  );
};
