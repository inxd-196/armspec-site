import Head from "next/head";
import { useMemo } from "react";

export default function Home() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <>
      <Head>
        <title>АРМСПЕЦ — аренда спецтехники и асфальтирование</title>
        <meta
          name="description"
          content="АРМСПЕЦ: аренда самосвалов и тракторов, асфальтирование и благоустройство. Быстрая заявка — имя и телефон."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Шрифт — современный */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="page">
        {/* Top bar */}
        <header className="header">
          <div className="wrap headerInner">
            <a className="brand" href="#top" aria-label="АРМСПЕЦ">
              <img src="/logo.png" alt="АРМСПЕЦ" className="logoImg" />
              <div className="brandText">
                <div className="brandName">АРМСПЕЦ</div>
                <div className="brandSub">строительная компания</div>
              </div>
            </a>

            <nav className="nav">
              <a href="#rent">Аренда техники</a>
              <a href="#works">Работы</a>
              <a href="#why">Почему мы</a>
              <a href="#how">Как работаем</a>
              <a href="#contacts">Контакты</a>
            </nav>

            <div className="headerCta">
              <a className="phone" href="tel:+79533884273">
                +7 (953) 388-42-73
              </a>
              <a className="btn btnPrimary" href="#contacts">
                Оставить заявку
              </a>
            </div>
          </div>
        </header>

        <main id="top">
          {/* HERO */}
          <section className="hero">
            <div className="wrap heroInner">
              <div className="heroLeft">
                <div className="kicker">Самосвалы • Тракторы • Асфальтирование • Благоустройство</div>

                <h1 className="h1">
                  Два направления <span className="accent">в одном месте</span>
                </h1>

                <p className="lead">
                  Аренда спецтехники и строительные работы. Оставьте контакты — уточним задачу и предложим понятный
                  вариант.
                </p>

                <div className="heroActions">
                  <a className="btn btnPrimary" href="#rent">
                    Аренда спецтехники
                  </a>
                  <a className="btn btnSoft" href="#works">
                    Асфальтирование и благоустройство
                  </a>
                </div>

                <div className="trustRow">
                  <div className="trustItem">
                    <div className="trustTitle">Быстрый контакт</div>
                    <div className="trustText">Мы получаем заявку мгновенно и оперативно связываемся с вами.</div>
                  </div>
                  <div className="trustItem">
                    <div className="trustTitle">Понятные условия</div>
                    <div className="trustText">Согласуем объём, формат, порядок работ</div>
                  </div>
                  <div className="trustItem">
                    <div className="trustTitle">По делу</div>
                    <div className="trustText">Конкретные условия и понятные сроки.</div>
                  </div>
                </div>
              </div>

              <div className="heroRight">
                <div className="heroCard">
                  <div className="cardTitle">Быстрая заявка</div>
                  <div className="cardDesc">Имя и телефон — и мы перезвоним.</div>

                  <form action="https://formspree.io/f/meeloypa" method="POST" className="form">
                    <input type="hidden" name="_next" value="https://armspec.ru/thanks" />
                    <input type="hidden" name="_redirect" value="https://armspec.ru/thanks" />
                    <label className="field">
                      <span>Имя</span>
                      <input name="name" placeholder="Как к вам обращаться" autoComplete="name" />
                    </label>

                    <label className="field">
                      <span>Телефон</span>
                      <input
                        name="phone"
                        placeholder="+7 (___) ___-__-__"
                        inputMode="tel"
                        autoComplete="tel"
                        required
                      />
                    </label>

                    <button className="btn btnPrimary btnFull" type="submit">
                      Отправить
                    </button>

                    <div className="fineprint">
                      Нажимая «Отправить», вы соглашаетесь на обработку контактных данных для связи.
                    </div>
                  </form>
                </div>

                {/* ФОТО-заглушка: позже вставим реальное фото */}
                <div className="heroPhoto" aria-hidden>
                  <div className="heroPhotoOverlay" />
                  <div className="heroPhotoLabel">Фото техники</div>
                </div>
              </div>
            </div>
          </section>

          {/* RENT */}
          <section className="section" id="rent">
            <div className="wrap">
              <div className="sectionHead">
            <div className="sectionBanner" style={{ backgroundImage: "url('/rent.jpg')" }} />
            
                <h2>Аренда спецтехники</h2>
                <p>Самосвалы и тракторы. Подберём технику под условия площадки и задачу.</p>
              </div>

              <div className="grid3">
                <div className="tile">
                  <div className="tileTop">
                    <div className="tileTitle">Самосвалы</div>
                    <div className="chip">Перевозка/вывоз</div>
                  </div>
                  <div className="tileText">Грунт, щебень, сыпучие материалы. Уточним объём, плечо и порядок работ.</div>
                </div>

                <div className="tile">
                  <div className="tileTop">
                    <div className="tileTitle">Тракторы</div>
                    <div className="chip">Планировка</div>
                  </div>
                  <div className="tileText">Подготовка территории, расчистка, выравнивание. Учитываем подъезд и грунт.</div>
                </div>

                <div className="tile">
                  <div className="tileTop">
                    <div className="tileTitle">Комплекс</div>
                    <div className="chip">Техника + работы</div>
                  </div>
                  <div className="tileText">
                    Если удобнее “в одном окне”: техника, вывоз, подготовка — соберём план и согласуем.
                  </div>
                </div>
              </div>

              <div className="sectionActions">
                <a className="btn btnPrimary" href="#contacts">
                  Запросить технику
                </a>
                <a className="btn btnLink" href="tel:+79533884273">
                  или позвонить: +7 (953) 388-42-73
                </a>
              </div>
            </div>
          </section>

          {/* WORKS */}
          <section className="section sectionAlt" id="works">
            <div className="wrap">
              <div className="sectionHead">
            <div className="sectionBanner" style={{ backgroundImage: "url('/works.jpg')" }} />
                <h2>Асфальтирование и благоустройство</h2>
                <p>Оцениваем объём и условия, согласуем порядок работ.</p>
              </div>

              <div className="grid3">
                <div className="tile">
                  <div className="tileTop">
                    <div className="tileTitle">Асфальтирование</div>
                    <div className="chip">Покрытие</div>
                  </div>
                  <div className="tileText">Уточняем площадь, основание и требования. Согласуем последовательность работ.</div>
                </div>

                <div className="tile">
                  <div className="tileTop">
                    <div className="tileTitle">Благоустройство</div>
                    <div className="chip">Территория</div>
                  </div>
                  <div className="tileText">Планировка, подготовка площадки, сопутствующие работы по территории.</div>
                </div>

                <div className="tile">
                  <div className="tileTop">
                    <div className="tileTitle">Подготовка</div>
                    <div className="chip">Основание</div>
                  </div>
                  <div className="tileText">Согласуем базу и этапы.</div>
                </div>
              </div>

              <div className="sectionActions">
                <a className="btn btnPrimary" href="#contacts">
                  Оставить заявку на работы
                </a>
              </div>
            </div>
          </section>

          {/* WHY */}
          <section className="section" id="why">
            <div className="wrap">
              <div className="sectionHead">
                <h2>Почему с нами удобно</h2>
                <p>Без громких обещаний — только то, что реально помогает заказчику.</p>
              </div>

              <div className="grid2">
                <div className="note">
                  <div className="noteTitle">Понятная договорённость</div>
                  <div className="noteText">
                    Фиксируем объём и условия. Если есть нюансы по срокам/доступу — говорим заранее.
                  </div>
                </div>
                <div className="note">
                  <div className="noteTitle">Техника под задачу</div>
                  <div className="noteText">Подбираем вариант под площадку и объём, а не “что свободно”.</div>
                </div>
                <div className="note">
                  <div className="noteTitle">Связь по делу</div>
                  <div className="noteText">Подтверждаем старт, уточняем детали в процессе.</div>
                </div>
                <div className="note">
                  <div className="noteTitle">Документы по запросу</div>
                  <div className="noteText">
                    Если нужен договор/закрывающие — заранее согласуем формат и подготовим.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* HOW */}
          <section className="section sectionAlt" id="how">
            <div className="wrap">
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
                    <div className="stepText">
                      Согласуем технику/объём и порядок работ. Если нужно — договоримся о выезде.
                    </div>
                  </div>
                </div>
                <div className="step">
                  <div className="stepNum">03</div>
                  <div>
                    <div className="stepTitle">Выполнение</div>
                    <div className="stepText">Работаем в согласованное время, держим связь и уточняем детали по ходу.</div>
                  </div>
                </div>
                <div className="step">
                  <div className="stepNum">04</div>
                  <div>
                    <div className="stepTitle">Закрытие</div>
                    <div className="stepText">
                      Подтверждаем объём и формат, передаём документы (если нужно), остаёмся на связи.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CONTACTS */}
          <section className="section" id="contacts">
            <div className="wrap">
              <div className="contact">
                <div className="contactLeft">
                  <h2>Контакты</h2>
                  <p></p>

                  <div className="contactBox">
                    <div className="row">
                      <div className="muted">Телефон</div>
                      <a className="strong" href="tel:+79533884273">
                        +7 (953) 388-42-73
                      </a>
                    </div>
                    <div className="row">
                      <div className="muted">Email</div>
                      <a className="strong" href="mailto:oooarmspec1317@mail.ru">
                        oooarmspec1317@mail.ru
                      </a>
                    </div>
                  </div>

                  <div className="smallMuted">* </div>
                </div>

                <div className="contactRight">
                  <div className="heroCard">
                    <div className="cardTitle">Оставить заявку</div>
                    <div className="cardDesc">Имя и телефон — остальное уточним по звонку.</div>

                    <form action="https://formspree.io/f/meeloypa" method="POST" className="form">
            <input type="hidden" name="_next" value="https://armspec.ru/thanks" />
            <input type="hidden" name="_redirect" value="https://armspec.ru/thanks" />
                      <label className="field">
                        <span>Имя</span>
                        <input name="name" placeholder="Как к вам обращаться" autoComplete="name" />
                      </label>

                      <label className="field">
                        <span>Телефон</span>
                        <input
                          name="phone"
                          placeholder="+7 (___) ___-__-__"
                          inputMode="tel"
                          autoComplete="tel"
                          required
                        />
                      </label>

                      <button className="btn btnPrimary btnFull" type="submit">
                        Отправить
                      </button>

                      <div className="fineprint"> </div>
                    </form>
                  </div>
                </div>
              </div>

              <footer className="footer">
                <div>© {year} АРМСПЕЦ</div>
                <div className="footerLinks">
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
      .sectionBanner{
  margin-top: 14px;
  height: 320px;              /* было мало — поэтому режет */
  border-radius: 18px;
  border: 1px solid rgba(11,18,32,0.10);
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 50%;  /* ВОТ ЭТО ГЛАВНОЕ */
}
        :global(html, body) { margin: 0; padding: 0; background: #ffffff; }
        :global(*) { box-sizing: border-box; }
        :global(a) { color: inherit; text-decoration: none; }
        :global(input) { font: inherit; }
        :global(body) { font-family: Manrope, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; color: #0b1220; }

        .wrap { width: min(1120px, calc(100% - 32px)); margin: 0 auto; }
        .page { background: #ffffff; }

        /* Header */
        .header {
          position: sticky; top: 0; z-index: 30;
          background: rgba(255,255,255,0.86);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(11,18,32,0.08);
        }
        .headerInner { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 14px 0; }
        .brand { display: flex; gap: 12px; align-items: center; }
        .brandName { font-weight: 900; letter-spacing: 0.2px; }
        .brandSub { font-size: 12px; color: rgba(11,18,32,0.60); margin-top: 2px; }

        .nav { display: none; gap: 18px; color: rgba(11,18,32,0.72); font-size: 14px; font-weight: 700; }
        .nav a:hover { color: #0b1220; }

        .headerCta { display: flex; align-items: center; gap: 12px; }
        .phone { font-weight: 900; color: rgba(11,18,32,0.86); font-size: 14px; }

        .btn {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 12px 14px;
          border-radius: 12px;
          border: 1px solid rgba(11,18,32,0.12);
          font-weight: 900;
          transition: transform .08s ease, background .12s ease, border-color .12s ease;
        }
        .btn:active { transform: translateY(1px); }
        .btnPrimary { background: #d01919; border-color: #d01919; color: #fff; box-shadow: 0 14px 28px rgba(208,25,25,0.18); }
        .btnPrimary:hover { background: #b71414; border-color: #b71414; }
        .btnSoft { background: rgba(11,18,32,0.04); color: #0b1220; }
        .btnSoft:hover { background: rgba(11,18,32,0.07); }
        .btnLink { border: none; padding: 10px 0; color: rgba(11,18,32,0.70); font-weight: 900; }
        .btnFull { width: 100%; }

        /* Hero */
        .hero { padding: 44px 0 18px; background: linear-gradient(180deg, #ffffff 0%, #ffffff 55%, #f6f7fb 56%, #f6f7fb 100%); }
        .heroInner { display: grid; grid-template-columns: 1.12fr 0.88fr; gap: 18px; align-items: start; }
        .heroLeft { padding: 12px 0; }
        .kicker {
          display: inline-flex;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(11,18,32,0.04);
          border: 1px solid rgba(11,18,32,0.10);
          color: rgba(11,18,32,0.72);
          font-size: 13px;
          font-weight: 800;
        }
        .h1 {
          margin: 14px 0 10px;
          font-size: 48px;
          line-height: 1.04;
          letter-spacing: -1.2px;
          font-weight: 900;
        }
        .accent { color: #d01919; }
        .lead { margin: 0 0 18px; max-width: 62ch; color: rgba(11,18,32,0.72); font-size: 16px; line-height: 1.65; }
        .heroActions { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 16px; }

        .trustRow { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
        .trustItem { background: #fff; border: 1px solid rgba(11,18,32,0.10); border-radius: 16px; padding: 12px; }
        .trustTitle { font-weight: 900; font-size: 13px; margin-bottom: 4px; }
        .trustText { color: rgba(11,18,32,0.68); font-size: 12px; line-height: 1.35; }

        .heroRight { display: grid; gap: 12px; }
        .heroCard {
          background: #fff;
          border: 1px solid rgba(11,18,32,0.12);
          border-radius: 18px;
          padding: 16px;
          box-shadow: 0 18px 40px rgba(11,18,32,0.08);
        }
        .cardTitle { font-weight: 900; font-size: 16px; }
        .cardDesc { margin-top: 6px; color: rgba(11,18,32,0.70); font-size: 13px; }

        .form { margin-top: 12px; display: grid; gap: 10px; }
        .field { display: grid; gap: 6px; }
        .field span { color: rgba(11,18,32,0.70); font-size: 12px; font-weight: 800; }
        .field input {
          width: 100%;
          padding: 12px 12px;
          border-radius: 12px;
          border: 1px solid rgba(11,18,32,0.14);
          background: #fff;
          color: #0b1220;
          outline: none;
        }
        .field input:focus { border-color: rgba(208,25,25,0.8); box-shadow: 0 0 0 4px rgba(208,25,25,0.14); }

        .fineprint { color: rgba(11,18,32,0.55); font-size: 11px; line-height: 1.35; }

        .heroPhoto {
  height: 220px;
  border-radius: 18px;
  border: 1px solid rgba(11,18,32,0.12);
  overflow: hidden;
  background-image: url('/hero.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
}
.heroPhotoLabel { display: none; }
        .heroPhotoOverlay {
          position: absolute; inset: 0;
          background: radial-gradient(700px 220px at 30% 20%, rgba(208,25,25,0.18), transparent 55%);
          pointer-events: none;
        }
        .heroPhotoLabel {
          position: absolute; left: 14px; bottom: 12px;
          padding: 8px 10px;
          border-radius: 999px;
          background: rgba(255,255,255,0.86);
          border: 1px solid rgba(11,18,32,0.10);
          font-weight: 900;
          font-size: 12px;
        }

        /* Sections */
        .section { padding: 54px 0; background: #f6f7fb; }
        .sectionAlt { background: #ffffff; }
        .sectionHead h2 { margin: 0; font-size: 30px; letter-spacing: -0.4px; font-weight: 900; }
        .sectionHead p { margin: 10px 0 0; color: rgba(11,18,32,0.70); max-width: 74ch; line-height: 1.65; }

        .grid3 { margin-top: 18px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .tile { background: #fff; border: 1px solid rgba(11,18,32,0.10); border-radius: 18px; padding: 16px; box-shadow: 0 14px 30px rgba(11,18,32,0.06); }
        .tileTop { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 10px; }
        .tileTitle { font-weight: 900; }
        .chip {
          padding: 7px 10px;
          border-radius: 999px;
          background: rgba(208,25,25,0.08);
          color: #b71414;
          border: 1px solid rgba(208,25,25,0.14);
          font-weight: 900;
          font-size: 12px;
        }
        .tileText { color: rgba(11,18,32,0.70); line-height: 1.6; }

        .sectionActions { margin-top: 16px; display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }

        .grid2 { margin-top: 18px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
        .note { background: #fff; border: 1px solid rgba(11,18,32,0.10); border-radius: 18px; padding: 16px; }
        .noteTitle { font-weight: 900; margin-bottom: 6px; }
        .noteText { color: rgba(11,18,32,0.70); line-height: 1.6; }

        .steps { margin-top: 18px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
        .step { background: #fff; border: 1px solid rgba(11,18,32,0.10); border-radius: 18px; padding: 16px; display: flex; gap: 12px; }
        .stepNum { width: 44px; height: 44px; border-radius: 14px; background: rgba(208,25,25,0.10); display: grid; place-items: center; font-weight: 900; color: #d01919; }
        .stepTitle { font-weight: 900; margin-bottom: 4px; }
        .stepText { color: rgba(11,18,32,0.70); line-height: 1.6; }

        .contact { margin-top: 18px; display: grid; grid-template-columns: 1fr 0.95fr; gap: 14px; align-items: start; }
        .contact p { margin-top: 10px; color: rgba(11,18,32,0.70); line-height: 1.65; }

        .contactBox { margin-top: 14px; background: #fff; border: 1px solid rgba(11,18,32,0.10); border-radius: 18px; padding: 14px; }
        .row { display: flex; justify-content: space-between; gap: 12px; padding: 10px 0; border-bottom: 1px solid rgba(11,18,32,0.06); }
        .row:last-child { border-bottom: none; }
        .muted { color: rgba(11,18,32,0.60); }
        .strong { font-weight: 900; }

        .smallMuted { margin-top: 10px; color: rgba(11,18,32,0.55); font-size: 12px; line-height: 1.45; }

        .footer { margin-top: 34px; padding-top: 18px; border-top: 1px solid rgba(11,18,32,0.10); display: flex; justify-content: space-between; color: rgba(11,18,32,0.60); font-size: 13px; }
        .footerLinks { display: flex; gap: 8px; align-items: center; }
        .footerLinks a:hover { color: #0b1220; }

        @media (max-width: 980px) {
          .nav { display: none; }
          .heroInner { grid-template-columns: 1fr; }
          .trustRow { grid-template-columns: 1fr; }
          .grid3 { grid-template-columns: 1fr; }
          .grid2 { grid-template-columns: 1fr; }
          .steps { grid-template-columns: 1fr; }
          .contact { grid-template-columns: 1fr; }
          .h1 { font-size: 36px; }
        }
        @media (min-width: 1024px) {
          .nav { display: flex; }
        }

        .logoImg {
          height: 34px;
          width: auto;
          display: block;
        }
      `}</style>
    </>
  );
}
