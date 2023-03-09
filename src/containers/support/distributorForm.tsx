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
  Select,
  Stack,
  Text,
  Textarea,
  ThemingProps,
  useColorModeValue,
  VStack,
} from "@definitions/exports";

import {
  CREATE_CONTACT_FORM,
  CREATE_DISTRIBUTION_FORM,
} from "@api/mutations/forms.mutations";
import { useMutation } from "@apollo/client";
import { ThemeColorContext } from "@definitions/context/theme";
import { CheckIcon } from "@chakra-ui/icons";

const DistributorFormSection = ({ bg }: { bg?: any }) => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color

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
            <Box rounded="xl" p={[5, 5, 10, 10]}>
              <ContactForm colorScheme={"brand"} mt={[5, 5, 10]} />
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
  country: string;
  region: string;
  town: string;
  name: string;
  email: string;
  phone: string;
  quantity: string;
  comments: string;
}

const phoneRegExp =
  /^$|((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = object({
  query: string().required("Query is a required field"),
  country: string().required("Country is a required field"),
  region: string().required("Region is a required field"),
  town: string().required("Town is a required field"),
  quantity: string().required("Quantity is a required field"),
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
  comments: string().required("Comments is a required field"),
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
              recipient: data?.query,
              country: data?.country,
              region: data?.region,
              town: data?.town,
              name: data?.name,
              email: data?.email,
              phone: data?.phone,
              quantity: data?.quantity,
              comments: data?.comments,
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

    const [addContact] = useMutation(CREATE_DISTRIBUTION_FORM, {
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
            <FormLabel>
              Where would you like to distribute BURN cookstoves?
            </FormLabel>

            <Select
              focusBorderColor={`${colorScheme}.400`}
              bg="white"
              placeholder="Please select an option"
              size={"lg"}
              {...register("query")}
              isRequired
            >
              <option value="customercare@burnmfg.com">Kenya</option>
              <option value="customercare@burnmfg.com">Somali Region</option>
              <option value="customercare@burnmfg.com">Nigeria</option>
              <option value="customercare@burnmfg.com">Other Markets</option>
            </Select>

            <FormErrorMessage>{errors?.query?.message}</FormErrorMessage>
          </FormControl>

          <Stack
            align={["strech", "strech", "start"]}
            direction={["column", "row", "row"]}
            w="full"
            spacing={4}
          >
            <FormControl isRequired isInvalid={!!errors?.country}>
              <FormLabel htmlFor="country">Country</FormLabel>
              <Input
                id="country"
                placeholder="Kenya"
                bg="white"
                size={"lg"}
                {...register("country")}
                _focus={{
                  boxShadow: "0 0 0 0.2rem rgba(245,124,0,0.25)",
                  border: "1px",
                  borderColor: "brand.500",
                }}
              />
              <FormErrorMessage>{errors?.country?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isRequired isInvalid={!!errors?.region}>
              <FormLabel htmlFor="region">Region/State</FormLabel>
              <Input
                id="region"
                placeholder="Region/State"
                bg="white"
                size={"lg"}
                _focus={{
                  boxShadow: "0 0 0 0.2rem rgba(245,124,0,0.25)",
                  border: "1px",
                  borderColor: "brand.500",
                }}
                {...register("region")}
              />
              <FormErrorMessage>{errors?.region?.message}</FormErrorMessage>
            </FormControl>
          </Stack>

          <Stack
            align={["strech", "strech", "start"]}
            direction={["column", "row", "row"]}
            w="full"
            spacing={4}
          >
            <FormControl isRequired isInvalid={!!errors?.town}>
              <FormLabel htmlFor="town">Country</FormLabel>
              <Input
                id="town"
                placeholder="Ruiru"
                bg="white"
                size={"lg"}
                _focus={{
                  boxShadow: "0 0 0 0.2rem rgba(245,124,0,0.25)",
                  border: "1px",
                  borderColor: "brand.500",
                }}
                {...register("town")}
              />
              <FormErrorMessage>{errors?.town?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isRequired isInvalid={!!errors?.name}>
              <FormLabel htmlFor="name">Full Name</FormLabel>
              <Input
                id="name"
                placeholder="Jane Doe"
                bg="white"
                size={"lg"}
                _focus={{
                  boxShadow: "0 0 0 0.2rem rgba(245,124,0,0.25)",
                  border: "1px",
                  borderColor: "brand.500",
                }}
                {...register("name")}
              />
              <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
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
                bg="white"
                size={"lg"}
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
          </Stack>

          <FormControl isRequired isInvalid={!!errors?.quantity}>
            <FormLabel>How many stoves would you like to buy?</FormLabel>
            <Input
              {...register("quantity")}
              bg="white"
              size={"lg"}
              placeholder="50 stoves"
              // color={"gray.500"}
              _focus={{
                boxShadow: "0 0 0 0.2rem rgba(245,124,0,0.25)",
                border: "1px",
                borderColor: "brand.500",
              }}
              _placeholder={{
                color: "gray.500",
              }}
            />
            <FormErrorMessage>{errors?.quantity?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={!!errors?.comments}>
            <FormLabel>Comments</FormLabel>
            <Textarea
              {...register("comments")}
              bg="white"
              placeholder="Any other comments"
              resize="vertical"
              focusBorderColor={`${colorScheme}.400`}
              minH={"150px"}
            />
            <FormErrorMessage>{errors?.comments?.message}</FormErrorMessage>
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

export default DistributorFormSection;
