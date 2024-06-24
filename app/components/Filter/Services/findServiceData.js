import serviceData from "@/db/services.json";

export default function findServiceData(name) {
  return serviceData.items.find((data) => data.name === name);
}
