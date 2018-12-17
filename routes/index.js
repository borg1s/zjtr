var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next){

	return res.render('index', {



		casinos: [

			{

				name: 'Omnia Casino',
				imgURL: 'img/logo/omnia2.png',
				bgC: '#e83455',
				tracking: '/go/omnia',
				rating: '9.8',
				fullStars: 5,
				halfStars: 0,
				ribbon: 'img/cofticongold.png',
				top3: true,

				infoType1: 'fas fa-bolt',
				infoType2: 'fas fa-check',
				infoType3: 'fas fa-check',

				info1: '10% omsättningsfri cashback varje vecka',
				info2: 'Skattefria vinster på kontot inom 5 minuter',
				info3: 'Nytt och modernt casino',

				btnTxt: 'TILL OMNIA'




			},
			{

				name: 'Voodoo Dreams',
				imgURL: 'img/logo/voodoodreams2.png',
				bgC: '#000520',
				tracking: '/go/voodoodreams',
				rating: '9.6',
				fullStars: 5,
				halfStars: 0,
				ribbon: 'img/cofticonsilver2.png',
				top3: true,

				infoType1: 'fas fa-bolt',
				infoType2: 'fas fa-sync-alt',
				infoType3: 'fas fa-check',

				info1: 'Upp till 10 000kr i välkomstbonus',
				info2: '200 freespins på Starburst',
				info3: 'Insättning med BankID och blixtsnabba uttag',

				btnTxt: 'VOODOO DREAMS'




			},
			{

				name: 'Spela Casino',
				imgURL: 'img/logo/spela2.png',
				bgC: '#011218',
				tracking: '/go/spela',
				rating: '9.5',
				fullStars: 5,
				halfStars: 0,
				ribbon: 'img/cofticonbronze2.png',
				top3: true,

				infoType1: 'fas fa-check',
				infoType2: 'fas fa-check',
				infoType3: 'fas fa-check',

				info1: 'Spela direkt utan att registrera ett konto',
				info2: 'Uttag på fem minuter',
				info3: 'Stort utbud av spel',

				btnTxt: 'TILL SPELA'




			},
			{

				name: 'Dreamz Casino',
				imgURL: 'img/logo/dreamz2.png',
				bgC: '#6128b2',
				tracking: '/go/dreamz',
				rating: '9.4',
				fullStars: 5,
				halfStars: 0,
				infoType1: 'fas fa-check',
				infoType2: 'fas fa-check',
				infoType3: 'fas fa-check',

				info1: '200% välkomstbonus upp till 1000kr',
				info2: 'Insättning med BankID',
				info3: 'Spelarvänligt UI',

				btnTxt: 'TILL DREAMZ'




			},
			{

				name: 'Kaboo Casino',
				imgURL: 'img/logo/kaboo2.png',
				bgC: '#000',
				tracking: '/go/kaboo',
				rating: '9.3',
				fullStars: 5,
				halfStars: 0,
				infoType1: 'fas fa-bolt',
				infoType2: 'fas fa-check',
				infoType3: 'fas fa-check',

				info1: '200% välkomstbonus upp till 1000kr',
				info2: 'Insättning med BankID',
				info3: 'Spelarvänligt UI',

				btnTxt: 'TILL KABOO'




			},
			{

				name: 'NY Spins',
				imgURL: 'img/logo/nyspins2.png',
				bgC: '#e1e8eb',
				tracking: '/go/nyspins',
				rating: '8.9',
				fullStars: 4,
				halfStars: 1,
				infoType1: 'fas fa-bolt',
				infoType2: 'fas fa-sync-alt',
				infoType3: 'fas fa-check',

				info1: 'Välkomstbonus upp till 10 000kr',
				info2: '200 gratis snurr på Starburst',
				info3: 'BankID-casino',

				btnTxt: 'TILL NY SPINS'




			},
			{

				name: 'Thrills Casino',
				imgURL: 'img/logo/thrills2.png',
				bgC: '#46a1f9',
				tracking: '/go/thrills',
				rating: '8.6',
				fullStars: 4,
				halfStars: 1,
				infoType1: 'fas fa-bolt',
				infoType2: 'fas fa-check',
				infoType3: 'fas fa-check',

				info1: '10% Cashback',
				info2: 'Erfaret och pålitligt casino',
				info3: 'Insättning direkt med BankID',

				btnTxt: 'TILL THRILLS'




			},
			{

				name: 'Pronto Casino',
				imgURL: 'img/logo/pronto2.png',
				bgC: '#006da3',
				tracking: '/go/pronto',
				rating: '8.4',
				fullStars: 4,
				halfStars: 1,
				infoType1: 'fas fa-check',
				infoType2: 'fas fa-check',
				infoType3: 'fas fa-check',

				info1: 'EU-licenserat casino med skattefria vinster',
				info2: 'Ganska nytt casino med stort spelutbud',
				info3: 'Insättning direkt med BankID',

				btnTxt: 'TILL PRONTO'




			}
			




		]


	});
});




module.exports = router;
