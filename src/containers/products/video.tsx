import { CREATE_REQUEST_FORM } from "@api/mutations/forms.mutations";
import { useMutation } from "@apollo/client";
import { CheckIcon } from "@chakra-ui/icons";
import ButtonTransparent from "@components/button/button-transparent";
import NextImage from "@components/image-lazyload/nextImage";
import {
  AspectRatio,
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@definitions/exports";
import { yupResolver } from "@hookform/resolvers/yup";
import NextLink from "next/link";
import { memo, useState } from "react";
import { useForm } from "react-hook-form";
import { object, string } from "yup";

const VideoSection: React.FC<{
  productimage?: string;
  productalt?: string;
  title?: string;
  subtitle?: string;
  video?: string;
  color?: string;
  productdata?: any;
  order?: any;
}> = memo(
  ({
    productimage,
    productalt,
    title,
    subtitle,
    video,
    color,
    productdata,
    order,
  }) => {
    function youtube_parser(url: any) {
      var regExp =
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
      var match = url.match(regExp);
      return match && match[7].length == 11 ? match[7] : false;
    }

    const options = {
      replace: (domNode: any) => {
        if (domNode.attribs && domNode.attribs.class === "remove") {
          return <></>;
        }
      },
    };

    const { isOpen, onOpen, onClose } = useDisclosure();

    interface FormValues {
      county: string;
      name: string;
      email: string;
      phone?: string;
      units: string;
    }

    const schema = object({
      name: string()
        .min(3, "Please enter your full names")
        .required("Please enter your full names")
        .matches(/(\w.+\s).+/, "Please enter your full names"),
      email: string()
        .email("Please enter a valid email")
        .required("Email is a required field"),
      phone: string().required("Phone is a required field"),
      county: string().required("Message is a required field"),
      units: string().required("Units is a required field"),
    }).required();

    const [
      formData, // eslint-disable-line @typescript-eslint/no-unused-vars
      setFormData,
    ] = useState<FormValues>();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [state, setState] = useState(false);

    const {
      handleSubmit,
      register,
      reset,
      formState: { errors, isSubmitting },
    } = useForm<FormValues>({
      reValidateMode: "onBlur",
      resolver: yupResolver(schema),
    });

    const onSubmit = (data: FormValues) => {
      setLoading(true);
      try {
        setLoading(true);
        addContact({
          variables: {
            data: {
              location: data?.county,
              name: data?.name,
              email: data?.email,
              phone: data?.phone,
              units: data?.units,
              type: "ecoa LPG",
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

    const [addContact] = useMutation(CREATE_REQUEST_FORM, {
      onCompleted: (data) => {
        setLoading(false);
        setError(false);
        setErrorMsg("Form submitted successfully.");
        reset();
        onClose();
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
      <Box
        mt={12}
        width="full"
        pos="relative"
        bg={useColorModeValue({ color }, "transparent")}
        _before={{
          content: "''",
          pos: "absolute",
          bottom: 0,
          display: "block",
          width: ["full", "full", "full", "95%"],
          bg: useColorModeValue("gray.100", "gray.900"),
          zIndex: 0,
        }}
      >
        <Container maxW="container.xl">
          <Flex
            align={["start", "start", "start"]}
            // direction={["column", "column", "row"]}
            direction={["column", "column", "row"]}
            h={"full"}
          >
            <Flex
              pos="relative"
              direction={"column"}
              mb={[5, 5, 0]}
              mr={[0, 0, 10]}
              w={{ base: "100%", md: "50%" }}
              align={"start"}
              h={"full"}
            >
              <VStack
                align={["start"]}
                h={"full"}
                minH={{ base: "300px", md: "350px" }}
              >
                <Box
                  overflow="hidden"
                  pos="relative"
                  width="250px"
                  height="100px"
                  flex="1"
                >
                  <NextImage
                    src={
                      productdata?.product?.data?.attributes?.product_logo?.data
                        ?.attributes?.url
                    }
                    alt={
                      productdata?.product?.data?.attributes?.product_logo?.data
                        ?.attributes?.alternativeText
                    }
                  />
                </Box>

                <VStack align={"start"} spacing={4}>
                  <Text
                    textStyle={{
                      base: "display_xs_bold",
                      md: "display_sm_bold",
                    }}
                  >
                    {productdata?.product?.data?.attributes?.product_subtitle}
                  </Text>

                  <Text
                    textStyle={{
                      base: "text_md_regular",
                      md: "text_md_regular",
                    }}
                    mb={14}
                    as={"i"}
                  >
                    Ships globally
                  </Text>

                  {/* <div
                    dangerouslySetInnerHTML={{
                      __html:
                        productdata?.product?.data?.attributes
                          ?.product_description,
                    }}
                  /> */}
                </VStack>
                <Spacer />

                {order ? (
                  <ButtonTransparent
                    bgColor={"brand.500"}
                    paddingX={4}
                    borderRadius={"md"}
                    height={"50px"}
                    _hover={{
                      backgroundColor: "brand.1000",
                    }}
                    color={"white"}
                    aria-label="Watch Product Video"
                    onClick={onOpen}
                  >
                    Pre-order
                  </ButtonTransparent>
                ) : (
                  <Link
                    href={"/support/buy/kenya"}
                    passHref
                    as={NextLink}
                    style={{ textDecoration: "none" }}
                    w={{ base: "full", md: "fit-content" }}
                  >
                    <ButtonTransparent
                      bgColor={"brand.500"}
                      paddingX={4}
                      borderRadius={"md"}
                      height={"50px"}
                      _hover={{
                        backgroundColor: "brand.1000",
                      }}
                      color={"white"}
                      aria-label="Watch Product Video"
                    >
                      Buy Now
                    </ButtonTransparent>
                  </Link>
                )}
              </VStack>
            </Flex>

            <Flex
              pos="relative"
              zIndex={1}
              direction={"column"}
              mb={[5, 5, 0]}
              mr={[0, 0, 10]}
              w={{ base: "100%", md: "50%" }}
            >
              <AspectRatio ratio={16 / 9}>
                <iframe title={title} src={video} allowFullScreen />
              </AspectRatio>
            </Flex>
          </Flex>
        </Container>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Pre-order Ecoa LPG</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={4}>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <VStack alignItems="center" spacing={6}>
                  <FormControl isRequired isInvalid={!!errors?.county}>
                    <FormLabel htmlFor="county">County & Town</FormLabel>
                    <Input
                      id="county"
                      placeholder="County & Town"
                      bg="white"
                      size={"lg"}
                      {...register("county")}
                      _focus={{
                        boxShadow: "0 0 0 0.2rem rgba(245,124,0,0.25)",
                        border: "1px",
                        borderColor: "brand.500",
                      }}
                    />
                    <FormErrorMessage>
                      {errors?.county?.message}
                    </FormErrorMessage>
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
                    <FormHelperText>
                      We'll never share your email.
                    </FormHelperText>
                    <FormErrorMessage>
                      {errors?.email?.message}
                    </FormErrorMessage>
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
                    <FormErrorMessage>
                      {errors?.phone?.message}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl isRequired isInvalid={!!errors?.units}>
                    <FormLabel>
                      How many units would you like to pre-order?
                    </FormLabel>
                    <Input
                      {...register("units")}
                      bg="white"
                      size={"lg"}
                      // alwaysShowMask
                      placeholder="eg 50"
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
                    <FormErrorMessage>
                      {errors?.units?.message}
                    </FormErrorMessage>
                  </FormControl>

                  <Box w="full">
                    <Button
                      type="submit"
                      size="lg"
                      w={"full"}
                      colorScheme={"brand"}
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
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    );
  },
);

export default VideoSection;
