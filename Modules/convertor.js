const text = document.querySelector('p')

export let index = 0

export function textConverter() {
	const arr = text.textContent.split('')
	text.textContent = ''

	arr.forEach((el, i) => {
		const span = document.createElement('span')
		span.textContent = el
		span.id = `span-${i}`
		text.appendChild(span)
	})

	index = 0
}
