import { ReactNode } from "react";
import { FiBell } from "react-icons/fi";
import { AiFillBell, AiOutlineAppstore } from "react-icons/ai";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Flex,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
  IconButton,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function AdminsNav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div
      style={{
        zIndex: "999",
        position: "sticky",
        top: "0",
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
      }}
    >
      <Box bg={useColorModeValue("#2874f0", "blue.200")} px={4} p={"5px"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Image
              w={"45%"}
              src="https://www.canva.com/design/DAFsjpFJ36Y/HpgX6DGH5RWonEax7VR1UA/edit?utm_content=DAFsjpFJ36Y&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            />
          </Box>

          <Flex alignItems={"center"}>
            <RouterLink to="/">
              <Button colorScheme="yellow" m={"15px"}>
                ShopEasy
              </Button>
            </RouterLink>

            <Stack direction={"row"} spacing={7}>
              <Button>
                <AiFillBell />
              </Button>
              <Button>
                <AiOutlineAppstore />
              </Button>

              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
}
