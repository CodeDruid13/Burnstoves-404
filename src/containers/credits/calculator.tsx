import { memo, useState } from "react";

import {
  Box,
  Button,
  ChakraProps,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  ThemingProps,
  useColorModeValue,
  VStack,
} from "@definitions/exports";

import Highlight from "@components/highlight";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { string, number, object } from "yup";

const CalculatorSection: React.FC = () => {
  return (
    <Box
      py={{ base: "15px", md: "5px" }}
      bg={useColorModeValue("white", "transparent")}
      width="full"
      pos="relative"
    >
      <Container maxW="container.xl">
        <Flex
          align={["start", "center", "end"]}
          // direction={["column", "column", "row"]}
          direction={["column-reverse", "column-reverse", "row"]}
          justify="center"
        >
          <Flex
            pos="relative"
            direction={"column"}
            mb={[5, 5, 0]}
            mr={[0, 0, 10]}
            w={{ base: "100%", md: "100%" }}
            align={["start", "center", "center"]}
          >
            <VStack align={"start"} spacing={6} w="full">
              <VStack align={["center"]} spacing={8} w={"full"}>
                <Text
                  // fontSize={[38, 48, 48]}
                  textAlign="center"
                  textStyle={{ base: "display_xs_bold", md: "display_sm_bold" }}
                  mt={0}
                  color={useColorModeValue("gray.600", "whiteAlpha.900")}
                >
                  Calculate Your{" "}
                  <Highlight strokeColor={"brand.300"}>Carbon</Highlight>{" "}
                  Footprint
                </Text>
              </VStack>

              <Tabs size="lg" variant="enclosed" w={"full"} colorScheme="brand">
                <TabList>
                  <Tab
                    _selected={{ color: "white", bg: "brand.500" }}
                    bg={"gray.50"}
                    borderTopLeftRadius={"md"}
                    borderRightRadius={"none"}
                    fontSize={{ base: "14px", md: "20px" }}
                  >
                    Flight Emissions
                  </Tab>
                  <Tab
                    _selected={{ color: "white", bg: "brand.500" }}
                    bg={"gray.50"}
                    borderRadius={"none"}
                    fontSize={{ base: "14px", md: "20px" }}
                  >
                    Meat Emissions
                  </Tab>
                  <Tab
                    _selected={{ color: "white", bg: "brand.500" }}
                    bg={"gray.50"}
                    borderTopRightRadius={"md"}
                    borderLeftRadius={"none"}
                    fontSize={{ base: "14px", md: "20px" }}
                  >
                    Car Emissions
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <VStack align={["start"]} spacing={8} w={"full"}>
                      <Text
                        textStyle={{
                          base: "text_lg_medium",
                          md: "display_xs_bold",
                        }}
                        color={useColorModeValue("gray.700", "whiteAlpha.800")}
                      >
                        Flight Emissions Calculator
                      </Text>

                      <Stack
                        w={"full"}
                        h={"full"}
                        align={"start"}
                        direction={{ base: "column", md: "row" }}
                      >
                        <VStack
                          w={"full"}
                          align={"start"}
                          h={"full"}
                          direction={"column"}
                          spacing={4}
                        >
                          <Flex
                            flex={1}
                            overflow={"hidden"}
                            w={"full"}
                            minH={"350px"}
                          >
                            <iframe
                              src="/html/calculator.html"
                              width="100%"
                            ></iframe>
                          </Flex>
                          {/* <FlightForm /> */}
                        </VStack>

                        <Flex w={"full"} justify={"center"} align={"center"}>
                          <Image
                            alt={"BURN Manufacturing"}
                            width={250}
                            height={250}
                            src={
                              "https://res.cloudinary.com/dhhkxded1/image/upload/v1677434466/flight_5c58507560.svg?updated_at=2023-02-26T18:01:25.300Z"
                            }
                          />
                        </Flex>
                      </Stack>
                    </VStack>
                  </TabPanel>
                  <TabPanel>
                    <VStack align={["start"]} spacing={8} w={"full"}>
                      <Text
                        textStyle={{
                          base: "text_lg_medium",
                          md: "display_xs_bold",
                        }}
                        color={useColorModeValue("gray.700", "whiteAlpha.800")}
                      >
                        Meat Emissions Calculator
                      </Text>

                      <Stack
                        w={"full"}
                        h={"full"}
                        align={"start"}
                        direction={{ base: "column", md: "row" }}
                      >
                        <VStack
                          w={"full"}
                          align={"start"}
                          h={"full"}
                          direction={"column"}
                          spacing={4}
                        >
                          <MeatForm />
                        </VStack>

                        <Flex w={"full"} justify={"center"} align={"center"}>
                          <Image
                            alt={"BURN Manufacturing"}
                            width={250}
                            height={250}
                            src={
                              "https://res.cloudinary.com/dhhkxded1/image/upload/v1677434554/meat_64a1155c85.svg?updated_at=2023-02-26T18:02:52.407Z"
                            }
                          />
                        </Flex>
                      </Stack>
                    </VStack>
                  </TabPanel>
                  <TabPanel>
                    <VStack align={["start"]} spacing={8} w={"full"}>
                      <Text
                        textStyle={{
                          base: "text_lg_medium",
                          md: "display_xs_bold",
                        }}
                        color={useColorModeValue("gray.700", "whiteAlpha.800")}
                      >
                        Car Emissions Calculator
                      </Text>

                      <Stack
                        w={"full"}
                        h={"full"}
                        align={"start"}
                        direction={{ base: "column", md: "row" }}
                      >
                        <VStack
                          w={"full"}
                          align={"start"}
                          h={"full"}
                          direction={"column"}
                          spacing={4}
                        >
                          <CarForm />
                        </VStack>

                        <Flex w={"full"} justify={"center"} align={"center"}>
                          <Image
                            alt={"BURN Manufacturing"}
                            width={250}
                            height={250}
                            src={
                              "https://res.cloudinary.com/dhhkxded1/image/upload/v1677434606/cars_f83db40934.svg?updated_at=2023-02-26T18:03:47.553Z"
                            }
                          />
                        </Flex>
                      </Stack>
                    </VStack>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </VStack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

interface FlightFormValues {
  departure: string;
  arrival: string;
}

const schemaFormValues = object({
  departure: string().required("Departure is a required field"),
  arrival: string().required("Arrival is a required field"),
}).required();

const FlightForm: React.FC<ChakraProps & ThemingProps> = memo(
  ({ colorScheme = "gray", ...rest }) => {
    const [
      formData, // eslint-disable-line @typescript-eslint/no-unused-vars
      setFormData,
    ] = useState<FlightFormValues>();

    const inactiveColor = useColorModeValue("gray.500", "gray.400");

    const {
      handleSubmit, // handels the form submit event
      register, // ties the inputs to react-form
      formState: { errors, isSubmitting }, // gets errors and "loading" state
    } = useForm<FlightFormValues>({
      reValidateMode: "onBlur",
      resolver: yupResolver(schemaFormValues),
    });

    const onSubmit = (data: FlightFormValues) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(data);
          setFormData(data);
          // alert(JSON.stringify(data, null, 2));
        }, 4000);
      });
    };

    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        style={{ width: "100%" }}
      >
        <VStack alignItems="center" spacing={6} {...rest} w={"full"} flex={1}>
          <FormControl isRequired isInvalid={!!errors?.departure}>
            <FormLabel>Departure</FormLabel>

            <Select
              focusBorderColor={`${colorScheme}.400`}
              bg="white"
              size={"lg"}
              w={"full"}
              placeholder="Select Departure"
              {...register("departure")}
            >
              <option value="option1">Kenya</option>
              <option value="option2">Somali Region</option>
              <option value="option2">Nigeria</option>
              <option value="option2">Other Markets</option>
            </Select>
            <FormErrorMessage>{errors?.departure?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={!!errors?.arrival}>
            <FormLabel>Departure</FormLabel>

            <Select
              focusBorderColor={`${colorScheme}.400`}
              bg="white"
              size={"lg"}
              w={"full"}
              placeholder="Select Arrival"
              {...register("arrival")}
            >
              <option value="option1">Kenya</option>
              <option value="option2">Somali Region</option>
              <option value="option2">Nigeria</option>
              <option value="option2">Other Markets</option>
            </Select>
            <FormErrorMessage>{errors?.arrival?.message}</FormErrorMessage>
          </FormControl>

          <VStack align={["start"]} spacing={4} w={"full"}>
            <Text
              textStyle={{
                base: "text_lg_medium",
                md: "text_lg_bold",
              }}
              color={useColorModeValue("gray.700", "whiteAlpha.800")}
            >
              Results:
            </Text>

            <Stack direction={"row"}>
              <Text
                textStyle={{
                  base: "text_lg_regular",
                  md: "text_lg_regular",
                }}
                color={useColorModeValue("gray.700", "whiteAlpha.800")}
              >
                Distance (each way):
              </Text>

              <Text
                textStyle={{
                  base: "text_lg_bold",
                  md: "text_lg_bold",
                }}
                color={useColorModeValue("gray.700", "whiteAlpha.800")}
              >
                Results:
              </Text>
            </Stack>

            <Stack direction={"row"}>
              <Text
                textStyle={{
                  base: "text_lg_regular",
                  md: "text_lg_regular",
                }}
                color={useColorModeValue("gray.700", "whiteAlpha.800")}
              >
                Round-trip emissions per passenger:
              </Text>

              <Text
                textStyle={{
                  base: "text_lg_bold",
                  md: "text_lg_bold",
                }}
                color={useColorModeValue("gray.700", "whiteAlpha.800")}
              >
                Results:
              </Text>
            </Stack>
          </VStack>
        </VStack>
      </form>
    );
  },
);

