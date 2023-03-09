import { yupResolver } from "@hookform/resolvers/yup";

import React, { memo, useContext, useState } from "react";

import { useForm } from "react-hook-form";
import InputMask from "react-input-mask"; 

import { NextSeo } from "next-seo";
import NextLink from "next/link";
import { string, number, object } from "yup";

import {
  Box,
  Button,
  chakra,
  ChakraProps,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Link,
  Stack,
  Text,
  ThemingProps,
  useColorModeValue,
  VStack,
} from "@definitions/exports";

import { ThemeColorContext } from "@definitions/context/theme";
import { useMutation } from "@apollo/client";
import { CREATE_WARRANTY_FORM } from "@api/mutations/forms.mutations";
import { CheckIcon } from "@chakra-ui/icons";

const WarrantyFormSection: React.FC = () => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme;

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
        <Stack
          direction={["column", "column", "row"]}
          bg={"white"}
          px={{ base: "50px", md: "100px" }}
          spacing={4}
        >
          <Stack
            direction={"column"}
            rounded="xl"
            p={[5, 5, 10, 20]}
            spacing={4}
            w={"full"}
          >
            <Text
              maxWidth="400px"
              textStyle={{ base: "text_md_regular", md: "text_lg_regular" }}
            >
              Burn's warranty guarantees you free service for your appliances
              throughout the warranty period. How to register your warranty:
            </Text>

            <Text
              maxWidth="400px"
              textStyle={{ base: "text_lg_bold", md: "text_lg_bold" }}
            >
              Kenya
            </Text>

            <Text
              maxWidth="400px"
              textStyle={{ base: "text_md_regular", md: "text_lg_regular" }}
            >
              Send a free SMS with the word HELP to 22876 or WhatsApp
              +254700667788
            </Text>

            <Box w="full">
              <Divider />
            </Box>

            <Text
              maxWidth="400px"
              textStyle={{ base: "text_lg_bold", md: "text_lg_bold" }}
            >
              Somali Region
            </Text>

            <Text
              maxWidth="400px"
              textStyle={{ base: "text_md_regular", md: "text_lg_regular" }}
            >
              Call or text 368
            </Text>

            <Box w="full">
              <Divider />
            </Box>

            <Text
              maxWidth="400px"
              textStyle={{ base: "text_lg_bold", md: "text_lg_bold" }}
            >
              Other Markets
            </Text>

            <Text
              maxWidth="400px"
              textStyle={{ base: "text_md_regular", md: "text_lg_regular" }}
            >
              WhatsApp your name, country, and appliance serial number to
              +254700667788
            </Text>

            <Box w="full">
              <Divider />
            </Box>

            <Text
              maxWidth="400px"
              textStyle={{ base: "text_md_regular", md: "text_lg_regular" }}
            >
              Alternatively, you can register your appliance by filling in this
              form.
            </Text>
          </Stack>

          <ContactForm
            colorScheme={"brand"}
            mt={[5, 5, 10]}
            w={"full"}
            minW={{ base: "full", md: "500px" }}
            flex={1}
          />
        </Stack>
      </chakra.main>
    </>
  );
};

interface ContactFormValues {
  name: string;
  residence: string;
  serial: string;
  email: string;
  phone?: string;
}

const phoneRegExp =
  /^$|((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema =  object({
    // query: string().required("Query is a required field"),
    name:  string()
      .min(3, "FName must be at least 3 characters long")
      .required("Name is a required field"),
    // .matches(/^[a-zA-Z]+$/, "Name must contain only letters"),
    residence:  string()
      .min(3, "Residence must be at least 3 characters long")
      .required("Residence is a required field"),
    email:  string()
      .email("Please enter a valid email")
      .required("Email is a required field"),
    phone:  string()
      .nullable(true)
      .matches(phoneRegExp, "Phone number is not valid")
      .transform((_, val) => (val === val ? val : null)),
    serial: string().required("Serial Number is a required field"),
  })
  .required();

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
      handleSubmit, // handels the form submit event
      register, // ties the inputs to react-form
      reset,
      formState: { errors, isSubmitting }, // gets errors and "loading" state
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
              name: data?.name,
              residence: data?.residence,
              serial: data?.serial,
              email: data?.email,
              phone: data?.phone,
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

    const [addContact] = useMutation(CREATE_WARRANTY_FORM, {
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
          <FormControl isRequired isInvalid={!!errors?.name}>
            <FormLabel htmlFor="firstName">Full Name</FormLabel>
            <Input
              size={"lg"}
              id="name"
              placeholder="John"
              bg="white"
              _focus={{
                boxShadow: "0 0 0 0.2rem rgba(245,124,0,0.25)",
                border: "1px",
                borderColor: "brand.500",
              }}
              {...register("name")}
            />
            <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={!!errors?.residence}>
            <FormLabel htmlFor="residence">Residence</FormLabel>
            <Input
              size={"lg"}
              id="residence"
              placeholder="John"
              bg="white"
              _focus={{
                boxShadow: "0 0 0 0.2rem rgba(245,124,0,0.25)",
                border: "1px",
                borderColor: "brand.500",
              }}
              {...register("residence")}
            />
            <FormErrorMessage>{errors?.residence?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={!!errors?.serial}>
            <FormLabel htmlFor="serial">Serial</FormLabel>
            <Input
              size={"lg"}
              id="serial"
              placeholder="BURN 123456"
              bg="white"
              _focus={{
                boxShadow: "0 0 0 0.2rem rgba(245,124,0,0.25)",
                border: "1px",
                borderColor: "brand.500",
              }}
              {...register("serial")}
            />
            <FormErrorMessage>{errors?.serial?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={!!errors?.email}>
            <FormLabel>Email Address</FormLabel>
            <Input
              size={"lg"}
              type="email"
              bg="white"
              placeholder="john.doe@example.com"
              _focus={{
                boxShadow: "0 0 0 0.2rem rgba(245,124,0,0.25)",
                border: "1px",
                borderColor: "brand.500",
              }}
              {...register("email")}
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
              _focus={{
                boxShadow: "0 0 0 0.2rem rgba(245,124,0,0.25)",
                border: "1px",
                borderColor: "brand.500",
              }}
              _placeholder={{
                color: "gray.500",
              }}
            />
            <FormErrorMessage>{errors?.phone?.message}</FormErrorMessage>
          </FormControl>

          <Box w="full">
            <Button
              type="submit"
              size="lg"
              w={"full"}
              colorScheme={colorScheme}
              isLoading={loading}
            >
              {state ? <CheckIcon /> : "Register Warranty"}
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

export default WarrantyFormSection;
