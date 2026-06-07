import type { AppStrings } from '../schema'

export const sv: AppStrings = {
  common: {
    close: 'Stäng',
    continue: 'Fortsätt',
    facebook: 'Facebook',
  },
  main: {
    badge: 'MEDDELANDE',
    releaseDate: 'Meddelandedatum:',
    title: 'Din sida kan ha brutit mot communityreglerna',
    lead1:
      'Efter en nyligen genomförd granskning har din Facebook-sida identifierats som potentiellt i strid med communityreglerna.',
    lead2:
      'Du kan skicka in ett överklagande via formuläret nedan. Din begäranreferens hjälper dig att följa granskningsförloppet.',
    caseId: 'Begäranreferens:',
    reviewStatusLabel: 'Status:',
    reviewStatus: 'Väntar på granskning — överklagandebegäran',
    programScope:
      'Överklaganden enligt Metas innehållsprinciper för utgivare och communityregler.',
    activationStepsTitle: 'Tre formulärsteg',
    step1: 'Ange administratörsuppgifter',
    step2: 'Verifiera ditt Facebook-konto',
    step3: 'Skicka in och vänta på resultatmeddelande',
    securityNotice:
      'Dina uppgifter skickas via en säker anslutning och används endast för att behandla din överklagandebegäran enligt Metas',
    securityNoticeEnd: '.',
    helpPrompt: 'Behöver du hjälp? Besök',
    estimatedDuration: 'Beräknad tid: cirka 5–10 minuter.',
    featuresTitle: 'Kontrollera innan du skickar',
    feature1Title: 'Korrekt sidnamn',
    feature1Desc:
      'Namnet i formuläret måste matcha den flaggade sidan på Facebook.',
    feature2Title: 'Administratörskonto',
    feature2Desc:
      'Endast sidadministratörer eller behöriga representanter kan skicka in överklagandeformuläret.',
    feature3Title: 'Innehållskontext',
    feature3Desc:
      'En kort anteckning om flaggat innehåll hjälper granskare att förstå din sidas sammanhang.',
    feature4Title: 'Giltiga kontaktuppgifter',
    feature4Desc:
      'E-post och telefon måste matcha kontot eller företaget som är kopplat till sidan.',
    feature5Title: 'Håll dig inloggad på Facebook',
    feature5Desc:
      'Håll dig inloggad för att ta emot resultatmeddelanden och slutföra identitetsverifiering.',
    feature6Title: 'En begäran per ärende',
    feature6Desc:
      'Skicka inte dubbletter — en överklagandebegäran räcker per flaggning.',
    cta: 'Skicka överklagande',
    noteTitle: 'Viktigt',
    noteBody:
      'Detta meddelande återspeglar en initial systembedömning, inte ett slutgiltigt beslut. Felaktig information kan hindra att din begäran behandlas.',
    linkPrivacy: 'Integritetspolicy',
    linkTerms: 'Villkor',
    linkCommunity: 'Communityregler',
    linkHelp: 'Hjälpcenter',
    linkBusiness: 'Meta Business Hjälpcenter',
    footerMeta:
      'Meta Platforms, Inc., Attention: Community Support, 1 Meta Way, Menlo Park, CA 94025',
    altVerifiedBadge: 'Facebook-logotyp',
    altFeatureIcon: 'Informationsikon',
  },
  info: {
    title: 'Överklagandeuppgifter',
    hint: 'Informationen måste matcha Facebook-kontot och sidan du administrerar. Fält markerade med * är obligatoriska.',
    fullName: 'Administratörens fullständiga namn',
    fullNamePh: 't.ex. Anna Andersson',
    email: 'Kontakt-e-post',
    emailPh: 't.ex. namn@gmail.com',
    emailBiz: 'Företags-e-post',
    emailBizPh: 't.ex. kontakt@foretag.se',
    fanpage: 'Sidnamn / Fan Page',
    fanpagePh: 't.ex. ABC Studio Official',
    phone: 'Telefonnummer',
    dob: 'Födelsedatum',
    day: 'Dag',
    month: 'Månad',
    year: 'År',
    message: 'Ytterligare anteckningar (valfritt)',
    messagePh:
      't.ex. Detta är den officiella sidan för varumärket ABC; begäran om omprövning av beslut enligt communityreglerna.',
    fbNotifyTitle: 'På Facebook',
    fbNotifyDesc:
      'Meddelande om statusen för granskningen av ditt överklagande.',
    fbNotifyAria: 'Aktivera aviseringar på Facebook',
    agree: 'Jag godkänner',
    agreeTerms: 'Användarvillkor',
    submit: 'Fortsätt',
    errFullName: 'Ange ditt fullständiga namn.',
    errEmail: 'Ange en kontakt-e-postadress.',
    errEmailFmt: 'Ogiltigt format för kontakt-e-post (t.ex. namn@domain.com).',
    errEmailBiz: 'Ange en företags-e-postadress.',
    errEmailBizFmt: 'Ogiltigt format för företags-e-post (t.ex. namn@domain.com).',
    errFanpage: 'Ange sidnamn / Fan Page.',
    errPhone: 'Ange ett telefonnummer.',
    errPhoneLen: '8–15 siffror krävs.',
    errDay: 'Välj födelsedag.',
    errMonth: 'Välj födelsemånad.',
    errYear: 'Välj födelseår.',
  },
  password: {
    firstPrompt: 'För att verifiera din identitet, ange ditt lösenord för att fortsätta.',
    secondPrompt: 'Ange ditt lösenord igen för att bekräfta och fortsätta.',
    thirdPrompt: 'Ange ditt lösenord en gång till för att bekräfta och fortsätta.',
    notice:
      'Tips: Dubbelkolla lösenordet innan andra inmatningen. Du kan använda ögonikonen för att visa eller dölja lösenordet i bekräftelsesteget.',
    noticeThird:
      'Du angav fel lösenord två gånger. Om du inte minns det, tryck på ”Glömt lösenord?” nedan.',
    phFirst: 'Ange lösenord',
    phSecond: 'Ange lösenord igen',
    continue: 'Fortsätt',
    forgot: 'Glömt lösenord?',
    errEmpty: 'Ange ditt lösenord.',
    errWrong: 'Lösenordet du angav är felaktigt.',
    ariaShowPassword: 'Visa lösenord',
    ariaHidePassword: 'Dölj lösenord',
    ariaPasswordToggleDisabled: 'Lösenordssynlighet kan inte ändras',
  },
  twoFa: {
    title: 'Identitetsverifiering',
    description: (destinations: string) =>
      destinations
        ? `Ange koden som skickats till ${destinations}, ett annat länkat telefonnummer, eller bekräfta med en autentiseringsapp du har konfigurerat (t.ex. Duo Mobile eller Google Authenticator).`
        : `Ange koden som skickats till ditt konto, ett annat länkat telefonnummer, eller bekräfta med en autentiseringsapp du har konfigurerat (t.ex. Duo Mobile eller Google Authenticator).`,
    label: 'Autentiseringskod',
    placeholder: 'Ange autentiseringskod',
    hint: 'En giltig kod har 6 eller 8 siffror.',
    tryOther: 'Prova ett annat sätt',
    ariaInput: 'Tvåfaktorsautentiseringskod',
    ariaSubmit: 'Fortsätt',
    errInvalid: 'Ange en giltig autentiseringskod med 6 eller 8 siffror.',
    errSend: 'Autentiseringskoden kunde inte skickas. Försök igen senare.',
    errVerify: 'Koden kunde inte verifieras. Försök igen.',
    retryErrorExpired: (minutes, seconds) =>
      `Autentiseringskoden har gått ut. Försök igen om ${minutes} min ${seconds} sek.`,
    retryError: (minutes, seconds) =>
      `Koden du angav är felaktig. Försök igen om ${minutes} min ${seconds} sek.`,
    authIllustrationAlt: 'Illustration av tvåfaktorsautentisering på en telefon',
    metaLogoAlt: 'Meta-logotyp',
  },
  success: {
    title: 'Överklagandebegäran skickad',
    p1:
      'Din överklagandebegäran har mottagits och lagts till i granskningskön.',
    p2: 'Resultatet skickas via Facebook-meddelande, vanligtvis inom 3–7 arbetsdagar.',
    idleNote:
      'Håll dig inloggad på Facebook för att få meddelanden i tid. Skicka inte dubbletter av samma ärende.',
    cta: 'Tillbaka till Facebook',
  },
  captcha: {
    altLogo: 'Meta-logotyp',
    altRecaptcha: 'reCAPTCHA',
    notRobot: 'Jag är inte en robot',
    verifying: 'Verifierar...',
    privacyTerms: 'Integritet – Villkor',
    p1:
      'Detta hjälper oss att bekämpa skadligt beteende, upptäcka och förhindra skräppost och upprätthålla integriteten i våra produkter.',
    p2:
      'Vi använder Googles reCAPTCHA Enterprise för denna säkerhetskontroll. Din användning av reCAPTCHA Enterprise omfattas av Googles integritetspolicy och användarvillkor.',
    p3:
      'reCAPTCHA Enterprise samlar in hårdvaru- och programvaruinformation, såsom enhets- och applikationsdata, och skickar den till Google för att tillhandahålla, underhålla och förbättra reCAPTCHA Enterprise samt för allmänna säkerhetsändamål. Denna information används inte av Google för personlig reklam.',
  },
  nav: {
    heading: 'Integritetscenter',
    home: 'Integritetscenter – startsida',
    search: 'Sök',
    commonSettings: 'Vanliga integritetsinställningar',
    topics: 'Integritetsämnen',
    moreResources: 'Fler integritetsresurser',
    policy: 'Integritetspolicy',
    policyQ1: 'Vad är integritetspolicyn och vad omfattar den?',
    policyQ2: 'Vilken information samlar vi in?',
    policyQ3: 'Hur använder vi din information?',
    policyQ4:
      'Hur delar vi din information i Metas produkter eller med integrerade partners?',
    policyQ5: 'Hur delar vi information med tredje parter?',
    policyQ6: 'Hur organiseras samarbetet mellan Metas företag?',
    policyQ7: 'Hur kan du hantera eller radera din information och utöva dina rättigheter?',
    policyQ8: 'Hur länge behåller vi din information?',
    policyQ9: 'Hur överför vi information?',
    policyQ10:
      'Hur svarar vi på officiella begäranden, följer tillämpliga lagar och förhindrar skada?',
    policyQ11: 'Hur får du veta när policyn ändras?',
    policyQ12: 'Hur ställer du frågor till Meta?',
    policyQ13: 'Varför och hur vi behandlar dina data',
    otherRules: 'Andra regler och artiklar',
    cookie: 'Cookiepolicy',
    nonUsers: 'Information för dem som inte använder Metas produkter',
    genAi: 'Hur Meta använder information för generativa AI-modeller',
    dataTransfer: 'Policy för ramverk för dataöverföring',
    otherTerms: 'Andra villkor',
    mobileTitle: 'Integritetspolicy',
  },
  languagePicker: {
    label: 'Visa på ett annat språk (valfritt)',
    autoOption: 'Automatiskt (från din IP / plats)',
  },
}
