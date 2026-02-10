import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({ name: "", phone: "" });
  const [status, setStatus] = useState({ type: "idle", message: "" });

  async function submit(e) {
    e.preventDefault();
    setStatus({ type: "loading", message: "Отправляем..." });

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.ok) throw new Error("bad");

      setStatus({ type: "success", message: "Заявка отправлена. Мы свяжемся с вами." });
      setForm({ name: "", phone: "" });
    } catch {
      setStatus({
        type: "error",
        message: "Не удалось отправить. Попробуйте позже или позвоните нам.",
      });
    }
  }

  return (
    <>
      <Head>
        <title>АРМСПЕЦ — аренда спецтехники, асфальтирование, благоустройство</title>
        <meta
          name="description"
          content="АРМСПЕЦ: аренда самосвалов и тракторов, асфальтирование и благоустройство. Заявка за 30 секунд."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="page">
        <header className="header">
          <div className="container headerInner">
            <div className="brand">
              <div className="logoMark" aria-hidden />
              <div className="brandText">
                <div className="brandName">АРМСПЕЦ</div>
                <div className="brandTag">строительная компания</div>
              </div>
            </div>

            <nav className="nav">
              <a href="#rent">Аренда техники</a>
              <a href="#works">Асфальтирование</a>
              <a href="#why">Почему мы</a>
              <a href="#how">Как работаем</a>
              <a href="#contacts">Контакты</a>
            </nav>

            <div className="cta">
              <a className="phone" href="tel:+79533884273">+7 (953) 388-42-73</a>
              <a className="btn btnPrimary" href="#contacts">Оставить заявку</a>
            </div>
          </div>
        </header>

        <main>
          {/* HERO */}
          <section className="hero">
            <div className="heroBg" aria-hidden />
            <div className="container heroInner">
              <div className="heroText">
                <div className="pill">Самосвалы • Тракторы • Асфальтирование • Благоустройство</div>
                <h1>
                  АРМСПЕЦ — строительная компания
                  <span className="accent"> для задач на площадке</span>
                </h1>
                <p className="lead">
                  Два направления в одном месте: аренда спецтехники и строительные работы.
                  Оставьте контакты — уточним задачу и предложим подходящий вариант.
                </p>

                <div className="heroBtns">
                  <a className="btn btnPrimary" href="#rent">Аренда спецтехники</a>
                  <a className="btn btnGhost" href="#works">Асфальтирование и благоустройство</a>
                </div>

                <div className="heroMeta">
                  <div className="metaCard">
                    <div className="metaTitle">Связь</div>
                    <div className="metaText">в Telegram — без CRM и “потерянных заявок”</div>
                  </div>
                  <div className="metaCard">
                    <div className="metaTitle">Формат</div>
                    <div className="metaText">разовые работы или регулярные заявки</div>
                  </div>
                  <div className="metaCard">
                    <div className="metaTitle">Документы</div>
                    <div className="metaText">по запросу: договор / закрывающие</div>
                  </div>
                </div>
              </div>

              <div className="heroPanel">
                <div className="panelTitle">Быстрая заявка</div>
                <div className="panelDesc">Имя и телефон — и мы перезвоним.</div>

                <form onSubmit={submit} className="form">
                  <label className="field">
                    <span>Имя</span>
                    <input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Например, Иван"
                      autoComplete="name"
                    />
                  </label>

                  <label className="field">
                    <span>Телефон</span>
                    <input
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                      inputMode="tel"
                      autoComplete="tel"
                      required
                    />
                  </label>

                  <button className="btn btnPrimary btnFull" type="submit" disabled={status.type === "loading"}>
                    {status.type === "loading" ? "Отправляем..." : "Отправить"}
                  </button>

                  <div className={`status ${status.type}`}>{status.message}</div>

                  <div className="fineprint">
                    Нажимая «Отправить», вы соглашаетесь на обработку контактных данных для связи.
                  </div>
                </form>
              </div>
            </div>
          </section>

          {/* TWO DIRECTIONS */}
          <section className="section" id="rent">
            <div className="container">
              <div className="sectionHead">
                <h2>Аренда спецтехники</h2>
                <p>Основной парк: самосвалы и тракторы. Подберём технику под задачу и условия площадки.</p>
              </div>

              <div className="cards">
                <div className="card">
                  <div className="cardTitle">Самосвалы</div>
                  <div className="cardText">
                    Вывоз/перевозка сыпучих материалов, грунта, щебня. Уточним объём и логистику.
                  </div>
                </div>
                <div className="card">
                  <div className="cardTitle">Тракторы</div>
                  <div className="cardText">
                    Планировка, расчистка, подготовка основания. Учитываем подъезд и состояние грунта.
                  </div>
                </div>
                <div className="card">
                  <div className="cardTitle">Под задачу</div>
                  <div className="cardText">
                    Если нужен смешанный комплект (техника + работы) — соберём решение и согласуем порядок.
                  </div>
                </div>
              </div>

              <div className="sectionCta">
                <a className="btn btnPrimary" href="#contacts">Запросить технику</a>
                <a className="btn btnLink" href="tel:+79533884273">или позвонить: +7 (953) 388-42-73</a>
              </div>
            </div>
          </section>

          <section className="section alt" id="works">
            <div className="container">
              <div className="sectionHead">
                <h2>Асфальтирование и благоустройство</h2>
                <p>Работы по покрытию и подготовке территории: от оценки объёма до сдачи результата.</p>
              </div>

              <div className="cards">
                <div className="card">
                  <div className="cardTitle">Асфальтирование</div>
                  <div className="cardText">
                    Уточняем площадь, основание и требования к слою. Согласуем последовательность работ.
                  </div>
                </div>
                <div className="card">
                  <div className="cardTitle">Благоустройство</div>
                  <div className="cardText">
                    Подготовка площадки, планировка, выравнивание, сопутствующие работы по территории.
                  </div>
                </div>
                <div className="card">
                  <div className="cardTitle">Комплексно</div>
                  <div className="cardText">
                    Когда удобнее сделать «в одном окне»: техника + работы + вывоз — собираем план и согласуем.
                  </div>
                </div>
              </div>

              <div className="sectionCta">
                <a className="btn btnPrimary" href="#contacts">Оставить заявку на работы</a>
              </div>
            </div>
          </section>

          {/* WHY US */}
          <section className="section" id="why">
            <div className="container">
              <div className="sectionHead">
                <h2>Почему с нами удобно</h2>
                <p>Без громких обещаний — только то, что реально влияет на результат и спокойствие клиента.</p>
              </div>

              <div className="grid2">
                <div className="bullet">
                  <div className="bulletTitle">Понятная договорённость</div>
                  <div className="bulletText">
                    Фиксируем объём, формат и ключевые условия — чтобы не было сюрпризов по ходу.
                  </div>
                </div>
                <div className="bullet">
                  <div className="bulletTitle">Техника под задачу</div>
                  <div className="bulletText">
                    Подбираем самосвал/трактор под условия площадки, подъезд и объём работ.
                  </div>
                </div>
                <div className="bullet">
                  <div className="bulletTitle">Связь по делу</div>
                  <div className="bulletText">
                    Держим контакт в процессе: подтверждаем старт, уточняем нюансы, не “пропадаем”.
                  </div>
                </div>
                <div className="bullet">
                  <div className="bulletTitle">Документы по запросу</div>
                  <div className="bulletText">
                    Если нужен договор или закрывающие — заранее согласуем формат и подготовим.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* HOW WE WORK */}
          <section className="section alt" id="how">
            <div className="container">
              <div className="sectionHead">
                <h2>Как работаем</h2>
                <p>Простой процесс: заявка → оценка → выполнение → закрытие.</p>
              </div>

              <div className="steps">
                <div className="step">
                  <div className="stepNum">01</div>
                  <div>
                    <div className="stepTitle">Заявка</div>
                    <div className="stepText">Оставляете телефон или звоните — уточняем задачу и адрес.</div>
                  </div>
                </div>
                <div className="step">
                  <div className="stepNum">02</div>
                  <div>
                    <div className="stepTitle">Оценка</div>
                    <div className="stepText">Согласуем технику/объём, ориентир по срокам и условиям.</div>
                  </div>
                </div>
                <div className="step">
                  <div className="stepNum">03</div>
                  <div>
                    <div className="stepTitle">Выполнение</div>
                    <div className="stepText">Приезжаем в согласованное время, делаем работу, держим связь.</div>
                  </div>
                </div>
                <div className="step">
                  <div className="stepNum">04</div>
                  <div>
                    <div className="stepTitle">Закрытие</div>
                    <div className="stepText">Подтверждаем объём, передаём документы (если нужно), остаёмся на связи.</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CONTACTS */}
          <section className="section" id="contacts">
            <div className="container">
              <div className="contactGrid">
                <div>
                  <h2 className="contactTitle">Контакты</h2>
                  <p className="contactText">
                    Быстрее всего — оставить телефон: заявка придёт в Telegram и мы сразу увидим номер.
                  </p>

                  <div className="contactBox">
                    <div className="contactRow">
                      <div className="contactLabel">Телефон</div>
                      <a className="contactValue" href="tel:+79533884273">+7 (953) 388-42-73</a>
                    </div>
                    <div className="contactRow">
                      <div className="contactLabel">Email</div>
                      <a className="contactValue" href="mailto:oooarmspec1317@mail.ru">
                        oooarmspec1317@mail.ru
                      </a>
                    </div>
                  </div>
                </div>

                <div className="contactForm">
                  <div className="panelTitle">Оставить заявку</div>
                  <div className="panelDesc">Имя и телефон — остальное уточним по звонку.</div>

                  <form onSubmit={submit} className="form">
                    <label className="field">
                      <span>Имя</span>
                      <input
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Как к вам обращаться"
                        autoComplete="name"
                      />
                    </label>

                    <label className="field">
                      <span>Телефон</span>
                      <input
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+7 (___) ___-__-__"
                        inputMode="tel"
                        autoComplete="tel"
                        required
                      />
                    </label>

                    <button className="btn btnPrimary btnFull" type="submit" disabled={status.type === "loading"}>
                      {status.type === "loading" ? "Отправляем..." : "Отправить"}
                    </button>

                    <div className={`status ${status.type}`}>{status.message}</div>

                    <div className="fineprint">
                      Можно и без формы — просто позвоните. Мы на связи.
                    </div>
                  </form>
                </div>
              </div>

              <footer className="footer">
                <div>© {new Date().getFullYear()} АРМСПЕЦ</div>
                <div className="footerRight">
                  <a href="#rent">Аренда</a>
                  <span>·</span>
                  <a href="#works">Работы</a>
                  <span>·</span>
                  <a href="#contacts">Контакты</a>
                </div>
              </footer>
            </div>
          </section>
        </main>
      </div>

      <style jsx>{`
        :global(html, body) { margin: 0; padding: 0; background: #0b0c10; }
        :global(*) { box-sizing: border-box; }
        :global(a) { color: inherit; text-decoration: none; }
        :global(input) { font: inherit; }

        .page { color: #101318; background: #0b0c10; }
        .container { width: min(1120px, calc(100% - 32px)); margin: 0 auto; }

        .header {
          position: sticky; top: 0; z-index: 20;
          backdrop-filter: blur(10px);
          background: rgba(11,12,16,0.7);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .headerInner { display: flex; align-items: center; justify-content: space-between; padding: 14px 0; gap: 16px; }
        .brand { display: flex; align-items: center; gap: 12px; min-width: 220px; }
        .logoMark { width: 36px; height: 36px; border-radius: 10px; background: #d01919; box-shadow: 0 10px 30px rgba(208,25,25,0.25); }
        .brandName { color: #fff; font-weight: 800; letter-spacing: 0.4px; }
        .brandTag { color: rgba(255,255,255,0.72); font-size: 12px; margin-top: 2px; }

        .nav { display: none; gap: 18px; color: rgba(255,255,255,0.78); font-size: 14px; }
        .nav a:hover { color: #fff; }
        .cta { display: flex; align-items: center; gap: 12px; }
        .phone { color: rgba(255,255,255,0.86); font-weight: 600; font-size: 14px; }

        .btn { display: inline-flex; align-items: center; justify-content: center; padding: 12px 14px; border-radius: 12px; border: 1px solid transparent; font-weight: 700; }
        .btnPrimary { background: #d01919; color: #fff; box-shadow: 0 14px 30px rgba(208,25,25,0.25); }
        .btnPrimary:hover { filter: brightness(1.03); }
        .btnGhost { background: rgba(255,255,255,0.06); color: #fff; border-color: rgba(255,255,255,0.16); }
        .btnGhost:hover { background: rgba(255,255,255,0.09); }
        .btnLink { color: rgba(16,19,24,0.8); font-weight: 700; padding: 10px 0; }
        .btnFull { width: 100%; }

        .hero { position: relative; padding: 44px 0 38px; }
        .heroBg {
          position: absolute; inset: 0;
          background:
            radial-gradient(1000px 500px at 20% 10%, rgba(208,25,25,0.30), transparent 55%),
            radial-gradient(900px 500px at 80% 20%, rgba(255,255,255,0.10), transparent 55%),
            linear-gradient(180deg, #0b0c10 0%, #0b0c10 55%, #f6f7fb 56%, #f6f7fb 100%);
          pointer-events: none;
        }
        .heroInner { position: relative; display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 22px; align-items: start; }
        .heroText { color: #fff; padding: 10px 0; }
        .pill { display: inline-flex; padding: 8px 12px; border-radius: 999px; background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.14); color: rgba(255,255,255,0.82); font-size: 13px; }
        h1 { margin: 14px 0 10px; font-size: 44px; line-height: 1.05; letter-spacing: -0.6px; }
        .accent { color: rgba(255,255,255,0.92); }
        .lead { margin: 0 0 18px; color: rgba(255,255,255,0.80); font-size: 16px; line-height: 1.55; max-width: 56ch; }
        .heroBtns { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 18px; }

        .heroMeta { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
        .metaCard { padding: 12px; border-radius: 14px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); }
        .metaTitle { font-weight: 800; color: #fff; font-size: 13px; margin-bottom: 4px; }
        .metaText { color: rgba(255,255,255,0.75); font-size: 12px; line-height: 1.35; }

        .heroPanel {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 18px;
          padding: 16px;
          color: #fff;
          position: sticky;
          top: 86px;
        }
        .panelTitle { font-weight: 900; font-size: 16px; }
        .panelDesc { margin-top: 6px; color: rgba(255,255,255,0.78); font-size: 13px; }

        .form { margin-top: 12px; display: grid; gap: 10px; }
        .field { display: grid; gap: 6px; }
        .field span { color: rgba(255,255,255,0.78); font-size: 12px; }
        .field input {
          width: 100%;
          padding: 12px 12px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.16);
          background: rgba(0,0,0,0.22);
          color: #fff;
          outline: none;
        }
        .field input:focus { border-color: rgba(208,25,25,0.8); box-shadow: 0 0 0 4px rgba(208,25,25,0.18); }
        .fineprint { color: rgba(255,255,255,0.62); font-size: 11px; line-height: 1.35; }

        .status { min-height: 16px; font-size: 12px; color: rgba(255,255,255,0.8); }
        .status.success { color: rgba(150,255,170,0.95); }
        .status.error { color: rgba(255,160,160,0.95); }

        .section { padding: 54px 0; background: #f6f7fb; color: #101318; }
        .section.alt { background: #ffffff; }
        .sectionHead h2 { margin: 0; font-size: 30px; letter-spacing: -0.3px; }
        .sectionHead p { margin: 10px 0 0; color: rgba(16,19,24,0.72); max-width: 70ch; line-height: 1.6; }

        .cards { margin-top: 18px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .card { background: #fff; border: 1px solid rgba(16,19,24,0.08); border-radius: 16px; padding: 16px; box-shadow: 0 10px 25px rgba(16,19,24,0.06); }
        .cardTitle { font-weight: 900; margin-bottom: 6px; }
        .cardText { color: rgba(16,19,24,0.72); line-height: 1.55; }

        .sectionCta { margin-top: 16px; display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }
        .grid2 { margin-top: 18px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
        .bullet { background: #fff; border: 1px solid rgba(16,19,24,0.08); border-radius: 16px; padding: 16px; }
        .bulletTitle { font-weight: 900; margin-bottom: 6px; }
        .bulletText { color: rgba(16,19,24,0.72); line-height: 1.55; }

        .steps { margin-top: 18px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
        .step { background: #fff; border: 1px solid rgba(16,19,24,0.08); border-radius: 16px; padding: 16px; display: flex; gap: 12px; }
        .stepNum { width: 44px; height: 44px; border-radius: 14px; background: rgba(208,25,25,0.10); display: grid; place-items: center; font-weight: 900; color: #d01919; }
        .stepTitle { font-weight: 900; margin-bottom: 4px; }
        .stepText { color: rgba(16,19,24,0.72); line-height: 1.55; }

        .contactGrid { display: grid; grid-template-columns: 1fr 0.9fr; gap: 14px; align-items: start; }
        .contactTitle { margin: 0; font-size: 30px; letter-spacing: -0.3px; }
        .contactText { margin-top: 10px; color: rgba(16,19,24,0.72); line-height: 1.6; }
        .contactBox { margin-top: 14px; background: #fff; border: 1px solid rgba(16,19,24,0.08); border-radius: 16px; padding: 14px; }
        .contactRow { display: flex; justify-content: space-between; gap: 12px; padding: 10px 0; border-bottom: 1px solid rgba(16,19,24,0.06); }
        .contactRow:last-child { border-bottom: none; }
        .contactLabel { color: rgba(16,19,24,0.65); }
        .contactValue { font-weight: 900; color: #101318; }

        .contactForm {
          background: #fff;
          border: 1px solid rgba(16,19,24,0.08);
          border-radius: 18px;
          padding: 16px;
          box-shadow: 0 10px 25px rgba(16,19,24,0.06);
        }
        .contactForm .panelTitle { color: #101318; }
        .contactForm .panelDesc { color: rgba(16,19,24,0.72); }
        .contactForm .field span { color: rgba(16,19,24,0.70); }
        .contactForm .field input {
          background: #fff;
          border-color: rgba(16,19,24,0.14);
          color: #101318;
        }
        .contactForm .status { color: rgba(16,19,24,0.72); }
        .contactForm .status.success { color: #15803d; }
        .contactForm .status.error { color: #b91c1c; }
        .contactForm .fineprint { color: rgba(16,19,24,0.6); }

        .footer { margin-top: 34px; padding-top: 18px; border-top: 1px solid rgba(16,19,24,0.10); display: flex; justify-content: space-between; color: rgba(16,19,24,0.65); font-size: 13px; }
        .footerRight { display: flex; gap: 8px; align-items: center; }
        .footerRight a:hover { color: #101318; }

        @media (max-width: 980px) {
          .nav { display: none; }
          .heroInner { grid-template-columns: 1fr; }
          .heroPanel { position: relative; top: 0; }
          .heroMeta { grid-template-columns: 1fr; }
          .cards { grid-template-columns: 1fr; }
          .grid2 { grid-template-columns: 1fr; }
          .steps { grid-template-columns: 1fr; }
          .contactGrid { grid-template-columns: 1fr; }
          h1 { font-size: 34px; }
        }
        @media (min-width: 1024px) {
          .nav { display: flex; }
        }
      `}</style>
    </>
  );
}
