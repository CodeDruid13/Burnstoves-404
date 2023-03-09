import { yupResolver } from "@hookform/resolvers/yup";

import React, { memo, useContext, useState } from "react";

import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
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
  Select,
  Stack,
  Text,
  ThemingProps,
  useColorModeValue,
  VStack,
} from "@definitions/exports";

import { ThemeColorContext } from "@definitions/context/theme";

const SalesFormSection: React.FC = () => {
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
          direction={["column-reverse", "column-reverse", "column"]}
          bg={"gray.50"}
        >
          <Container maxW="container.md">
            <Box
              //   shadow={["none", "md", "lg"]}
              rounded="xl"
              p={[5, 5, 10, 20]}
              //   my={[5, 10, 28]}
            >
              <Heading mb={4} fontSize={["2xl"]} fontFamily={"Ubuntu"}>
                We'd love to hear from you
              </Heading>
              <Text maxWidth="400px" color={passiveColor}>
                We do our best to assist you and we would love to hear your
                comments and suggestions.
              </Text>
              {/* Contact Form */}
              <ContactForm colorScheme={"brand"} mt={[5, 5, 10]} />
            </Box>
          </Container>
        </Flex>
      </chakra.main>
    </>
  );
};

interface ContactFormValues {
  firstName: string;
  query: string;
  lastName: string;
  email: string;
  message: string;
  phone?: string;
}

const phoneRegExp =
  /^$|((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = object({
  query: string().required("Query is a required field"),
  firstName: string()
    .min(3, "First name must be at least 3 characters long")
    .required("First name is a required field")
    .matches(/^[a-zA-Z]+$/, "First name must contain only letters"),
  lastName: string()
    .min(3, "Last name must be at least 3 characters long")
    .required("Last name is a required field")
    .matches(/^[a-zA-Z]+$/, "Last name must contain only letters"),
  email: string()
    .email("Please enter a valid email")
    .required("Email is a required field"),
  phone: string()
    .nullable(true)
    .matches(phoneRegExp, "Phone number is not valid")
    .transform((_, val) => (val === val ? val : null)),
}).required();

const ContactForm: React.FC<ChakraProps & ThemingProps> = memo(
  ({ colorScheme = "gray", ...rest }) => {
    const [
      formData, // eslint-disable-line @typescript-eslint/no-unused-vars
      setFormData,
    ] = useState<ContactFormValues>();

    const inactiveColor = useColorModeValue("gray.500", "gray.400");

    const {
      handleSubmit, // handels the form submit event
      register, // ties the inputs to react-form
      formState: { errors, isSubmitting }, // gets errors and "loading" state
    } = useForm<ContactFormValues>({
      reValidateMode: "onBlur",
      resolver: yupResolver(schema),
    });

    const onSubmit = (data: ContactFormValues) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(data);
          setFormData(data);
          // alert(JSON.stringify(data, null, 2));
        }, 4000);
      });
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <VStack alignItems="center" spacing={6} {...rest}>
          <FormControl isRequired isInvalid={!!errors?.query}>
            <FormLabel>Please select an option</FormLabel>
            <Select
              focusBorderColor={`${colorScheme}.400`}
              bg="white"
              placeholder="Select Region"
              {...register("query")}
              size={"lg"}
            >
              <option value="">Choose an option</option>
              <option value="option1">Kenyan Sales & Distribution</option>
              <option value="option2">Somali Region Sales</option>
            </Select>
            <FormErrorMessage>{errors?.query?.message}</FormErrorMessage>
          </FormControl>
          <Stack
            align={["strech", "strech", "start"]}
            direction={["column", "row", "row"]}
            w="full"
            spacing={4}
          >
            <FormControl isRequired isInvalid={!!errors?.firstName}>
              <FormLabel htmlFor="firstName">First Name</FormLabel>
              <Input
                id="firstName"
                placeholder="John"
                size={"lg"}
                bg="white"
                {...register("firstName")}
                _focus={{
                  boxShadow: "0 0 0 0.2rem rgba(245,124,0,0.25)",
                  border: "1px",
                  borderColor: "brand.500",
                }}
              />
              <FormErrorMessage>{errors?.firstName?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isRequired isInvalid={!!errors?.lastName}>
              <FormLabel htmlFor="lastName">Last Name</FormLabel>
              <Input
                id="lastName"
                placeholder="Doe"
                size={"lg"}
                bg="white"
                {...register("lastName")}
                _focus={{
                  boxShadow: "0 0 0 0.2rem rgba(245,124,0,0.25)",
                  border: "1px",
                  borderColor: "brand.500",
                }}
              />
              <FormErrorMessage>{errors?.lastName?.message}</FormErrorMessage>
            </FormControl>
          </Stack>
          <Stack
            align={["strech", "strech", "start"]}
            direction={["column", "row", "row"]}
            w="full"
            spacing={4}
          >
            <FormControl isRequired isInvalid={!!errors?.email}>
              <FormLabel>Email Address</FormLabel>
              <Input
                type="email"
                size={"lg"}
                bg="white"
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
            <FormControl isInvalid={!!errors?.phone}>
              <FormLabel>
                Phone Number{" "}
                <Text fontSize="sm" color="gray.400" as="span">
                  (Optional)
                </Text>
              </FormLabel>
              <Input
                as={InputMask}
                {...register("phone")}
                bg="white"
                size={"lg"}
                // alwaysShowMask
                mask="+(999) 999-999-999"
                // mask={[phoneMask]}
                // maskPlaceholder="+1 (___) __-___-___"
                // maskChar={null}
                // bg={"gray.100"}
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
          </Stack>

          <Box w="full">
            <Button
              type="submit"
              size="lg"
              w={"full"}
              colorScheme={colorScheme}
              isLoading={isSubmitting}
              fontSize={"sm"}
              fontWeight={"medium"}
            >
              Request
            </Button>
            <Text color={inactiveColor} textAlign="center" mt={2} fontSize="sm">
              We'll get back to you in 1-3 business days.
            </Text>
          </Box>
        </VStack>
      </form>
    );
  },
);

export default SalesFormSection;
