export default function generateStatusColor(data) {
  switch (data) {
    case "public":
      return "text-green-500";
    case "private":
      return "text-yellow-600";
    case "disable":
      return "text-gray-600";
    case "draft":
      return "text-blue-500";
    default:
      return "text-orange-500";
  }
}
