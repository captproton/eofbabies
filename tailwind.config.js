module.exports = {
	purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
	  extend: {
		  colors: {
			  'green': '#82937B',
			  'light-green': '#A7B4A1',
			  'dark-green': '#242623',
			  'gold': '#d3af5e',
			  'light-gold': '#DAD16D',
			  'dark-gold': '#AC9D5E',
			  'light-grey': '#FFF6EF',
			  'mid-grey': '#EDDACC',
			  'dark-grey': '#AB866C', 
			  'light-neutral': '#FFF6EF',
			  'mid-neutral': '#EDDACC',
			  'dark-neutral': '#AB866C', 
		  },
		  fontFamily: {
			  'sans': ["Open\\ Sans", "sans-serif"],
			  'serif': ["Cormorant\\ Garamond", "serif"],
			  'mono': ["IBM\\ Plex\\ Mono", "monospace"],
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
