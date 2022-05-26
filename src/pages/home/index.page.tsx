import { useAppDispatch, useAppSelector } from "../../hooks/redux/hooks";
import { TableCustom } from "./components/table";
import { useEffect, useState } from "react";
import { homeActions } from "../../handles/home/utils/data/homeActions";
import { Pagination } from "../../components/pagination";
import { GetEmployeePayload } from "../../handles/home/utils/home.types";
const Home = () => {
  const dispatch = useAppDispatch();
  const { employees } = useAppSelector((state) => state.homeStore);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const onCallbackSuccess = (page: number) => {
    setCurrentPage(page);
  };
  const onPageChange = (page: number) => {
    dispatch({
      type: homeActions.GET_EMPLOYEE,
      payload: { page, onCallbackSuccess },
    });
  };

  useEffect(() => {
    const payload: GetEmployeePayload = { page: currentPage };
    dispatch({
      type: homeActions.GET_EMPLOYEE,
      payload,
    });
  }, []);

  return (
    <div className="m-auto h-1/2 w-1/2" data-testid="homeComponent">
      <div>
        <TableCustom employees={employees} />
        <div>
          <Pagination currentPage={currentPage} onPageChange={onPageChange} />
        </div>
      </div>
    </div>
  );
};

export default Home;
