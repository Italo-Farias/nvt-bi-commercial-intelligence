"use client";

import Image from "next/image";
import {
  BarChart3,
  Bot,
  Boxes,
  BriefcaseBusiness,
  Building2,
  CircleDollarSign,
  Database,
  FileDown,
  Filter,
  LayoutDashboard,
  MessageCircle,
  PackageSearch,
  Send,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  WalletCards,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useMemo, useState } from "react";
import {
  assistantAnswer,
  assistantExamples,
  evolution,
  families,
  finance,
  MonthKey,
  monthData,
  products,
  sellers,
  stock,
} from "@/lib/demo-data";

type Section = "overview" | "sales" | "goals" | "position" | "assistant" | "case";

const money = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
const integer = new Intl.NumberFormat("pt-BR");
const brl = (value: number) => money.format(value);

const navigation: Array<{ id: Section; label: string; icon: typeof LayoutDashboard }> = [
  { id: "overview", label: "Visão geral", icon: LayoutDashboard },
  { id: "sales", label: "Vendas e produtos", icon: BarChart3 },
  { id: "goals", label: "Metas e comissão", icon: Target },
  { id: "position", label: "Estoque e financeiro", icon: Boxes },
  { id: "assistant", label: "Assistente comercial", icon: MessageCircle },
  { id: "case", label: "Sobre o projeto", icon: BriefcaseBusiness },
];

function Card({ title, value, note, icon: Icon, tone = "blue" }: {
  title: string;
  value: string;
  note: string;
  icon: typeof LayoutDashboard;
  tone?: "blue" | "orange" | "green" | "red";
}) {
  return (
    <article className={`metric-card tone-${tone}`}>
      <div className="metric-top">
        <span>{title}</span>
        <div className="metric-icon"><Icon size={19} /></div>
      </div>
      <strong>{value}</strong>
      <small>{note}</small>
    </article>
  );
}

function SectionHeading({ eyebrow, title, description, action }: {
  eyebrow: string;
  title: string;
  description: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {action}
    </div>
  );
}

function DemoNotice() {
  return (
    <div className="demo-notice">
      <ShieldCheck size={17} />
      <span><strong>Modo demonstração</strong> · dados integralmente fictícios e sem conexão com o ERP de produção</span>
    </div>
  );
}

