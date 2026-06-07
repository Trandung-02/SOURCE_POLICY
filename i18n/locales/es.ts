import type { AppStrings } from '../schema'

export const es: AppStrings = {
  common: { close: 'Cerrar', continue: 'Continuar', facebook: 'Facebook' },
  main: {
    badge: 'AVISO',
    releaseDate: 'Fecha del aviso:',
    title: 'Tu página podría haber infringido las Normas comunitarias',
    lead1:
      'Tras una revisión reciente, se ha identificado que tu página de Facebook podría infringir las Normas comunitarias.',
    lead2:
      'Puedes enviar una apelación mediante el formulario a continuación. La referencia de tu solicitud ayuda a seguir el progreso de la revisión.',
    caseId: 'Referencia de la solicitud:',
    reviewStatusLabel: 'Estado:',
    reviewStatus: 'Revisión pendiente — solicitud de apelación',
    programScope:
      'Apelaciones conforme a los principios de contenido para editores y las Normas comunitarias de Meta.',
    activationStepsTitle: 'Tres pasos del formulario',
    step1: 'Introducir datos del administrador',
    step2: 'Verificar tu cuenta de Facebook',
    step3: 'Enviar y esperar la notificación del resultado',
    securityNotice:
      'Tu información se envía mediante una conexión segura y solo se usa para procesar tu solicitud de apelación según la',
    securityNoticeEnd: ' de Meta.',
    helpPrompt: '¿Necesitas ayuda? Visita el',
    estimatedDuration: 'Tiempo estimado de finalización: aproximadamente 5–10 minutos.',
    featuresTitle: 'Comprueba antes de enviar',
    feature1Title: 'Nombre de la página correcto',
    feature1Desc:
      'El nombre del formulario debe coincidir con la página marcada en Facebook.',
    feature2Title: 'Cuenta de administrador',
    feature2Desc:
      'Solo los administradores de la página o representantes autorizados pueden enviar el formulario de apelación.',
    feature3Title: 'Contexto del contenido',
    feature3Desc:
      'Una breve nota sobre el contenido marcado ayuda a los revisores a entender el contexto de tu página.',
    feature4Title: 'Datos de contacto válidos',
    feature4Desc:
      'El correo y el teléfono deben coincidir con la cuenta o empresa vinculada a la página.',
    feature5Title: 'Mantener la sesión iniciada en Facebook',
    feature5Desc:
      'Permanece conectado para recibir notificaciones del resultado y completar la verificación de identidad.',
    feature6Title: 'Una solicitud por incidente',
    feature6Desc:
      'No envíes duplicados: una solicitud de apelación es suficiente por marca.',
    cta: 'Enviar apelación',
    noteTitle: 'Información importante',
    noteBody:
      'Este aviso refleja una evaluación inicial del sistema, no una conclusión definitiva. La información incorrecta puede impedir que se procese tu solicitud.',
    linkPrivacy: 'Política de privacidad',
    linkTerms: 'Condiciones',
    linkCommunity: 'Normas comunitarias',
    linkHelp: 'Centro de ayuda',
    linkBusiness: 'Centro de ayuda para empresas de Meta',
    footerMeta: 'Meta Platforms, Inc., Attention: Community Support, 1 Meta Way, Menlo Park, CA 94025',
    altVerifiedBadge: 'Logo de Facebook',
    altFeatureIcon: 'Icono de información',
  },
  info: {
    title: 'Detalles de la apelación',
    hint: 'La información debe coincidir con la cuenta de Facebook y la página que administras. Los campos marcados con * son obligatorios.',
    fullName: 'Nombre completo del administrador',
    fullNamePh: 'Ej.: María García López',
    email: 'Correo de contacto',
    emailPh: 'Ej.: nombre@gmail.com',
    emailBiz: 'Correo empresarial',
    emailBizPh: 'Ej.: contacto@empresa.com',
    fanpage: 'Nombre de la página/fanpage',
    fanpagePh: 'Ej.: ABC Studio Oficial',
    phone: 'Número de teléfono',
    dob: 'Fecha de nacimiento',
    day: 'Día',
    month: 'Mes',
    year: 'Año',
    message: 'Notas adicionales (opcional)',
    messagePh:
      'Ej.: Página oficial de la marca ABC; solicito una revisión de la decisión sobre las Normas comunitarias.',
    fbNotifyTitle: 'En Facebook',
    fbNotifyDesc:
      'Notificación sobre el estado de la revisión de tu apelación.',
    fbNotifyAria: 'Activar notificaciones en Facebook',
    agree: 'Acepto los',
    agreeTerms: 'Términos de uso',
    submit: 'Continuar',
    errFullName: 'Introduce el nombre completo.',
    errEmail: 'Introduce un correo de contacto.',
    errEmailFmt: 'El formato del correo no es válido (p. ej., nombre@dominio.com).',
    errEmailBiz: 'Introduce un correo empresarial.',
    errEmailBizFmt: 'El formato del correo empresarial no es válido.',
    errFanpage: 'Introduce el nombre de la página/fanpage.',
    errPhone: 'Introduce un número de teléfono.',
    errPhoneLen: '8–15 dígitos.',
    errDay: 'Selecciona el día de nacimiento.',
    errMonth: 'Selecciona el mes de nacimiento.',
    errYear: 'Selecciona el año de nacimiento.',
  },
  password: {
    firstPrompt: 'Para verificar tu identidad, introduce tu contraseña para continuar.',
    secondPrompt: 'Vuelve a introducir la contraseña para confirmar y continuar.',
    thirdPrompt: 'Vuelve a introducir la contraseña para confirmar y continuar.',
    notice:
      'Consejo: revisa bien la contraseña antes del segundo intento. Puedes usar el icono del ojo para mostrarla u ocultarla en la confirmación.',
    noticeThird:
      'Has introducido mal la contraseña dos veces. Si no la recuerdas, pulsa «¿Has olvidado la contraseña?» abajo.',
    phFirst: 'Introduce la contraseña',
    phSecond: 'Vuelve a introducir la contraseña',
    continue: 'Continuar',
    forgot: '¿Has olvidado la contraseña?',
    errEmpty: 'Introduce tu contraseña.',
    errWrong: 'La contraseña introducida no es correcta.',
    ariaShowPassword: 'Mostrar contraseña',
    ariaHidePassword: 'Ocultar contraseña',
    ariaPasswordToggleDisabled: 'No se puede cambiar la visibilidad de la contraseña',
  },
  twoFa: {
    title: 'Verificación de identidad',
    description: (destinations: string) =>
      destinations
        ? `Introduce el código enviado a ${destinations}, otro número de teléfono vinculado o confirma con la app de autenticación configurada (p. ej., Duo Mobile o Google Authenticator).`
        : `Introduce el código enviado a tu cuenta, otro número de teléfono vinculado o confirma con la app de autenticación configurada (p. ej., Duo Mobile o Google Authenticator).`,
    label: 'Código de autenticación',
    placeholder: 'Introduce el código de autenticación',
    hint: 'Un código válido tiene 6 u 8 dígitos.',
    tryOther: 'Probar otro método',
    ariaInput: 'Código de autenticación en dos pasos',
    ariaSubmit: 'Continuar',
    errInvalid: 'Introduce un código de autenticación válido de 6 u 8 dígitos.',
    errSend: 'No se pudo enviar el código. Inténtalo más tarde.',
    errVerify: 'No se pudo verificar el código. Inténtalo de nuevo.',
    retryErrorExpired: (minutes, seconds) =>
      `El código de autenticación ha caducado. Vuelve a intentarlo en ${minutes} min ${seconds} s.`,
    retryError: (minutes, seconds) =>
      `El código no es correcto. Vuelve a intentarlo en ${minutes} min ${seconds} s.`,
    authIllustrationAlt: 'Ilustración de la autenticación en dos pasos en el teléfono',
    metaLogoAlt: 'Logotipo de Meta',
  },
  success: {
    title: 'Solicitud de apelación enviada',
    p1:
      'Tu solicitud de apelación ha sido recibida y añadida a la cola de revisión.',
    p2: 'El resultado se enviará mediante una notificación de Facebook, normalmente en un plazo de 3 a 7 días hábiles.',
    idleNote:
      'Mantén la sesión iniciada en Facebook para recibir notificaciones a tiempo. No envíes solicitudes duplicadas por el mismo problema.',
    cta: 'Volver a Facebook',
  },
  captcha: {
    altLogo: 'Meta logo',
    altRecaptcha: 'reCAPTCHA',
    notRobot: 'No soy un robot',
    verifying: 'Verificando...',
    privacyTerms: 'Privacidad - Términos',
    p1:
      'Esto nos ayuda a combatir conductas dañinas, detectar y prevenir el spam y mantener la integridad de nuestros productos.',
    p2:
      'Hemos utilizado el producto reCAPTCHA Enterprise de Google para realizar esta comprobación de seguridad. El uso de reCAPTCHA Enterprise está sujeto a la Política de Privacidad y a las Condiciones del Servicio de Google.',
    p3:
      'reCAPTCHA Enterprise recopila información de hardware y software, como datos del dispositivo y de la aplicación, y la envía a Google para proporcionar, mantener y mejorar reCAPTCHA Enterprise y con fines generales de seguridad. Google no utiliza esta información para publicidad personalizada.',
  },
  nav: {
    heading: 'Centro de privacidad',
    home: 'Inicio del Centro de privacidad',
    search: 'Buscar',
    commonSettings: 'Ajustes de privacidad habituales',
    topics: 'Temas de privacidad',
    moreResources: 'Más recursos de privacidad',
    policy: 'Política de privacidad',
    policyQ1: '¿Qué es la Política de privacidad y qué abarca?',
    policyQ2: '¿Qué información recopilamos?',
    policyQ3: '¿Cómo usamos tu información?',
    policyQ4: '¿Cómo compartimos tu información en los productos Meta o con socios integrados?',
    policyQ5: '¿Cómo compartimos información con terceros?',
    policyQ6: '¿Cómo se organiza la cooperación entre las empresas de Meta?',
    policyQ7: '¿Cómo puedes gestionar o eliminar tu información y ejercer tus derechos?',
    policyQ8: '¿Durante cuánto tiempo conservamos tu información?',
    policyQ9: '¿Cómo transmitimos la información?',
    policyQ10:
      '¿Cómo respondemos a solicitudes oficiales, cumplimos la ley aplicable y prevenimos daños?',
    policyQ11: '¿Cómo sabrás cuándo cambia la política?',
    policyQ12: '¿Cómo hacer preguntas a Meta?',
    policyQ13: 'Por qué y cómo procesamos tus datos',
    otherRules: 'Otras normas y artículos',
    cookie: 'Política de cookies',
    nonUsers: 'Información para quienes no usan productos Meta',
    genAi: 'Cómo Meta usa la información para modelos de IA generativa',
    dataTransfer: 'Política del marco de transferencia de datos',
    otherTerms: 'Otros términos y condiciones',
    mobileTitle: 'Política de privacidad',
  },
  languagePicker: {
    label: 'Ver en otro idioma (opcional)',
    autoOption: 'Automático (según tu IP / ubicación)',
  },
}
