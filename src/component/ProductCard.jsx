import { Image } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {

  const navigate = useNavigate();

  return (
    <div className='item-card' onClick={()=>navigate(`/product/${item.id}`)}>
      <Image src={item.img} fluid thumbnail />
      <div>{item?.choice?"Conscious choice":" "}</div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div>{item?.new?"신제품":" "}</div>
    </div>
  )
}

export default ProductCard