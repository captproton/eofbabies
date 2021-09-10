module.exports = {
	purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
	  extend: {
		  colors: {
			  'green': '#82937B',
			  'light-green': '#A2BF9E',
			  'dark-green': '#546D54',
			  'gold': '#d3af5e',
			  'light-gold': '#DAD16D',
			  'dark-gold': '#AC9D5E',
			  'primary': '#ff0000', // green
			  'light-grey': '#f5f5f5',
			  'mid-grey': '#D3D7DF',
			  'dark-grey': '#2A2D34', // cooler black
			  'light': '#ff0000',
			  'mid': '#ff0000',
			  'dark': '#ff0000' // cooler black
		  },
		  fontFamily: {
			  'sans': ["Open\\ Sans", "sans-serif"],
			  'serif': ["EB\\ Garamond", "serif"],
			  'cursive': ["Allison", "cursive"],
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
