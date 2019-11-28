import React, { useEffect, useState } from "react";
import Paginator from "react-hooks-paginator";

const PaginatorComp = props => {
  const pageLimit = 10;
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    props.setCurrentData(props.dataIn.slice(offset, offset + pageLimit));
  }, [offset, props.dataIn]);

  return (
    <div>
      <Paginator
        totalRecords={props.dataIn.length}
        pageLimit={pageLimit}
        pageNeighbours={1}
        setOffset={setOffset}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default PaginatorComp;
