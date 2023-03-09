import { yupResolver } from "@hookform/resolvers/yup";

import React, { memo, useContext, useState } from "react";

import { useForm } from "react-hook-form";
import { string, number, object } from "yup";

import {
  Box,
  Button,
  chakra,
  ChakraProps,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Link,
  Select,
  Stack,
  Text,
  Textarea,
  ThemingProps,
  useColorModeValue,
  VStack,
} from "@definitions/exports";
import NextLink from "next/link";

import { CREATE_CONTACT_FORM } from "@api/mutations/forms.mutations";
import { useMutation } from "@apollo/client";
import { ThemeColorContext } from "@definitions/context/theme";
import { CheckIcon } from "@chakra-ui/icons";

const ContactFormSection: React.FC = () => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color

  const passiveColor = useColorModeValue("gray.500", "gray.400");
  return (
    <>
      <chakra.main
        sx={{
          "*::selection": {
            color: useColorModeValue(`${color}.600`, `${color}.400`),
            background: useColorModeValue(`${color}.200`, `${color}.700`),
          },
          mark: {
            color: useColorModeValue(`${color}.600`, `${color}.400`),
            background: useColorModeValue(`${color}.100`, `${color}.800`),
          },
        }}
      >
        <Flex
          w="full"
          bg={"gray.50"}
          pt={10}
          pb={10}
          align={"center"}
          justify={"center"}
        >
          <Stack
            alignItems={["center", "center", "center"]}
            direction={["column", "column", "row"]}
            justify={"center"}
            spacing={{ base: 12, md: 24 }}
          >
            <Stack
              w="full"
              flex={[1, 1, 1, 2]}
              direction={"column"}
              align={"center"}
              h={"125px"}
            >
              <Heading
                lineHeight="1"
                fontWeight="semibold"
                fontFamily={"Ubuntu"}
              >
                <Text
                  textAlign={"center"}
                  textStyle={"display_xs_bold"}
                  color={"gray.600"}
                >
                  Visit our factory
                </Text>
              </Heading>
              <Text color={passiveColor} textAlign={"center"}>
                Go Downs 8-11, New Horizons Industrial Park, Ruiru - Kenya
              </Text>
              <Link
                href="https://goo.gl/maps/UeQoMPnAm3jYdynGA"
                passHref
                as={NextLink}
                target={"_blank"}
                style={{ textDecoration: "none" }}
              >
                <Text
                  fontSize={{ base: "16px", md: "18px" }}
                  mt={4}
                  color="brand.500"
                  textStyle={{
                    base: "display_xs_bold",
                    md: "display_xs_bold",
                  }}
                  as="u"
                >
                  Location Map
                </Text>
              </Link>
            </Stack>

            <Stack
              w="full"
              flex={[1, 1, 1, 2]}
              direction={"column"}
              align={"center"}
              h={"125px"}
            >
              <Heading
                lineHeight="1"
                fontWeight="semibold"
                fontFamily={"Ubuntu"}
              >
                <Text
                  textAlign={"center"}
                  textStyle={"display_xs_bold"}
                  color={"gray.600"}
                >
                  Call us
                </Text>
              </Heading>
              <Text color={passiveColor} textAlign={"center"}>
                Phone: +254 700 667 788
              </Text>
            </Stack>

            {/* <VStack
              align={"start"}
              mb={[5, 10, 20]}
              flex={1}
              w={"full"}
              justify={"start"}
              justifyContent={"space-between"}
              h={"125px"}
            >
              <VStack align={["center"]} w={"full"}>
                <Text
                  textAlign={"center"}
                  textStyle={"display_xs_bold"}
                  color={"gray.600"}
                >
                  Call us
                </Text>
                <Text
                  color={useColorModeValue("gray.900", "whiteAlpha.800")}
                  fontSize={{ base: "16px", md: "18px" }}
                  whiteSpace={"pre-line"}
                  textAlign={"center"}
                  mt={4}
                >
                  Phone: +254 700 667 788
                </Text>
              </VStack>
            </VStack> */}
          </Stack>
        </Flex>

        <Flex
          direction={["column-reverse", "column-reverse", "column"]}
          bg={"white"}
        >
          <Container maxW="container.md">
            <Box
              //   shadow={["none", "md", "lg"]}
              rounded="xl"
              p={[5, 5, 10, 10]}
              //   my={[5, 10, 28]}
            >
              {/* <Heading mb={4} fontSize={["2xl"]} fontFamily={"Ubuntu"}>
                We'd love to hear from you
              </Heading>
              <Text maxWidth="400px" color={passiveColor}>
                We do our best to assist you and we would love to hear your
                comments and suggestions.
              </Text> */}
              <ContactForm colorScheme={"brand"} />
            </Box>
          </Container>
        </Flex>
      </chakra.main>
    </>
  );
};

interface ContactFormValues {
  query: string;
  recipient: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
}

