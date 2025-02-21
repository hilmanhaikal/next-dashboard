import StatsGrid from "./components/StatsGrid";
import UserChart from "./components/UserChart";
import UserTable from "./components/UserTable";
import UserCard from "./components/UserCard";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <StatsGrid />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <UserChart />
        <UserTable />
      </div>
      <h2 className="text-2xl font-bold mt-8 mb-4">Recent Users</h2>
      <UserCard />
    </main>
  );
}
