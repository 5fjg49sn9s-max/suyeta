function zakrytOkno() {
    document.getElementById('secretModal').style.display = 'none';
}

function otkrytOkno() {
    // 1. Открываем красивое окно с колой на самом сайте
    document.getElementById('secretModal').style.display = 'flex';

    // 2. Официальные данные твоего рабочего Суета Бота
    const token = "8891678864:AAFqJybYeBU7m_PMYlWQ2-QRRO1B49gFaY0"; 
    const chatId = "1307920580"; 
    
    // Текст сплошным куском без опасных переносов строк
    const text = "🚨 МАКСАНЫЧ, АЛЕ! Поступил новый заказ на суету! Ледяная полторашка Evervess уже ждет на столе. Подрывайся, время пошло! 🥤⚡";

    // 3. Собираем прямую ссылку через твое личное зеркало Cloudflare
    const proxyUrl = "https://workers.dev" + token + "/sendMessage?chat_id=" + chatId + "&text=" + encodeURIComponent(text);

    // БРОНЕБОЙНЫЙ МЕТОД: Создаем невидимую картинку и пихаем туда ссылку.
    // Браузер думает, что просто качает картинку, и запрос со свистом пролетает в Cloudflare!
    const pingImg = new Image();
    pingImg.src = proxyUrl;

    console.log("Запрос отправлен через скрытый пинг!");
}

function zakrytOkno() {
    document.getElementById('secretModal').style.display = 'none';
}