interface MeatFormValues {
  servings: string;
}

const schemaMeat = object({
  servings: number().required("Servings is a required field"),
}).required();

const MeatForm: React.FC<ChakraProps & ThemingProps> = memo(
  ({ colorScheme = "gray", ...rest }) => {
    const [
      formData, // eslint-disable-line @typescript-eslint/no-unused-vars
      setFormData,
    ] = useState<MeatFormValues>();

    const [servings, setServings] = useState(0);

    const {
      handleSubmit, // handels the form submit event
      register, // ties the inputs to react-form
      formState: { errors, isSubmitting }, // gets errors and "loading" state
    } = useForm<MeatFormValues>({
      reValidateMode: "onBlur",
      resolver: yupResolver(schemaMeat),
    });

    const onSubmit = (data: MeatFormValues) => {
      setServings(parseInt(data?.servings) * 0.1126);
    };

    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        style={{ width: "100%" }}
      >
        <VStack alignItems="start" spacing={6} {...rest} w={"full"} flex={1}>
          <FormControl isRequired isInvalid={!!errors?.servings}>
            <FormLabel htmlFor="servings">
              On average how many servings of meat do you have in a week?
            </FormLabel>
            <Input
              size={"lg"}
              id="servings"
              placeholder="Servings"
              type={"number"}
              bg="white"
              {...register("servings")}
              _focus={{
                boxShadow: "0 0 0 0.2rem rgba(245,124,0,0.25)",
                border: "1px",
                borderColor: "brand.500",
              }}
            />
            <FormErrorMessage>{errors?.servings?.message}</FormErrorMessage>
          </FormControl>

          <Box w={{ base: "full", md: "30%" }}>
            <Button
              type="submit"
              size="lg"
              w={"full"}
              colorScheme={"brand"}
              isLoading={isSubmitting}
              fontSize={"md"}
            >
              Calculate
            </Button>
          </Box>
        </VStack>

        <VStack align={["start"]} mt={4} spacing={4} w={"full"}>
          <Text
            textStyle={{
              base: "text_lg_medium",
              md: "text_lg_bold",
            }}
            color={useColorModeValue("gray.700", "whiteAlpha.800")}
          >
            Results:
          </Text>

          <Stack direction={"row"}>
            <Text
              textStyle={{
                base: "text_lg_regular",
                md: "text_lg_regular",
              }}
              color={useColorModeValue("gray.700", "whiteAlpha.800")}
            >
              Your estimated annual emmissions: <strong>{servings}</strong>{" "}
              metric tons C02 equivalent
            </Text>
          </Stack>
        </VStack>
      </form>
    );
  },
);

