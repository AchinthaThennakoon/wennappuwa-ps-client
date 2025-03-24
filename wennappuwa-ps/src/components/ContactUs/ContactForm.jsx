import { useTranslation } from "react-i18next";
import { TextField, Button, Box } from "@mui/material";

const ContactForm = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full md:w-1/2 p-8">
      <Box className=" p-6 w-full">
        <TextField
          fullWidth
          label={t("name_label")}
          variant="filled"
          sx={{ mb: 2, bgcolor: "white", borderRadius: "8px" }}
        />
        <TextField
          fullWidth
          label={t("email_label")}
          variant="filled"
          sx={{ mb: 2, bgcolor: "white", borderRadius: "8px" }}
        />
        <TextField
          fullWidth
          label={t("phone_label")}
          variant="filled"
          sx={{ mb: 2, bgcolor: "white", borderRadius: "8px" }}
        />
        <TextField
          fullWidth
          label={t("message_label")}
          variant="filled"
          multiline
          rows={4}
          sx={{ mb: 2, bgcolor: "white", borderRadius: "8px" }}
        />
        <Button
          fullWidth
          variant="contained"
          sx={{
            //bgcolor: "rgb(244 114 182)", // Equivalent to Tailwind 'bg-pink-400'
            bgcolor: "rgb(59, 130, 246)",
            color: "white",
            py: 2,
            "&:hover": { bgcolor: "rgb(236 72 153)" },
          }}
        >
          {t("send_message")}
        </Button>
      </Box>
    </div>
  );
};

export default ContactForm;
