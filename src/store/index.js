import Dragonbinder from 'dragonbinder'


let initialState = {
	counter: 0
}

let storage = false

if (process.env.STORAGE_NAME && window && window.localStorage) {
	try {
		storage = window.localStorage
		const stored = JSON.parse(storage.getItem(process.env.STORAGE_NAME))
		if (stored) {
			initialState = {...stored}
		}
	}
	catch (err) {}
}

const store = new Dragonbinder({
	state: initialState,
	mutations: {
		increment(state) {
			state.counter++
		}
	}
});

if (storage) {
	store.on('set', (store) => {
		storage.setItem(process.env.STORAGE_NAME, JSON.stringify(store.state))
	})
}

export default store