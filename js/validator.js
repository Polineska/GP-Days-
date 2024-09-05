document.getElementById('appealForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Получаем значение email
    const email = document.getElementById('email');
    let valid = true;

    // Сбрасываем предыдущее состояние валидации
    email.classList.remove('is-invalid', 'is-valid');

    // Регулярное выражение для проверки email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Проверяем корректность email через регулярное выражение
    if (!emailPattern.test(email.value)) {
      email.classList.add('is-invalid');
      valid = false;
    } else {
      email.classList.add('is-valid');
    }

    // Если форма корректна, отправляем
    if (valid && this.checkValidity()) {
      alert('Форма успешно отправлена');
      // Здесь форма может быть отправлена на сервер или обработана как нужно
      // this.submit();
    } else {
      event.stopPropagation();
      this.classList.add('was-validated');
    }
  });
