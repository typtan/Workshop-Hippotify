import { useNavigate } from "react-router-dom";
import { Flex, Box, Image } from "@chakra-ui/react";
import { Button } from "./ui/button";

import ProfilePicture from "../../public/assets/images/UserProfilePicture.png"

import { FaChevronLeft } from "react-icons/fa6";
import { GrHomeRounded } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";

export default function Navigation() {
  const navigate = useNavigate();
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems="center"
      padding={"10px 20px"}
    >
      <Flex>
        <Button variant="plain" color="gray" onClick={() => navigate(-1)}>
          <FaChevronLeft />
        </Button>
      </Flex>
      <Flex gap={"10px"}>
        <Button
          variant="subtle"
          borderRadius="100%"
          padding="10px"
          onClick={() => navigate("/")}
        >
          <GrHomeRounded color="gray" />
        </Button>
        <Button
          variant="subtle"
          width="400px"
          borderRadius="20px"
          padding="10px"
          display="flex"
          justifyContent="start"
        >
          <FiSearch />
          What do you want to play?
        </Button>
      </Flex>
      <Flex>
        <Image src={ProfilePicture} width={"40px"} cursor={"pointer"}/>
      </Flex>
    </Flex>
  );
}
