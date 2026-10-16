import { Link as RouterLink } from "react-router-dom";
import { Box, Heading, Link, List, Text, VStack } from "@chakra-ui/react";
import CustomLink from "../components/CustomLink";
import type { ReactNode } from "react";

function PolicySection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <Box as="section" aria-labelledby={id} w="full">
      <Heading as="h2" id={id} fontSize={{ base: "xl", md: "2xl" }} mb={4}>{title}</Heading>
      <VStack align="stretch" gap={4}>{children}</VStack>
    </Box>
  );
}

export default function PrivacyPolicyPage() {
  return (

    <Box
      id="privacy-content"
      maxW="3xl"
      mx="auto"
      px={{ base: 6, md: 8 }}
      py={{ base: 10, md: 16 }}
      lineHeight="1.8"
      overflowWrap="anywhere"
    >
      <Heading
        as="h1"
        fontSize={{ base: "3xl", md: "4xl" }}
        lineHeight="1.2"
        mb={4}
      >
        Informativa sulla Privacy
      </Heading>
      <VStack align="stretch" gap={{ base: 8, md: 10 }}>
        <Text fontSize="sm"><strong>Ultimo aggiornamento: <time dateTime="2026-10-16">16 ottobre 2026</time></strong></Text>
        <Text>
          La presente informativa descrive come Francesco Berardi, titolare dell'attività ManutenCasa, tratta i dati personali raccolti attraverso il sito{" "}
          <Link href="https://manutencasa.it/" textDecoration="underline">https://manutencasa.it/</Link>{" "}
          e i canali di contatto disponibili, ai sensi degli articoli 13 e 14, ove applicabile, del Regolamento (UE) 2016/679 (GDPR).
        </Text>

        <PolicySection id="privacy-section-1" title="1. Titolare del trattamento">
          <Text>Il Titolare del trattamento è:</Text>
          <Text>
            <strong>Francesco Berardi – ManutenCasa</strong>
            <br />Partita IVA: 04370511208<br />Sede dell'attività: Bologna, Italia
            <br />Email: <Link href="mailto:fraber83@gmail.com" textDecoration="underline">fraber83@gmail.com</Link>
            <br />Sito web: <Link href="https://manutencasa.it/" textDecoration="underline">{"https://manutencasa.it/"}</Link>
          </Text>
          <Text>
            Per informazioni sul trattamento dei dati personali o per esercitare i propri diritti è possibile scrivere all'indirizzo email indicato.
          </Text>
        </PolicySection>

        <PolicySection id="privacy-section-2" title="2. Dati personali trattati">
          <Text>
            A seconda del canale utilizzato, ManutenCasa può trattare:
          </Text>
          <List.Root ps={6} gap={3}>
            <List.Item>Nome e indirizzo email inseriti nel modulo di contatto.</List.Item>
            <List.Item>Contenuto delle richieste e degli eventuali allegati inviati via email.</List.Item>
            <List.Item>Numero di telefono, messaggi e fotografie condivisi tramite WhatsApp.</List.Item>
            <List.Item>Indirizzo dell'immobile e informazioni necessarie per preventivi, sopralluoghi e interventi.</List.Item>
            <List.Item>Dati identificativi e fiscali necessari per la fatturazione e gli adempimenti amministrativi.</List.Item>
            <List.Item>Dati tecnici di navigazione, come indirizzo IP, informazioni sul browser e richieste ai server.</List.Item>
          </List.Root>
          <Text>
            Si invita a comunicare soltanto le informazioni pertinenti alla richiesta, evitando dati particolari, documenti personali e informazioni non necessarie relative a terzi.
          </Text>
        </PolicySection>

        <PolicySection id="privacy-section-3" title="3. Finalità e basi giuridiche">
          <Text>
            I dati personali vengono trattati per:
          </Text>
          <Heading as="h3" fontSize={{ base: "lg", md: "xl" }}>
            a) Gestione delle richieste e dei preventivi
          </Heading>
          <Text>
            Rispondere alle richieste di informazioni, valutare gli interventi e predisporre preventivi.
          </Text>
          <Text>
            Base giuridica: art. 6, par. 1, lett. b) GDPR, per l'esecuzione di misure precontrattuali richieste dall'interessato.
          </Text>
          <Heading as="h3" fontSize={{ base: "lg", md: "xl" }}>
            b) Esecuzione degli interventi
          </Heading>
          <Text>
            Organizzare appuntamenti, comunicare con i clienti ed eseguire i lavori concordati.
          </Text>
          <Text>
            Base giuridica: art. 6, par. 1, lett. b) GDPR, per l'esecuzione del contratto.
          </Text>
          <Heading as="h3" fontSize={{ base: "lg", md: "xl" }}>
            c) Adempimenti amministrativi e fiscali
          </Heading>
          <Text>
            Emettere fatture, gestire la documentazione contabile e rispettare gli obblighi di legge.
          </Text>
          <Text>
            Base giuridica: art. 6, par. 1, lett. c) GDPR.
          </Text>
          <Heading as="h3" fontSize={{ base: "lg", md: "xl" }}>
            d) Funzionamento e sicurezza del sito
          </Heading>
          <Text>
            Garantire la disponibilità tecnica del sito e prevenire utilizzi abusivi, nei limiti dei trattamenti di competenza del Titolare.
          </Text>
          <Text>
            Base giuridica: art. 6, par. 1, lett. f) GDPR, legittimo interesse alla sicurezza e al corretto funzionamento del servizio, ove applicabile.
          </Text>
          <Text>
            I dati raccolti attraverso il modulo non sono utilizzati per newsletter, pubblicità personalizzata o profilazione.
          </Text>
        </PolicySection>

        <PolicySection id="privacy-section-4" title="4. Modulo di contatto e Formspree">
          <Text>
            Il modulo di contatto raccoglie nome, indirizzo email e messaggio.
          </Text>
          <Text>
            I dati vengono trasmessi tramite connessione HTTPS al servizio Formspree, utilizzato per gestire le richieste e inoltrare le notifiche all'indirizzo email del Titolare.
          </Text>
          <Text>
            Attualmente è attivo l'archivio delle richieste di Formspree. Il piano Free prevede una cronologia delle richieste consultabile per 30 giorni, secondo le condizioni del servizio.
          </Text>
          <Text>
            I dati possono inoltre essere trattati da Formspree per esigenze tecniche, di sicurezza e di gestione del servizio, secondo le condizioni applicabili.
          </Text>
          <Text>
            Informazioni sul fornitore:{" "}
            <Link href="https://formspree.io/legal/privacy-policy/" textDecoration="underline">{"https://formspree.io/legal/privacy-policy/"}</Link>
          </Text>
        </PolicySection>

        <PolicySection id="privacy-section-5" title="5. Comunicazioni via email e WhatsApp">
          <Text>
            Le comunicazioni email vengono gestite tramite il servizio Gmail di Google. Possono essere trattati indirizzi email, contenuti dei messaggi ed eventuali allegati.
          </Text>
          <Text>
            Il sito consente inoltre di contattare ManutenCasa tramite WhatsApp. Il collegamento apre un servizio esterno e non trasmette automaticamente fotografie o messaggi.
          </Text>
          <Text>
            Quando l'utente decide di comunicare tramite WhatsApp, possono essere trattati numero di telefono, informazioni del profilo disponibili, messaggi e fotografie inviate.
          </Text>
          <Text>
            Le fotografie vengono utilizzate per comprendere il problema, valutare il lavoro richiesto e organizzare eventuali interventi.
          </Text>
          <Text>
            WhatsApp e Google trattano inoltre dati secondo le rispettive informative e condizioni applicabili.
          </Text>
        </PolicySection>

        <PolicySection id="privacy-section-6" title="6. Hosting e dati di navigazione">
          <Text>
            Il sito è ospitato tramite GitHub Pages, servizio fornito da GitHub.
          </Text>
          <Text>
            Durante la navigazione possono essere trattati dati tecnici necessari all'erogazione del servizio, quali indirizzo IP, informazioni sul browser, data e ora delle richieste.
          </Text>
          <Text>
            Le modalità e i tempi di conservazione dei dati tecnici dipendono anche dalle condizioni applicabili al servizio di hosting.
          </Text>
        </PolicySection>

        <PolicySection id="privacy-section-7" title="7. Conservazione dei dati">
          <Text>I dati personali vengono conservati per il periodo necessario alle finalità del trattamento.</Text>
          <Text>In particolare:</Text>

          <List.Root ps={6} gap={3}>
            <List.Item>Le richieste che non danno luogo a un rapporto contrattuale vengono conservate dal Titolare per un massimo di{" "}
              <strong>12 mesi dall'ultimo contatto</strong>, salvo ulteriori esigenze legittime o obblighi di legge.</List.Item>
            <List.Item>I messaggi e le fotografie relativi a tali richieste seguono lo stesso criterio, quando conservati dal Titolare tramite email o WhatsApp.</List.Item>
            <List.Item>La cronologia delle richieste disponibile nell'archivio Formspree segue i limiti del piano utilizzato, attualmente Free, con una cronologia di 30 giorni.</List.Item>
            <List.Item>I dati relativi ai lavori eseguiti vengono conservati per il tempo necessario alla gestione del rapporto contrattuale e agli eventuali obblighi applicabili.</List.Item>
            <List.Item>Le fatture e la documentazione contabile vengono conservate per i periodi previsti dalla normativa italiana, ordinariamente almeno 10 anni, salvi obblighi o necessità ulteriori.</List.Item>
          </List.Root>

          <Text>Eventuali copie tecniche e backup gestiti dai fornitori seguono le rispettive politiche di conservazione e cancellazione.</Text>
        </PolicySection>

        <PolicySection id="privacy-section-8" title="8. Destinatari dei dati">
          <Text>I dati possono essere trattati, nei limiti necessari, dai fornitori dei servizi utilizzati:</Text>

          <List.Root ps={6} gap={3}>
            <List.Item>Formspree, per il modulo di contatto.</List.Item>
            <List.Item>GitHub, per l'hosting del sito.</List.Item>
            <List.Item>Google, per la posta elettronica Gmail.</List.Item>
            <List.Item>WhatsApp, quando scelto dall'utente come canale di comunicazione.</List.Item>
            <List.Item>Eventuali professionisti incaricati della gestione contabile e fiscale, ove coinvolti.</List.Item>
          </List.Root>

          <Text>I dati non vengono venduti a terzi.</Text>
        </PolicySection>

        <PolicySection id="privacy-section-9" title="9. Trasferimenti internazionali">
          <Text>Alcuni fornitori utilizzati possono trattare dati personali anche al di fuori dello Spazio Economico Europeo.</Text>
          <Text>Gli eventuali trasferimenti soggetti al GDPR devono rispettare gli articoli 44 e seguenti del Regolamento, mediante decisioni di adeguatezza, clausole contrattuali standard o altri strumenti previsti dalla normativa, secondo i casi.</Text>
          <Text>Per ulteriori informazioni sulle garanzie applicabili ai singoli servizi è possibile contattare il Titolare.</Text>
        </PolicySection>

        <PolicySection id="privacy-section-10" title="10. Cookie e strumenti di tracciamento">
          <Text>In base alla configurazione tecnica esaminata, il sito non integra Google Analytics, Google Tag Manager, Meta Pixel o altri strumenti di profilazione pubblicitaria.</Text>
          <Text>Il codice applicativo non prevede l'utilizzo di cookie, localStorage o sessionStorage per tracciare gli utenti.</Text>
          <Text>I font e le immagini del sito sono ospitati localmente. I collegamenti a WhatsApp non caricano automaticamente un widget incorporato.</Text>
          <Text>Restano salvi eventuali trattamenti tecnici effettuati dai fornitori dell'infrastruttura, secondo le rispettive condizioni.</Text>
        </PolicySection>

        <PolicySection id="privacy-section-11" title="11. Natura del conferimento dei dati">
          <Text>Il conferimento dei dati attraverso il modulo di contatto è facoltativo. Tuttavia, nome, email e messaggio sono necessari per inviare una richiesta tramite il modulo.</Text>
          <Text>Il mancato conferimento di ulteriori dati necessari per preventivi, interventi o fatturazione può impedire lo svolgimento delle relative attività.</Text>
        </PolicySection>

        <PolicySection id="privacy-section-12" title="12. Diritti degli interessati">
          <Text>Nei casi previsti dagli articoli 15–22 del GDPR, l'interessato può richiedere:</Text>

          <List.Root ps={6} gap={3}>
            <List.Item>Accesso ai propri dati personali.</List.Item>
            <List.Item>Rettifica dei dati inesatti.</List.Item>
            <List.Item>Cancellazione dei dati.</List.Item>
            <List.Item>Limitazione del trattamento.</List.Item>
            <List.Item>Portabilità dei dati, quando applicabile.</List.Item>
            <List.Item>Opposizione al trattamento, nei casi previsti.</List.Item>
          </List.Root>

          <Text>
            Quando un trattamento si basa sul consenso, l'interessato può revocarlo in qualsiasi momento, senza pregiudicare la liceità del trattamento precedente.
          </Text>
          <Text>Le richieste possono essere inviate a{" "}
            <strong><Link href="mailto:fraber83@gmail.com" textDecoration="underline">fraber83@gmail.com</Link>
            </strong>.</Text>
          <Text>L'interessato può inoltre proporre reclamo al Garante per la protezione dei dati personali:{" "}
            <Link href="https://www.garanteprivacy.it/" textDecoration="underline" >https://www.garanteprivacy.it/
            </Link>
          </Text>
        </PolicySection>

        <PolicySection id="privacy-section-13" title="13. Modifiche all'informativa">
          <Text>La presente informativa può essere aggiornata in caso di modifiche ai servizi utilizzati, alle modalità di trattamento o alla normativa applicabile.</Text>
          <Text>La versione aggiornata sarà pubblicata su questa pagina, con indicazione della data dell'ultimo aggiornamento.</Text>
        </PolicySection>

        <CustomLink asChild alignSelf="flex-start">
          <RouterLink to="/">Torna alla homepage</RouterLink>
        </CustomLink>
      </VStack>
    </Box>
  );
}
