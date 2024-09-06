import Line from "./Line";
import Header from "../../components/Header/Header";

export default function LineChart() {
  return (
    <>
      <Header title={"Line Chart"} subTitle={"Simple Line Chart"} IsHomePage={false} />
      <Line height={"75vh"} />
    </>
  );
}