function Overview({ month, setMonth }: { month: MonthKey; setMonth: (value: MonthKey) => void }) {
  const data = monthData[month];
  return (
    <section className="content-section">
      <SectionHeading
        eyebrow="Painel comercial"
        title="Visão geral da operação"
        description="Indicadores executivos para acompanhamento rápido do desempenho comercial."
        action={
          <label className="select-control">
            <span>Competência</span>
            <select value={month} onChange={(event) => setMonth(event.target.value as MonthKey)}>
              <option value="ago/26">Agosto/26</option>
              <option value="set/26">Setembro/26</option>
              <option value="out/26">Outubro/26</option>
            </select>
          </label>
        }
      />
      <DemoNotice />
      <div className="metric-grid">
        <Card title={`Faturamento em ${month}`} value={brl(data.revenue)} note="+7,38% sobre o mês anterior" icon={CircleDollarSign} tone="green" />
        <Card title="Pedidos a faturar" value={brl(data.pending)} note="18 pedidos em fluxo operacional" icon={ShoppingCart} tone="orange" />
        <Card title="Clientes positivados" value={integer.format(data.customers)} note="Compras válidas no período" icon={Users} />
        <Card title="Títulos vencidos" value={brl(data.overdue)} note="4,78% da carteira a receber" icon={WalletCards} tone="red" />
      </div>

      <div className="dashboard-grid">
        <article className="panel chart-wide">
          <div className="panel-title">
            <div><span>Evolução</span><h3>Faturamento mensal</h3></div>
            <TrendingUp size={20} />
          </div>
          <div className="chart-box">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={evolution} margin={{ top: 10, right: 6, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#e7eaf1" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#69758a", fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} width={48} tickFormatter={(v) => `${Math.round(v / 1000)}k`} tick={{ fill: "#69758a", fontSize: 11 }} />
                <Tooltip formatter={(value) => brl(Number(value ?? 0))} cursor={{ fill: "#f2f5fa" }} />
                <Bar dataKey="value" radius={[8, 8, 2, 2]} fill="#203c8c" maxBarSize={46} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="panel">
          <div className="panel-title">
            <div><span>Composição</span><h3>Vendas por família</h3></div>
            <PackageSearch size={20} />
          </div>
          <div className="donut-wrap">
            <div className="donut-chart">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={families} dataKey="value" nameKey="name" innerRadius={56} outerRadius={81} paddingAngle={2}>
                    {families.map((entry) => <Cell key={entry.name} fill={entry.color} />)}
                  </Pie>
                  <Tooltip formatter={(value) => brl(Number(value ?? 0))} />
                </PieChart>
              </ResponsiveContainer>
              <div className="donut-label"><small>Total</small><strong>R$ 197,8 mil</strong></div>
            </div>
            <div className="legend-list">
              {families.slice(0, 5).map((item) => (
                <div key={item.name}><i style={{ backgroundColor: item.color }} /><span>{item.name}</span><strong>{brl(item.value)}</strong></div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function Sales() {
  const [family, setFamily] = useState("Todas");
  const [order, setOrder] = useState<"value" | "quantity">("value");
  const filtered = useMemo(() => {
    const list = family === "Todas" ? products : products.filter((item) => item.family === family);
    return [...list].sort((a, b) => b[order === "value" ? "revenue" : "quantity"] - a[order === "value" ? "revenue" : "quantity"]);
  }, [family, order]);

  return (
    <section className="content-section">
      <SectionHeading eyebrow="Análise de vendas" title="Produtos mais vendidos" description="Ranking demonstrativo com filtros por família e critério de ordenação." />
      <DemoNotice />
      <div className="filter-bar">
        <div className="filter-label"><Filter size={17} /><span>Filtros</span></div>
        <label><span>Família</span><select value={family} onChange={(e) => setFamily(e.target.value)}><option>Todas</option>{families.slice(0, 5).map((item) => <option key={item.name}>{item.name}</option>)}</select></label>
        <label><span>Ordenar por</span><select value={order} onChange={(e) => setOrder(e.target.value as "value" | "quantity")}><option value="value">Valor vendido</option><option value="quantity">Quantidade</option></select></label>
        <button className="soft-button"><FileDown size={17} /> Exportação demonstrativa</button>
      </div>
      <div className="table-panel">
        <div className="table-summary"><span>{filtered.length} produtos encontrados</span><strong>Total exibido: {brl(filtered.reduce((sum, item) => sum + item.revenue, 0))}</strong></div>
        <div className="table-scroll">
          <table>
            <thead><tr><th>#</th><th>Produto</th><th>Família</th><th>Marca</th><th className="numeric">Quantidade</th><th className="numeric">Faturamento</th></tr></thead>
            <tbody>{filtered.map((item, index) => <tr key={item.product}><td><span className="rank">{index + 1}</span></td><td><strong>{item.product}</strong></td><td>{item.family}</td><td>{item.brand}</td><td className="numeric">{integer.format(item.quantity)}</td><td className="numeric"><strong>{brl(item.revenue)}</strong></td></tr>)}</tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Goals() {
  const [sellerName, setSellerName] = useState(sellers[0].name);
  const seller = sellers.find((item) => item.name === sellerName) ?? sellers[0];
  const coverage = seller.revenue / seller.goal * 100;
  return (
    <section className="content-section">
      <SectionHeading
        eyebrow="Gestão de desempenho"
        title="Metas e comissão"
        description="Acompanhamento individual com cobertura geral e detalhamento por família."
        action={<label className="select-control"><span>Consultor</span><select value={sellerName} onChange={(e) => setSellerName(e.target.value)}>{sellers.map((item) => <option key={item.name}>{item.name}</option>)}</select></label>}
      />
      <DemoNotice />
      <div className="metric-grid goals-grid">
        <Card title="Faturamento elegível" value={brl(seller.revenue)} note={`${integer.format(seller.customers)} clientes positivados`} icon={CircleDollarSign} tone="green" />
        <Card title="Meta mensal" value={brl(seller.goal)} note={`Faltam ${brl(Math.max(0, seller.goal - seller.revenue))}`} icon={Target} />
        <Card title="Cobertura" value={`${coverage.toFixed(2).replace(".", ",")}%`} note={coverage >= 100 ? "Meta alcançada" : "Em andamento"} icon={TrendingUp} tone={coverage >= 100 ? "green" : "orange"} />
        <Card title="Comissão estimada" value={brl(seller.commission)} note="Regra demonstrativa aplicada" icon={WalletCards} tone="orange" />
      </div>
      <div className="panel family-goals">
        <div className="panel-title"><div><span>Detalhamento</span><h3>Desempenho por família</h3></div><Target size={20} /></div>
        <div className="goal-list">
          {seller.families.map((item) => {
            const pct = item.sold / item.goal * 100;
            return <div className="goal-row" key={item.name}>
              <div className="goal-meta"><strong>{item.name}</strong><span>{brl(item.sold)} de {brl(item.goal)}</span></div>
              <div className="progress-track"><div className={pct >= 100 ? "progress-fill success" : "progress-fill"} style={{ width: `${Math.min(pct, 100)}%` }} /></div>
              <strong className={pct >= 100 ? "pct success-text" : "pct"}>{pct.toFixed(1).replace(".", ",")}%</strong>
            </div>;
          })}
        </div>
      </div>
    </section>
  );
}

function Position() {
  const cost = stock.reduce((sum, item) => sum + item.cost, 0);
  const sale = stock.reduce((sum, item) => sum + item.sale, 0);
  const units = stock.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <section className="content-section">
      <SectionHeading eyebrow="Posição empresarial" title="Estoque e financeiro" description="Visão consolidada de ativos, obrigações e recebíveis da operação." />
      <DemoNotice />
      <div className="metric-grid">
        <Card title="Estoque a custo" value={brl(cost)} note={`${integer.format(units)} unidades disponíveis`} icon={Boxes} />
        <Card title="Estoque a venda" value={brl(sale)} note={`Margem potencial de ${brl(sale - cost)}`} icon={PackageSearch} tone="green" />
        <Card title="Contas a pagar" value={brl(finance.payableOverdue + finance.payableFuture)} note={`${brl(finance.payableOverdue)} vencidos`} icon={WalletCards} tone="orange" />
        <Card title="Contas a receber" value={brl(finance.receivableOverdue + finance.receivableFuture)} note={`${brl(finance.receivableOverdue)} vencidos`} icon={CircleDollarSign} tone="green" />
      </div>
      <div className="dashboard-grid position-grid">
        <article className="panel chart-wide">
          <div className="panel-title"><div><span>Inventário</span><h3>Valor por família</h3></div><Boxes size={20} /></div>
          <div className="chart-box compact">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stock} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#e7eaf1" />
                <XAxis dataKey="family" axisLine={false} tickLine={false} tick={{ fill: "#69758a", fontSize: 11 }} />
                <YAxis axisLine={false} tickLine={false} width={48} tickFormatter={(v) => `${Math.round(v / 1000)}k`} tick={{ fill: "#69758a", fontSize: 11 }} />
                <Tooltip formatter={(value) => brl(Number(value ?? 0))} />
                <Bar name="Custo" dataKey="cost" fill="#203c8c" radius={[6, 6, 0, 0]} />
                <Bar name="Venda" dataKey="sale" fill="#f29b23" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </article>
        <article className="panel finance-list">
          <div className="panel-title"><div><span>Fluxo financeiro</span><h3>Vencidos e a vencer</h3></div><WalletCards size={20} /></div>
          <div className="finance-row"><span><i className="red-dot" />Pagar vencido</span><strong>{brl(finance.payableOverdue)}</strong></div>
          <div className="finance-row"><span><i className="orange-dot" />Pagar a vencer</span><strong>{brl(finance.payableFuture)}</strong></div>
          <div className="finance-row"><span><i className="red-dot" />Receber vencido</span><strong>{brl(finance.receivableOverdue)}</strong></div>
          <div className="finance-row"><span><i className="green-dot" />Receber a vencer</span><strong>{brl(finance.receivableFuture)}</strong></div>
        </article>
      </div>
    </section>
  );
}

function Assistant() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; text: string }>>([
    { role: "assistant", text: "Olá! Sou o assistente comercial demonstrativo. Posso responder perguntas sobre faturamento, produtos, metas, consultores e estoque." },
  ]);
  function ask(text: string) {
    const question = text.trim();
    if (!question) return;
    setMessages((current) => [...current, { role: "user", text: question }, { role: "assistant", text: assistantAnswer(question) }]);
    setInput("");
  }
  return (
    <section className="content-section assistant-section">
      <SectionHeading eyebrow="IA aplicada ao negócio" title="Assistente comercial analítico" description="Interface em linguagem natural para reduzir o tempo entre a pergunta e a decisão." />
      <DemoNotice />
      <div className="assistant-layout">
        <div className="chat-panel">
          <div className="chat-header"><div className="bot-avatar"><Bot size={22} /></div><div><strong>Assistente NVT BI</strong><span>Demonstração offline</span></div><i /></div>
          <div className="chat-messages">
            {messages.map((message, index) => <div key={`${message.role}-${index}`} className={`message ${message.role}`}><span>{message.text}</span></div>)}
          </div>
          <form className="chat-input" onSubmit={(e) => { e.preventDefault(); ask(input); }}>
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Pergunte sobre vendas, produtos, metas ou estoque..." />
            <button aria-label="Enviar pergunta" type="submit"><Send size={18} /></button>
          </form>
        </div>
        <aside className="question-panel">
          <Sparkles size={22} />
          <h3>Perguntas sugeridas</h3>
          <p>Experimente uma consulta usando a base fictícia.</p>
          <div>{assistantExamples.map((example) => <button key={example} onClick={() => ask(example)}>{example}</button>)}</div>
          <small>As respostas são determinísticas e não utilizam dados externos nesta versão pública.</small>
        </aside>
      </div>
    </section>
  );
}

function CaseStudy() {
  const stack = ["TypeScript", "React", "Next.js", "SQL", "API REST", "ETL", "Cloudflare D1", "IA generativa"];
  return (
    <section className="content-section case-section">
      <SectionHeading eyebrow="Case de portfólio" title="Da operação ao indicador acionável" description="Uma solução criada para centralizar informações comerciais antes distribuídas entre ERP, planilhas e controles manuais." />
      <div className="case-hero">
        <div>
          <span className="case-tag"><Building2 size={16} /> Inteligência comercial aplicada</span>
          <h3>Dados confiáveis para decisões de vendas mais rápidas</h3>
          <p>A plataforma organiza faturamento, produtos, carteira, metas, comissões, estoque e financeiro em uma única experiência. A arquitetura original integra um ERP por API, normaliza os dados e disponibiliza indicadores e relatórios gerenciais.</p>
          <div className="stack-list">{stack.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
        <div className="impact-card">
          <span>Escopo demonstrado</span>
          <strong>6</strong>
          <p>módulos analíticos integrados</p>
          <hr />
          <div><Database size={18} /><span>Pipeline ERP → ETL → SQL → Dashboard</span></div>
          <div><Bot size={18} /><span>Consultas em linguagem natural</span></div>
          <div><FileDown size={18} /><span>Relatórios para tomada de decisão</span></div>
        </div>
      </div>
      <div className="architecture">
        <h3>Arquitetura da solução original</h3>
        <div className="architecture-flow">
          {[{ icon: Building2, title: "ERP", text: "Dados operacionais" }, { icon: Database, title: "ETL", text: "Extração e normalização" }, { icon: ShieldCheck, title: "Base analítica", text: "Regras e conciliação" }, { icon: LayoutDashboard, title: "NVT BI", text: "Indicadores e relatórios" }].map((item, index) => <div className="architecture-step" key={item.title}><div><item.icon size={22} /></div><strong>{item.title}</strong><span>{item.text}</span>{index < 3 && <i />}</div>)}
        </div>
      </div>
      <div className="case-columns">
        <article><span>01</span><h3>Problema</h3><p>Relatórios fragmentados, divergências de critérios e demora para transformar dados do ERP em informação comercial.</p></article>
        <article><span>02</span><h3>Solução</h3><p>Camada analítica com regras de negócio, filtros, painéis de desempenho, assistente e exportação de relatórios.</p></article>
        <article><span>03</span><h3>Impacto</h3><p>Visão única da operação, acompanhamento diário e melhor priorização das ações comerciais.</p></article>
      </div>
      <div className="privacy-note"><ShieldCheck size={20} /><div><strong>Confidencialidade preservada</strong><p>Esta versão mantém apenas a identidade visual autorizada. Pessoas, valores, metas, produtos e resultados são fictícios.</p></div></div>
    </section>
  );
}

export default function Home() {
  const [active, setActive] = useState<Section>("overview");
  const [month, setMonth] = useState<MonthKey>("out/26");
  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand"><div className="logo-wrap"><Image src="/nvt-logo.jpg" alt="NVT Distribuidora" width={92} height={40} priority /></div><div><strong>NVT BI</strong><span>Portfólio demonstrativo</span></div></div>
        <nav>{navigation.map(({ id, label, icon: Icon }) => <button key={id} className={active === id ? "active" : ""} onClick={() => setActive(id)}><Icon size={19} /><span>{label}</span></button>)}</nav>
        <div className="sidebar-status"><div><ShieldCheck size={18} /><strong>Ambiente seguro</strong></div><p>Nenhum dado desta aplicação pertence ao ambiente de produção.</p></div>
        <div className="author"><div>IF</div><span><strong>Italo Farias</strong><small>Data Analytics & IA</small></span></div>
      </aside>
      <div className="main-area">
        <header className="topbar"><div><span>NVT DISTRIBUIDORA</span><strong>Inteligência comercial</strong></div><div className="topbar-badge"><i /> Demonstração pública</div></header>
        <div className="mobile-nav">{navigation.map(({ id, label, icon: Icon }) => <button key={id} aria-label={label} title={label} className={active === id ? "active" : ""} onClick={() => setActive(id)}><Icon size={19} /><span>{label}</span></button>)}</div>
        {active === "overview" && <Overview month={month} setMonth={setMonth} />}
        {active === "sales" && <Sales />}
        {active === "goals" && <Goals />}
        {active === "position" && <Position />}
        {active === "assistant" && <Assistant />}
        {active === "case" && <CaseStudy />}
        <footer><span>Projeto demonstrativo de portfólio · 2026</span><span>Dados fictícios · Sem integração com produção</span></footer>
      </div>
    </main>
  );
}
