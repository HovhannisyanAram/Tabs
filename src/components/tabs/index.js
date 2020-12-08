import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import { setActive } from "store/actions";

import "./index.css";

function Tabs() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => Object.entries(state.filters));

  const activeFilterIndex = filters.findIndex(item => item[1]);
  console.log({
    activeFilterIndex,
    filters,
    current: filters[activeFilterIndex]
  }) 

  const handleTabClick = (tabName) => dispatch(setActive(tabName))
  return (
    <ul className="tabs">
      <li onClick={() => {
        if(activeFilterIndex > 0) { 
          dispatch(setActive(filters[activeFilterIndex - 1][0]))
        }
      }} >
        <i className="fa fa-angle-left" aria-hidden="true" />
      </li>
      {filters.map(([key, value]) => (
        <li
          className={classNames({ active: value })}
          onClick={() => handleTabClick(key)}
          key={key}
        >
          {key}
        </li>
      ))}
      <li onClick={() => {
        if(activeFilterIndex < filters.length - 1) {
          dispatch(setActive(filters[activeFilterIndex + 1][0]))
        }
      }}>
        <i className="fa fa-angle-right" aria-hidden="true" />
      </li>
    </ul>
  );
}

export default Tabs;
