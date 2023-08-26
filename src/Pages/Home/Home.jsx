import { Box, Center, Text } from '@chakra-ui/react';
import React from 'react';
import { Banners } from './Banners';
import { ProductsCarousal } from './ProductsCarousal';

export const Home = () => {
  return (
    <Box>
      <Center>
        <Box width={{ base: "100%", "2xl": "1500px" }}>
          <Banners />

          <ProductsCarousal />

          <HomeBotton />
        </Box>
      </Center>
    </Box>
  )
}

function HomeBotton() {
  return (
    <Box borderTop="1px solid lightGrey" p="30px" mt="40px">
      <Text fontSize="lg" fontWeight="500" color="gray.500">ShopEasy: The Everything Store</Text>
      <Text mb="10px" fontSize="sm" color="grey">E-commerce is revolutionizing the way we all shop in India. Why do you want to hop from one store to another in search of the latest phone when you can find it on the Internet in a single click? Not only mobiles. ShopEasy houses everything you can possibly imagine, from trending electronics like laptops, tablets, smartphones, and mobile accessories to in-vogue fashion staples like shoes, clothing and lifestyle accessories; from modern furniture like sofa sets, dining tables, and wardrobes to appliances that make your life easy like washing machines, TVs, ACs, mixer grinder juicers and other time-saving kitchen and small appliances; from home furnishings like cushion covers, mattresses and bedsheets to toys and musical instruments, we got them all covered.</Text>
      <Text mb="15px" fontSize="sm" color="grey">What's more, with our year-round shopping festivals and events, our prices are irresistible. We're sure you'll find yourself picking up more than what you had in mind. If you are wondering why you should shop from ShopEasy when there are multiple options available to you, well, the below will answer your question.</Text>

      <Text fontSize="lg" fontWeight="500" color="gray.500">ShopEasy Plus</Text>
      <Text mb="15px" fontSize="sm" color="grey">A world of limitless possibilities awaits you - ShopEasy Plus was kickstarted as a loyalty reward programme for all its regular customers at zero subscription fee. All you need is 500 supercoins to be a part of this service. For every 100 rupees spent on ShopEasy order, Plus members earns 4 supercoins & non-plus members earn 2 supercoins. Free delivery, early access during sales and shopping festivals, exchange offers and priority customer service are the top benefits to a ShopEasy Plus member. </Text>

      <Text fontSize="lg" fontWeight="500" color="gray.500">No Cost EMI</Text>
      <Text mb="15px" fontSize="sm" color="grey">In an attempt to make high-end products accessible to all, our No Cost EMI plan enables you to shop with us under EMI, without shelling out any processing fee. Applicable on select mobiles, laptops, large and small appliances, furniture, electronics and watches, you can now shop without burning a hole in your pocket. If you've been eyeing a product for a long time, chances are it may be up for a no cost EMI. Take a look ASAP! Terms and conditions apply.</Text>

      <Text fontSize="lg" fontWeight="500" color="gray.500">EMI on Debit Cards</Text>
      <Text mb="15px" fontSize="sm" color="grey">Did you know debit card holders account for 77.38 crore in the country, while there are only 4.1 crore credit card holders? After enabling EMI on Credit Cards, in another attempt to make online shopping accessible to everyone, ShopEasy introduces EMI on Debit Cards, empowering you to shop confidently with us without having to worry about pauses in monthly cash flow. At present, we have partnered with Axis Bank, HDFC Bank, State Bank of India and ICICI Bank for this facility. More power to all our shoppers! Terms and conditions apply.</Text>

      <Text fontSize="lg" fontWeight="500" color="gray.500">Mobile Exchange Offers</Text>
      <Text mb="15px" fontSize="sm" color="grey">Get an instant discount on the phone that you have been eyeing on. Exchange your old mobile for a new one after the ShopEasy experts calculate the value of your old phone, provided it is in a working condition without damage to the screen. If a phone is applicable for an exchange offer, you will see the 'Buy with Exchange' option on the product description of the phone. So, be smart, always opt for an exchange wherever possible. Terms and conditions apply.</Text>

      <Text fontSize="lg" fontWeight="500" color="gray.500">What Can You Buy From ShopEasy?</Text>
      <Text fontSize="lg" fontWeight="500" color="gray.500">Mobile Phones</Text>
      <Text mb="15px" fontSize="sm" color="grey">From budget phones to state-of-the-art smartphones, we have a mobile for everybody out there. Whether you're looking for larger, fuller screens, power-packed batteries, blazing-fast processors, beautification apps, high-tech selfie cameras or just large internal space, we take care of all the essentials. Shop from top brands in the country like Samsung, Apple, Oppo, Xiaomi, Realme, Vivo, and Honor to name a few. Rest assured, you're buying from only the most reliable names in the market. What's more, with ShopEasy's Complete Mobile Protection Plan, you will never again find the need to run around service centres. This plan entails you to a number of post-purchase solutions, starting at as low as Rupees 99 only! Broken screens, liquid damage to phone, hardware and software glitches, and replacements - the ShopEasy Complete Mobile Protection covers a comprehensive range of post-purchase problems, with door-to-door services.</Text>

      <Text fontSize="lg" fontWeight="500" color="gray.500">Electronic Devices and Accessories</Text>
      <Text mb="10px" fontSize="sm" color="grey">When it comes to laptops, we are not far behind. Filter among dozens of super-fast operating systems, hard disk capacity, RAM, lifestyle, screen size and many other criterias for personalized results in a flash. All you students out there, confused about what laptop to get? Our Back To College Store segregates laptops purpose wise (gaming, browsing and research, project work, entertainment, design, multitasking) with recommendations from top brands and industry experts, facilitating a shopping experience that is quicker and simpler.</Text>
      <Text mb="10px" fontSize="sm" color="grey">Photography lovers, you couldn't land at a better page than ours. Cutting-edge DSLR cameras, ever reliable point-and-shoot cameras, millennial favourite instant cameras or action cameras for adventure junkies: our range of cameras is as much for beginners as it is for professionals. Canon, Nikon, GoPro, Sony, and Fujifilm are some big names you'll find in our store. Photography lovers, you couldn't land at a better page than ours. Cutting-edge DSLR cameras, ever reliable point-and-shoot cameras, millennial favourite instant cameras or action cameras for adventure junkies: our range of cameras is as much for beginners as it is for professionals. Canon, Nikon, GoPro, Sony, and Fujifilm are some big names you'll find in our store.</Text>
      <Text mb="10px" fontSize="sm" color="grey">Turn your home into a theatre with a stunning surround sound system. Choose from our elaborate range of Sony home theatres, JBL soundbars and Philips tower speakers for an experience to remember.</Text>
      <Text mb="15px" fontSize="sm" color="grey">How about jazzing up your phone with our quirky designer cases and covers? Our wide-ranging mobile accessories starting from headphones, power banks, memory cards, mobile chargers, to selfie sticks can prove to be ideal travel companions for you and your phone; never again worry about running out of charge or memory on your next vacation.</Text>

      <Text fontSize="lg" fontWeight="500" color="gray.500"> Appliances</Text>
      <Text mb="10px" fontSize="sm" color="grey">Sleek TVs, power-saving refrigerators, rapid-cooling ACs, resourceful washing machines - discover everything you need to run a house under one roof. Our Dependable TV and Appliance Store ensures zero transit damage, with a replacement guarantee if anything goes wrong; delivery and installation as per your convenience and a double warranty (Official Brand Warranty along with an extended ShopEasy Warranty) - rest assured, value for money is what is promised and delivered. Shop from market leaders in the country like Samsung, LG, Whirlpool, Midea, Mi, Vu, Panasonic, Godrej, Sony, Daikin, and Hitachi among many others.</Text>
      <Text mb="15px" fontSize="sm" color="grey">For certain product categories, Customers meeting the eligibility criteria will have the option to buy larger quantities. To know more on the eligibility criteria and terms and conditions, please reach out to Purchases.oni@ShopEasy.com.</Text>

      <Text fontSize="lg" fontWeight="500" color="gray.500"> Home Appliances</Text>
      <Text mb="15px" fontSize="sm" color="grey">Find handy and practical home appliances designed to make your life simpler: electric kettles, OTGs, microwave ovens, sandwich makers, hand blenders, coffee makers, and many more other time-saving appliances that are truly crafted for a quicker lifestyle. Live life king size with these appliances at home.</Text>

      <Text fontSize="lg" fontWeight="500" color="gray.500">Lifestyle</Text>
      <Text mb="15px" fontSize="sm" color="grey">ShopEasy, 'India ka Fashion Capital', is your one-stop fashion destination for anything and everything you need to look good. Our exhaustive range of Western and Indian wear, summer and winter clothing, formal and casual footwear, bridal and artificial jewellery, long-lasting make-up, grooming tools and accessories are sure to sweep you off your feet. Shop from crowd favourites like Vero Moda, Forever 21, Only, Arrow, Woodland, Nike, Puma, Revlon, Mac, and Sephora among dozens of other top-of-the-ladder names. From summer staple maxi dresses, no-nonsense cigarette pants, traditional Bandhani kurtis to street-smart biker jackets, you can rely on us for a wardrobe that is up to date. Explore our in-house brands like Metronaut, Anmi, and Denizen, to name a few, for carefully curated designs that are the talk of the town. Get ready to be spoiled for choice.Festivals, office get-togethers, weddings, brunches, or nightwear - ShopEasy will have your back each time.</Text>

      <Text fontSize="lg" fontWeight="500" color="gray.500">Home and Furniture</Text>
      <Text mb="10px" fontSize="sm" color="grey">Moving to a new place is never easy, especially if you're buying new furniture. Beds, sofa sets, dining tables, wardrobes, and TV units - it's not easy to set up everything again. With the hundreds of options thrown at you, the ride could be overwhelming. What place is reliable, what furniture will stand the test of time? These are questions you must ask before you choose a store. Well, our Durability Certified Furniture Store has not only curated a range of furniture keeping in mind the modern Indian consumer but furniture that comes with a lab certification, ensuring they last you for up to 10 years. Yes, all our furniture has gone through 35 stability and load tests so that you receive only the best-quality furniture.</Text>
      <Text mb="15px" fontSize="sm" color="grey">You may have your furniture all set up, but they could end up looking flat and incomplete without complementary decor. Curtains, cushion covers, bed sheets, wall shelves, paintings, floor lamps - find everything that turns a house to an inviting home under one roof at ShopEasy.</Text>

      <Text fontSize="lg" fontWeight="500" color="gray.500">Baby and Kids</Text>
      <Text mb="15px" fontSize="sm" color="grey">Your kids deserve only the best. From bodysuits, booties, diapers to strollers, if you're an expecting mother or a new mother, you will find everything you need to set sail on a smooth parenting journey with the help of our baby care collection.</Text>

      <Text fontSize="lg" fontWeight="500" color="gray.500">Books, Sports and Games</Text>
      <Text mb="15px" fontSize="sm" color="grey">Work hard and no play? We don't believe in that. Get access to best-selling fiction and non-fiction books by your favourite authors, thrilling English and Indian blockbusters, most-wanted gaming consoles, and a tempting range of fitness and sports gadgets and equipment bound to inspire you to get moving.</Text>

      <Text fontSize="lg" fontWeight="500" color="gray.500">Grocery/Supermart</Text>
      <Text fontSize="sm" color="grey">Launching into the grocery vertical, ShopEasy introduces Supermart that is out to bring everyday essentials close to you. From pulses, spices, dairy, personal and sanitary care, breakfast essentials, health drinks, spreads, ready to cook, grooming to cleaning agents, we are happy to present everything you need to run a house. Now buy Grocery products for as low as 1 Rupee only - our 1 Rupee Store presents new products every day for a nominal price of 1 Rupee only. Terms and conditions apply.</Text>
    </Box>
  )
}