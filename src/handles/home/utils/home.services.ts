import { useAppDispatch, useAppSelector } from "../../../hooks/redux/hooks";

export const homeService = () => {
  const dispatch = useAppDispatch();
  const { employees } = useAppSelector((state) => state.homeStore);

  const getEmployee=()=>{

  }
 


  
};
