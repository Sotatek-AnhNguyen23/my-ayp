import { useAppDispatch, useAppSelector } from "../../hooks/redux/hooks";
import { TableCustom } from "./components/table";
import { useEffect, useState } from "react";
import { homeActions } from "../../handles/home/utils/data/homeActions";
import { Pagination } from "./components/pagination";
const Home = () => {
  const dispatch = useAppDispatch();
  const { employees } = useAppSelector((state) => state.homeStore);
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    dispatch({
      type: homeActions.GET_EMPLOYEE,
      payload: { page: currentPage },
    });
  }, []);

  return (
    <div className="m-auto h-1/2 w-1/2">
      <div>
        <TableCustom employees={employees} />
        <div>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
