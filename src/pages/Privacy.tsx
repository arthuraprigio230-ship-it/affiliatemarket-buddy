import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
            Política de Privacidade — <span className="text-primary">Mastery</span>
          </h1>

          <p className="text-muted-foreground leading-relaxed mt-6">
            Esta <strong className="text-foreground">Política de Privacidade</strong> descreve como os dados pessoais dos usuários ("<strong className="text-foreground">Usuário</strong>" ou "<strong className="text-foreground">Afiliado</strong>") são coletados, utilizados, armazenados, compartilhados e protegidos ao utilizar a plataforma de afiliados <strong className="text-foreground">Mastery</strong> ("<strong className="text-foreground">Mastery</strong>").
          </p>

          <p className="text-muted-foreground leading-relaxed mt-3">
            Ao acessar ou utilizar a <strong className="text-foreground">Mastery</strong>, o Usuário declara que leu, compreendeu e <strong className="text-foreground">concorda integralmente</strong> com esta Política.
          </p>

          <Section title="1. Controlador e Responsabilidade">
            <p>A <strong>Mastery</strong> atua como <strong>Controladora de Dados</strong> nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD) e, quando aplicável, em conformidade com o Regulamento Geral de Proteção de Dados (GDPR).</p>
            <p>Em determinadas operações, especialmente aquelas que envolvem operadoras de iGaming, a <strong>Mastery</strong> poderá atuar como <strong>Operadora</strong> ou <strong>Co-controladora</strong>, conforme a natureza do fluxo de dados.</p>
            <p>Para exercer direitos relacionados à proteção de dados, o Usuário poderá entrar em contato pelos canais oficiais da <strong>Mastery</strong>.</p>
          </Section>

          <Section title="2. Princípios e Bases Legais do Tratamento">
            <p>O tratamento de dados pessoais realizado pela <strong>Mastery</strong> observa os princípios da <strong>legalidade, finalidade, adequação, necessidade, transparência, segurança e prevenção</strong>.</p>
            <p>As bases legais aplicáveis incluem:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li><strong>Execução de contrato</strong> ou procedimentos preliminares</li>
              <li><strong>Cumprimento de obrigação legal ou regulatória</strong></li>
              <li><strong>Legítimo interesse</strong>, inclusive para prevenção a fraudes</li>
              <li><strong>Consentimento</strong>, quando necessário</li>
            </ul>
          </Section>

          <Section title="3. Dados Coletados">
            <p>A <strong>Mastery</strong> poderá coletar os seguintes dados:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Dados cadastrais (nome, e-mail, usuário, país)</li>
              <li>Dados de autenticação e acesso (IP, data, hora, dispositivo, navegador)</li>
              <li>Dados de desempenho (cliques, registros, conversões, comissões)</li>
              <li>Dados de comunicação (mensagens, solicitações e interações)</li>
              <li>Dados técnicos para prevenção a fraudes e análise comportamental</li>
            </ul>
            <p>A <strong>Mastery</strong> <strong>não coleta intencionalmente dados de menores de idade</strong>.</p>
            <p>A <strong>Mastery</strong> não armazena diretamente dados financeiros sensíveis, sendo eventuais pagamentos processados por provedores terceiros especializados.</p>
          </Section>

          <Section title="4. Finalidade do Tratamento">
            <p>Os dados pessoais são tratados pela <strong>Mastery</strong> para:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Operar, manter e aprimorar a plataforma</li>
              <li>Gerenciar contas e comissões de afiliados</li>
              <li>Apurar métricas e desempenho</li>
              <li>Prevenir fraudes, abusos e irregularidades</li>
              <li>Cumprir obrigações legais, fiscais e regulatórias</li>
              <li>Garantir segurança da informação</li>
            </ul>
            <p>Os dados <strong>não são vendidos</strong> e não são utilizados para finalidades incompatíveis com as descritas nesta Política.</p>
          </Section>

          <Section title="5. Compartilhamento de Dados">
            <p>A <strong>Mastery</strong> poderá compartilhar dados quando necessário com:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Provedores tecnológicos e serviços de hospedagem</li>
              <li>Operadoras e parceiros de iGaming, conforme relação contratual</li>
              <li>Prestadores de serviços antifraude e compliance</li>
              <li>Autoridades públicas, mediante obrigação legal</li>
            </ul>
            <p>Todo compartilhamento ocorre sob <strong>obrigações contratuais de confidencialidade e segurança</strong>.</p>
            <p>A <strong>Mastery</strong> não se responsabiliza por falhas de segurança decorrentes de terceiros devidamente contratados, quando estes atuarem fora de sua esfera de controle.</p>
          </Section>

          <Section title="6. Armazenamento e Segurança">
            <p>A <strong>Mastery</strong> adota medidas técnicas e organizacionais adequadas, incluindo:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Controle de acesso restrito</li>
              <li>Monitoramento de logs</li>
              <li>Criptografia quando aplicável</li>
              <li>Proteção contra acesso não autorizado</li>
            </ul>
            <p>Apesar das medidas adotadas, nenhum sistema é absolutamente seguro, e o Usuário reconhece os riscos inerentes ao ambiente digital.</p>
          </Section>

          <Section title="7. Retenção de Dados">
            <p>Os dados serão armazenados pela <strong>Mastery</strong> pelo período necessário ao cumprimento das finalidades descritas ou conforme exigência legal, regulatória ou contratual.</p>
            <p>Dados poderão ser mantidos para defesa em processos administrativos ou judiciais, respeitados os prazos legais aplicáveis.</p>
          </Section>

          <Section title="8. Direitos do Titular">
            <p>Nos termos da LGPD e GDPR, o Usuário poderá exercer:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Confirmação da existência de tratamento</li>
              <li>Acesso aos dados pessoais</li>
              <li>Correção de dados incompletos ou desatualizados</li>
              <li>Anonimização, bloqueio ou eliminação, quando aplicável</li>
              <li>Revogação de consentimento</li>
            </ul>
            <p>As solicitações serão analisadas pela <strong>Mastery</strong> conforme a legislação aplicável, podendo exigir verificação de identidade.</p>
          </Section>

          <Section title="9. Cookies e Tecnologias de Rastreamento">
            <p>A <strong>Mastery</strong> utiliza cookies e tecnologias semelhantes para:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Garantir funcionamento técnico da plataforma</li>
              <li>Melhorar a experiência do usuário</li>
              <li>Realizar análises estatísticas</li>
              <li>Prevenir fraudes</li>
            </ul>
            <p>O Usuário pode gerenciar cookies diretamente nas configurações de seu navegador.</p>
          </Section>

          <Section title="10. Transferência Internacional de Dados">
            <p>Dados poderão ser armazenados ou processados fora do país do Usuário, inclusive em servidores internacionais, observando padrões adequados de proteção de dados e cláusulas contratuais apropriadas.</p>
          </Section>

          <Section title="11. Monitoramento e Prevenção a Fraude">
            <p>Para proteção da <strong>Mastery</strong> e de seus parceiros, poderão ser realizadas análises automatizadas de comportamento, monitoramento de padrões de acesso e cruzamento de informações para identificação de fraudes, abuso de bônus ou irregularidades contratuais.</p>
          </Section>

          <Section title="12. Alterações desta Política">
            <p>Esta Política poderá ser atualizada a qualquer momento. A continuidade do uso da <strong>Mastery</strong> implica <strong>aceitação automática</strong> da versão vigente.</p>
          </Section>

          <Section title="13. Disposições Finais">
            <p>Ao utilizar a <strong>Mastery</strong>, o Usuário declara ciência e concordância integral com esta Política de Privacidade.</p>
          </Section>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mt-10">
    <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-4">{title}</h2>
    <div className="space-y-3 text-muted-foreground leading-relaxed [&_strong]:text-foreground">
      {children}
    </div>
  </div>
);

export default Privacy;
