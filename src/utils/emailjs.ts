import emailjs from '@emailjs/browser';

// Identifiants EmailJS (à remplacer par les vôtres)
const SERVICE_ID = "service_8fiss08";
const TEMPLATE_ID = "template_1jkrer9";
const PUBLIC_KEY = "tczEuvooVPiv_flRm";

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  expertise: string;
  need: string;
  budget: string;
}

/**
 * Génère le template HTML pour l'email interne (destiné à l'équipe)
 */
const generateInternalEmailHtml = (data: ContactFormData) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Arial', sans-serif; background-color: #f9f9fb; margin: 0; padding: 20px; color: #111; }
    .container { max-width: 600px; background: #ffffff; border-radius: 12px; padding: 30px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); margin: auto; }
    .header { font-size: 20px; font-weight: bold; color: #ff5fa2; border-bottom: 2px solid #f0f0f0; padding-bottom: 15px; margin-bottom: 20px; }
    .field { margin-bottom: 15px; }
    .label { font-size: 12px; text-transform: uppercase; color: #666; font-weight: bold; display: block; margin-bottom: 4px; }
    .value { font-size: 16px; background: #f9f9fb; padding: 10px; border-radius: 6px; border: 1px solid #eee; }
    .message { font-size: 15px; background: #f9f9fb; padding: 15px; border-radius: 6px; border: 1px solid #eee; white-space: pre-wrap; line-height: 1.5; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">🔔 Nouvelle demande de contact (Prismifie)</div>
    
    <div class="field">
      <span class="label">Nom complet</span>
      <div class="value">${data.name}</div>
    </div>
    
    <div class="field">
      <span class="label">Entreprise</span>
      <div class="value">${data.company}</div>
    </div>
    
    <div class="field">
      <span class="label">Email</span>
      <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
    </div>
    
    <div class="field">
      <span class="label">Téléphone</span>
      <div class="value">${data.phone || 'Non renseigné'}</div>
    </div>
    
    <div class="field">
      <span class="label">Expertise demandée</span>
      <div class="value">${data.expertise}</div>
    </div>
    
    <div class="field">
      <span class="label">Budget envisagé</span>
      <div class="value">${data.budget || 'Non renseigné'}</div>
    </div>
    
    <div class="field">
      <span class="label">Besoin détaillé</span>
      <div class="message">${data.need}</div>
    </div>
  </div>
</body>
</html>
`;

/**
 * Génère le template HTML pour l'email de confirmation (destiné au client)
 */
const generateClientEmailHtml = (data: ContactFormData) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Arial', sans-serif; background-color: #f9f9fb; margin: 0; padding: 20px; color: #333; }
    .container { max-width: 600px; background: #ffffff; border-radius: 12px; padding: 40px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); margin: auto; text-align: center; }
    .logo { font-size: 24px; font-weight: 800; color: #111; margin-bottom: 30px; letter-spacing: -0.5px; }
    .logo span { color: #ff5fa2; }
    .title { font-size: 22px; font-weight: bold; margin-bottom: 15px; color: #111; }
    .content { font-size: 16px; line-height: 1.6; color: #555; margin-bottom: 30px; text-align: left; }
    .footer { font-size: 13px; color: #999; border-top: 1px solid #eee; padding-top: 20px; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo">Prismi<span>fie</span></div>
    
    <div class="title">Merci de nous avoir contactés !</div>
    
    <div class="content">
      Bonjour ${data.name},<br><br>
      Nous avons bien reçu votre demande concernant votre besoin en <strong>${data.expertise}</strong> pour <strong>${data.company}</strong>.<br><br>
      Toute l'équipe Prismifie vous remercie pour votre confiance. Nous allons analyser votre projet avec attention et un membre de notre équipe vous recontactera sous 48h ouvrées.<br><br>
      À très bientôt !
    </div>
    
    <div class="footer">
      Cet email a été généré automatiquement <br>
      Prismifie - 52 rue Carves, 92120 Montrouge
    </div>
  </div>
</body>
</html>
`;

/**
 * Envoie les deux emails (interne et client)
 */
export const sendContactEmails = async (data: ContactFormData): Promise<{ success: boolean; error?: any }> => {
  // IMPORTANT: On s'attend à ce que le template EmailJS contienne la variable {{{html_message}}} et {{{to_email}}}
  // et {{{to_name}}} pour pouvoir acheminer les emails dynamiquement depuis le code.

  try {
    console.log("Tentative d'envoi EmailJS avec :", { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY });

    // 1. Envoi de l'email interne
    console.log("Envoi de l'email interne (équipe)...");
    const res1 = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        to_email: 'rmedimalik@gmail.com', // TEST: remplace temporairement l'équipe
        to_name: 'Équipe Prismifie',
        subject: `Nouvelle demande : ${data.company} - ${data.expertise}`,
        html_message: generateInternalEmailHtml(data),
      },
      PUBLIC_KEY
    );
    console.log("Réponse EmailJS (interne) :", res1);

    // 2. Envoi de l'email de confirmation au client
    console.log("Envoi de l'email client...");
    const res2 = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        to_email: 'rmedimalik@gmail.com', // TEST: remplace temporairement l'email client
        to_name: data.name,
        subject: 'Votre demande Prismifie a bien été reçue',
        html_message: generateClientEmailHtml(data),
      },
      PUBLIC_KEY
    );
    console.log("Réponse EmailJS (client) :", res2);

    return { success: true };
  } catch (error: any) {
    console.error('Erreur CRITIQUE lors de l\'envoi EmailJS:', error);
    if (error?.text) {
      console.error('Message d\'erreur EmailJS détaillé :', error.text);
    }
    return { success: false, error };
  }
};
