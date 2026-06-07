import type { AppStrings } from '../schema'

export const cs: AppStrings = {
  common: { close: 'Zavřít', continue: 'Pokračovat', facebook: 'Facebook' },
  main: {
    badge: 'OZNÁMENÍ',
    releaseDate: 'Datum oznámení:',
    title: 'Vaše stránka možná porušila komunitní standardy',
    lead1:
      'Na základě nedávné kontroly byla vaše facebooková stránka identifikována jako potenciálně porušující komunitní standardy.',
    lead2:
      'Odvolání můžete podat pomocí formuláře níže. Reference požadavku vám pomůže sledovat průběh přezkoumání.',
    caseId: 'Reference požadavku:',
    reviewStatusLabel: 'Stav:',
    reviewStatus: 'Čeká na přezkoumání — žádost o odvolání',
    programScope:
      'Odvolání podle zásad obsahu pro vydavatele a komunitních standardů Meta.',
    activationStepsTitle: 'Tři kroky formuláře',
    step1: 'Zadání údajů administrátora',
    step2: 'Ověření facebookového účtu',
    step3: 'Odeslání a čekání na oznámení o výsledku',
    securityNotice:
      'Vaše údaje jsou odesílány zabezpečeným připojením a slouží pouze ke zpracování vaší žádosti o odvolání podle',
    securityNoticeEnd: ' společnosti Meta.',
    helpPrompt: 'Potřebujete pomoc? Navštivte',
    estimatedDuration: 'Odhadovaná doba dokončení: přibližně 5–10 minut.',
    featuresTitle: 'Zkontrolujte před odesláním',
    feature1Title: 'Přesný název stránky',
    feature1Desc:
      'Název ve formuláři musí odpovídat označené stránce na Facebooku.',
    feature2Title: 'Účet administrátora',
    feature2Desc:
      'Formulář odvolání mohou odeslat pouze administrátoři stránky nebo oprávnění zástupci.',
    feature3Title: 'Kontext obsahu',
    feature3Desc:
      'Stručná poznámka k označenému obsahu pomůže recenzentům pochopit kontext vaší stránky.',
    feature4Title: 'Platné kontaktní údaje',
    feature4Desc:
      'E-mail a telefon musí odpovídat účtu nebo firmě propojené se stránkou.',
    feature5Title: 'Zůstaňte přihlášeni k Facebooku',
    feature5Desc:
      'Zůstaňte přihlášeni, abyste dostávali oznámení o výsledku a dokončili ověření identity.',
    feature6Title: 'Jedna žádost na případ',
    feature6Desc:
      'Neposílejte duplicity — jedna žádost o odvolání stačí na každé označení.',
    cta: 'Odeslat odvolání',
    noteTitle: 'Důležité',
    noteBody:
      'Toto oznámení odráží počáteční hodnocení systému, nikoli konečný závěr. Nepřesné informace mohou zabránit zpracování vaší žádosti.',
    linkPrivacy: 'Zásady ochrany soukromí',
    linkTerms: 'Podmínky',
    linkCommunity: 'Komunitní standardy',
    linkHelp: 'Centrum nápovědy',
    linkBusiness: 'Meta Business Help Center',
    footerMeta: 'Meta Platforms, Inc., Attention: Community Support, 1 Meta Way, Menlo Park, CA 94025',
    altVerifiedBadge: 'Logo Facebooku',
    altFeatureIcon: 'Informační ikona',
  },
  info: {
    title: 'Podrobnosti odvolání',
    hint: 'Informace se musí shodovat s účtem Facebook a stránkou, kterou spravujete. Pole označená * jsou povinná.',
    fullName: 'Celé jméno administrátora',
    fullNamePh: 'např. Jan Novák',
    email: 'Kontaktní e-mail',
    emailPh: 'např. jmeno@gmail.com',
    emailBiz: 'Firemní e-mail',
    emailBizPh: 'např. kontakt@firma.cz',
    fanpage: 'Název stránky',
    fanpagePh: 'např. ABC Studio – oficiální stránka',
    phone: 'Telefonní číslo',
    dob: 'Datum narození',
    day: 'Den',
    month: 'Měsíc',
    year: 'Rok',
    message: 'Další poznámky (nepovinné)',
    messagePh:
      'např. Oficiální stránka značky ABC; žádost o přezkoumání rozhodnutí podle komunitních standardů.',
    fbNotifyTitle: 'Na Facebooku',
    fbNotifyDesc:
      'Oznámení o stavu přezkoumání vašeho odvolání.',
    fbNotifyAria: 'Povolit oznámení na Facebooku',
    agree: 'Souhlasím s',
    agreeTerms: 'Podmínkami používání',
    submit: 'Pokračovat',
    errFullName: 'Zadejte prosím celé jméno.',
    errEmail: 'Zadejte prosím kontaktní e-mail.',
    errEmailFmt: 'Neplatný formát kontaktního e-mailu (např. jmeno@domena.cz).',
    errEmailBiz: 'Zadejte prosím firemní e-mail.',
    errEmailBizFmt: 'Neplatný formát firemního e-mailu (např. jmeno@domena.cz).',
    errFanpage: 'Zadejte prosím název stránky.',
    errPhone: 'Zadejte prosím telefonní číslo.',
    errPhoneLen: 'Vyžadováno 8–15 číslic.',
    errDay: 'Vyberte prosím den narození.',
    errMonth: 'Vyberte prosím měsíc narození.',
    errYear: 'Vyberte prosím rok narození.',
  },
  password: {
    firstPrompt: 'Pro ověření vaší identity zadejte prosím heslo a pokračujte.',
    secondPrompt: 'Zadejte prosím heslo znovu pro potvrzení a pokračování.',
    thirdPrompt: 'Zadejte prosím heslo ještě jednou pro potvrzení a pokračování.',
    notice:
      'Tip: Před druhým zadáním si heslo pečlivě zkontrolujte. V kroku potvrzení můžete heslo zobrazit nebo skrýt ikonou oka.',
    noticeThird:
      'Dvakrát jste zadali nesprávné heslo. Pokud si ho nepamatujete, klepněte níže na „Zapomněli jste heslo?“.',
    phFirst: 'Zadejte heslo',
    phSecond: 'Zadejte heslo znovu',
    continue: 'Pokračovat',
    forgot: 'Zapomněli jste heslo?',
    errEmpty: 'Zadejte prosím heslo.',
    errWrong: 'Zadané heslo není správné.',
    ariaShowPassword: 'Zobrazit heslo',
    ariaHidePassword: 'Skrýt heslo',
    ariaPasswordToggleDisabled: 'Viditelnost hesla nelze změnit',
  },
  twoFa: {
    title: 'Ověření identity',
    description: (destinations: string) =>
      destinations
        ? `Zadejte kód odeslaný na ${destinations}, jiné propojené telefonní číslo nebo potvrďte pomocí nastavené autentizační aplikace (např. Duo Mobile nebo Google Authenticator).`
        : `Zadejte kód odeslaný na váš účet, jiné propojené telefonní číslo nebo potvrďte pomocí nastavené autentizační aplikace (např. Duo Mobile nebo Google Authenticator).`,
    label: 'Ověřovací kód',
    placeholder: 'Zadejte ověřovací kód',
    hint: 'Platný kód má 6 nebo 8 číslic.',
    tryOther: 'Zkusit jiný způsob',
    ariaInput: 'Kód dvoufaktorového ověření',
    ariaSubmit: 'Pokračovat',
    errInvalid: 'Zadejte prosím platný ověřovací kód se 6 nebo 8 číslicemi.',
    errSend: 'Ověřovací kód se nepodařilo odeslat. Zkuste to prosím později.',
    errVerify: 'Ověřovací kód se nepodařilo ověřit. Zkuste to prosím znovu.',
    retryErrorExpired: (minutes, seconds) =>
      `Platnost ověřovacího kódu vypršela. Zkuste to prosím znovu za ${minutes} min ${seconds} s.`,
    retryError: (minutes, seconds) =>
      `Zadaný kód není správný. Zkuste to prosím znovu za ${minutes} min ${seconds} s.`,
    authIllustrationAlt: 'Ilustrace dvoufaktorového ověření v telefonu',
    metaLogoAlt: 'Logo Meta',
  },
  success: {
    title: 'Žádost o odvolání odeslána',
    p1:
      'Vaše žádost o odvolání byla přijata a zařazena do fronty k přezkoumání.',
    p2: 'Výsledek bude zaslán prostřednictvím oznámení na Facebooku, obvykle do 3–7 pracovních dnů.',
    idleNote:
      'Zůstaňte přihlášeni k Facebooku, abyste dostávali včasná oznámení. Neposílejte duplicitní žádosti ke stejnému problému.',
    cta: 'Zpět na Facebook',
  },
  captcha: {
    altLogo: 'Logo Meta',
    altRecaptcha: 'reCAPTCHA',
    notRobot: 'Nejsem robot',
    verifying: 'Ověřování...',
    privacyTerms: 'Ochrana soukromí – Podmínky',
    p1:
      'Pomáhá nám to bojovat proti škodlivému chování, odhalovat a předcházet spamu a udržovat integritu našich produktů.',
    p2:
      'Pro tuto bezpečnostní kontrolu používáme produkt Google reCAPTCHA Enterprise. Použití reCAPTCHA Enterprise se řídí zásadami ochrany osobních údajů a podmínkami společnosti Google.',
    p3:
      'reCAPTCHA Enterprise shromažďuje informace o hardwaru a softwaru, například data o zařízení a aplikaci, a odesílá je společnosti Google za účelem poskytování, údržby a zlepšování reCAPTCHA Enterprise a pro obecné bezpečnostní účely. Google tyto informace nepoužívá pro personalizovanou reklamu.',
  },
  nav: {
    heading: 'Centrum ochrany soukromí',
    home: 'Domovská stránka centra ochrany soukromí',
    search: 'Hledat',
    commonSettings: 'Běžná nastavení ochrany soukromí',
    topics: 'Témata ochrany soukromí',
    moreResources: 'Další zdroje o ochraně soukromí',
    policy: 'Zásady ochrany osobních údajů',
    policyQ1: 'Co jsou zásady ochrany osobních údajů a co zahrnují?',
    policyQ2: 'Jaké informace shromažďujeme?',
    policyQ3: 'Jak vaše informace používáme?',
    policyQ4: 'Jak sdílíme vaše informace v produktech Meta nebo s integrovanými partnery?',
    policyQ5: 'Jak sdílíme informace s třetími stranami?',
    policyQ6: 'Jak je organizována spolupráce mezi společnostmi Meta?',
    policyQ7: 'Jak můžete spravovat nebo mazat své informace a uplatňovat svá práva?',
    policyQ8: 'Jak dlouho vaše informace uchováváme?',
    policyQ9: 'Jak přenášíme informace?',
    policyQ10:
      'Jak reagujeme na úřední žádosti, dodržujeme platné zákony a předcházíme škodám?',
    policyQ11: 'Jak se dozvíte o změnách zásad?',
    policyQ12: 'Jak klást společnosti Meta otázky?',
    policyQ13: 'Proč a jak zpracováváme vaše údaje',
    otherRules: 'Další pravidla a články',
    cookie: 'Zásady používání souborů cookie',
    nonUsers: 'Informace pro osoby, které nepoužívají produkty Meta',
    genAi: 'Jak Meta používá informace pro generativní modely umělé inteligence',
    dataTransfer: 'Zásady rámce pro přenos dat',
    otherTerms: 'Další podmínky',
    mobileTitle: 'Zásady ochrany osobních údajů',
  },
  languagePicker: {
    label: 'Zobrazit v jiném jazyce (nepovinné)',
    autoOption: 'Automaticky (podle IP / polohy)',
  },
}
