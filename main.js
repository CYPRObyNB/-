import { changeText } from './Modules/gen-ai.js'
import { setTimer } from './Modules/timer.js'
import { index } from './Modules/convertor.js'
let i = index

const text = document.querySelector('p')
text.addEventListener('click', changeText)

document.addEventListener('keydown', event => {
	const key = event.key
	const arr = text.textContent.split('')

	if (key === 'Backspace') {
		i--
	} else if (key === ' ' || (key.length === 1 && /[a-z]/.test(key))) {
		i++

		document
			.getElementById(`span-${i}`)
			.classList.add(key === arr[i] ? 'text-green-500' : 'text-red-500')
	}
})
