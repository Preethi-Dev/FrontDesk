import datas from "@/db/services.json";

function findService(searchTerm) {
  return searchTerm
    ? datas.items.filter((item) =>
        item.name.toLowerCase().startsWith(searchTerm.toLowerCase())
      )
    : [];
}

export default findService;
