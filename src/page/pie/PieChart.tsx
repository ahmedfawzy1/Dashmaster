import Header from "../../components/Header/Header";
import Pie from "./Pie";

export default function PieChart() {
  return (
    <>
      <Header title={"Pie Chart"} subTitle={"Simple Pie Chart"} IsHomePage={false} />
      <Pie height={"75vh"} showLegends={true} />
    </>
  );
}
