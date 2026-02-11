import Head from "next/head";

export default function Thanks() {
  return (
    <>
      <Head>
        <title>Заявка отправлена — АРМСПЕЦ</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#ffffff",
        padding: "24px",
        fontFamily: "Manrope, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
        color: "#0b1220"
      }}>
        <div style={{
          width: "min(720px, 100%)",
          border: "1px solid rgba(11,18,32,0.12)",
          borderRadius: "18px",
          padding: "22px",
          boxShadow: "0 18px 40px rgba(11,18,32,0.08)"
        }}>
          <h1 style={{ margin: 0, fontSize: "28px" }}>Спасибо! Заявка отправлена.</h1>
          <p style={{ marginTop: "10px", color: "rgba(11,18,32,0.70)", lineHeight: 1.6 }}>
            Мы свяжемся с вами по телефону в ближайшее время.
          </p>

          <a href="/" style={{
            display: "inline-flex",
            marginTop: "14px",
            padding: "12px 14px",
            borderRadius: "12px",
            background: "#d01919",
            color: "#fff",
            fontWeight: 900,
            textDecoration: "none"
          }}>
            Вернуться на главную
          </a>
        </div>
      </div>
    </>
  );
}
