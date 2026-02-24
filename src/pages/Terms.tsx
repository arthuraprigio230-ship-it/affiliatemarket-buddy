import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
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
            Termo de Uso e Condições Gerais
            <br />
            <span className="text-primary">Mastery</span>
          </h1>

          <p className="text-muted-foreground leading-relaxed mt-6">
            Ao acessar, cadastrar-se ou utilizar a plataforma de afiliados <strong className="text-foreground">Mastery</strong> ("<strong className="text-foreground">Mastery</strong>"), o usuário ("<strong className="text-foreground">Afiliado</strong>") declara que leu, compreendeu e concorda integralmente com os presentes <strong className="text-foreground">Termos de Uso</strong>, de caráter <strong className="text-foreground">legalmente vinculante</strong>.
          </p>

          <p className="text-muted-foreground leading-relaxed mt-3">
            Caso o Afiliado <strong className="text-foreground">não concorde</strong> com qualquer cláusula, deverá <strong className="text-foreground">interromper imediatamente</strong> o uso da Mastery.
          </p>

          <Section title="1. Objeto da Mastery">
            <p>A <strong>Mastery</strong> tem como finalidade <strong>gerenciar e intermediar relações de afiliação</strong> voltadas à divulgação de serviços relacionados a <strong>iGaming, apostas online e entretenimento digital</strong>.</p>
            <p>A <strong>Mastery</strong> <strong>não é casa de apostas</strong>, <strong>não opera jogos</strong>, <strong>não recebe depósitos</strong> e <strong>não realiza pagamentos a jogadores finais</strong>. A <strong>Mastery</strong> <strong>não controla</strong> resultados, regras, políticas de bônus, KYC/AML, bloqueios, estornos, chargebacks, auditorias ou quaisquer decisões operacionais das operadoras parceiras.</p>
          </Section>

          <Section title="2. Natureza da Relação">
            <p>O Afiliado atua como <strong>prestador independente</strong>, inexistindo vínculo <strong>trabalhista</strong>, <strong>societário</strong>, <strong>representativo</strong>, <strong>exclusivo</strong> ou de <strong>subordinação</strong> com a <strong>Mastery</strong>.</p>
            <p>O Afiliado é o <strong>único responsável</strong> por suas atividades, conteúdos, estratégias, anúncios, páginas, atendimento, promessas, conformidade legal na sua jurisdição e por quaisquer <strong>custos</strong>, <strong>tributos</strong>, <strong>multas</strong> e obrigações decorrentes.</p>
          </Section>

          <Section title="3. Elegibilidade e Responsabilidade do Afiliado">
            <p>O Afiliado declara e garante que:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>É <strong>maior de 18 anos</strong> ou possui idade legal mínima aplicável</li>
              <li>Possui <strong>capacidade civil plena</strong></li>
              <li>Atua como <strong>prestador independente</strong></li>
              <li>Respeita as leis, normas publicitárias e regras de proteção ao consumidor de sua jurisdição</li>
            </ul>
            <p>O Afiliado reconhece que a <strong>Mastery</strong> poderá, a seu exclusivo critério, <strong>solicitar informações</strong> e/ou <strong>documentos</strong> para validações internas, incluindo checagens de integridade, antifraude e compliance.</p>
          </Section>

          <Section title="4. Proibições Expressas">
            <p>É <strong>expressamente proibido</strong> ao Afiliado:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Prometer <strong>ganhos garantidos</strong> ou lucro certo</li>
              <li>Utilizar <strong>spam</strong>, <strong>bots</strong> ou automações não autorizadas</li>
              <li>Direcionar conteúdo a <strong>menores de idade</strong></li>
              <li>Gerar <strong>tráfego artificial</strong>, <strong>fraudulento</strong> ou manipulado</li>
              <li>Utilizar <strong>multi-contas</strong>, identidades falsas ou grupos coordenados</li>
              <li>Explorar bônus, realizar <strong>arbitragem</strong> ou incentivar condutas para burlar regras</li>
              <li>Oferecer <strong>incentivo financeiro</strong> direto ou indireto para depósito, cadastro ou aposta</li>
              <li>Simular identidade da <strong>Mastery</strong>, das operadoras ou de parceiros</li>
              <li>Divulgar informações <strong>enganosas</strong>, <strong>falsas</strong> ou omitir riscos</li>
            </ul>
            <p>Violações poderão implicar <strong>bloqueio imediato</strong>, <strong>cancelamento de comissões</strong>, <strong>retenção de valores</strong> e/ou <strong>encerramento</strong> da conta, sem prejuízo de medidas legais cabíveis.</p>
          </Section>

          <Section title="5. Ausência de Garantia de Resultados">
            <p>A <strong>Mastery</strong> <strong>não garante</strong> resultados financeiros, incluindo ganhos mínimos, conversão, rentabilidade ou volume de comissões.</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Não há promessa de lucro</li>
              <li>Não há garantia de comissões</li>
              <li>Resultados dependem do Afiliado, do mercado e das regras das operadoras</li>
            </ul>
          </Section>

          <Section title="6. Comissões e Pagamentos">
            <p>As comissões poderão seguir modelos <strong>CPA</strong>, <strong>RevShare</strong> ou <strong>híbrido</strong>, conforme condições vigentes e/ou acordos comerciais. A <strong>Mastery</strong> poderá, a qualquer tempo, alterar percentuais, regras, modelos, critérios, limites e políticas.</p>
            <p>As apurações são baseadas prioritariamente nos <strong>relatórios das operadoras parceiras</strong>. O Afiliado reconhece que métricas, status, NGR, depósitos, estornos, chargebacks e qualificações podem sofrer atualizações, reclassificações e ajustes pela operadora.</p>
          </Section>

          <SubSection title="6.1 Periodicidade de Pagamento">
            <p>Os pagamentos poderão ocorrer em periodicidade variável, conforme cronograma interno da <strong>Mastery</strong> e o repasse das operadoras. A <strong>Mastery</strong> não garante data fixa de pagamento.</p>
          </SubSection>

          <SubSection title="6.2 Prazo de Processamento">
            <p>O processamento poderá demandar prazo indeterminado, considerando validações internas, auditorias e confirmações de liquidação pelas operadoras.</p>
          </SubSection>

          <SubSection title="6.3 Dependência de Pagamento da Operadora">
            <p>A <strong>Mastery</strong> somente realizará pagamentos após o efetivo recebimento dos valores das operadoras. Caso haja atraso, bloqueio ou retenção por parte da operadora, o pagamento ao Afiliado será automaticamente impactado, sem responsabilidade da Mastery.</p>
          </SubSection>

          <SubSection title="6.4 Valor Mínimo para Saque">
            <p>O pagamento estará condicionado ao atingimento de valor mínimo definido pela <strong>Mastery</strong>, podendo ser alterado a qualquer momento.</p>
          </SubSection>

          <SubSection title="6.5 Retenção para Auditoria">
            <p>A <strong>Mastery</strong> poderá reter ou suspender pagamentos em caso de suspeita de fraude, NGR negativo relevante, padrões anormais de conversão, multi-contas ou irregularidades.</p>
          </SubSection>

          <SubSection title="6.6 Chargeback e Ajustes">
            <p>Valores decorrentes de chargebacks, estornos ou revisões poderão ser deduzidos, compensados ou cobrados retroativamente do Afiliado.</p>
          </SubSection>

          <SubSection title="6.7 NGR Negativo e Carryover">
            <p>Nos modelos baseados em receita, o NGR negativo poderá ser transportado para períodos futuros (carryover), podendo a <strong>Mastery</strong> bloquear pagamentos até compensação integral do saldo negativo.</p>
          </SubSection>

          <Section title="7. Suspensão e Encerramento">
            <p>A <strong>Mastery</strong> poderá suspender ou encerrar contas sem aviso prévio por risco jurídico, financeiro ou reputacional.</p>
          </Section>

          <Section title="8. Limitação de Responsabilidade">
            <p>A <strong>Mastery</strong> não se responsabiliza por perdas decorrentes de decisões das operadoras, mudanças regulatórias, atrasos de repasse ou fatores externos.</p>
          </Section>

          <Section title="9. Propriedade Intelectual">
            <p>Todo o conteúdo e sistema pertencem exclusivamente à <strong>Mastery</strong>.</p>
          </Section>

          <Section title="10. Alterações dos Termos">
            <p>Estes Termos poderão ser alterados a qualquer momento. O uso contínuo implica aceitação automática.</p>
          </Section>

          <Section title="11. Legislação e Foro">
            <p>Regido pelas leis do <strong>Brasil</strong>, foro eleito da comarca de <strong>Itumbiara/GO</strong>.</p>
          </Section>

          <Section title="12. Aceitação Final">
            <p>Ao utilizar a <strong>Mastery</strong>, o Afiliado declara concordância total, irretratável e irrevogável com este Termo.</p>
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

const SubSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mt-6 ml-4 pl-4 border-l-2 border-primary/30">
    <h3 className="text-lg font-heading font-semibold text-foreground mb-3">{title}</h3>
    <div className="space-y-3 text-muted-foreground leading-relaxed [&_strong]:text-foreground">
      {children}
    </div>
  </div>
);

export default Terms;
