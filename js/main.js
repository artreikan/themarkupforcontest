$(document).ready(function () {

	// Отменяем действие по умолчанию у всех ссылок
	$('a, button').click(function (e) {
		e.preventDefault();
	});

	// Анимация для прогресс баров
	var progressBar = $('.progress-bar'),
		progressBarVal = $('.progress-bar-value');

	$(progressBar).each(function () {
		$(this).find(progressBarVal).animate({
			width: $(progressBarVal).attr('data-percent')
		}, 700);
	});
});