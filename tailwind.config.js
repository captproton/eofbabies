module.exports = {
	purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
	  extend: {
		  colors: {
			  'primary': '#82937B', // green
			  'primary-light': '#a5b2a0', // green tint
			  'primary-dark': '#404a3c', // green shade
			  'secondary': '#d3af5e', // goldish yellow
			  'secondary-light': '#e5d0a1', // goldish yellow ting
			  'secondary-dark': '#6a521d', // goldish yellow shade
			  'light': '#f1f1f1',
			  'mid': '#707580',
			  'dark': '#2A2D34' // cooler black
		  },
		  fontFamily: {
			  'body': ["Open\\ Sans", "sans-serif"],
			  'display': ["EB\\ Garamond", "serif"],
			  'hand': ["Allison", "cursive"]
		  },
	  },
  },
  variants: {
	  extend: {
		  fontWeight: ['hover'],
		  animation: ['hover']
	  },
  },
  plugins: [],
}
