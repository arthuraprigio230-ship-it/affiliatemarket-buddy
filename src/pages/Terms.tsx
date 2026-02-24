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
          className="prose prose-invert max-w-none"
        >
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
            Termo de Uso e Condições Gerais
            <br />
            <span className="text-primary">Plataforma de Afiliados iGaming</span>
          </h1>

          <p className="text-muted-foreground leading-relaxed">
            Ao acessar, cadastrar-se ou utilizar esta plataforma de afiliados ("<strong className="text-foreground">Plataforma</strong>"),
            o usuário ("<strong className="text-foreground">Afiliado</strong>") declara que leu, compreendeu e concorda integralmente
            com os presentes <strong className="text-foreground">Termos de Uso</strong>, de caráter <strong className="text-foreground">legalmente vinculante</strong>.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Caso o Afiliado <strong className="text-foreground">não concorde</strong> com qualquer cláusula,
            deverá <strong className="text-foreground">interromper imediatamente</strong> o uso da Plataforma.
          </p>

          <Section title="1. Objeto da Plataforma">
            <p>
              A Plataforma tem como finalidade <strong>gerenciar e intermediar relações de afiliação</strong> voltadas à divulgação de serviços relacionados a <strong>iGaming, apostas online e entretenimento digital</strong>.
            </p>
            <p>
              A Plataforma <strong>não é casa de apostas</strong>, <strong>não opera jogos</strong>, <strong>não recebe depósitos</strong> e <strong>não realiza pagamentos a jogadores finais</strong>. A Plataforma <strong>não controla</strong> resultados, regras, políticas de bônus, KYC/AML, bloqueios, estornos, chargebacks, auditorias ou quaisquer decisões operacionais das operadoras parceiras.
            </p>
          </Section>

          <Section title="2. Natureza da Relação">
            <p>
              O Afiliado atua como <strong>prestador independente</strong>, inexistindo vínculo <strong>trabalhista</strong>, <strong>societário</strong>, <strong>representativo</strong>, <strong>exclusivo</strong> ou de <strong>subordinação</strong> com a Plataforma.
            </p>
            <p>
              O Afiliado é o <strong>único responsável</strong> por suas atividades, conteúdos, estratégias, anúncios, páginas, atendimento, promessas, conformidade legal na sua jurisdição e por quaisquer <strong>custos</strong>, <strong>tributos</strong>, <strong>multas</strong> e obrigações decorrentes.
            </p>
          </Section>

          <Section title="3. Elegibilidade e Responsabilidade do Afiliado">
            <p>O Afiliado declara e garante que:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>É <strong>maior de 18 anos</strong> ou possui idade legal mínima aplicável</li>
              <li>Possui <strong>capacidade civil plena</strong></li>
              <li>Atua como <strong>prestador independente</strong></li>
              <li>Respeita as leis, normas publicitárias e regras de proteção ao consumidor de sua jurisdição</li>
            </ul>
            <p>
              O Afiliado reconhece que a Plataforma poderá, a seu exclusivo critério, <strong>solicitar informações</strong> e/ou <strong>documentos</strong> para validações internas, incluindo checagens de integridade, antifraude e compliance.
            </p>
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
              <li>Oferecer <strong>incentivo financeiro</strong> direto/indireto para depósito, cadastro ou aposta</li>
              <li>Simular identidade da <strong>Plataforma</strong>, das <strong>operadoras</strong> ou de parceiros</li>
              <li>Divulgar informações <strong>enganosas</strong>, <strong>falsas</strong> ou omitir riscos</li>
            </ul>
            <p>
              Violações poderão implicar <strong>bloqueio imediato</strong>, <strong>cancelamento de comissões</strong>, <strong>retenção de valores</strong> e/ou <strong>encerramento</strong> da conta, sem prejuízo de medidas legais cabíveis.
            </p>
          </Section>

          <Section title="5. Ausência de Garantia de Resultados">
            <p>
              A Plataforma <strong>não garante</strong> resultados financeiros, incluindo ganhos mínimos, conversão, rentabilidade ou volume de comissões.
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Não há promessa de lucro</li>
              <li>Não há garantia de comissões</li>
              <li>Resultados dependem do Afiliado, do mercado e das regras das operadoras</li>
            </ul>
          </Section>

          <Section title="6. Comissões e Pagamentos">
            <p>
              As comissões poderão seguir modelos <strong>CPA</strong>, <strong>RevShare</strong> ou <strong>híbrido</strong>, conforme condições vigentes e/ou acordos comerciais. A Plataforma poderá, a qualquer tempo, <strong>alterar percentuais</strong>, <strong>regras</strong>, <strong>modelos</strong>, <strong>critérios</strong>, limites e políticas, mediante atualização interna.
            </p>
            <p>
              As apurações de comissões são baseadas prioritariamente nos <strong>relatórios das operadoras parceiras</strong>. O Afiliado reconhece que métricas, status, NGR, depósitos, estornos, chargebacks e qualificações podem sofrer <strong>atualizações</strong>, <strong>reclassificações</strong> e <strong>ajustes</strong> pela operadora.
            </p>
          </Section>

          <SubSection title="6.1 Periodicidade de Pagamento">
            <p>
              Os pagamentos poderão ocorrer em periodicidade <strong>variável</strong> (semanal, quinzenal, mensal ou outra), conforme o cronograma interno da Plataforma e, principalmente, o <strong>repasse</strong> das operadoras. A Plataforma <strong>não garante data fixa</strong> de pagamento.
            </p>
          </SubSection>

          <SubSection title="6.2 Prazo de Processamento">
            <p>
              O processamento de pagamentos poderá demandar prazo <strong>indeterminado</strong>, considerando validações internas, conferências de relatórios, rotinas antifraude, auditorias e confirmações de liquidação por parte das operadoras e meios de pagamento.
            </p>
          </SubSection>

          <SubSection title="6.3 Dependência de Pagamento da Operadora">
            <p>
              A Plataforma somente realizará pagamentos ao Afiliado após o <strong>efetivo recebimento</strong> dos valores devidos pelas operadoras parceiras. Caso a operadora <strong>atrase</strong>, <strong>suspenda</strong>, <strong>retenha</strong>, <strong>revise</strong> ou <strong>bloqueie</strong> repasses, o pagamento ao Afiliado será automaticamente impactado, sem responsabilidade da Plataforma.
            </p>
          </SubSection>

          <SubSection title="6.4 Valor Mínimo para Saque">
            <p>
              Os pagamentos estarão condicionados ao atingimento de um <strong>valor mínimo para saque</strong>, definido pela Plataforma a seu exclusivo critério e sujeito a alterações. Valores abaixo do mínimo permanecerão <strong>acumulados</strong> até que o limite seja atingido.
            </p>
          </SubSection>

          <SubSection title="6.5 Retenção para Auditoria e Suspensão por Suspeita">
            <p>
              A Plataforma poderá <strong>reter</strong> total ou parcialmente valores e/ou <strong>suspender</strong> pagamentos em caso de suspeita de irregularidade, incluindo, mas não se limitando a: conversão anormal, NGR negativo relevante, padrões repetitivos de depósito/saque, indícios de multi-contas, arbitragem, exploração de bônus, tráfego artificial, fraude, chargebacks ou solicitações de revisão pela operadora.
            </p>
            <p>
              A retenção poderá ocorrer por prazo <strong>indeterminado</strong> até a conclusão de auditoria interna e/ou até resposta definitiva da operadora parceira. O Afiliado concorda que a Plataforma poderá solicitar informações e evidências sobre a origem do tráfego.
            </p>
          </SubSection>

          <SubSection title="6.6 Chargeback, Estornos e Cancelamentos">
            <p>
              Ocorrendo <strong>chargebacks</strong>, <strong>estornos</strong>, cancelamentos de depósitos, contestação de transações, fraudes identificadas posteriormente ou quaisquer ajustes de liquidação, os valores correspondentes poderão ser <strong>deduzidos</strong> de comissões, <strong>compensados</strong> em pagamentos futuros ou <strong>cobrados</strong> retroativamente do Afiliado, inclusive mediante saldo negativo.
            </p>
          </SubSection>

          <SubSection title="6.7 Ajustes Retroativos e Recálculo">
            <p>
              A Plataforma poderá realizar <strong>ajustes retroativos</strong> e <strong>recalcular</strong> comissões já lançadas, inclusive após pagamento, caso haja revisão de relatórios pela operadora, correção de erros, reclassificação de jogadores, confirmação de fraude, estornos, chargebacks, duplicidades, falhas técnicas ou mudanças de status/qualificação.
            </p>
            <p>
              O Afiliado concorda com tais ajustes sem necessidade de autorização prévia, reconhecendo que a base de apuração é dinâmica e pode ser alterada pela operadora.
            </p>
          </SubSection>

          <SubSection title="6.8 Impostos e Obrigações Fiscais">
            <p>
              O Afiliado é o <strong>único responsável</strong> pelo recolhimento de tributos, taxas e encargos incidentes sobre os valores recebidos, conforme sua natureza jurídica e legislação aplicável. A Plataforma poderá reter tributos quando exigido por lei ou por determinação de autoridade competente.
            </p>
          </SubSection>

          <SubSection title="6.9 NGR Negativo, Bloqueio e Política de Carryover">
            <p>
              Nos modelos baseados em receita (como <strong>RevShare</strong> e híbridos), o Afiliado reconhece que o <strong>NGR</strong> pode ser <strong>negativo</strong> e que, nessa hipótese, a Plataforma poderá: (i) <strong>bloquear</strong> pagamentos enquanto houver saldo negativo relevante, (ii) aplicar <strong>compensação</strong> do saldo negativo em períodos futuros, (iii) adotar política de <strong>carryover</strong> (transporte do NGR negativo) por tempo indeterminado.
            </p>
            <p>
              A política de carryover poderá ser <strong>permanente</strong> ou aplicada conforme regras da operadora parceira. O Afiliado concorda que pagamentos somente ocorrerão após compensação do saldo negativo, quando aplicável.
            </p>
          </SubSection>

          <Section title="7. Suspensão e Encerramento">
            <p>
              A Plataforma poderá <strong>suspender</strong>, <strong>limitar</strong> ou <strong>encerrar</strong> contas, sem aviso prévio, por risco jurídico, financeiro, reputacional, indícios de violação destes Termos ou por determinação de operadoras parceiras.
            </p>
            <p>
              Em caso de encerramento por violação, a Plataforma poderá <strong>cancelar comissões</strong> e <strong>reter valores</strong> até conclusão de auditoria e apuração final.
            </p>
          </Section>

          <Section title="8. Limitação de Responsabilidade">
            <p>
              A Plataforma <strong>não se responsabiliza</strong> por perdas, lucros cessantes, bloqueios externos, indisponibilidades, decisões de terceiros, alterações de regras/políticas das operadoras, mudanças regulatórias, atrasos de repasse, problemas de rastreamento por cookies/atribuição, ou quaisquer impactos indiretos na operação do Afiliado.
            </p>
            <p>
              O uso ocorre <strong>por conta e risco</strong> do Afiliado.
            </p>
          </Section>

          <Section title="9. Propriedade Intelectual">
            <p>
              Todo o conteúdo, marca, sistema, layout, relatórios e tecnologia pertencem exclusivamente à Plataforma, sendo proibida qualquer reprodução, engenharia reversa, cópia ou redistribuição não autorizada.
            </p>
          </Section>

          <Section title="10. Alterações dos Termos">
            <p>
              Estes Termos podem ser alterados a qualquer momento. O uso contínuo da Plataforma implica <strong>aceitação automática</strong> das alterações.
            </p>
          </Section>

          <Section title="11. Legislação e Foro">
            <p>
              Estes Termos são regidos pelas leis do <strong>Brasil</strong>, elegendo-se o foro da comarca de <strong>Itumbiara/GO</strong> para dirimir quaisquer controvérsias, com renúncia a qualquer outro, por mais privilegiado que seja.
            </p>
          </Section>

          <Section title="12. Aceitação Final">
            <p>
              Ao utilizar a Plataforma, o Afiliado declara concordância total, <strong>irretratável</strong> e <strong>irrevogável</strong> com este Termo de Uso, reconhecendo que leu e compreendeu todas as cláusulas, inclusive as condições de comissões, pagamentos, auditoria, retenção, ajustes e carryover.
            </p>
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
