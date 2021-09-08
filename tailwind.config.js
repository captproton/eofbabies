module.exports = {
	purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
	  extend: {
		  colors: {
			  primary: '#82937B', // green
			  secondary: '#d3af5e', // goldish yellow
			  light: '#f1f1f1',
			  mid: '#707580',
			  dark: '#2A2D34' // cooler black
		  },
		  fontFamily: {
			  body: ["Open\\ Sans", "sans-serif"],
			  display: ["EB\\ Garamond", "serif"],
			  hand: ["Allison", "cursive"]
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
