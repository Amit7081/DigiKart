import React from "react";

const Pagination = ({ page, setPage, dynamicpage }) => {
  const getPage = (current, total) => {
    const pages = [];
    if (total <= 5) {
      for (let i = 1; i <= total; i++) pages.push(i);
    } else {
      if (current <= 3) {
        pages.push(1, 2, 3, "...", total);
      } else if (current >= total - 2)
        pages.push(1, "...", total - 2, total - 1, total);
      else
        pages.push(1, "...", current, current + 1, current + 2, "...", total);
    }
    return pages;
  };
  const pagelist = getPage(page, dynamicpage);
  return (
    <div>
      <button
        disabled={page == 1}
        className={`
          p-2 m-1  border-2 border-red-400 rounded-md
           shadow-xl
          ${page == 1 ? "bg-red-400" : "bg-red-600"}
        `}
        onClick={() => setPage(page - 1)}
      >
        Prev
      </button>
      {pagelist?.map((val, index) => {
        return (
          <span
            key={index}
            className={`
            p-2 font-semibold cursor-pointer
             ${page == val ? "text-red-600" : ""}
            
          `}
            onClick={() => setPage(val)}
          >
            {val}
          </span>
        );
        console.log(val);
      })}
      <button
        className={`
        border-2 border-red-600 rounded-md p-2 m-1 
        ${page == dynamicpage ? "bg-red-400" : "bg-red-600"}
        
        `}
        onClick={() => setPage(page + 1)}
        disabled={page == dynamicpage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
