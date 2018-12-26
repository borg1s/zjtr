var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next){

	return res.render('index', {



		casinos: [

			{

				name: 'Storspiller',
				imgURL: 'img/logo/storspiller.png',
				bgC: '#1c1e1c',
				tracking: '/go/storspiller',
				fullStars: 5,
				halfStars: 0,
				ribbon: 'img/cofticongold.png',
				top3: true,

				infoType1: 'fas fa-bolt',
				infoType2: 'fas fa-check',
				infoType3: 'fas fa-check',

				info1: '3 forskjellige startbonuser å velge i',
				info2: 'En innskuddsbonus er uten omsetningskrav',
				info3: 'Få bonus på dine første fire innskudd',

				btnTxt: 'TIL STORSPILLER'




			},

					{

				name: 'Voodoo Dreams',
				imgURL: 'img/logo/voodoodreams2.png',
				bgC: '#111d2e',
				tracking: '/go/voodoodreams',
				fullStars: 5,
				halfStars: 0,
				ribbon: 'img/cofticonsilver2.png',
				top3: true,
				infoType1: 'fas fa-bolt',
				infoType2: 'fas fa-sync-alt',
				infoType3: 'fas fa-check',

				info1: '100% opptil 1000kr på ditt første innskudd',
				info2: '200 gratisspinn',
				info3: 'Totalt 10 000kr i innskuddsbonus',

				btnTxt: 'VOODOO DREAMS'




			},

				{

				name: 'Genesis Casino',
				imgURL: 'img/logo/genesis.png',
				bgC: '#2d147b',
				tracking: '/go/genesis',
				fullStars: 5,
				halfStars: 0,
				ribbon: 'img/cofticonbronze2.png',
				top3: true,
				

				infoType1: 'fas fa-bolt',
				infoType2: 'fas fa-sync-alt',
				infoType3: 'fas fa-check',
				

				info1: 'Første innskudd gir 100% opptil 1000kr',
				info2: '300 gratisspinn på Starburst',
				info3: '10 000kr bonus på dine første fire innskudd',
				

				btnTxt: 'TIL GENESIS'




			},	

			{

				name: 'Vegas Casino',
				imgURL: 'img/logo/vegascasino.png',
				bgC: '#31143a',
				tracking: '/go/vegascasino',
				fullStars: 5,
				halfStars: 0,
				

				infoType1: 'fas fa-bolt',
				infoType2: 'fas fa-sync-alt',
				infoType3: 'fas fa-check',

				info1: '200% opptil 2000kr på ditt første innskudd',
				info2: '20 gratisspinn på den nye spill Penguin City',
				info3: 'Alle bonuser er uten omsetningskrav',

				btnTxt: 'VEGAS CASINO'




			},

			{

				name: 'Casino Joy',
				imgURL: 'img/logo/casinojoy.png',
				bgC: '#3d79b2',
				tracking: '/go/casinojoy',
				fullStars: 5,
				halfStars: 0,
				

				infoType1: 'fas fa-bolt',
				infoType2: 'fas fa-sync-alt',
				infoType3: 'fas fa-check',
				

				info1: '100% opptil 2000kr på ditt første innskudd',
				info2: '200 gratisspinn på Starburst',
				info3: '10 000kr bonus på dine første fire innskudd',
				

				btnTxt: 'TIL CASINO JOY'




			},
			// {

			// 	name: 'Casumo',
			// 	imgURL: 'img/logo/casumo.png',
			// 	bgC: '#d9e7e8',
			// 	tracking: '/go/casumo',
			// 	fullStars: 5,
			// 	halfStars: 0,
				

			// 	infoType1: 'fas fa-bolt',
			// 	infoType2: 'fas fa-sync-alt',
			// 	infoType3: 'fas fa-check',
				

			// 	info1: 'Første innskudd gir 200% opptil 500kr',
			// 	info2: '200 gratisspinn på Starburst',
			// 	info3: 'Totalt 12000kr i innskuddsbonus',
				

			// 	btnTxt: 'TIL CASUMO'




			// },
			
	

			
			{

				name: 'NYSpins',
				imgURL: 'img/logo/nyspins2.png',
				bgC: '#e1e8eb',
				tracking: '/go/nyspins',
				fullStars: 5,
				halfStars: 0,
				infoType1: 'fas fa-bolt',
				infoType2: 'fas fa-sync-alt',
				infoType3: 'fas fa-check',
				

				info1: '100% opptil 1000kr på ditt første innskudd',
				info2: 'Totalt 200 gratisspinn',
				info3: 'Få bonus på dine første fire innskudd',
				

				btnTxt: 'TIL NYSPINS'




			},
			{

				name: 'Casino X',
				imgURL: 'img/logo/casinox.png',
				bgC: '#1f1f21',
				tracking: '/go/casinox',
				fullStars: 4,
				halfStars: 1,
				infoType1: 'fas fa-bolt',
				infoType2: 'fas fa-sync-alt',
				infoType3: 'fas fa-check',

				info1: '200% bonus på ditt første innskudd',
				info2: '200 gratisspinn etter innskudd på 200kr+ ',
				info3: 'Både casino og odds',

				btnTxt: 'TIL CASINO X'




			},
			{

				name: 'Dunder',
				imgURL: 'img/logo/dunder.png',
				bgC: '#181b23',
				tracking: '/go/dunder',
				fullStars: 4,
				halfStars: 1,
				infoType1: 'fas fa-bolt',
				infoType2: 'fas fa-sync-alt',
				infoType3: 'fas fa-check',

				info1: '200% opptil 500kr på ditt første innskudd',
				info2: '200 gratisspinn på Starburst',
				info3: 'Totalt 6000kr i innskuddsbonus',

				btnTxt: 'TIL DUNDER'




			},
	
			{

				name: 'Duelz',
				imgURL: 'img/logo/duelz.png',
				bgC: '#174163',
				tracking: '/go/duelz',
				fullStars: 4,
				halfStars: 1,
				infoType1: 'fas fa-check',
				infoType2: 'fas fa-check',
				infoType3: 'fas fa-check',

				info1: 'Innovativt nettcasino',
				info2: 'spille mot andre',
				info3: 'Godt spillutvalg',

				btnTxt: 'TIL DUELZ'




			}
			




		]


	});
});

router.get('/privacy-policy', function(req, res, next){

	return res.render('ip');


});

module.exports = router;
