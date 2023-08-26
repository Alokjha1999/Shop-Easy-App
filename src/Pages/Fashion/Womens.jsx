import React from 'react'
import { Box ,Spinner,SimpleGrid,Button} from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import Sidebar from './Sidebar'     
import { useEffect ,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getProductsclothsWomen } from '../../Redux/FashionReducer/action'
import ProductsCard from './ProductsCard'
import "./mens.css"
import { useLocation, useSearchParams } from "react-router-dom";
import { Link } from 'react-router-dom'


const Womens = () => {
  const dispatch =useDispatch()
  const {products,isLoading}=useSelector((store)=>store.fashionReducer)
  let [searchParams] = useSearchParams();
    const location=useLocation()
    const [page,setPage]=useState(1)


    let obj={
      params:{
          brand:searchParams.getAll("brand"),
          name:searchParams.getAll("name"),
          category:searchParams.getAll("category"),
          _sort:searchParams.get("order") && "price",
          _order:searchParams.get("order"),
          _page:page,
        _limit:8,
      }
  }


  useEffect(()=>{
dispatch(getProductsclothsWomen(obj))
  },[location.search,page])


  return (
    <div>
        <Flex >
       
        <Box boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" m="7px"  bg="white" w={{  sm:"150px", md: "300px", lg: "410px" ,xl:"430px"}}>
<Sidebar/>
</Box>

<Box boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"  m="10px"  w={{ sm: "1000px",
  md: "810px",   
  lg: "1091px",
  xl: "1610px",}}>
 <div  style={{margin:"auto",color:"gray",width:"97%"}}>
  <br />
<div style={{marginRight:"80%"}}>
<Link to="/" style={{fontSize:"19px",color:"black"}}>Home</Link>  |  
<Link to="/" style={{fontSize:"19px",color:"black"}}>    Mens  </Link>  |  
<Link to="/" style={{fontSize:"19px",color:"black"}}>    Womens</Link>  
</div>

  <br />
 <p>You can spruce up your style with the right bottomwear. Flipkart is home to some of the best bottomwear for men, for kids, and for women. Brands such as Wrangler, Levi’s, Lee, W, Peter England, and U.S. Polo Assn have a wide selection of chinos, jeans, shorts, and more. So, depending on your preferred style you are definitely going to find something that will find its worthy place in your wardrobe. Some of the bottom wear for women that you can shop for include shorts, plaited skirts, pencil skirts, ripped jeans, and cargo pants. Some of the bottomwear for men that you should keep an eye out for include striped chinos, formal trousers, knee-length jeans, and ripped shorts. Be sure to keep a good balance of colours in your selection.</p>
 </div>

 <br />
 
 <div className="mediaquery">
    {isLoading?<Spinner/>:<SimpleGrid columns={{base:1,md:2,lg:3,xl:4}} spacing={7}>
        {products.map((el)=>
      <ProductsCard key={el.id} data={el} />)}
        </SimpleGrid>}
</div>

<br/>



<div>
<Button disabled={page===1} colorScheme='blue' mr="10px" onClick={()=>setPage(page-1)} style={{width:"10%",height:"40px",border:"1px solid brown",borderRadius:"10px",backgroundColor:"lightblue" ,fontSize:"16px" ,color:"black",marginRight:"10px",marginLeft:"350px"}}>Previous</Button>
<Button colorScheme='red'>{page}</Button>
<Button  colorScheme='blue' ml="10px" onClick={()=>setPage(page+1)} style={{width:"10%",height:"40px",border:"1px solid brown",borderRadius:"10px",backgroundColor:"lightblue" ,fontSize:"16px" ,color:"black",marginLeft:"10px"}}>Next</Button> 
</div>
<br />
</Box>
</Flex>
     </div>
  )
}

export default Womens