export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">

{/* Sidebar (Left) */}
<aside className="lg:col-span-1 flex flex-col gap-4">

  {/* Об'єднаний блок навігації */}
  <div className="bg-white rounded-2xl p-4 shadow">
    <h2 className="text-xl font-semibold mb-4">TraderPilot</h2>
    <nav className="space-y-2">
      <button className="block w-full text-left">📘 Journal (Crypto)</button>
      <button className="block w-full text-left">📕 Journal (Forex)</button>
      <button className="block w-full text-left">🧩 Scenarios</button>
      <button className="block w-full text-left">📊 Market</button>
      <button className="block w-full text-left">🧠 AI Analytics</button>
      <button className="block w-full text-left">📒 План</button>
      <button className="block w-full text-left">👤 Profile</button>
      <button className="block w-full text-left">⚙️ Settings</button>
      <button className="block w-full text-left">👥 Users</button>
    </nav>
  </div>

  {/* Контейнер, що розтягується, для останніх двох блоків */}
  <div className="flex-1 flex flex-col justify-between gap-4">
    
    {/* Топові моделі */}
    <div className="bg-white rounded-2xl p-4 shadow h-full">
      <h3 className="font-semibold mb-2">🧠 Топові моделі</h3>
      <p>Найкращі моделі за обраний період:</p>
      <select className="mt-2 w-full border rounded px-2 py-1">
        <option>День</option>
        <option>Тиждень</option>
        <option>Місяць</option>
      </select>
    </div>

    {/* План ризику */}
    <div className="bg-white rounded-2xl p-4 shadow h-full">
      <h3 className="font-semibold mb-2">📍 План ризику / таргету</h3>
      <p>Прогрес виконання плану, ризик/дохідність</p>
    </div>

  </div>
</aside>

        {/* Main Content */}
        <section className="lg:col-span-4 space-y-4">

          {/* Top Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-4 shadow">
              <h3 className="font-semibold mb-2">📊 Загальна статистика</h3>
              <p>win-rate, прибуток, активність по Crypto & Forex...</p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow">
              <h3 className="font-semibold mb-2">⚪ Обраний ринок</h3>
              <p><input type="radio" name="market" /> Crypto <input type="radio" name="market" className="ml-2" /> Forex</p>
            </div>
          </div>

          {/* AI-аналітика */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-4 shadow">
              <h3 className="font-semibold mb-2">🧠 AI-аналітика Crypto</h3>
              <p>Тренд, структура, графік №1 (BTC/ETH)...</p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow">
              <h3 className="font-semibold mb-2">🧠 AI-аналітика Forex</h3>
              <p>Тренд, структура, графік №1 (EUR/USD)...</p>
            </div>
          </div>

          {/* Щоденники */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-4 shadow">
              <h3 className="font-semibold mb-2">📘 Щоденник Crypto</h3>
              <p>Останні угоди на Binance...</p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow">
              <h3 className="font-semibold mb-2">📕 Щоденник Forex</h3>
              <p>Останні угоди на Prop / брокерах...</p>
            </div>
          </div>

          {/* Сценарії та Угоди */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-4 shadow">
              <h3 className="font-semibold mb-2">🧩 Сценарії</h3>
              <p>Crypto/Forex, моделі, графік №2...</p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow">
              <h3 className="font-semibold mb-2">📌 Поточні угоди</h3>
              <p>Відкриті позиції на обох ринках, графік №4...</p>
            </div>
          </div>

          {/* Telegram + Users */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-4 shadow">
              <h3 className="font-semibold mb-2">📩 Telegram</h3>
              <p>статус, підключення...</p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow">
              <h3 className="font-semibold mb-2">👥 Користувачі</h3>
              <p>аватари, ID, роль, бот...</p>
            </div>
          </div>

          {/* Графіки */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-4 shadow h-64">
              <h3 className="font-semibold mb-2">📉 Графік активу</h3>
              <p>BTC/ETH або EUR/USD — вручну обраний</p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow h-64">
              <h3 className="font-semibold mb-2">📈 Графік угоди</h3>
              <p>Поточна угода — auto update або ручне перемикання</p>
            </div>
          </div>
{/* Нижній блок: Швидкий доступ */}
<div className="bg-white rounded-2xl p-4 shadow mt-4">
  <h3 className="font-semibold mb-2">📌 Швидкий доступ</h3>
  <p>Тут буде кнопки / елементи для швидкого перемикання між сценаріями, ринками або налаштуваннями.</p>
  <div className="mt-2 flex flex-wrap gap-2">
    <button className="px-3 py-1 bg-blue-100 rounded hover:bg-blue-200">BTC/ETH</button>
    <button className="px-3 py-1 bg-green-100 rounded hover:bg-green-200">EUR/USD</button>
    <button className="px-3 py-1 bg-yellow-100 rounded hover:bg-yellow-200">Сценарії</button>
    <button className="px-3 py-1 bg-pink-100 rounded hover:bg-pink-200">Налаштування</button>
  </div>
</div>



        </section>

        {/* Right Sidebar (Новини + Trailer Hub) */}
        <aside className="lg:col-span-1 flex flex-col justify-between gap-4">
          <div className="bg-white rounded-2xl p-4 shadow h-full">
            <h3 className="font-semibold mb-2">📰 Новини</h3>
            <p>Останні події на ринку, релізи, новини...</p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow">
            <h3 className="font-semibold mb-2">⚡ Trailer Hub</h3>
            <p>Події, сигнали, лог угод, внутрішня активність трейдера...</p>
          </div>
        </aside>
      </div>
    </main>
  )
}

