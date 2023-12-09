import React, { useEffect, useState } from "react";
import { debounce } from "lodash";
import axios from "../../instance/axios";
import Header from "../../components/User/Header";
import ProductCard from "../../components/User/ProductCard";
import Pagination from "../../components/Ui/Pagination";

export default function Home() {
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("")

  useEffect(() => {
    const debouncedFetchData = debounce(
      (searchValue) => fetchData(searchValue),
      500
    );
    debouncedFetchData(search);

    return () => debouncedFetchData.cancel();
  }, [page,search]);

  const fetchData = (searchValue) => {
    try {
      axios.get(`/products?page=${page}&search=${searchValue}`).then((res) => {
        setList(res.data);
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <Header onSearch={setSearch} />
      <div className="flex flex-wrap justify-center md:justify-stretch md:gap-32 md:mx-4 pt-16 md:pt-20">
        <ProductCard data={list.list} />
      </div>
      <Pagination
        page={page}
        limit={list?.limit ? list?.limit : 0}
        total={list?.total ? list?.total : 0}
        setPage={(page) => setPage(page)}
      />
    </div>
  );
}
