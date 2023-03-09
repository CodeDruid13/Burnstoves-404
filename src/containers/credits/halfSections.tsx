import {
  Button,
  Container,
  Flex,
  HStack,
  Link,
  Stack,
  Text,
  useColorModeValue,
  FormControl,
  Input,
} from "@definitions/exports";
import Image from "next/image";
import NextLink from "next/link";

import { memo } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { SUBSCRIBE_TO_NEWSLETTER } from "@api/mutations/newsletter.mutations";
import { CheckIcon } from "@chakra-ui/icons";
import { FormEvent, ChangeEvent, useState } from "react";

type Inputs = {
  email: string;
};

const HalfSections: React.FC<{
  image?: string;
  alt?: string;
  title?: string;
  subtitle?: string;
}> = memo(({ alt, title, subtitle, image }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [state, setState] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setLoading(true);
    try {
      setLoading(true);
      addTodo({ variables: { data: data } });
    } catch (error) {
      setLoading(false);
      setError(true);
      setErrorMsg("Please try again.");
    }
  };

  const [addTodo] = useMutation(SUBSCRIBE_TO_NEWSLETTER, {
    onCompleted: (data) => {
      setLoading(false);
      setError(false);
      setErrorMsg("Sign-up successful. Thank you!");
      reset();
      setState(true);
    },
    onError: (err) => {
      setLoading(false);
      setError(false);
      setErrorMsg("You're already subscribed to the newsletter.");
      setState(false);
    },
  });

  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      bg={useColorModeValue("white", "transparent")}
      align={"center"}
      justify={"center"}
      spacing={0}
    >
      <Flex
        align={"center"}
        justify={"center"}
        w={{ base: "100%", md: "50%" }}
        bg={"brand.500"}
        minH={"300px"}
      >
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Text
            textStyle={{ base: "display_xs_bold", md: "display_sm_bold" }}
            color={useColorModeValue("white", "whiteAlpha.900")}
            textAlign={"start"}
            w={"full"}
          >
            Contact Us
          </Text>

          <Text
            textStyle={"text_md_medium"}
            textAlign={"start"}
            color={"white"}
          >
            Have any enquiries regarding Carbon Credits? Contact the carbon team
            via email at carbon@burnmfg.com
          </Text>

          <Stack spacing={6} direction={{ base: "column", md: "row" }}>
            <Link
              href={"mailto:carbon@burnmfg.com"}
              target={"_blank"}
              passHref
              as={NextLink}
              style={{ textDecoration: "none" }}
            >
              <Button
                rounded={"full"}
                textStyle="button"
                _hover={{ bg: "brand.700", color: "white" }}
                backgroundColor={"white"}
                color={"gray.600"}
                w={{ base: "100%", md: "fit-content" }}
                py={4}
                minH={"40px"}
                fontSize={"md"}
                fontWeight={"bold"}
              >
                Contact the carbon team
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Flex>

      <Flex
        align={"center"}
        justify={"center"}
        w={{ base: "100%", md: "50%" }}
        bg={"#5F5E5E"}
        minH={"300px"}
      >
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Text
            textStyle={{ base: "display_xs_bold", md: "display_sm_bold" }}
            color={useColorModeValue("white", "whiteAlpha.900")}
            textAlign={"start"}
            w={"full"}
          >
            BURN's Newsletter Sign Up
          </Text>

          <Text
            textStyle={"text_md_medium"}
            textAlign={"start"}
            color={"white"}
          >
            Get updates on our revolutionary cookstoves delivered straight to
            your inbox.
          </Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack direction={{ base: "column", md: "row" }} spacing={"12px"}>
              <Stack direction={"column"} spacing={1} w={"full"}>
                <FormControl>
                  <Input
                    variant={"solid"}
                    size="lg"
                    borderWidth={1}
                    color={useColorModeValue("gray.800", "gray.300")}
                    bg={useColorModeValue("white", "gray.600")}
                    _placeholder={{
                      color: "gray.400",
                    }}
                    borderColor={useColorModeValue("gray.300", "gray.700")}
                    id={"email"}
                    type={"email"}
                    required
                    placeholder={"Your Email"}
                    aria-label={"Your Email"}
                    {...register("email", { required: true })}
                  />
                </FormControl>

                {errors?.email && (
                  <Text color="white" textStyle={"text_xs_medium"}>
                    This field is required
                  </Text>
                )}
              </Stack>

              <Button
                size="lg"
                color={useColorModeValue("gray.600", "white")}
                textStyle="button"
                bg={useColorModeValue("white", "brand.500")}
                rounded="full"
                isLoading={loading}
                w={{ base: "100%", md: "fit-content" }}
                type={"submit"}
              >
                {state ? <CheckIcon /> : "Subscribe"}
              </Button>
            </Stack>
          </form>
          <Text
            mt={2}
            textAlign={"center"}
            color={useColorModeValue("white", "white")}
          >
            {!error ? errorMsg : ""}
          </Text>
        </Stack>
      </Flex>
    </Stack>
  );
});

export default HalfSections;
