import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Compliance = () => {
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
            Política de Compliance, Integridade e Conduta Ética — <span className="text-primary">Mastery</span>
          </h1>

          <p className="text-muted-foreground leading-relaxed mt-6">
            Esta <strong className="text-foreground">Política de Compliance</strong> estabelece diretrizes obrigatórias de <strong className="text-foreground">conduta, integridade, legalidade e ética</strong> aplicáveis a todos os usuários, afiliados, parceiros e colaboradores da <strong className="text-foreground">Mastery</strong>.
          </p>

          <p className="text-muted-foreground leading-relaxed mt-3">
            O uso da <strong className="text-foreground">Mastery</strong> implica <strong className="text-foreground">adesão integral, irrestrita e obrigatória</strong> a esta Política.
          </p>

          <Section title="1. Objetivo do Compliance">
            <p>O objetivo desta Política é <strong>prevenir, detectar e mitigar riscos</strong> legais, regulatórios, financeiros e reputacionais, garantindo que todas as atividades ocorram em conformidade com:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Legislação aplicável</li>
              <li>Normas de proteção de dados (LGPD, GDPR ou equivalentes)</li>
              <li>Regras das operadoras parceiras</li>
              <li>Boas práticas do mercado de iGaming</li>
              <li>Princípios de ética, transparência e responsabilidade</li>
            </ul>
          </Section>

          <Section title="2. Responsabilidade do Afiliado">
            <p>O Afiliado reconhece que atua de forma <strong>autônoma e independente</strong>, sendo o <strong>único responsável</strong> por suas ações, conteúdos, estratégias de divulgação, fontes de tráfego e relacionamento com jogadores.</p>
            <p>A <strong>Mastery</strong> não se responsabiliza por atos praticados pelo Afiliado fora de seu ambiente técnico, incluindo eventuais infrações legais, regulatórias ou publicitárias.</p>
          </Section>

          <Section title="3. Prevenção à Fraude">
            <p>É expressamente proibida qualquer prática que configure ou indique <strong>fraude, manipulação, simulação ou má-fé</strong>.</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Tráfego artificial, bots ou automações não autorizadas</li>
              <li>Leads falsos, auto-indicação ou contas duplicadas</li>
              <li>Manipulação de métricas, CPA, conversões ou NGR</li>
              <li>Uso de identidades falsas ou terceiros sem consentimento</li>
              <li>Exploração de bônus ou arbitragem estruturada</li>
            </ul>
            <p>A constatação de fraude poderá resultar em:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li><strong>Bloqueio imediato</strong> da conta</li>
              <li><strong>Retenção total ou parcial de valores</strong></li>
              <li><strong>Cancelamento retroativo de comissões</strong></li>
              <li><strong>Compensação de prejuízos</strong></li>
              <li><strong>Comunicação às autoridades competentes</strong>, quando aplicável</li>
            </ul>
          </Section>

          <Section title="4. Combate à Lavagem de Dinheiro (AML)">
            <p>A <strong>Mastery</strong> adota práticas de prevenção à lavagem de dinheiro, cooperando com operadoras, instituições financeiras e autoridades competentes.</p>
            <p>Indícios de atividade suspeita poderão resultar em:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Suspensão preventiva da conta</li>
              <li>Retenção cautelar de valores</li>
              <li>Solicitação de documentação complementar</li>
              <li>Comunicação às operadoras e autoridades, quando exigido por lei</li>
            </ul>
          </Section>

          <Section title="5. Conduta Ética e Comunicação">
            <p>O Afiliado compromete-se a atuar com <strong>ética, veracidade e transparência</strong>, sendo expressamente proibido:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Prometer ganhos garantidos ou lucro certo</li>
              <li>Induzir comportamento compulsivo ou irresponsável</li>
              <li>Direcionar publicidade a menores de idade</li>
              <li>Utilizar linguagem enganosa, sensacionalista ou abusiva</li>
            </ul>
          </Section>

          <Section title="6. Conflito de Interesses">
            <p>O Afiliado declara que não atuará simultaneamente como jogador vinculado à própria estrutura de afiliado, nem manterá controle direto ou indireto sobre contas de jogadores vinculadas ao seu código.</p>
            <p>Situações de potencial conflito de interesse deverão ser informadas à <strong>Mastery</strong>.</p>
          </Section>

          <Section title="7. Proteção de Dados e Privacidade">
            <p>O Afiliado compromete-se a tratar dados pessoais em conformidade com a legislação aplicável, sendo vedado:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Compartilhar dados sem base legal</li>
              <li>Utilizar listas adquiridas ilegalmente</li>
              <li>Armazenar dados sem medidas mínimas de segurança</li>
            </ul>
          </Section>

          <Section title="8. Monitoramento, Auditoria e Cooperação Obrigatória">
            <p>A <strong>Mastery</strong> reserva-se o direito de monitorar, auditar e revisar atividades, métricas e comportamentos a qualquer tempo.</p>
            <p>O Afiliado compromete-se a:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Fornecer documentos e informações quando solicitado</li>
              <li>Cooperar com investigações internas ou externas</li>
              <li>Permitir verificação da origem de tráfego</li>
            </ul>
            <p>A recusa injustificada poderá resultar em suspensão imediata.</p>
          </Section>

          <Section title="9. Responsabilidade e Indenização">
            <p>O Afiliado será responsável por quaisquer danos, prejuízos, multas, sanções regulatórias ou perdas reputacionais causadas à <strong>Mastery</strong> ou a seus parceiros em decorrência de suas ações ou omissões.</p>
            <p>Caso a <strong>Mastery</strong> seja acionada judicial ou administrativamente por ato do Afiliado, este deverá indenizar integralmente todos os custos, incluindo honorários advocatícios e despesas processuais.</p>
          </Section>

          <Section title="10. Penalidades e Sanções">
            <p>O descumprimento desta Política poderá resultar, isolada ou cumulativamente, em:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Advertência formal</li>
              <li>Suspensão temporária</li>
              <li>Encerramento definitivo da conta</li>
              <li>Cancelamento e retenção de comissões</li>
              <li>Compensação financeira por prejuízos</li>
              <li>Medidas legais cabíveis</li>
            </ul>
          </Section>

          <Section title="11. Não Tolerância e Renúncia">
            <p>A eventual tolerância da <strong>Mastery</strong> a infrações não constitui renúncia de direitos, podendo agir a qualquer tempo para fazer cumprir esta Política.</p>
          </Section>

          <Section title="12. Canal de Denúncia">
            <p>A <strong>Mastery</strong> poderá disponibilizar canal específico para comunicação de irregularidades, denúncias ou suspeitas de conduta inadequada.</p>
            <p>Todas as denúncias poderão ser analisadas de forma confidencial.</p>
          </Section>

          <Section title="13. Alterações da Política">
            <p>Esta Política poderá ser atualizada a qualquer momento. A continuidade do uso da <strong>Mastery</strong> implica <strong>aceitação automática</strong> da versão vigente.</p>
          </Section>

          <Section title="14. Aceitação Final">
            <p className="p-4 rounded-lg border border-primary/30 bg-primary/5">Ao utilizar a <strong>Mastery</strong>, o Afiliado declara ciência, concordância e compromisso integral com esta Política de Compliance, Integridade e Conduta Ética.</p>
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

export default Compliance;
