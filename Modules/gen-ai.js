import { GoogleGenerativeAI } from 'https://esm.run/@google/generative-ai'
import { textConverter } from './convertor.js'
import { setTimer } from './timer.js'

const API_KEY = 'AIzaSyCBd0R20DJHuZ0bxjGP_obtUylEjinnXuw'
const genAI = new GoogleGenerativeAI(API_KEY)
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

export async function changeText() {
	const text = await model.generateContent(
		'write a text on any topic without punctuation marks up to 100 words'
	)
	const response = await text.response
	const result = await response.text().toLowerCase()

	document.querySelector('p').textContent = result
	textConverter()

	setTimer(60)
}
