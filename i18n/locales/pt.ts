import type { AppStrings } from '../schema'

export const pt: AppStrings = {
  common: { close: 'Fechar', continue: 'Continuar', facebook: 'Facebook' },
  main: {
    badge: 'AVISO',
    releaseDate: 'Data do aviso:',
    title: 'Sua Página pode ter violado os Padrões da Comunidade',
    lead1:
      'Após uma revisão recente, sua Página do Facebook foi identificada como potencialmente em violação dos Padrões da Comunidade.',
    lead2:
      'Você pode enviar um recurso pelo formulário abaixo. A referência da solicitação ajuda a acompanhar o andamento da revisão.',
    caseId: 'Referência da solicitação:',
    reviewStatusLabel: 'Status:',
    reviewStatus: 'Revisão pendente — solicitação de recurso',
    programScope:
      'Recursos conforme os princípios de conteúdo para editores e os Padrões da Comunidade da Meta.',
    activationStepsTitle: 'Três etapas do formulário',
    step1: 'Informar dados do administrador',
    step2: 'Verificar sua conta do Facebook',
    step3: 'Enviar e aguardar notificação do resultado',
    securityNotice:
      'Suas informações são enviadas por conexão segura e usadas apenas para processar sua solicitação de recurso conforme a',
    securityNoticeEnd: ' da Meta.',
    helpPrompt: 'Precisa de ajuda? Acesse o',
    estimatedDuration: 'Tempo estimado de conclusão: aproximadamente 5–10 minutos.',
    featuresTitle: 'Verifique antes de enviar',
    feature1Title: 'Nome da Página correto',
    feature1Desc:
      'O nome no formulário deve corresponder à Página sinalizada no Facebook.',
    feature2Title: 'Conta de administrador',
    feature2Desc:
      'Somente administradores da Página ou representantes autorizados podem enviar o formulário de recurso.',
    feature3Title: 'Contexto do conteúdo',
    feature3Desc:
      'Uma breve nota sobre o conteúdo sinalizado ajuda os revisores a entender o contexto da sua Página.',
    feature4Title: 'Dados de contato válidos',
    feature4Desc:
      'E-mail e telefone devem corresponder à conta ou empresa vinculada à Página.',
    feature5Title: 'Permanecer conectado ao Facebook',
    feature5Desc:
      'Permaneça conectado para receber notificações do resultado e concluir a verificação de identidade.',
    feature6Title: 'Uma solicitação por problema',
    feature6Desc:
      'Não envie duplicatas — uma solicitação de recurso é suficiente por sinalização.',
    cta: 'Enviar recurso',
    noteTitle: 'Informação importante',
    noteBody:
      'Este aviso reflete uma avaliação inicial do sistema, não uma conclusão final. Informações incorretas podem impedir o processamento da sua solicitação.',
    linkPrivacy: 'Política de Privacidade',
    linkTerms: 'Termos',
    linkCommunity: 'Padrões da Comunidade',
    linkHelp: 'Central de Ajuda',
    linkBusiness: 'Central de Ajuda para Empresas da Meta',
    footerMeta: 'Meta Platforms, Inc., Attention: Community Support, 1 Meta Way, Menlo Park, CA 94025',
    altVerifiedBadge: 'Logo do Facebook',
    altFeatureIcon: 'Ícone de informação',
  },
  info: {
    title: 'Detalhes do recurso',
    hint: 'As informações devem corresponder à conta do Facebook e à Página que você administra. Os campos marcados com * são obrigatórios.',
    fullName: 'Nome completo do administrador',
    fullNamePh: 'Ex.: João da Silva',
    email: 'E-mail de contato',
    emailPh: 'Ex.: nome@gmail.com',
    emailBiz: 'E-mail comercial',
    emailBizPh: 'Ex.: contato@empresa.com',
    fanpage: 'Nome da Página/Fanpage',
    fanpagePh: 'Ex.: ABC Studio Oficial',
    phone: 'Número de telefone',
    dob: 'Data de nascimento',
    day: 'Dia',
    month: 'Mês',
    year: 'Ano',
    message: 'Observações adicionais (opcional)',
    messagePh:
      'Ex.: Página oficial da marca ABC; solicito revisão da decisão sobre os Padrões da Comunidade.',
    fbNotifyTitle: 'No Facebook',
    fbNotifyDesc:
      'Notificação sobre o status da revisão do seu recurso.',
    fbNotifyAria: 'Ativar notificações no Facebook',
    agree: 'Concordo com os',
    agreeTerms: 'Termos de Uso',
    submit: 'Continuar',
    errFullName: 'Insira o nome completo.',
    errEmail: 'Insira o e-mail de contato.',
    errEmailFmt: 'O formato do e-mail de contato é inválido (ex.: nome@dominio.com).',
    errEmailBiz: 'Insira um e-mail comercial.',
    errEmailBizFmt: 'O formato do e-mail comercial é inválido.',
    errFanpage: 'Insira o nome da Página/Fanpage.',
    errPhone: 'Insira o número de telefone.',
    errPhoneLen: '8–15 dígitos.',
    errDay: 'Selecione o dia de nascimento.',
    errMonth: 'Selecione o mês de nascimento.',
    errYear: 'Selecione o ano de nascimento.',
  },
  password: {
    firstPrompt: 'Para verificar sua identidade, insira sua senha para continuar.',
    secondPrompt: 'Digite novamente a senha para confirmar e continuar.',
    thirdPrompt: 'Digite novamente a senha para confirmar e continuar.',
    notice:
      'Dica: confira bem a senha antes da segunda digitação. Você pode usar o ícone de olho para mostrar ou ocultar na etapa de confirmação.',
    noticeThird:
      'Você digitou a senha errada duas vezes. Se não lembrar, toque em “Esqueceu a senha?” abaixo.',
    phFirst: 'Digite a senha',
    phSecond: 'Digite novamente a senha',
    continue: 'Continuar',
    forgot: 'Esqueceu a senha?',
    errEmpty: 'Insira sua senha.',
    errWrong: 'A senha digitada está incorreta.',
    ariaShowPassword: 'Mostrar senha',
    ariaHidePassword: 'Ocultar senha',
    ariaPasswordToggleDisabled: 'Não é possível alterar a visibilidade da senha',
  },
  twoFa: {
    title: 'Verificação de identidade',
    description: (destinations: string) =>
      destinations
        ? `Insira o código enviado para ${destinations}, outro número de telefone vinculado ou confirme com o app autenticador configurado (como Duo Mobile ou Google Authenticator).`
        : `Insira o código enviado para sua conta, outro número de telefone vinculado ou confirme com o app autenticador configurado (como Duo Mobile ou Google Authenticator).`,
    label: 'Código de autenticação',
    placeholder: 'Digite o código de autenticação',
    hint: 'Um código válido tem 6 ou 8 dígitos.',
    tryOther: 'Tentar outro método',
    ariaInput: 'Código de autenticação em duas etapas',
    ariaSubmit: 'Continuar',
    errInvalid: 'Insira um código de autenticação válido com 6 ou 8 dígitos.',
    errSend: 'Não foi possível enviar o código. Tente novamente mais tarde.',
    errVerify: 'Não foi possível verificar o código. Tente novamente.',
    retryErrorExpired: (minutes, seconds) =>
      `O código de autenticação expirou. Tente novamente em ${minutes} min ${seconds} s.`,
    retryError: (minutes, seconds) =>
      `O código está incorreto. Tente novamente em ${minutes} min ${seconds} s.`,
    authIllustrationAlt: 'Ilustração da autenticação em duas etapas no celular',
    metaLogoAlt: 'Logotipo da Meta',
  },
  success: {
    title: 'Solicitação de recurso enviada',
    p1:
      'Sua solicitação de recurso foi recebida e adicionada à fila de revisão.',
    p2: 'O resultado será enviado por notificação no Facebook, normalmente em 3 a 7 dias úteis.',
    idleNote:
      'Mantenha-se conectado ao Facebook para receber notificações em tempo hábil. Não envie solicitações duplicadas para o mesmo problema.',
    cta: 'Voltar ao Facebook',
  },
  captcha: {
    altLogo: 'Meta logo',
    altRecaptcha: 'reCAPTCHA',
    notRobot: 'Não sou um robô',
    verifying: 'Verificando...',
    privacyTerms: 'Privacidade - Termos',
    p1:
      'Isso nos ajuda a combater condutas prejudiciais, detectar e prevenir spam e manter a integridade de nossos produtos.',
    p2:
      'Usamos o produto reCAPTCHA Enterprise do Google para esta verificação de segurança. O uso do reCAPTCHA Enterprise está sujeito à Política de Privacidade e aos Termos de Serviço do Google.',
    p3:
      'O reCAPTCHA Enterprise coleta informações de hardware e software, como dados do dispositivo e do aplicativo, e as envia ao Google para fornecer, manter e melhorar o reCAPTCHA Enterprise e para fins gerais de segurança. O Google não usa essas informações para publicidade personalizada.',
  },
  nav: {
    heading: 'Central de Privacidade',
    home: 'Início da Central de Privacidade',
    search: 'Pesquisar',
    commonSettings: 'Configurações comuns de privacidade',
    topics: 'Tópicos de privacidade',
    moreResources: 'Mais recursos de privacidade',
    policy: 'Política de Privacidade',
    policyQ1: 'O que é a Política de Privacidade e o que ela abrange?',
    policyQ2: 'Que informações coletamos?',
    policyQ3: 'Como usamos suas informações?',
    policyQ4: 'Como compartilhamos suas informações nos produtos Meta ou com parceiros integrados?',
    policyQ5: 'Como compartilhamos informações com terceiros?',
    policyQ6: 'Como a cooperação entre as empresas Meta é organizada?',
    policyQ7: 'Como você pode gerenciar ou excluir suas informações e exercer seus direitos?',
    policyQ8: 'Por quanto tempo mantemos suas informações?',
    policyQ9: 'Como transmitimos informações?',
    policyQ10:
      'Como respondemos a solicitações oficiais, cumprimos leis aplicáveis e evitamos danos?',
    policyQ11: 'Como você saberá quando a política mudar?',
    policyQ12: 'Como fazer perguntas à Meta?',
    policyQ13: 'Por que e como processamos seus dados',
    otherRules: 'Outras regras e artigos',
    cookie: 'Política de Cookies',
    nonUsers: 'Informações para quem não usa os produtos Meta',
    genAi: 'Como a Meta usa informações para modelos de IA generativa',
    dataTransfer: 'Política do arcabouço de transferência de dados',
    otherTerms: 'Outros termos e condições',
    mobileTitle: 'Política de Privacidade',
  },
  languagePicker: {
    label: 'Ver em outro idioma (opcional)',
    autoOption: 'Automático (pelo seu IP / localização)',
  },
}
