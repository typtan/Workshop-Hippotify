import { useNavigate } from "react-router-dom";
import { Flex, Box, Image } from "@chakra-ui/react";
import { Button } from "./ui/button";

import { playListMockUp } from "../MockUpData";

export default function SideBar() {
  const navigate = useNavigate();
  return (
    <Box backgroundColor={"black"}>
      <Box
        bgColor={"gray.900"}
        width={"80px"}
        height={"calc(100vh - 140px)"}
        padding={"10px"}
        borderRadius={"8px"}
      >
        <Flex
          flexWrap={"wrap"}
          flexDir={"column"}
          gap={"20px"}
          justifyContent={"flex-start"}
        >
          {playListMockUp.map((item, index) => (
            <Box>
              <Button
                key={index}
                variant="plain"
                display="block"
                color="gray"
                padding={"0px 0px 55px 0px"}
                onClick={() => navigate(`/${item.ID}`)}
              >
                <Image src={item.cover} borderRadius={"8px"}></Image>
              </Button>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
