export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false });
  }

  const { name = "", phone = "" } = req.body || {};

  if (!phone || String(phone).trim().length < 6) {
    return res.status(400).json({ ok: false });
  }

  // Пока просто принимаем заявку.
  // Дальше сюда подключим Telegram.
  return res.status(200).json({ ok: true });
}
