import {
  Box,
  Heading,
  Text,
  Button,
  Center,
  useColorModeValue,
  Container,
  ListItem,
  UnorderedList,
  Link,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link as ReachLink, RouteComponentProps } from "@reach/router";
import React, { useState } from "react";
import { handleErrorMessagesFactory } from "../utils/handleErrorMessages";
import { isMobile } from "react-device-detect";

function HomeView(props: RouteComponentProps) {
  const [localError, setLocalError] = useState("");
  const handleErrorMessages = handleErrorMessagesFactory(setLocalError);
  const btnColor = useColorModeValue("sprout", "teal");

  return (
    <>
      <Container
        mt={isMobile ? 30 : 50}
        p={5}
        flex="1"
        borderRadius="2xl"
        maxW="container.lg"
      >
        <Center mt={10}>
          <Box maxW="60rem" mb={8} textAlign={"center"}>
            <Heading
              fontSize={{ base: "30px", md: "50px" }}
              letterSpacing={"tight"}
            >
              Paper Gardens
            </Heading>
            <>
              <Box maxW="60rem" mb={4} textAlign={"center"} mt={6}>
                <Text
                  fontSize={{ base: "20px", md: "30px" }}
                  fontWeight="semibold"
                  color={useColorModeValue("gray.500", "gray.400")}
                >
                  CHAPTER 2: THE SAD SEEDS
                </Text>
              </Box>
              <Box maxW="60rem" mb={8} textAlign={"justify"}>
                <Text
                  pt="8"
                  mb="8"
                  fontSize="20px"
                  fontWeight={"medium"}
                  color={useColorModeValue("gray.600", "gray.300")}
                >
                  After the Paper Merchant set up his stall, all of the seeds
                  were giddy with anticipation.
                  <Text pt="6">
                    {" "}
                    "I wonder what my gardener is like!" exclaimed one seed of
                    wonder.
                  </Text>{" "}
                  <Text pt="6">
                    "I can't wait to meet my gardener!" said a seed of passion.
                  </Text>
                  <Text pt="6">
                    "This is a great day!" said a seed of power.
                  </Text>
                </Text>
                <Text
                  pt="6"
                  mb="8"
                  fontSize="20px"
                  fontWeight={"medium"}
                  color={useColorModeValue("gray.600", "gray.300")}
                >
                  The stall opened, and gardeners lined up, each claiming their
                  seeds. Every time a gardener and seed matched, the seed beamed
                  with happiness, excited to begin its journey with its chosen
                  gardener.
                </Text>
                <Text
                  pt="6"
                  mb="8"
                  fontSize="20px"
                  fontWeight={"medium"}
                  color={useColorModeValue("gray.600", "gray.300")}
                >
                  However, as the days went by, and the line of gardeners went
                  away, some of the seeds began to worry. "I hope my gardener
                  didn't forget about me," said a seed of hope.
                </Text>
                <Text
                  pt="6"
                  mb="8"
                  fontSize="20px"
                  fontWeight={"medium"}
                  color={useColorModeValue("gray.600", "gray.300")}
                >
                  Every day, only a few gardeners came to unite with their
                  seeds. Those lucky chosen seeds were happy, but the rest began
                  to realize the cold truth that they might not be united with
                  their gardener at all.
                </Text>
                <Text
                  pt="6"
                  mb="8"
                  fontSize="20px"
                  fontWeight={"medium"}
                  color={useColorModeValue("gray.600", "gray.300")}
                >
                  Finally, the moment came, it was time for the Paper Merchant
                  to go, and the remaining seeds gasped as they realized their
                  fate: they would remain without a gardener.
                </Text>
                <Text
                  pt="6"
                  mb="8"
                  fontSize="20px"
                  fontWeight={"medium"}
                  color={useColorModeValue("gray.600", "gray.300")}
                >
                  One of the Seeds of Passion shrieked, "What will we do???"
                </Text>
                <Text
                  pt="6"
                  mb="8"
                  fontSize="20px"
                  fontWeight={"medium"}
                  color={useColorModeValue("gray.600", "gray.300")}
                >
                  The Paper Merchant, who had been silent all this while, got up
                  and spoke calmly.
                </Text>
                <Text
                  pt="6"
                  mb="8"
                  fontSize="20px"
                  fontWeight={"medium"}
                  color={useColorModeValue("gray.600", "gray.300")}
                >
                  "The gardeners that you all chose did not make it."
                </Text>
                <Text
                  pt="6"
                  mb="8"
                  fontSize="20px"
                  fontWeight={"medium"}
                  color={useColorModeValue("gray.600", "gray.300")}
                >
                  "How will we ever grow? Is this the end for us?" asked a seed
                  of Wonder.
                </Text>
                <Text
                  pt="6"
                  mb="8"
                  fontSize="20px"
                  fontWeight={"medium"}
                  color={useColorModeValue("gray.600", "gray.300")}
                >
                  "It will not be easy." responded the Paper Merchant, "and true
                  happiness will be a challenge to find, but there is still a
                  way for you".
                </Text>
                <Text
                  pt="6"
                  mb="8"
                  fontSize="20px"
                  fontWeight={"medium"}
                  color={useColorModeValue("gray.600", "gray.300")}
                >
                  "I will search for foster gardeners. Those who are willing to
                  take care of the unchosen. If you are united with the right
                  one, you too can thrive".
                </Text>
                <Text
                  pt="6"
                  mb="14"
                  fontSize="20px"
                  fontWeight={"medium"}
                  color={useColorModeValue("gray.600", "gray.300")}
                >
                  Who are the gardeners willing to care for sad seeds, and how
                  will the Paper Merchant find them. It will all become clear in
                  the days to come.
                </Text>
              </Box>
              <Button
                size="sm"
                px="30"
                fontSize="25px"
                py="8"
                colorScheme={btnColor}
                variant="solid"
                rounded="3xl"
                _hover={{ transform: "translateY(-2px)" }}
                bgGradient="linear(to-r, #74cecc, green.300, #e3d606)"
                as={ReachLink}
                to={"/adoptions"}
              >
                Adopt a Seed
              </Button>
              <Box maxW="60rem" mb={4} textAlign={"center"} mt={20}>
                <Text
                  fontSize="30px"
                  fontWeight="semibold"
                  color={useColorModeValue("gray.500", "gray.400")}
                >
                  CHAPTER 1: THE TRAVELLING MERCHANT
                </Text>
              </Box>
              <Box maxW="60rem" mb={8} textAlign={"justify"}>
                <Text
                  pt="8"
                  mb="8"
                  fontSize="20px"
                  fontWeight={"medium"}
                  color={useColorModeValue("gray.600", "gray.300")}
                >
                  There was something different in the air on the day when he
                  appeared, something mysterious and filled with possibility. He
                  came in on foot, towing along his cart.
                </Text>
                <Text
                  pt="6"
                  mb="8"
                  fontSize="20px"
                  fontWeight={"medium"}
                  color={useColorModeValue("gray.600", "gray.300")}
                >
                  A tall man with dark worn clothes. His face wore the signs of
                  his journeys, and his eyes were full of wisdom. Outsiders
                  didn't normally visit the town. The residents took notice.
                </Text>
                <Text
                  pt="6"
                  mb="8"
                  fontSize="20px"
                  fontWeight={"medium"}
                  color={useColorModeValue("gray.600", "gray.300")}
                >
                  "What do they call you?" one resident asked.
                </Text>
                <Text
                  pt="6"
                  mb="8"
                  fontSize="20px"
                  fontWeight={"medium"}
                  color={useColorModeValue("gray.600", "gray.300")}
                >
                  "I am the Paper Merchant," replied the man.
                </Text>
                <Text
                  pt="6"
                  mb="8"
                  fontSize="20px"
                  fontWeight={"medium"}
                  color={useColorModeValue("gray.600", "gray.300")}
                >
                  "I have come bearing paper seeds. Some of you have been chosen
                  by the seeds. If you ask, I will give you yours."
                </Text>
                <Text
                  pt="6"
                  mb="8"
                  fontSize="20px"
                  fontWeight={"medium"}
                  color={useColorModeValue("gray.600", "gray.300")}
                >
                  "I have four varieties of seeds in my wares:
                  <UnorderedList>
                    <ListItem>
                      SEEDS OF WONDER - excited for the world, these are the
                      most plentiful.
                    </ListItem>
                    <ListItem>
                      SEEDS OF PASSION - filled with love, these are uncommon.
                    </ListItem>
                    <ListItem>
                      SEEDS OF HOPE - with visions of future greatness, these
                      are rare.
                    </ListItem>
                    <ListItem>
                      SEEDS OF POWER - legendary, with an aura that makes others
                      gravitate to them."
                    </ListItem>
                  </UnorderedList>
                </Text>
                <Text
                  pt="6"
                  mb="8"
                  fontSize="20px"
                  fontWeight={"medium"}
                  color={useColorModeValue("gray.600", "gray.300")}
                >
                  "I am only here for sometime. If a seed is calling, you must
                  visit me by then, or it will go to another."
                </Text>
                <Text
                  pt="6"
                  mb="8"
                  fontSize="20px"
                  fontWeight={"medium"}
                  color={useColorModeValue("gray.600", "gray.300")}
                >
                  The paper merchant setup his stall in the corner of town.
                </Text>
                <Text
                  pt="6"
                  mb="8"
                  fontSize="20px"
                  fontWeight={"medium"}
                  color={useColorModeValue("gray.600", "gray.300")}
                >
                  "If you have been chosen, come forth." he said.
                </Text>
                <Text
                  pt="6"
                  mb="8"
                  fontSize="20px"
                  fontWeight={"medium"}
                  color={useColorModeValue("gray.600", "gray.300")}
                >
                  But what do these seeds do? And what is a seed without soil?
                </Text>
                <Text
                  pt="6"
                  mb="14"
                  fontSize="20px"
                  fontWeight={"medium"}
                  color={useColorModeValue("gray.600", "gray.300")}
                >
                  Read Chapter 2.
                </Text>
              </Box>
              <Link
                href="https://opensea.io/collection/shrub-paper-gardens"
                isExternal
                cursor="pointer"
                rounded="3xl"
                size="sm"
                px="6"
                fontSize="25px"
                fontWeight="semibold"
                py="5"
                _hover={{ transform: "translateY(-2px)" }}
                bgGradient="linear(to-r, #74cecc, green.300, #e3d606)"
                color={useColorModeValue("white", "black")}
              >
                View Collection <ExternalLinkIcon mx="2px" />
              </Link>
            </>
          </Box>
        </Center>
      </Container>
    </>
  );
}

export default HomeView;
