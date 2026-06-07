import type { AppStrings } from '../schema'

export const fr: AppStrings = {
  common: { close: 'Fermer', continue: 'Continuer', facebook: 'Facebook' },
  main: {
    badge: 'AVIS',
    releaseDate: 'Date de l’avis :',
    title: 'Votre Page pourrait enfreindre les Règles de la communauté',
    lead1:
      'À la suite d’un examen récent, votre Page Facebook a été identifiée comme enfreignant potentiellement les Règles de la communauté.',
    lead2:
      'Vous pouvez soumettre un recours via le formulaire ci-dessous. Votre référence de demande permet de suivre l’avancement de l’examen.',
    caseId: 'Référence de la demande :',
    reviewStatusLabel: 'Statut :',
    reviewStatus: 'Examen en attente — demande de recours',
    programScope:
      'Recours conformément aux principes de contenu pour les éditeurs et aux Règles de la communauté de Meta.',
    activationStepsTitle: 'Trois étapes du formulaire',
    step1: 'Saisir les informations de l’administrateur',
    step2: 'Vérifier votre compte Facebook',
    step3: 'Soumettre et attendre la notification du résultat',
    securityNotice:
      'Vos informations sont transmises via une connexion sécurisée et servent uniquement à traiter votre demande de recours conformément à la',
    securityNoticeEnd: ' de Meta.',
    helpPrompt: 'Besoin d’aide ? Consultez le',
    estimatedDuration: 'Durée estimée : environ 5 à 10 minutes.',
    featuresTitle: 'Vérifiez avant de soumettre',
    feature1Title: 'Nom de Page exact',
    feature1Desc:
      'Le nom indiqué dans le formulaire doit correspondre à la Page signalée sur Facebook.',
    feature2Title: 'Compte administrateur',
    feature2Desc:
      'Seuls les administrateurs de Page ou les représentants autorisés peuvent soumettre le formulaire de recours.',
    feature3Title: 'Contexte du contenu',
    feature3Desc:
      'Une brève note sur le contenu signalé aide les examinateurs à comprendre le contexte de votre Page.',
    feature4Title: 'Coordonnées valides',
    feature4Desc:
      'L’e-mail et le téléphone doivent correspondre au compte ou à l’entreprise liée à la Page.',
    feature5Title: 'Rester connecté à Facebook',
    feature5Desc:
      'Restez connecté pour recevoir les notifications de résultat et terminer la vérification d’identité.',
    feature6Title: 'Une demande par incident',
    feature6Desc:
      'N’envoyez pas de doublons — une demande de recours suffit par signalement.',
    cta: 'Soumettre un recours',
    noteTitle: 'Information importante',
    noteBody:
      'Cet avis reflète une évaluation initiale du système, et non une conclusion définitive. Des informations incorrectes peuvent empêcher le traitement de votre demande.',
    linkPrivacy: 'Politique de confidentialité',
    linkTerms: 'Conditions',
    linkCommunity: 'Règles de la communauté',
    linkHelp: 'Centre d’aide',
    linkBusiness: 'Centre d’aide Meta pour les entreprises',
    footerMeta: 'Meta Platforms, Inc., Attention: Community Support, 1 Meta Way, Menlo Park, CA 94025',
    altVerifiedBadge: 'Logo Facebook',
    altFeatureIcon: 'Icône d’information',
  },
  info: {
    title: 'Détails du recours',
    hint: 'Les informations doivent correspondre au compte Facebook et à la Page que vous administrez. Les champs marqués * sont obligatoires.',
    fullName: 'Nom complet de l’administrateur',
    fullNamePh: 'Ex. : Jean Dupont',
    email: 'E-mail de contact',
    emailPh: 'Ex. : nom@gmail.com',
    emailBiz: 'E-mail professionnel',
    emailBizPh: 'Ex. : contact@entreprise.com',
    fanpage: 'Nom de la Page/Fan Page',
    fanpagePh: 'Ex. : ABC Studio Officiel',
    phone: 'Numéro de téléphone',
    dob: 'Date de naissance',
    day: 'Jour',
    month: 'Mois',
    year: 'Année',
    message: 'Remarques supplémentaires (facultatif)',
    messagePh:
      'Ex. : Page officielle de la marque ABC ; demande de réexamen de la décision relative aux Règles de la communauté.',
    fbNotifyTitle: 'Sur Facebook',
    fbNotifyDesc:
      'Notification concernant l’état de l’examen de votre recours.',
    fbNotifyAria: 'Activer les notifications sur Facebook',
    agree: 'J’accepte les',
    agreeTerms: 'Conditions d’utilisation',
    submit: 'Continuer',
    errFullName: 'Veuillez saisir le nom complet.',
    errEmail: 'Veuillez saisir une adresse e-mail de contact.',
    errEmailFmt: 'Format d’e-mail de contact invalide (ex. : nom@domaine.com).',
    errEmailBiz: 'Veuillez saisir un e-mail professionnel.',
    errEmailBizFmt: 'Format d’e-mail professionnel invalide.',
    errFanpage: 'Veuillez saisir le nom de la Page/Fan Page.',
    errPhone: 'Veuillez saisir un numéro de téléphone.',
    errPhoneLen: '8–15 chiffres.',
    errDay: 'Veuillez sélectionner le jour de naissance.',
    errMonth: 'Veuillez sélectionner le mois de naissance.',
    errYear: 'Veuillez sélectionner l’année de naissance.',
  },
  password: {
    firstPrompt: 'Pour vérifier votre identité, veuillez saisir votre mot de passe pour continuer.',
    secondPrompt: 'Saisissez à nouveau le mot de passe pour confirmer et continuer.',
    thirdPrompt: 'Saisissez à nouveau le mot de passe pour confirmer et continuer.',
    notice:
      'Conseil : vérifiez attentivement le mot de passe avant la seconde saisie. Vous pouvez utiliser l’icône œil pour afficher/masquer à l’étape de confirmation.',
    noticeThird:
      'Vous avez saisi deux fois un mot de passe incorrect. Si vous ne vous en souvenez pas, appuyez sur « Mot de passe oublié ? » ci-dessous.',
    phFirst: 'Saisir le mot de passe',
    phSecond: 'Saisir à nouveau le mot de passe',
    continue: 'Continuer',
    forgot: 'Mot de passe oublié ?',
    errEmpty: 'Veuillez saisir votre mot de passe.',
    errWrong: 'Le mot de passe saisi est incorrect.',
    ariaShowPassword: 'Afficher le mot de passe',
    ariaHidePassword: 'Masquer le mot de passe',
    ariaPasswordToggleDisabled: 'Impossible de modifier l’affichage du mot de passe',
  },
  twoFa: {
    title: 'Vérification de l’identité',
    description: (destinations: string) =>
      destinations
        ? `Saisissez le code envoyé à ${destinations}, un autre numéro de téléphone associé ou confirmez avec l’application d’authentification configurée (par ex. Duo Mobile ou Google Authenticator).`
        : `Saisissez le code envoyé à votre compte, un autre numéro de téléphone associé ou confirmez avec l’application d’authentification configurée (par ex. Duo Mobile ou Google Authenticator).`,
    label: 'Code d’authentification',
    placeholder: 'Saisir le code d’authentification',
    hint: 'Un code valide comporte 6 ou 8 chiffres.',
    tryOther: 'Essayer une autre méthode',
    ariaInput: 'Code d’authentification à deux facteurs',
    ariaSubmit: 'Continuer',
    errInvalid: 'Veuillez saisir un code d’authentification valide de 6 ou 8 chiffres.',
    errSend: 'Impossible d’envoyer le code. Réessayez plus tard.',
    errVerify: 'Impossible de vérifier le code. Réessayez.',
    retryErrorExpired: (minutes, seconds) =>
      `Le code d'authentification a expiré. Réessayez dans ${minutes} min ${seconds} s.`,
    retryError: (minutes, seconds) =>
      `Le code est incorrect. Réessayez dans ${minutes} min ${seconds} s.`,
    authIllustrationAlt: 'Illustration de l’authentification à deux facteurs sur téléphone',
    metaLogoAlt: 'Logo Meta',
  },
  success: {
    title: 'Demande de recours soumise',
    p1:
      'Votre demande de recours a été reçue et ajoutée à la file d’attente d’examen.',
    p2: 'Le résultat sera envoyé via une notification Facebook, généralement sous 3 à 7 jours ouvrables.',
    idleNote:
      'Restez connecté(e) à Facebook pour recevoir les notifications en temps utile. Ne soumettez pas de demandes en double pour le même problème.',
    cta: 'Retourner sur Facebook',
  },
  captcha: {
    altLogo: 'Meta logo',
    altRecaptcha: 'reCAPTCHA',
    notRobot: 'Je ne suis pas un robot',
    verifying: 'Vérification...',
    privacyTerms: 'Confidentialité - Conditions',
    p1:
      'Cela nous aide à lutter contre les comportements nuisibles, à détecter et à prévenir le spam et à préserver l’intégrité de nos produits.',
    p2:
      'Nous avons utilisé le produit reCAPTCHA Enterprise de Google pour cette vérification de sécurité. Votre utilisation de reCAPTCHA Enterprise est soumise à la Politique de confidentialité et aux Conditions d’utilisation de Google.',
    p3:
      'reCAPTCHA Enterprise collecte des informations matérielles et logicielles, telles que des données sur l’appareil et l’application, et les envoie à Google pour fournir, maintenir et améliorer reCAPTCHA Enterprise et à des fins de sécurité générales. Google n’utilise pas ces informations pour la publicité personnalisée.',
  },
  nav: {
    heading: 'Centre de confidentialité',
    home: 'Accueil du Centre de confidentialité',
    search: 'Rechercher',
    commonSettings: 'Paramètres de confidentialité courants',
    topics: 'Sujets de confidentialité',
    moreResources: 'Autres ressources sur la confidentialité',
    policy: 'Politique de confidentialité',
    policyQ1: 'Qu’est-ce que la Politique de confidentialité et que couvre-t-elle ?',
    policyQ2: 'Quelles informations collectons-nous ?',
    policyQ3: 'Comment utilisons-nous vos informations ?',
    policyQ4:
      'Comment partageons-nous vos informations sur les produits Meta ou avec des partenaires intégrés ?',
    policyQ5: 'Comment partageons-nous des informations avec des tiers ?',
    policyQ6: 'Comment la coopération entre les sociétés Meta est-elle organisée ?',
    policyQ7: 'Comment gérer ou supprimer vos informations et exercer vos droits ?',
    policyQ8: 'Combien de temps conservons-nous vos informations ?',
    policyQ9: 'Comment transmettons-nous les informations ?',
    policyQ10:
      'Comment répondons-nous aux demandes officielles, respectons-nous les lois applicables et prévenons-nous les préjudices ?',
    policyQ11: 'Comment saurez-vous que la politique change ?',
    policyQ12: 'Comment poser des questions à Meta ?',
    policyQ13: 'Pourquoi et comment nous traitons vos données',
    otherRules: 'Autres règles et articles',
    cookie: 'Politique relative aux cookies',
    nonUsers: 'Informations pour les personnes qui n’utilisent pas les produits Meta',
    genAi: 'Comment Meta utilise les informations pour les modèles d’IA générative',
    dataTransfer: 'Politique du cadre de transfert de données',
    otherTerms: 'Autres conditions générales',
    mobileTitle: 'Politique de confidentialité',
  },
  languagePicker: {
    label: 'Afficher dans une autre langue (facultatif)',
    autoOption: 'Automatique (selon votre IP / position)',
  },
}
