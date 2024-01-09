import MiniCard from "./MiniCard"

const MiniCardCarusel = () => {
  //fetch minicard
  return (
    <div className="mini-card-carousel">
      <MiniCard
        img={'https://images.pexels.com/photos/12486284/pexels-photo-12486284.jpeg?auto=compress&cs=tinysrgb&w=400'}
        city={'Boquete'}
        country={'Panamá'}
        stars={4.4} />
      <MiniCard
        img={'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=400'}
        city={'Alberta'}
        country={'Canada'}
        stars={4.4}
      />
      <MiniCard
        img={'https://images.pexels.com/photos/1296203/pexels-photo-1296203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
        city={'Costa Amalfi'}
        country={'Italy'}
        stars={4.4} />
    </div>
  )
}
export default MiniCardCarusel