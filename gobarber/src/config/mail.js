export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: process.env.MAIL_SECURE,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  proxy: process.env.MAIL_PROXY,
  default: {
    from: 'Equipe Gobarber <noreply@rodrigopassos.com.br>',
  },
};
