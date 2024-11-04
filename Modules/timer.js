const article = document.querySelector('article')

export function setTimer(seconds) {
	if (!article.querySelector('b')) {
		const timer = document.createElement('b')
		timer.textContent = seconds
		timer.className = 'text-[1.5rem] md:text-[1.9rem] transition duration-500'
		article.appendChild(timer)

		const interval = setInterval(() => timer.textContent--, 1000)
		setTimeout(() => {
			clearInterval(interval)
			timer.textContent = `${
				document.getElementsByClassName('text-green-500').length
			} characters / ${seconds} seconds`
		}, seconds * 1000)
	}
}
