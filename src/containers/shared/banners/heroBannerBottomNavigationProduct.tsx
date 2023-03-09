import NextLink from "next/link";

import {
  Box,
  Center,
  Container,
  Flex,
  HStack,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@definitions/exports";

import Image from "next/image";
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import ShareButtons from "@components/share-button";

const HeroBannerBottomNavigationProductSection = ({
  bannerdata,
  color,
  font,
  image,
  status,
}: {
  bannerdata?: any;
  color?: string;
  font?: string;
  status?: string;
  image?: string;
}) => {
  const shareButtonItems = [
    {
      icon: FaWhatsapp,
      href: `https://api.whatsapp.com/send?text=Get ${bannerdata?.pageBanners?.data?.[0]?.attributes?.page_banner[0]?.page_title} at https://burnstoves.com/products`,
      color: "whatsapp",
      title: "WhatsApp",
    },
    {
      icon: FaLinkedin,
      href: `https://www.linkedin.com/shareArticle?mini=true&url=Get ${bannerdata?.pageBanners?.data?.[0]?.attributes?.page_banner[0]?.page_title} at https://burnstoves.com/products`,
      color: "telegram",
      title: "Telegram",
    },
    {
      icon: FaFacebook,
      href: `https://www.facebook.com/sharer.php?u=Get ${bannerdata?.pageBanners?.data?.[0]?.attributes?.page_banner[0]?.page_title} at  https://burnstoves.com/products`,
      color: "facebook",
      title: "Facebook",
    },
    {
      icon: FaTwitter,
      href: `https://twitter.com/intent/tweet?url=Get ${bannerdata?.pageBanners?.data?.[0]?.attributes?.page_banner[0]?.page_title} at https://burnstoves.com/products`,
      color: "twitter",
      title: "Twitter",
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"85vh"}
      width={"100%"}
      clipPath={"inset(0 0 0 0)"}
    >
      <Box position="absolute" height="100%" width="100%" left="0" top="0">
        <Image
          src={
            bannerdata?.pageBanners?.data?.[0]?.attributes?.page_banner[0]
              ?.page_image?.data?.attributes?.url
          }
          layout="fill"
          objectFit="cover"
          sizes="100vw"
          alt={
            bannerdata?.pageBanners?.data?.[0]?.attributes?.page_banner[0]
              ?.page_title
          }
          placeholder="blur"
          // blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACCAIIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAgEABAP/xAAVEAEBAAAAAAAAAAAAAAAAAAAAAf/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8A9mVHB2GjSqVQUWoqsrKKsVIojIqVAaNOhVBo0qIIysDtSklQCjTo1Qai1BWWIsUVUiojNVQBo06FAKhUaojKwO5KSVFChXpQoDRKooixlgKqRQZlQQaNOjQCiVSiiysDvGklQCjToUAqFRUZYiwQoqRQZlQEoU6NAKJ0QRmYHeNIayDQp0KA0SoqMsRYqFFSLAVmZAaNKjQGiVEGZmUdqVUrnWaNClRq1aNFai0rLBWFChQYsKhIzFKlGlRpSjRKiUrMjFK7UrJXOs1KFKhVpUorUKtZYKxaHFgxUqEyMUqUaVGlKNEqNKlZkYpXYlVKwyNGlQqqNRagrLEWKpRRhCKjMiJRpUaA0SoqMzMg7ErMiDQrMKNRmVUKMwLCZgZmYRKNZhBoswIzMD//2Q=="
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAFHAooDASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAECAwUE/8QAGBABAQEBAQAAAAAAAAAAAAAAAAERAhL/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EABgRAQEBAQEAAAAAAAAAAAAAAAABERIh/9oADAMBAAIRAxEAPwD7gGHUAAVAVQAFRUAABUUAAAAFEUAQRVQAAAQAEABARARUBEVBURUBEVARFQERUERFQERUAQFEAEARRRFEAFFAEVUVUVUAaEVRVRRFVFUVUAVUUFEUFEUQABRAGwGHQAFAAUBAVFAAAVAFAAAAARQAAABAABAAQBFRAQQBFQVEVARBAGVQERUERFQBBAEVFAQEAFAARRBUVUUFVlVRVRQVUFGorKiNCKoqooKrKgqoAoAKICKADYg5uqgAAAKgCgAKgCgAAAogKoggoACAAAAgAIAICICACIqCoioCIIAggDKoIgIAggCAqCAAIKKICKrKqiqyoNCCo0rKqNKyoNKyoiqgo0rKg0IoKIoKIoKICKIA6AObqAAKgCiKAqAKIoAAKIIqiKAAACAogAAAgAIIgAgCCCiCAIIBUEBEVBEQQBBAEEAEFQEABBUUQBVZVUVWV1RoZURpWVUaVnVEaVlQaGdVRpWVBpWQGlZUFVkBoQBRAHUBzdBUAUQBRFQFQBRFAAFUQBRAFEAUQBRAAEABEAEAQQAEFEEBEEoFQQBCoIMiUBBAEEAE1NEXU1NNUU1NTVRrTWdNBrTU01Ua01nV1RrV1nTRG9XWNXVGtXWdXRGtXWdXVGtXWdXQa1dY1dBrVZ1dBrTWdXQa01nV0F1dZ01Ro1nQHcBxdBUAUQBRFAVAFEBVEUAAFEAUQBRAAEQVAAQQFQQUEAEEAQZAqFQBKIIVBmgJaWpaBqampoKiamgupqamiLprOmqLprOmqjWms6aI1prOmqN6azpqo3q6xq6Dems6uqjWrrOrqjWrrGroN6usaug3q6xq6DWrrOmg3prOrqjWms6aI1q6zpoNaazpoPpEHF1UABUAUQFURQFQQUQBRAFEAUQBRAFQQFEBQQAQQARAVEQFZEAQQBKM0QqWlS0C1m0tS0DU0tZtBbWdLU0Q1NNTQXU1NTVRdNZ00GtNZ01Ua01nTVG9NZ01Ub1dY1dVG9XWNXQb1dY1dUb1dY1dBrV1nTQb1dY1dVG9XWNXQa1dY1dBrV1jV0GtNZ00GtNZ00H2CDg7KIAogCiKCiAKIAogCiKAIAomgKICqggKIgKggKggCCAIJoCCAVKVm0QtS0tS1AtZtLUtAtZtLUtAtZtLUtAtS1LUtVFtTU1NBdTU1NEXTWdTVG9NY01Ub01jTVRvV1jTVR001jV1RvV1jV1RvV1jV0RvV1jV1RvV1jV0G9XWNXQb1dY1dBrV1jV0GtXWdNBrTWdXQa01nTQfaIODsoigAAogCiAKIAqsqCiAAICiAKICqiAKggKggAmpqCpqamgqIgLrOiWiFqWlrNoFqWlrNoFqWlrNoFqWlrNoFqWpalohalqWpaBalqWpaC6ms2pojWmsaaqNaaxprSN6uuemqOmrrnq6qN6uuerqo6ausauqN61rnq6o6auuerKDpq6xKug3q6xq6DemsauqN6usaaDerrGmg3prOmg1prOmg9AQeZ1VWQVoZUFEAUQBRAFEAaGTQUTTQUTQFEQFEBQ1ADTUQF1NQAQQBNNS0C1m0tS0QtS0tZtAtS0tZtAtZtLUtQLWbS1m0C1LUtZtEW1m1LWbU0W1LUtZtTRbU1m1LVRrU9M2pqo3prnqempUddNcvS+m4jrprn6PTSOurrlrUqo6a1K5SrKo6yrK5yrKDrq65yrKo6auucq6Dpq6xq6DerrGmg6aaxq6K3prGroN6axq6DWms6aD0hB5nVoZAaE00FEBVEAUQBRNNBRAFEAU1EBdNQ0FRNNBUNTRVRNNATTU0DU01NENS01LQLUtS1LUC1m0tS0C1m0tS0C1m0tZtQLWbS1m1NC1m1LWbU1FtZtS1LTAtZtLWbWpELUtZtZtakRq1L0xemb21Imul6T05Xtn01yzrt6PTj6PS4mu/pZ04elnSxn19E6WdOE6anTSa7zpqdOE6anS4a7StSuM6anSrrtKsrlK1KLrpK1K5yrKDpKuucrWg3q6xq6K3q656ug3q6xpoN6azpoNaazpoPVE015XZRNAUQBVZAa01lQXRDQUTTRVNTTQXTWQF01AF0ZNBRNTQUTU0FQ1NAQ1NQXWdNQC1LRLQLWbS1LQLWbS1m1AtS0tZtQLWbS1i1LQtZtLWbWQtZtLWbWpELWbS1i1uRFtYtLXPrpqRFvTF6Z66ZdJGbVvTINMgAAAC6gDU6anTmqypjrK1K4ytSts2Osrc6cZWpVZdp01K4ytTow12lalcZ03KmNa6StSuUrUouumrrnrWhrerrGmiummsaug1q6xq6DWms6aD1xB5HZRNNBRNNBRNAXTUBV01AFENBRNAXTUAXRkBRNNRQTTQBNTQVDU0ATU0FZtNS0C1LS1m1BbWbS1m0C1LS1m1NC1m0tZtYtEtS0tZtAtZtLWbWoiWs2lrNrUiFrFpa59dNyIddOXXR1dZdZGbQBWQAAAAAAAAAFEVqUalblcmpW2bHWVZXOVqVWLHSVqdOcqyjLrOmpXKVZTF12lWVylalTGtdNXWJV0XW9XWNNDW9NZ00VrTWdNB7WmsjxuzWmsqCiAqiGgpqaaC6IAuiAKMmg0mpoKuiCComgKiAKiaAaaiAupqIirayWpoGpaWs2oFqWlrNqaFrNpazaxaFrNq2s2iJazatrNrUEtZtW1i1uIlrNpax1W5ETquXXS9dObpIzaANMgAAAAAAAAAAAAAKA6So1K1KwsrSWOkrUrErUVixqKzFGWtalYUR0lWVzWUxddNXXPV1MXXTTWNXRda01nTQ17Yg8b0KIAogirpqANDIDRrJoNaMgKICqIaC6mpogumpqAumogq6miILqampoLqJqILrOiWgWpaWs2s2hazaWozqpUpUoiWs1aza1BLWbVtZrURLWLVtYtbiJa59VrquPVdJGbUt1AbZAAAAAAAAAAAAAAAAFRWoKIrpEajcc43FZrUaZiwYaEiiKqAiqgqLq6gC6agGvdEHhetRAF0QFUQBTUNBdNQBRBFUQ0F1NEBRBBUQFVEABEQVNEQNTTUqKWs2lqWpaFrNKjAVmrWaoVKVmqhWatZrUEtZtWsVqIlrFq2sdV0kZtY6rnV6rLpGQBQAAAAAAAAAAAAAAAAVFWAqK6RFjUZjUaZrUajMagzVVFGRUURQBFEVQAB7Yg8T1KIAogCiCKogCiAKICqIIAgCiIiqIAGoICCIKiIirrNolqWhahWWFEEohUpUrQlZq1mqiVKtZrUGbWbVrNbjLNrl1W+q5dV0kZtZqA2AAAAAAAAAAAAAAAAAACoqwFRXSIsaiRqKzVjUSLFZVUUZFARQBBQAAUeyIPG9KiCCiAKIAogKoggogCiAoCIKICgggCCAgiKIIzQqUqM1RBEBlalUSpSpWkSs1alUSs1azWojNYrVYrcZrHVc630xXSMsgNKAAAAAAAAAAAAAAAAAAKirAWIsdIjUaiRqKxVipFGVVFVFBRAARQAAAeuA8j0AAAAAAACKAAAIoIAogigICoCAgiKAjIMqlZqoioyIiooiVUUSs1alVErNWpWhms1qsVqIzWOm659NxisVit1iukSIArQAAAAAAAAAAAAAAAAAAqKsBqI1HRmtRYkais1YqKMqqKMioqgoCAAgKA9UB5XoAEAAAAUAAARQAABFEVEAAUQEEAQRFRlURajFVEVEEBKolSqlVErNarNaErNarNVGazWqzW4jFc+nSudbjFYrNarNbixAFUAAAAAAAAAAAAAAAAAAVFWCxqMxuOjNWNRIsGKqoqsqqKIoCooACoogAD1AHlehQAQBBQBQAABAAFQBAARRAAARUQEBAZqpUBiqiAgiAqJUoNDNSgozUoNRGaxQaiMVig3GKxWaDcWIAqgAAAAAAAAAAAAAAAAACgsFjcB0ZrUWAMVpQVkUBFAVFABQBAAH//2Q=="
        />
      </Box>

      <Flex
        align={["center", "center", "center"]}
        direction={["column-reverse", "column-reverse", "row"]}
        h="full"
        justify={{ base: "center", md: "space-between" }}
        position={"relative"}
        px={{ base: "20px", md: "125px" }}
      >
        <Stack
          w={"100%"}
          justify="space-between"
          align={"start"}
          direction={{ base: "column", md: "row" }}
        >
          <Stack
            align={["start"]}
            direction={"row"}
            spacing={4}
            w={"full"}
            flex={1}
          >
            <Stack spacing={4}>
              <Text
                textStyle={{
                  base: "text_md_bold",
                  md: "display_md_bold",
                }}
                color={useColorModeValue("whiteAlpha.900", "whiteAlpha.800")}
                w={"full"}
              >
                {
                  bannerdata?.pageBanners?.data?.[0]?.attributes?.page_banner[0]
                    ?.page_title
                }
              </Text>
            </Stack>
          </Stack>

          <Stack
            align={"end"}
            justify={"end"}
            direction={"row"}
            spacing={4}
            mt={{ base: 4, md: 0 }}
          >
            <ShareButtons
              display={["flex", "flex", "flex"]}
              text={null}
              color={"blackAlpha.700"}
              bg={"whiteAlpha.800"}
              items={shareButtonItems}
            />
          </Stack>
        </Stack>
      </Flex>
      {/* </Container> */}

      <HStack
        spacing={4}
        overflowX="auto"
        w={{ base: "100%", md: "100%" }}
        px={{ base: "auto", md: "125px" }}
        h="75px"
        bg="brand.500"
        position={"absolute"}
        bottom={0}
      >
        <Link
          href={"/products/charcoal-stoves/jikokoa-classic"}
          passHref
          as={NextLink}
          style={{ textDecoration: "none" }}
        >
          <Center
            bg={status === "classic" ? color : "transparent"}
            width={{ base: "full", md: "20vw" }}
            h="75px"
            color="white"
            textStyle={
              status === "classic"
                ? { base: "text_xs_bold", md: "text_md_bold" }
                : { base: "text_xs_regular", md: "text_md_regular" }
            }
            px={{ base: 4, md: 0 }}
          >
            Jikokoa Classic
          </Center>
        </Link>

        <Link
          href={"/products/charcoal-stoves/jikokoa-xtra"}
          passHref
          as={NextLink}
          style={{ textDecoration: "none" }}
        >
          <Center
            bg={status === "xtra" ? color : "transparent"}
            width={{ base: "full", md: "20vw" }}
            h="75px"
            color="white"
            textStyle={
              status === "xtra"
                ? { base: "text_xs_bold", md: "text_md_bold" }
                : { base: "text_xs_regular", md: "text_md_regular" }
            }
            px={{ base: 4, md: 0 }}
          >
            Jikokoa Xtra
          </Center>
        </Link>

        <Link
          href={"/products/charcoal-stoves/jikokoa-pro"}
          passHref
          as={NextLink}
          style={{ textDecoration: "none" }}
        >
          <Center
            bg={status === "pro" ? color : "transparent"}
            width={{ base: "full", md: "20vw" }}
            h="75px"
            color="white"
            textStyle={
              status === "pro"
                ? { base: "text_xs_bold", md: "text_md_bold" }
                : { base: "text_xs_regular", md: "text_md_regular" }
            }
            px={{ base: 4, md: 0 }}
          >
            Jikokoa Pro
          </Center>
        </Link>
      </HStack>
    </Box>
  );
};

export default HeroBannerBottomNavigationProductSection;
