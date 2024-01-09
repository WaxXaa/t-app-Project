import { Carousel } from "keep-react";
import HCard from "./HCard";

const HCardCarusel = () => {
  //fetch data
  return (
    <Carousel slide={true} slideInterval={5000} showControls={true}>
      <HCard />
      <HCard />
      <HCard />
    </Carousel>
  )
}
export default HCardCarusel