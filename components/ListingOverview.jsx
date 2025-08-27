import OverviewCard from "./ui/OverviewCard";

const ListingOverview = () => {
  const listingsData = [
    { name: "Total", value: 1800 },
    { name: "Active", value: 80 },
    { name: "Archived", value: 1000 }
  ];

  return (
    <OverviewCard
      title="Listings Overview"
      icon="/icons/house.svg"
      viewAllLink="/listings"
      data={listingsData}
    />
  );
};

export default ListingOverview;