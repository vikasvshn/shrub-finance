import React from "react";
import { Box, Text } from "@chakra-ui/react";

const DateTimeDisplay = ({ value, type }: { value: number; type: string }) => {
  return (
    <Box>
      <Text>{value}</Text>
      <Text fontSize={{ base: "10px", md: "20px" }} px={4}>
        {type}
      </Text>
    </Box>
  );
};

export default DateTimeDisplay;