const phoneRegExp =
  /^$|((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = object({
  query: string().required("Query is a required field"),
  name: string()
    .min(3, "Please enter your full names")
    .required("Please enter your full names")
    .matches(/(\w.+\s).+/, "Please enter your full names"),
  email: string()
    .email("Please enter a valid email")
    .required("Email is a required field"),
  phone: string()
    .nullable(true)
    .matches(phoneRegExp, "Phone number is not valid")
    .transform((_, val) => (val === val ? val : null)),
  message: string().required("Message is a required field"),
}).required();

const ContactForm: React.FC<ChakraProps & ThemingProps> = memo(
  ({ colorScheme = "gray", ...rest }) => {
    const [
      formData, // eslint-disable-line @typescript-eslint/no-unused-vars
      setFormData,
    ] = useState<ContactFormValues>();

    const inactiveColor = useColorModeValue("gray.500", "gray.400");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [state, setState] = useState(false);

    const {
      handleSubmit,
      register,
      reset,
      formState: { errors, isSubmitting },
    } = useForm<ContactFormValues>({
      reValidateMode: "onBlur",
      resolver: yupResolver(schema),
    });

    const onSubmit = (data: ContactFormValues) => {
      setLoading(true);
      try {
        setLoading(true);
        addContact({
          variables: {
            data: {
              ip_address: "",
              recipient: data?.query,
              name: data?.name,
              email: data?.email,
              phone: data?.phone,
              message: data?.message,
              submit: "",
            },
          },
        });
      } catch (error) {
        setLoading(false);
        setError(true);
        setErrorMsg("Please try again.");
      }
      return;
    };

    const [addContact] = useMutation(CREATE_CONTACT_FORM, {
      onCompleted: (data) => {
        setLoading(false);
        setError(false);
        setErrorMsg("Form submitted successfully.");
        reset();
        setState(true);
      },
      onError: (err) => {
        setLoading(false);
        setError(false);
        setErrorMsg("An errror occurred. Please retry again.");
        setState(false);
      },
    });

    return (
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <VStack alignItems="center" spacing={6} {...rest}>
          <FormControl isRequired isInvalid={!!errors?.query}>
            <FormLabel>What is your query about?</FormLabel>
            <Select
              focusBorderColor={`${colorScheme}.400`}
              bg="white"
              placeholder="Please select an option"
              size={"lg"}
              {...register("query")}
            >
              <option value="customercare@burnmfg.com">
                Kenya Sales &amp; Distribution
              </option>
              <option value="customercare@burnmfg.com">
                Somali Region Sales &amp; Distribution
              </option>
              <option value="customercare@burnmfg.com">
                Other Markets Sales &amp; Distribution
              </option>
              <option value="peter.scott@burnmfg.com">
                Investor &amp; Donor Relations
              </option>
              <option value="customercare@burnmfg.com">
                customercare@burnmfg.com
              </option>
              <option value="customercare@burnmfg.com">General Inquiry</option>
              <option value="customercare@burnmfg.com">
                Warranty Registration &amp; Repairs
              </option>
            </Select>

            <FormErrorMessage>{errors?.query?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={!!errors?.name}>
            <FormLabel htmlFor="name">Full Name</FormLabel>
            <Input
              id="name"
              placeholder="Jane Doe"
              bg="white"
              size={"lg"}
              {...register("name")}
              _focus={{
                boxShadow: "0 0 0 0.2rem rgba(245,124,0,0.25)",
                border: "1px",
                borderColor: "brand.500",
              }}
            />
            <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={!!errors?.email}>
            <FormLabel>Email Address</FormLabel>
            <Input
              type="email"
              bg="white"
              size={"lg"}
              placeholder="john.doe@example.com"
              {...register("email")}
              _focus={{
                boxShadow: "0 0 0 0.2rem rgba(245,124,0,0.25)",
                border: "1px",
                borderColor: "brand.500",
              }}
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
            <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={!!errors?.phone}>
            <FormLabel>Phone Number </FormLabel>
            <Input
              // as={InputMask}
              {...register("phone")}
              bg="white"
              size={"lg"}
              // alwaysShowMask
              placeholder="07 000 000 000"
              color={"gray.500"}
              _placeholder={{
                color: "gray.500",
              }}
              _focus={{
                boxShadow: "0 0 0 0.2rem rgba(245,124,0,0.25)",
                border: "1px",
                borderColor: "brand.500",
              }}
            />
            <FormErrorMessage>{errors?.phone?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={!!errors?.message}>
            <FormLabel>How can we help you?</FormLabel>
            <Textarea
              {...register("message")}
              bg="white"
              placeholder="Briefly describe how we can help you ..."
              resize="vertical"
              focusBorderColor={`${colorScheme}.400`}
              minH={"150px"}
            />
            <FormErrorMessage>{errors?.message?.message}</FormErrorMessage>
          </FormControl>

          <Box w="full">
            <Button
              type="submit"
              size="lg"
              w={"full"}
              colorScheme={colorScheme}
              isLoading={loading}
            >
              {state ? <CheckIcon /> : "Submit"}
            </Button>
          </Box>

          <Text mt={2} textAlign={"center"}>
            {!state ? "" : "Form submitted successfully."}
          </Text>
        </VStack>
      </form>
    );
  },
);

export default ContactFormSection;
