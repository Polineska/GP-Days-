  // Получаем ссылку по ID
  const link = document.getElementById('good-link');

  // Добавляем обработчик события 'click'
  link.addEventListener('click', function(event) {
      // Предотвращаем переход по ссылке
      event.preventDefault();

      // Выводим alert с сообщением
      alert('Ссылка успешно нажата!');
  });