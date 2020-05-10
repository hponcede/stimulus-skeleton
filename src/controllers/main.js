import {
	Controller
} from "stimulus"
import jsxElem, { render } from "jsx-no-react";

import store from "~/store"


const Element = (props) => (
	<p className="p-16 text-lg text-center" data-action="click->main#increment">
		{ props.text }
		<em data-target="main.counter">{props.counter}</em>
	</p>
)


export default class extends Controller {

	static targets = [
		'element',
		'counter',
	]

	storeListener

	connect() {
		const string = "Bonjour le monde ! Click me."

		const el = Element({
			text: string,
			counter: store.state.counter
		})
		// ou el = <Element text={string} counter={store.state.counter}/>

		this.elementTarget.appendChild(el)

		this.storeListener = store.on('set', (store, property, newVal, oldVal) => {
			const target = this.targets.find(property)

			if (target) {
				target.textContent = newVal
			}

		})

	}

	disconnect() {
		this.storeListener()
	}

	increment() {
		store.commit('increment')
	}
}