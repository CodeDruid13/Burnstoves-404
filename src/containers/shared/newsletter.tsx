import { useState } from "react";

import { SUBSCRIBE_TO_NEWSLETTER } from "@api/mutations/newsletter.mutations";
import { useMutation } from "@apollo/client";
import { CheckIcon } from "@chakra-ui/icons";
import {
  Button,
  Container,
  Flex,
  FormControl,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@definitions/exports";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  email: string;
};

export default function NewsletterSection() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(
    "Get updates on our revolutionary cookstoves delivered straight to your inbox.",
  );
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
    <Flex
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("brand.500", "gray.800")}
      py="50px"
    >
      <Container maxW={"4xl"} rounded={"lg"} p={6}>
        <Text
          fontSize={{ base: "xl", sm: "2xl" }}
          textAlign={"center"}
          mb={5}
          color={useColorModeValue("white", "whiteAlpha.900")}
        >
          BURN's Newsletter Sign Up
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
          {!error
            ? errorMsg
            : "Get updates on our revolutionary cookstoves delivered straight to your inbox."}
        </Text>
      </Container>
    </Flex>
  );
}
