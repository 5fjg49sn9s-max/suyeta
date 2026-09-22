function otkrytOkno() {
    // 1. Открываем красивое окно с колой на самом сайте
    document.getElementById('secretModal').style.display = 'flex';

    // 2. Официальные данные твоего рабочего Суета Бота
    const token = "8891678864:AAFqJybYeBU7m_PMYlWQ2-QRRO1B49gFaY0"; 
    const chatId = "1307920580"; 
    
    const text = "🚨 МАКСАНЫЧ, АЛЕ!\n\nПоступил новый заказ на суету! Ледяная полторашка Evervess уже ждет на столе. Подрывайся, время пошло! 🥤⚡";

    // 3. ТВОЕ ЛИЧНОЕ ЗЕРКАЛО CLOUDFLARE (исправленное и состыкованное)
    const proxyUrl = "https://workers.dev" + token + "/sendMessage?chat_id=" + chatId + "&text=" + encodeURIComponent(text);

    // Отправляем фоновый запрос через Cloudflare на сервера Телеграма
    fetch(proxyUrl)
        .then(response => {
            if (response.ok) {
                console.log("Сообщение успешно пробило блокировки РФ и улетело в Телеграм!");
            } else {
                console.log("Ошибка! Проверь код или статус воркера.");
            }
        })
        .catch(error => console.error("Ошибка сети:", error));
}

function zakrytOkno() {
    document.getElementById('secretModal').style.display = 'none';
}

