function findData(searchTerm, datas) {
  return searchTerm
    ? datas.items.filter((item) =>
        item.toLowerCase().startsWith(searchTerm.toLowerCase())
      )
    : [];
}

export default findData;
