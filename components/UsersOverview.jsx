import OverviewCard from "./ui/OverviewCard";
import { FaRegUser } from "react-icons/fa";

const UsersOverview = () => {
  const usersData = [
    { name: "Total", value: "20.7k" },
    { name: "Riders", value: "8.5k" },
    { name: "Subscribers", value: "7.5k" }
  ];

  return (
    <OverviewCard
      title="Users Overview"
      icon={<FaRegUser />}
      viewAllLink="/users"
      data={usersData}
    />
  );
};

export default UsersOverview;