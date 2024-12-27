import { useState } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Button } from "./ui/button";
import {
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from "./ui/popover";
import { FaEllipsisVertical, FaPlus } from "react-icons/fa6";
import { SlTrash } from "react-icons/sl";

import { formatDateMDY } from "../utils/dateFormatChange";
import { timeFormat } from "../utils/timeFormatChange";

export default function SongCard({ ID, song, index }) {
  const [open, setOpen] = useState(false);
  const removeSongFromPlaylist = () => {
    console.log("Remove from this playlist", song.ID);
  };

  const addSongToMyPlaylist = () => {
    console.log("Add to my playlist", song.ID);
  };

  return (
    <>
      <Flex
        width={"100%"}
        padding={"10px"}
        align={"center"}
        fontSize={"15px"}
        color={"gray.400"}
        _hover={{ bg: "rgba(255, 255, 255, 0.1)", borderRadius: "10px" }}
      >
        <Text width={"2%"}>{index + 1}</Text>
        <Flex width={"53%"}>
          <Image src={song.cover} height={"45px"} borderRadius={"5px"} />
          <Flex flexDir={"column"} pl={"10px"}>
            <Text color={"white"}>{song.title}</Text>
            <Text>{song.singer}</Text>
          </Flex>
        </Flex>
        <Text width={"23%"}>{song.album}</Text>
        <Text width={"17%"}>{formatDateMDY(song.dateAdded)}</Text>
        <Text width={"3%"}>{timeFormat(song.duration)}</Text>
        <PopoverRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
          <PopoverTrigger asChild>
            <Button
              width={"2%"}
              variant="plain"
              color="gray"
              _hover={{ color: "white" }}
            >
              <FaEllipsisVertical />
            </Button>
          </PopoverTrigger>
          <PopoverContent background={"gray.900"} width={"100%"}>
            <PopoverBody padding={"10px"}>
              <Button
                display={ID == 1 ? "none" : "flex"}
                variant={"plain"}
                justifyContent={"start"}
                align={"center"}
                gap={"10px"}
                color={"gray.400"}
                _hover={{ color: "white" }}
                onClick={() => removeSongFromPlaylist()}
              >
                <SlTrash />
                <Text>Remove from this playlist</Text>
              </Button>
              <Button
                display={ID == 1 ? "flex" : "none"}
                variant={"plain"}
                justifyContent={"start"}
                align={"center"}
                gap={"10px"}
                color={"gray.400"}
                _hover={{ color: "white" }}
                onClick={() => addSongToMyPlaylist()}
              >
                <FaPlus />
                <Text>Add to my playlist</Text>
              </Button>
            </PopoverBody>
          </PopoverContent>
        </PopoverRoot>
      </Flex>
    </>
  );
}
