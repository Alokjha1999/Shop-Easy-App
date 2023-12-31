import {
  Box,
  Button,
  Checkbox,
  Flex,
  Image,
  Input,
  ListItem,
  Text,
  UnorderedList,
  useToast,
} from "@chakra-ui/react";

import React from "react";

import { BiFileBlank, BiHeart, BiShareAlt } from "react-icons/bi";

import { Link } from "react-router-dom";

import Styles from "../../Style/Single.module.css";
import { useEffect,useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const [data1,setData1]=useState({})
  const {products}=useSelector((store)=>store.fashionReducer)
  const {id}=useParams();
  const toast = useToast();
  
  const handelChangeClick=()=>{
    let arr1=JSON.parse(localStorage.getItem("items1"))||[]
    console.log(arr1)
    
arr1.push(data1)


 localStorage.setItem('items1', JSON.stringify(arr1));

 toast({
  title: 'Product added to cart.',
  duration: 2000,
  status: "success",
  isClosable: true,
});
  }
  useEffect(()=>{
    const data=products.find((el)=>el.id === +id)
    setData1(data)
      },[id])
    

  return (
    <>

   
      <Box w={"100%"}>

        <Flex py={2} pl={2} pr={2} gap="2px" className={Styles.main_flex}>
          <Box w="50%">
            <Box mt={2}>
              <Text color={"red"} ml="95%" mb={"-25px"}>
                <BiHeart size={25} />
              </Text>
              <Image

                src={data1?.image1}
                w={"60%"}
                m="auto"
              />
            </Box>
            <Box mt={10}>


            </Box>
            <Flex mt={10}>
              <Image
                src="https://i.ibb.co/stBL1WJ/Screenshot-20230122-010858.png"
                w={"15%"}
              />
              <Image
                src="https://i.ibb.co/kydgvgW/Screenshot-20230122-010853.png"
                w={"15%"}
              />
            </Flex>
          </Box>
          <Box w="60%" pl={5} pt="10px">
            <Box>
              <Text fontSize={20} fontWeight="500">

                {data1?.title}

             

              </Text>
              <Flex alignItems={"center"} gap="5px" mt={5}>
                <Checkbox isInvalid>Add to Compare</Checkbox>
                <Text>|</Text>
                <BiShareAlt color="blue" />
                <Text>|</Text>
                <Flex alignItems={"center"} gap="5px">
                  <BiFileBlank color="blue" />
                  <Text color="blue">Print</Text>
                </Flex>
              </Flex>
            </Box>
            <Box w={"100%"} border="1px solid gray" mt={3}></Box>
            <Box mt={5}>
              <Flex className={Styles.inner_flex}>
                <Box w={"50%"}>
                  <Text fontSize={16} fontWeight="500">
                    Gain more with offers (1)
                  </Text>
                  <UnorderedList mt={2}>
                    <ListItem fontSize={14}>
                      HDFC BANK Offer: Get Rs 5000 Instant Discount on CC/DC
                      EMI&
                      <br />
                      CC Fulswipe. 9 Months No Cost EMI..
                    </ListItem>
                  </UnorderedList>
                  <Text mt={5} fontSize={16} fontWeight="500">
                    Save more with EMI/Cashback (5)
                  </Text>
                  <UnorderedList mt={2}>
                    <ListItem fontSize={14}>
                      Credit Card No-Cost EMI Options.
                    </ListItem>
                    <ListItem fontSize={14}>
                      Debit Card No-Cost EMI Options.
                    </ListItem>
                    <ListItem fontSize={14}>
                      Credit Card Low-Cost EMI Options.
                    </ListItem>
                  </UnorderedList>
                  <Text mt={5} fontSize={16} fontWeight="500">
                    Warranty
                  </Text>
                  <UnorderedList mt={2}>
                    <ListItem fontSize={14}>
                      Warranty: 2 Year manufacturer warranty
                    </ListItem>
                  </UnorderedList>
                  <Text mt={5} fontSize={16} fontWeight="500">
                    Key Features
                  </Text>
                  <UnorderedList mt={2}>
                    <ListItem fontSize={14}>
                      16.95 cm (6.7 Inch) Super Retina XDR OLED display
                    </ListItem>
                    <ListItem fontSize={14}>
                      14 MP Main + 12 MP Ultra Wide Lens Rear Camera
                    </ListItem>
                    <ListItem fontSize={14}>
                      14 MP Selfie Camera, Fingerprint-resistant oleophobic
                      coating
                    </ListItem>
                  </UnorderedList>
                  <Text mt={5} fontSize={16} fontWeight="500">
                    Return Policy
                  </Text>
                  <UnorderedList mt={2}>
                    <ListItem fontSize={14}>
                      Items are eligible for return within 7 Days of Delivery.
                    </ListItem>
                    <ListItem fontSize={14}>
                      All accessories, product & packaging need to be
                      <br />
                      returned in original condition.
                    </ListItem>
                  </UnorderedList>
                  <Flex alignItems={"center"} mt={5} gap={1}>
                    <Text fontSize={16} fontWeight="500">
                      Got Feedback to share on this page?
                    </Text>
                    <Link to="">
                      <Text fontSize={16} fontWeight="500" color={"blue"}>
                        report here.
                      </Text>
                    </Link>
                  </Flex>
                </Box>
                <Box w={"50%"} borderLeft="1px solid gray" pl={5}>
                  <Flex alignItems={"center"} gap={3}>
                    <Text>Deal Price: </Text>
                    <Text color={"blue"} fontWeight="bold" fontSize={25}>

                      ₹ {data1.price}
                    
                    </Text>
                  </Flex>
                  <Box mt={5}>
                    <Flex alignItems={"center"} mt="5px">
                      <Text>Offer Price: ₹</Text>
                      <Text
                        textDecoration={"line-through"}
                        fontWeight="semibold"
                        fontSize={17}
                      >

                        {3500}


                      </Text>
                    </Flex>
                    <Flex alignItems={"center"} gap={2} mt="5px">
                      <Text>MRP :</Text>
                      <Text
                        textDecoration={"line-through"}
                        fontWeight="semibold"
                        fontSize={17}
                      >
                        {3500}
                      </Text>
                      <Text>(Inclusive of all taxes)</Text>
                    </Flex>
                    <Text
                      fontSize={18}
                      color="green"
                      fontWeight="bold"
                      mt="5px"
                    >

                      You Save: {data1.name}(₹7,000)

                    

                    </Text>
                    <Text fontWeight={"500"} fontSize={16} mt="5px">
                      EMIs (Credit Cards) from ₹4199.42/month{" "}
                    </Text>
                    <Text fontWeight={"500"} fontSize={22} mt="5px">
                      FREE Shipping!
                    </Text>
                  </Box>
                  <Box mt={5} mr={5}>
                    <Input
                      placeholder="Enter / Detect PIN Code"
                      border={"1px solid black"}
                    />
                    <Flex gap={"2%"} mt={5} className={Styles.Button_flex}>
                      <Button
                        border={"2px solid red"}
                        fontWeight="bold"
                        fontSize={18}
                        // onClick={handleCart}
                        color="white"
                        bg={"#e42529"}
                        onClick={handelChangeClick}
                      >
                        ADD TO CART
                      </Button>
                      <Button
                        border={"2px solid red"}
                        fontWeight="bold"
                        fontSize={18}
                        // onClick={handleBuy}
                        color=""
                        bg={"#fc6027"}
                      >
                        BUY NOW
                      </Button>
                    </Flex>
                  </Box>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
      <br />
      <br />
    </>
  );
};

export default SingleProduct;
