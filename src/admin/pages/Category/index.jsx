import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "./Header";
import StatsCards from "./StatsCards";
import CategoryTable from "./CategoryTable.jsx";
import Pagination from "./Pagination";

import { getRandomColor } from "./utils";

const Index = () => {
  const [categories, setCategories] = useState([]);
  const [pagination, setPagination] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const [cardColors, setCardColors] = useState([
    getRandomColor(),
    getRandomColor(),
    getRandomColor(),
    getRandomColor(),
  ]);

  const refreshColors = () =>
    setCardColors([getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()]);

  const fetchData = async () => {
    const res = await axios.get(`http://localhost:8000/api/categories?page=${currentPage}`);
    setCategories(res.data.data);
    setPagination(res.data);
    refreshColors();
  };

  useEffect(() => { fetchData(); }, [currentPage]);

  return (
    <div className="container-fluid" dir="rtl">
      <Header refreshColors={refreshColors} />

      <StatsCards
        cardColors={cardColors}
        categories={categories}
        pagination={pagination}
      />

      <CategoryTable categories={categories} pagination={pagination} />

      {pagination.last_page > 1 && (
        <Pagination
          pagination={pagination}
          handlePageChange={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  );
};

export default Index;
