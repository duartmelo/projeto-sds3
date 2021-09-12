import BarChart from "components/barChart";
import DataTable from "components/dataTable";
import DonutChart from "components/donutChart";
import Footer from "components/footer";
import NavBar from "components/navbar";

function Dashboard() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Hello World</h1>
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secundary">Taxa de Sucesso (%)</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secundary">Todas as Vendas</h5>
            <DonutChart />
          </div>
        </div>
        <div className="py-2">
          <h2 className="text-primary">Todas as vendas</h2>
          <DataTable />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
