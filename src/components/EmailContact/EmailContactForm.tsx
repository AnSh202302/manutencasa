import { Link as RouterLink } from "react-router-dom";
import { useState, type FormEvent } from "react";
import { Field, Input, Link, Text, Textarea, VStack } from "@chakra-ui/react";
import { LuMail } from "react-icons/lu";
import CustomButton from "../Buttons/CustomButton";

import { CONTACT_FORM_ENDPOINT } from "./emailContact.config";

const initialValues = { name: "", email: "", message: "" };
type FormValues = typeof initialValues;

interface EmailContactFormProps {
  onSuccess: () => void;
  onClose: () => void;
}

export default function EmailContactForm({ onSuccess, onClose }: EmailContactFormProps) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const nextErrors: Partial<FormValues> = {};
    if (!values.name.trim()) nextErrors.name = "Inserisci il tuo nome.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) nextErrors.email = "Inserisci un indirizzo email valido.";
    if (values.message.trim().length < 10) nextErrors.message = "Descrivi il lavoro con almeno 10 caratteri.";
    setErrors(nextErrors);
    setStatus("idle");
    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      event.currentTarget.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: values.name.trim(), email: values.email.trim(), message: values.message.trim() }),
      });
      if (!response.ok) throw new Error("Submission failed");
      setStatus("success");
      setValues(initialValues);
      onSuccess();
    } catch {
      setStatus("error");
    }
  }

  function update(field: keyof FormValues, value: string) {
    setValues((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => ({ ...previous, [field]: undefined }));
    setStatus("idle");
  }

  if (status === "success") {
    return (
      <VStack gap={5} align="stretch">
        <Text role="status">La tua richiesta è stata inviata. Ti risponderò al più presto.</Text>
        <CustomButton type="button" size="md" onClick={onClose} autoFocus>OK</CustomButton>
      </VStack>
    );
  }

  return (
    <form onSubmit={submit} noValidate>
      <VStack gap={5} align="stretch">
        <Text fontSize="sm">Compila il modulo per inviarmi la tua richiesta.</Text>
        <Field.Root required invalid={!!errors.name}>
          <Field.Label htmlFor="contact-name">Nome <Field.RequiredIndicator /></Field.Label>
          <Input id="contact-name" name="name" autoComplete="name" disabled={status === "sending"} required maxLength={100} value={values.name} onChange={(event) => update("name", event.target.value)} borderRadius={6} />
          <Field.ErrorText>{errors.name}</Field.ErrorText>
        </Field.Root>
        <Field.Root required invalid={!!errors.email}>
          <Field.Label htmlFor="contact-email">Email <Field.RequiredIndicator /></Field.Label>
          <Input id="contact-email" name="email" type="email" autoComplete="email" disabled={status === "sending"} required maxLength={254} value={values.email} onChange={(event) => update("email", event.target.value)} borderRadius={6} />
          <Field.ErrorText>{errors.email}</Field.ErrorText>
        </Field.Root>
        <Field.Root required invalid={!!errors.message}>
          <Field.Label htmlFor="contact-message">Di cosa hai bisogno? <Field.RequiredIndicator /></Field.Label>
          <Textarea id="contact-message" name="message" disabled={status === "sending"} required minLength={10} maxLength={3000} rows={5} value={values.message} onChange={(event) => update("message", event.target.value)} borderRadius={6} />
          <Field.HelperText>Da 10 a 3000 caratteri.</Field.HelperText>
          <Field.ErrorText>{errors.message}</Field.ErrorText>
        </Field.Root>
        <Text fontSize="sm" lineHeight="tall">
          I dati inseriti saranno utilizzati esclusivamente per rispondere alla tua richiesta.
          Per maggiori informazioni, consulta la nostra{" "}
          <Link asChild textDecoration="underline" _focusVisible={{ outline: "2px solid", outlineColor: "brand.text", outlineOffset: "2px" }}><RouterLink to="/privacy-policy">Informativa sulla Privacy</RouterLink></Link>.
        </Text>
        <CustomButton type="submit" disabled={status === "sending"} loading={status === "sending"} loadingText="Invio in corso" size="md"><LuMail /> Invia richiesta</CustomButton>
        {status === "error" && <Text role="alert" color="red.600" fontSize="sm">Non è stato possibile inviare la richiesta. Riprova oppure contattami per telefono o WhatsApp.</Text>}
      </VStack>
    </form>
  );
}