interface CarFormValues {
  fuel: string;
  km: string;
  distance: string;
}

const schemaCar = object({
  fuel: string().required("Fuel is a required field"),
  km: string().required("KM is a required field"),
  distance: string().required("Distance is a required field"),
}).required();

const CarForm: React.FC<ChakraProps & ThemingProps> = memo(
  ({ colorScheme = "gray", ...rest }) => {
    const [
      formData, // eslint-disable-line @typescript-eslint/no-unused-vars
      setFormData,
    ] = useState<CarFormValues>();

    const [emissions, setEmissions] = useState(0);

    const {
      handleSubmit, // handels the form submit event
      register, // ties the inputs to react-form
      formState: { errors, isSubmitting }, // gets errors and "loading" state
    } = useForm<CarFormValues>({
      reValidateMode: "onBlur",
      resolver: yupResolver(schemaCar),
    });

    const onSubmit = (data: CarFormValues) => {
      // return new Promise((resolve) => {
      //   setTimeout(() => {
      //     resolve(data);
      //     setFormData(data);
      //     // alert(JSON.stringify(data, null, 2));
      //   }, 4000);
      // });
      if (data?.fuel === "Petrol" && data?.km === "KM") {
        setEmissions(parseInt(data?.distance) * 0.01);
        return;
      } else if (data?.fuel === "Petrol" && data?.km === "MILES") {
        setEmissions(parseInt(data?.distance) * 0.01);
        return;
      } else if (data?.fuel === "Diesel" && data?.km === "KM") {
        setEmissions(parseInt(data?.distance) * 0.0089);
        return;
      } else if (data?.fuel === "Diesel" && data?.km === "MILES") {
        setEmissions(parseInt(data?.distance) * 0.0089);
        return;
      }
    };

    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        style={{ width: "100%" }}
      >
        <VStack alignItems="start" spacing={6} {...rest} w={"full"} flex={1}>
          <FormControl isRequired isInvalid={!!errors?.fuel}>
            <FormLabel>Which fuel does your vehicle use?</FormLabel>
            <Select
              focusBorderColor={`${colorScheme}.400`}
              bg="white"
              size={"lg"}
              w={"full"}
              placeholder="Select fuel"
              {...register("fuel")}
            >
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
            </Select>
            <FormErrorMessage>{errors?.fuel?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={!!errors?.km}>
            <FormLabel>KM</FormLabel>
            <Select
              focusBorderColor={`${colorScheme}.400`}
              bg="white"
              size={"lg"}
              w={"full"}
              placeholder="Select Distance"
              {...register("km")}
            >
              <option value="KM">KM</option>
              <option value="MILES">Miles</option>
            </Select>
            <FormErrorMessage>{errors?.km?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={!!errors?.distance}>
            <FormLabel htmlFor="distance">Distance?</FormLabel>
            <Input
              size={"lg"}
              id="distance"
              placeholder="Distance"
              type={"number"}
              bg="white"
              {...register("distance")}
              _focus={{
                boxShadow: "0 0 0 0.2rem rgba(245,124,0,0.25)",
                border: "1px",
                borderColor: "brand.500",
              }}
            />
            <FormErrorMessage>{errors?.distance?.message}</FormErrorMessage>
          </FormControl>

          <Box w={{ base: "full", md: "30%" }}>
            <Button
              type="submit"
              size="lg"
              w={"full"}
              colorScheme={"brand"}
              isLoading={isSubmitting}
              fontSize={"md"}
            >
              Calculate
            </Button>
          </Box>

          <Stack direction={"row"}>
            <Text
              textStyle={{
                base: "text_lg_regular",
                md: "text_lg_regular",
              }}
              color={useColorModeValue("gray.700", "whiteAlpha.800")}
            >
              Your estimated annual emmissions: <strong>{emissions}</strong>{" "}
              metric tons C02 equivalent
            </Text>
          </Stack>
        </VStack>
      </form>
    );
  },
);

export default CalculatorSection;
