import { Card } from 'keep-react'
import "./cards.css"
const HCard = () => {
  return (
    <Card className="relative max-w-3xl hcard overflow-hidden rounded-xl">
      <Card.Container >
        <Card.Link href="/"
        >
          <img className='hcard-img' src="https://images.prismic.io/staticmania/ecd45179-4b86-4a34-b245-0078e022db5a_1.png?auto=compress,format" alt="" />
        </Card.Link>
      </Card.Container>
    </Card>
  )
}
export default HCard