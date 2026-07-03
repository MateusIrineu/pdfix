'use client';

import React from 'react';
import Link from 'next/link';

export default function PrivacidadePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-slate-700">
        
        {/* Header */}
        <h1 className="text-4xl font-bold text-violet-600 dark:text-violet-400 mb-2">
          Política de Privacidade
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Última atualização: {new Date().toLocaleDateString('pt-BR')}
        </p>

        {/* Introdução */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            1. Introdução
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            A PDFix tem o respeito à privacidade como um valor fundamental. Nós operamos a plataforma PDFix com total transparência e cuidado no tratamento de seus dados pessoais, em conformidade com as legislações aplicáveis, especialmente a Lei Geral de Proteção de Dados.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Este Aviso de Privacidade ajudará você a entender: (1) quais informações pessoais nós coletamos quando você utiliza nossos serviços, (2) como e para qual finalidade usamos essas informações, (3) com quem compartilhamos seus dados, (4) quais são seus direitos em relação a esses dados, e (5) como você pode exercer esses direitos.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Para facilitar sua compreensão: quando mencionarmos Dados nos referimos aos seus dados pessoais - qualquer informação que identifica ou pode levar à sua identificação. Quando mencionarmos PDFix nos referimos à PDFix e suas operações. Serviços significa a plataforma PDFix para geração de currículos, acesso web e aplicativo.
          </p>
        </section>

        {/* Dados Coletados */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            2. Dados que Coletamos
          </h2>
          
          <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-3">
            2.1 Dados de Autenticação
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
            <li>Identificador único do Firebase (UID)</li>
            <li>Email da sua conta Google</li>
            <li>Nome da sua conta Google</li>
            <li>Foto de perfil da sua conta Google (opcional)</li>
          </ul>

          <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-3">
            2.2 Dados Pessoais do Currículo
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
            <li>Nome completo</li>
            <li>Email pessoal</li>
            <li>Telefone</li>
            <li>Endereço</li>
            <li>Idade</li>
            <li>URL do LinkedIn</li>
          </ul>

          <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-3">
            2.3 Dados Profissionais
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
            <li>Competências e habilidades</li>
            <li>Experiência profissional (cargo, empresa, datas, descrição)</li>
            <li>Formação acadêmica (instituição, curso, datas, nível)</li>
          </ul>

          <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-3">
            2.4 Dados de Pagamento
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
            <li>Status de pagamento Pix</li>
            <li>Data e hora do pagamento</li>
          </ul>

          <p className="text-sm text-gray-600 dark:text-gray-400 italic">
            Nota: Os dados pessoais do currículo (nome, email, telefone, endereço, idade) são armazenados localmente no seu navegador (localStorage) 
            e no nosso servidor para reconstrução do currículo. Nunca são compartilhados com terceiros sem seu consentimento.
          </p>
        </section>

        {/* Como Usamos */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            3. Como Usamos Seus Dados
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li><strong>Para autenticação:</strong> Verificar sua identidade e manter você conectado</li>
            <li><strong>Para gerar seu currículo:</strong> Usar seus dados para criar documentos PDF</li>
            <li><strong>Para gerenciar pagamentos:</strong> Processar seus pagamentos via Pix</li>
            <li><strong>Para melhorar o serviço:</strong> Entender como você utiliza nosso aplicativo</li>
            <li><strong>Para cumprir obrigações legais:</strong> Conformidade com LGPD e outras leis</li>
          </ul>
        </section>

        {/* Base Legal */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            4. Bases Legais para Tratamento de Seus Dados
          </h2>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            A lei estabelece hipóteses específicas que autorizam o tratamento de dados pessoais. A PDFix utiliza as seguintes bases legais:
          </p>

          <div className="space-y-4">
            {/* Consentimento */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">Consentimento</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Quando você expressamente concorda com o tratamento de seus dados para uma finalidade específica. No PDFix, você consente ao fazer login através do Google, ao aceitar os Termos de Uso e ao preencher seu perfil profissional. Você pode revogar esse consentimento a qualquer momento em sua conta.
              </p>
            </div>

            {/* Execução de Contrato */}
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 dark:text-green-200 mb-2">Execução de Contrato</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Quando o tratamento é necessário para cumprir um contrato com você. No PDFix, nós coletamos seus dados profissionais para gerar seu currículo em PDF, processamos pagamentos para seus serviços contratados, e armazenamos suas informações para permitir reconstrução futura de documentos.
              </p>
            </div>

            {/* Obrigação Legal */}
            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
              <h3 className="font-semibold text-purple-900 dark:text-purple-200 mb-2">Obrigação Legal</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Quando o tratamento é necessário para cumprir obrigações impostas por lei. PDFix pode manter registros de dados conforme exigências legais, responder a solicitações de autoridades competentes, ou cumprir obrigações fiscais e regulatórias.
              </p>
            </div>
          </div>
        </section>

        {/* Compartilhamento */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            5. Compartilhamento de Dados
          </h2>
          
          <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-3">
            5.1 Terceiros
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Compartilhamos seus dados apenas com:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
            <li><strong>Google/Firebase:</strong> Para autenticação segura e gerenciamento de identidade</li>
          </ul>

          <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-3">
            5.2 Quando Permitido
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Podemos divulgar informações quando exigido por lei, ordem judicial ou para proteger nossos direitos.
          </p>
        </section>

        {/* Segurança */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            6. Segurança dos Dados
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Autenticação via Firebase com padrões de segurança da indústria</li>
            <li>Conexões HTTPS/SSL para transferência segura de dados</li>
            <li>Acesso restrito aos dados por pessoal autorizado</li>
            <li>Encriptação de senhas e dados sensíveis</li>
          </ul>
        </section>

        {/* Retenção e Exclusão de Dados */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            7. Retenção e Exclusão de Dados
          </h2>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Seus dados são mantidos enquanto sua conta está ativa e o Serviço está sendo prestado. Você pode a qualquer momento:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
            <li>Deletar dados específicos de seu currículo (competências, experiências, formação)</li>
            <li>Solicitar acesso a todos os seus dados</li>
            <li>Solicitar a exclusão completa de sua conta e todos os dados associados</li>
            <li>Exportar seus dados em formato estruturado</li>
          </ul>

          <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4 mb-4">
            <h3 className="font-semibold text-orange-900 dark:text-orange-200 mb-2">Direito à Exclusão (Art. 17º - Direito ao Esquecimento)</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
              Você tem o direito de solicitar a exclusão de seus dados pessoais nos seguintes casos:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
              <li>Os dados não forem mais necessários para a finalidade de coleta</li>
              <li>Você retirar seu consentimento</li>
              <li>Você se opuser ao tratamento de seus dados</li>
              <li>Os dados forem tratados ilicitamente</li>
              <li>Cumprimento de obrigação legal ou regulatória</li>
            </ul>
          </div>

          <p className="text-gray-700 dark:text-gray-300 text-sm">
            <strong>Prazo de Exclusão:</strong> Após sua solicitação de exclusão, os dados serão permanentemente removidos de nossos servidores em até 30 dias, exceto quando houver obrigação legal de manutenção ou processos judiciais em andamento.
          </p>
        </section>

        {/* Seus Direitos */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            8. Seus Direitos como Titular de Dados
          </h2>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            A PDFix se compromete a garantir que você possa exercer seus direitos de forma plena. Você possui os seguintes direitos:
          </p>

          <div className="space-y-3">
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">Direito de Acesso</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Você pode solicitar uma cópia de todos os seus dados pessoais armazenados por nós, incluindo informações sobre como e por que estamos tratando seus dados.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 dark:text-green-200 mb-2">Direito de Retificação</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Você pode corrigir dados pessoais que sejam imprecisos, incompletos ou desatualizados. Você pode fazer isso diretamente em sua conta PDFix.
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <h3 className="font-semibold text-red-900 dark:text-red-200 mb-2">Direito à Exclusão</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Você pode solicitar a exclusão permanente de seus dados pessoais conforme as condições específicas previstas em lei.
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
              <h3 className="font-semibold text-purple-900 dark:text-purple-200 mb-2">Direito de Portabilidade</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Você pode receber seus dados em formato estruturado e portável (como JSON ou CSV) para transferir para outro serviço.
              </p>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
              <h3 className="font-semibold text-orange-900 dark:text-orange-200 mb-2">Direito de Oposição</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Você pode se opor ao tratamento de seus dados para fins específicos, observadas as exceções legais.
              </p>
            </div>
          </div>
        </section>

        {/* Segurança */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            9. Segurança de Seus Dados
          </h2>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            A PDFix implementa medidas técnicas e organizacionais robustas para proteger seus dados pessoais contra:
          </p>
          
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
            <li>Acesso não autorizado</li>
            <li>Alteração, perda ou destruição</li>
            <li>Divulgação não autorizada</li>
            <li>Ataques cibernéticos</li>
          </ul>

          <div className="space-y-3">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 dark:text-green-200 mb-2">Medidas Técnicas</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
                <li>Criptografia end-to-end (TLS/SSL) para transmissão de dados</li>
                <li>Criptografia de dados em repouso</li>
                <li>Firewalls e sistemas de detecção de intrusão</li>
                <li>Backups automatizados com replicação geograficamente distribuída</li>
              </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">Medidas Organizacionais</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
                <li>Controle de acesso baseado em papéis (RBAC)</li>
                <li>Autenticação multi-fator para acesso administrativo</li>
                <li>Auditorias periódicas de segurança</li>
                <li>Treinamento regular de equipe sobre proteção de dados</li>
                <li>Plano de resposta a incidentes e notificação de breaches</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-700 dark:text-gray-300 text-sm mt-4">
            <strong>Nota importante:</strong> Embora implementemos rigorosas medidas de segurança, nenhum sistema é 100% seguro. Você é responsável por manter sua senha protegida e não compartilhá-la com terceiros.
          </p>
        </section>

        {/* Compartilhamento de Dados */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            10. Compartilhamento de Dados
          </h2>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            A PDFix <strong>não vende ou aluga</strong> seus dados pessoais para terceiros. No entanto, podemos compartilhar seus dados nos seguintes casos:
          </p>

          <div className="space-y-3">
            <div className="bg-slate-50 dark:bg-slate-900/20 border border-slate-200 dark:border-slate-800 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 dark:text-slate-200 mb-2">1. Prestadores de Serviços</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Compartilhamos dados com fornecedores que nos prestam serviços essenciais (armazenamento em nuvem, processamento de pagamentos, análise de segurança) sob contratos rigorosos de proteção de dados.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/20 border border-slate-200 dark:border-slate-800 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 dark:text-slate-200 mb-2">2. Obrigações Legais</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Podemos divulgar seus dados quando obrigados por lei, decisão judicial, ou requerimento de autoridades públicas competentes.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/20 border border-slate-200 dark:border-slate-800 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 dark:text-slate-200 mb-2">3. Proteção de Direitos</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Podemos compartilhar dados para proteger nossos direitos, privacidade, segurança ou propriedade, e a dos nossos usuários.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/20 border border-slate-200 dark:border-slate-800 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 dark:text-slate-200 mb-2">4. Sua Autorização Explícita</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Quando você explicitamente consente em compartilhar seus dados com terceiros (por exemplo, ao divulgar seu currículo para recrutadores).
              </p>
            </div>
          </div>

          <p className="text-gray-700 dark:text-gray-300 text-sm mt-4">
            <strong>Transferências Internacionais:</strong> Se seus dados forem transferidos para fora do Brasil, garantimos proteção equivalente através de cláusulas contratuais-padrão ou outras garantias legalmente reconhecidas.
          </p>
        </section>

        {/* Cookies e Tecnologias Similares */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            11. Cookies e Tecnologias Similares
          </h2>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            A PDFix utiliza cookies e tecnologias similares para melhorar sua experiência:
          </p>

          <div className="space-y-3 mb-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">Cookies Essenciais</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Necessários para o funcionamento básico do site, como autenticação e preferências de sessão.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 dark:text-green-200 mb-2">Cookies de Desempenho</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Coletam informações sobre como você usa o site para melhorar sua experiência e desempenho.
              </p>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
              <h3 className="font-semibold text-orange-900 dark:text-orange-200 mb-2">Cookies de Análise</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Ajudam-nos a entender como visitantes interagem com o site para otimizar funcionalidades.
              </p>
            </div>
          </div>

          <p className="text-gray-700 dark:text-gray-300 text-sm">
            <strong>Seus Controles:</strong> Você pode controlar cookies através das configurações do seu navegador. A maioria dos navegadores permite rejeitar cookies ou alertá-lo quando um cookie é enviado. Observe que desabilitar certos cookies pode impedir o funcionamento correto do site.
          </p>
        </section>

        {/* Alterações */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            12. Alterações a Esta Política
          </h2>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            A PDFix pode atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas, tecnologia, requisitos legais ou outras circunstâncias. Quando realizarmos alterações materiais, notificaremos você:
          </p>

          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
            <li>Atualizando a data de última atualização no topo desta página</li>
            <li>Enviando notificação por email para o endereço associado à sua conta</li>
            <li>Exibindo um aviso na plataforma PDFix</li>
          </ul>

          <p className="text-gray-700 dark:text-gray-300">
            Seu uso continuado da plataforma após alterações significa que você aceita a Política revisada. Recomendamos que você revise esta Política periodicamente para se manter informado sobre como protegemos seus dados.
          </p>
        </section>

        {/* Contato */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            13. Contato e Exercício de Direitos
          </h2>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Se você tiver dúvidas sobre esta Política de Privacidade ou deseja exercer qualquer um de seus direitos previstos na LGPD, entre em contato conosco:
          </p>

          <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-6">
            <h3 className="font-semibold text-indigo-900 dark:text-indigo-200 mb-3">Dados para Contato</h3>
            <div className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              <p><strong>Email:</strong> pdfix.suporte@gmail.com</p>
              <p><strong>Responsável pela Proteção de Dados:</strong> PDFix DPO (Data Protection Officer)</p>
              <p><strong>Endereço:</strong> PDFix Serviços Digitais Ltda.</p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
                Garantimos resposta a todas as solicitações de direitos LGPD em até 15 dias úteis, conforme exigido por lei.
              </p>
            </div>
          </div>

          <p className="text-gray-700 dark:text-gray-300 text-sm mt-4">
            <strong>Você também pode:</strong>
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1 mt-2">
            <li>Acessar <Link href="/dados-usuario" className="text-blue-600 dark:text-blue-400 hover:underline">sua página de dados pessoais</Link> para gerenciar suas informações</li>
            <li>Registrar uma reclamação junto à <strong>Autoridade Nacional de Proteção de Dados (ANPD)</strong> em <a href="https://www.gov.br/cidadania/pt-br/acesso-a-informacao/lgpd" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">www.gov.br/cidadania</a></li>
          </ul>
        </section>

        {/* Footer */}
        <div className="border-t border-gray-200 dark:border-slate-700 pt-8 mt-8">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')} | Versão 2.0 - LGPD Compliant
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Esta Política de Privacidade está alinhada com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) e regulações internacionais de proteção de dados.
          </p>
          <Link 
            href="/" 
            className="inline-block bg-violet-600 text-white px-6 py-2 rounded-lg hover:bg-violet-700 transition-colors"
          >
            Voltar ao Início
          </Link>
        </div>
      </div>
    </main>
  );
}
