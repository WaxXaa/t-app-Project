import { Card, Button } from 'keep-react'
const ProductCard = () => {
  return (
    <Card
      className="max-w-lg overflow-hidden rounded-xl"
      imgSrc="https://images.prismic.io/staticmania/56ae80e7-4d23-4bd9-a2f3-01bd6f923a8b_product-2.avif?auto=compress,format"
      imgSize="md">
      <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-50/50">
      </Card.Container>
      <Card.Container className="space-y-4 p-6">
        <Card.Title className="flex items-center gap-2 text-body-5 font-medium text-metal-500 md:!text-body-4">
          <span>Garden Street,Ring Road</span>
        </Card.Title>
        <Card.Container className="flex items-center justify-between">
          <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
            <span>3 Bed Room</span>
          </Card.Title>
          <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
            <span>1 Bath</span>
          </Card.Title>
        </Card.Container>
        <Card.Container className="flex items-center justify-between">
          <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
            <span>1,032 sqft</span>
          </Card.Title>
          <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
            <span>Family</span>
          </Card.Title>
        </Card.Container>
        <Card.Container className="my-3 flex items-center justify-between">
          <Button type="primary" size="sm">
            Check Out
          </Button>
          <Card.Title className="text-body-3 font-medium text-metal-500">$649,00</Card.Title>
        </Card.Container>
      </Card.Container>
    </Card>
  )
}
export default ProductCard;