var data =
[
{
	
		"name" : "Omnia Casino",
		"logoURL" : "img/omnia.png",
		"rating" : 9.8,
		"fast" : true,
		"perk1-type" : "fa-bolt",
		"perk1-text" : "Stort utbud av spel",
		"perk2-type" : "fa-sync-alt",
		"perk2-text" : "Skattefria vinster på ditt konto inom 5 minuter",
		"perk3-type" : "fa-check",
		"perk3-text" : "Nytt och fräscht casino"




}

];


function printCasinos(list) {


	for (var c in list) {

		if (list.hasOwnProperty(c)) {
		  
			var item = `<div class="casinoItem col-12">
						<div class="row">
							<div class="itemLogo col-3">
								<div class="row">
									<div class="col-12 itemLogoLogo">
										<img src="` + list[c].logoURL +`">
									</div>
									<div class="col-12 itemLogoStars">
									<img src="` + list[c].rating +`">
									</div>
								</div>
							</div>
						</div>
					</div>

					`;

			$(".casinoList > div").append(item);

		}
	}

}

function printFastCasinos(list) {


	
	$(".casinoList > div").html("");

	for (var c in list) {

		if (list.hasOwnProperty(c) && list[c].fast === true) {

			var item = `<div class="casinoItem col-12">
						<div class="row">
							<div class="itemLogo col-3">
								<div class="row">
									<div class="col-12 itemLogoLogo">
										<img src="` + list[c].logoURL +`">
									</div>
									<div class="col-12 itemLogoStars">
									<img src="` + list[c].rating +`">
									</div>
								</div>
							</div>
						</div>
					</div>

					`;

			$(".casinoList > div").append(item);
			console.log(item);
			

		}

	}


}




// printCasinos(data);
