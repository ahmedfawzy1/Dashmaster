import Header from "../../components/Header/Header";
import Bar from "./Bar";

export default function BarChart() {
  return (
    <>
      <Header title={"Bar Chart"} subTitle={"The minimum wage in Germany, France and Spain (EUR/month)"} IsHomePage={false} />
      <Bar height={"75vh"} />;
    </>
  );
}
