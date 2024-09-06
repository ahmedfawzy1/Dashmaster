import Header from "../../components/Header/Header";
import Choropleth from "./Choropleth";

export default function Geography() {
  return (
    <>
      <Header title={"Geography"} subTitle={"Simple Geography Chart"} IsHomePage={false} />
      <Choropleth height={"75vh"} showBorder={true} />
    </>
  );
}
