import { Link as RouterLink } from "react-router-dom";
import { Box } from "@chakra-ui/react"
import CustomLink from "../CustomLink"
import { LuArrowLeft } from "react-icons/lu"

function PrivacyHeaderContent() {
    return (
        <Box as="nav" aria-label="Navigazione informativa privacy" >

            <CustomLink asChild fontSize={{ base: "sm", md: "md" }}>
                <RouterLink to="/">
                    <LuArrowLeft aria-hidden="true" style={{ flexShrink: 0 }} />
                    Torna alla homepage di ManutenCasa
                </RouterLink>
            </CustomLink>
        </Box>
    )
}

export default PrivacyHeaderContent
