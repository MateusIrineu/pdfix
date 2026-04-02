const { plan } = requie("./src/database/init-models.js");

const DEFAULT_PLANS = [
  {
    code: "BASIC",
    name: "Basic",
    description:
      "Plano de entrada para demonstrar catalogo local e checkout hospedado.",
    accessKey: "basic",
    sortOrder: 10,
    paymentLinkUrlEnv: "STRIPE_BASIC_PAYMENT_LINK_URL",
    paymentLinkIdEnv: "STRIPE_BASIC_PAYMENT_LINK_ID",
  },
  {
    code: "CURRICULO",
    name: "Curriculo",
    description: "Curriculo formatado pronto para o usuário final.",
    accessKey: "curriculo",
    sortOrder: 20,
    paymentLinkUrlEnv: "STRIPE_CURRICULO_PAYMENT_LINK_URL",
    paymentLinkIdEnv: "STRIPE_CURRICULO_PAYMENT_LINK_ID",
  },

  
];
