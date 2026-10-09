import CustomButton from "./CustomButton"
import ContactLink from "./CustomLink/ContactLink"
import Section from "./Section"

function ProblemCTASection() {
  return (
    <Section
      direction="column"
      alignItems="flex-start"
      directionItems="flex-start"
      minH="unset"
      headingPart1="Hai un problema?"
      headingPart2="Non sai se posso aiutarti?"
      description={
        <span>
          Mandami una foto del problema su WhatsApp e spiegami brevemente
          cosa è successo. Ti dirò se posso occuparmene.
        </span>
      }
    >
      <CustomButton asChild css={{ "@media (max-width: 374px)": { fontSize: "14.5px" } }}>
        <ContactLink cta="whatsapp" maxW="sm" href="https://wa.me/393289487163?text=Ciao%20Francesco%2C%20ti%20invio%20una%20foto%20del%20problema.%20Puoi%20dirmi%20se%20puoi%20occupartene%3F" >
          Invia una foto su WhatsApp
        </ContactLink>
      </CustomButton>
    </Section>

  )
}

export default ProblemCTASection
