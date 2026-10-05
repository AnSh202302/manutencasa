import { Accordion, Box } from "@chakra-ui/react";
import Section from "./Section";
import questions from "../data/FAQdata";



function FAQSection() {
  return (
    <Section
      id="faq"
      headingPart1="FAQ"
      headingPart2="Domande frequenti"
      direction="column"
      alignItems="center"
      minH="unset"
      bgColor="brand.grey"
    >
      <Accordion.Root
        w="full"
        maxW="4xl"
        collapsible
        multiple={false}
        defaultValue={[]}
      >
        {questions.map(({ question, answer }, index) => (
          <Accordion.Item
            key={question}
            value={`question-${index + 1}`}
            borderBottom="1px solid"
            borderColor="gray.300"
          >
            <Accordion.ItemTrigger
              w="full"
              py={5}
              gap={4}
              textAlign="left"
              fontWeight="semibold"
              color="brand.black"
              _hover={{ color: "brand.primary" }}
              _focusVisible={{
                outline: "2px solid",
                outlineColor: "brand.primary",
                outlineOffset: "2px",
                borderRadius: "sm",
              }}
            >
              <Box as="span" flex="1">
                {question}
              </Box>
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody pb={5} color="brand.black" lineHeight="relaxed">
                {answer}
              </Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </Section>
  );
}

export default FAQSection;
