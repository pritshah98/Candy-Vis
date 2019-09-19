d3.csv("./candy.csv", function(data) {
	document.getElementById("chart").style.display = "none";
	document.getElementById("attrib-labels").style.display = "none";
	var selectedCandy = document.getElementById('dropdown').value;
	var males = 0;
	var females = 0;
	var other_gender = 0;
	var age_under_eighteen = 0;
	var age_eighteen_to_thirty = 0;
	var age_thirty_to_fifty = 0;
	var age_above_fifty = 0;
	//
	var butterfinger_joy = 0;
	var butterfinger_despair = 0;
	var butterfinger_meh = 0;
	//
	var candycorn_joy = 0;
	var candycorn_despair = 0;
	var candycorn_meh = 0;

	var chiclets_joy = 0;
	var chiclets_despair = 0;
	var chiclets_meh = 0;

	var dots_joy = 0;
	var dots_despair = 0;
	var dots_meh = 0;

	var fuzzyPeaches_joy = 0;
	var fuzzyPeaches_despair = 0;
	var fuzzyPeaches_meh = 0;

  	var goodNplenty_joy = 0;
	var goodNplenty_despair = 0;
	var goodNplenty_meh = 0;

	var gummybears_joy = 0;
	var gummybears_despair = 0;
	var gummybears_meh = 0;

	var healthyFruit_joy = 0;
	var healthyFruit_despair = 0;
	var healthyFruit_meh = 0;

	var heathbar_joy = 0;
	var heathbar_despair = 0;
	var heathbar_meh = 0;

	var hersheyDark_joy = 0;
	var hersheyDark_despair = 0;
	var hersheyDark_meh = 0;

	var hersheyMilk_joy = 0;
	var hersheyMilk_despair = 0;
	var hersheyMilk_meh = 0;

	var hersheyKiss_joy = 0;
	var hersheyKiss_despair = 0;
	var hersheyKiss_meh = 0;

	var jollyrancher_joy = 0;
	var jollyrancher_despair = 0;
	var jollyrancher_meh = 0;

	var juniormints_joy = 0;
	var juniormints_despair = 0;
	var juniormints_meh = 0;

	var kitkat_joy = 0;
	var kitkat_despair = 0;
	var kitkat_meh = 0;

	var laffytaffy_joy = 0;
	var laffytaffy_despair = 0;
	var laffytaffy_meh = 0;

	var lemonheads_joy = 0;
	var lemonheads_despair = 0;
	var lemonheads_meh = 0;

	var licorice_joy = 0;
	var licorice_despair = 0;
	var licorice_meh = 0;

	var licoriceBlack_joy = 0;
	var licoriceBlack_despair = 0;
	var licoriceBlack_meh = 0;

	var lollipops_joy = 0;
	var lollipops_despair = 0;
	var lollipops_meh = 0;

	var mikeAndIke_joy = 0;
	var mikeAndIke_despair = 0;
	var mikeAndIke_meh = 0;

	var milkduds_joy = 0;
	var milkduds_despair = 0;
	var milkduds_meh = 0;

	var milkyway_joy = 0;
	var milkyway_despair = 0;
	var milkyway_meh = 0;

	var mm_joy = 0;
	var mm_despair = 0;
	var mm_meh = 0;

	var mmPeanuts_joy = 0;
	var mmPeanuts_despair = 0;
	var mmPeanuts_meh = 0;

	var mintKisses_joy = 0;
	var mintKisses_despair = 0;
	var mintKisses_meh = 0;

	var mrGoodbar_joy = 0;
	var mrGoodbar_despair = 0;
	var mrGoodbar_meh = 0;

	var nerds_joy = 0;
	var nerds_despair = 0;
	var nerds_meh = 0;

	var nestleCrunch_joy = 0;
	var nestleCrunch_despair = 0;
	var nestleCrunch_meh = 0;

	var peeps_joy = 0;
	var peeps_despair = 0;
	var peeps_meh = 0;

	var pixystix_joy = 0;
	var pixystix_despair = 0;
	var pixystix_meh = 0;

	var reesesCup_joy = 0;
	var reesesCup_despair = 0;
	var reesesCup_meh = 0;

	var rolos_joy = 0;
	var rolos_despair = 0;
	var rolos_meh = 0;

	var skittles_joy = 0;
	var skittles_despair = 0;
	var skittles_meh = 0;

	var snickers_joy = 0;
	var snickers_despair = 0;
	var snickers_meh = 0;

	var sourpatch_joy = 0;
	var sourpatch_despair = 0;
	var sourpatch_meh = 0;

	var starburst_joy = 0;
	var starburst_despair = 0;
	var starburst_meh = 0;

	var swedishFish_joy = 0;
	var swedishFish_despair = 0;
	var swedishFish_meh = 0;

	var swedishFish_joy = 0;
	var swedishFish_despair = 0;
	var swedishFish_meh = 0;

	var tictacs_joy = 0;
	var tictacs_despair = 0;
	var tictacs_meh = 0;

	var threeMusketeers_joy = 0;
	var threeMusketeers_despair = 0;
	var threeMusketeers_meh = 0;

	var tolberone_joy = 0;
	var tolberone_despair = 0;
	var tolberone_meh = 0;

	var trailMix_joy = 0;
	var trailMix_despair = 0;
	var trailMix_meh = 0;

	var twix_joy = 0;
	var twix_despair = 0;
	var twix_meh = 0;
	
	var watchamacallit_joy = 0;
	var watchamacallit_despair = 0;
	var watchamacallit_meh = 0;

	var york_joy = 0;
	var york_despair = 0;
	var york_meh = 0;

	for (var i = 0; i < data.length; i++) {

		if (data[i].Q2_GENDER === "Male") {
			males += 1;
		} else if (data[i].Q2_GENDER === "Female") {
			females += 1;
		} else {
			other_gender += 1;
		}

		if (data[i].Q3_AGE < 18) {
			age_under_eighteen += 1;
		} else if (data[i].Q3_AGE >= 18 && data[i].Q3_AGE <= 30) {
			age_eighteen_to_thirty += 1;
		} else if (data[i].Q3_AGE > 30 && data[i].Q3_AGE <= 50) {
			age_thirty_to_fifty += 1;
		} else {
			age_above_fifty += 1;
		}

		if (data[i].Q6_Butterfinger === "JOY") {          ///
			butterfinger_joy += 1;
		} else if (data[i].Q6_Butterfinger === "DESPAIR") {
			butterfinger_despair += 1;
		} else {
			butterfinger_meh += 1;
		}


		if (data[i].Q6_Candy_Corn === "JOY") {          ///
			candycorn_joy += 1;
		} else if (data[i].Q6_Candy_Corn === "DESPAIR") {
			candycorn_despair += 1;
		} else {
			candycorn_meh += 1;
		}


		if (data[i].Q6_Chiclets === "JOY") {          ///
			chiclets_joy += 1;
		} else if (data[i].Q6_Chiclets === "DESPAIR") {
			chiclets_despair += 1;
		} else {
			chiclets_meh += 1;
		}

		if (data[i].Q6_Dots === "JOY") {          ///
			dots_joy += 1;
		} else if (data[i].Q6_Dots === "DESPAIR") {
			dots_despair += 1;
		} else {
			dots_meh += 1;
		}


		if (data[i].Q6_Fuzzy_Peaches === "JOY") {          ///
			fuzzyPeaches_joy += 1;
		} else if (data[i].Q6_Fuzzy_Peaches === "DESPAIR") {
			fuzzyPeaches_despair += 1;
		} else {
			fuzzyPeaches_meh += 1;
		}
		
		if (data[i].Q6_Good_N_Plenty === "JOY") {          ///
			goodNplenty_joy += 1;
		} else if (data[i].Q6_Good_N_Plenty === "DESPAIR") {
			goodNplenty_despair += 1;
		} else {
			goodNplenty_meh += 1;
		}

		if (data[i].Q6_Gummy_Bears_straight_up === "JOY") {          ///
			gummybears_joy += 1;
		} else if (data[i].Q6_Gummy_Bears_straight_up === "DESPAIR") {
			gummybears_despair += 1;
		} else {
			gummybears_meh += 1;
		}

		if (data[i].Q6_Healthy_Fruit === "JOY") {          ///
			healthyFruit_joy += 1;
		} else if (data[i].Q6_Healthy_Fruit === "DESPAIR") {
			healthyFruit_despair += 1;
		} else {
			healthyFruit_meh += 1;
		}

		if (data[i].Q6_Heath_Bar === "JOY") {          ///
			heathbar_joy += 1;
		} else if (data[i].Q6_Heath_Bar === "DESPAIR") {
			heathbar_despair += 1;
		} else {
			heathbar_meh += 1;
		}


		if (data[i].Q6_Hershey_s_Dark_Chocolate === "JOY") {          ///
			hersheyDark_joy += 1;
		} else if (data[i].Q6_Hershey_s_Dark_Chocolate === "DESPAIR") {
			hersheyDark_despair += 1;
		} else {
			hersheyDark_meh += 1;
		}


		if (data[i].Q6_Hershey_s_Milk_Chocolate === "JOY") {          ///
			hersheyMilk_joy += 1;
		} else if (data[i].Q6_Hershey_s_Milk_Chocolate === "DESPAIR") {
			hersheyMilk_despair += 1;
		} else {
			hersheyMilk_meh += 1;
		}

		if (data[i].Q6_Hershey_s_Kisses === "JOY") {          ///
			hersheyKiss_joy += 1;
		} else if (data[i].Q6_Hershey_s_Kisses === "DESPAIR") {
			hersheyKiss_despair += 1;
		} else {
			hersheyKiss_meh += 1;
		}

		if (data[i].Q6_Jolly_Ranchers_good_flavor === "JOY") {          ///
			jollyrancher_joy += 1;
		} else if (data[i].Q6_Jolly_Ranchers_good_flavor === "DESPAIR") {
			jollyrancher_despair += 1;
		} else {
			jollyrancher_meh += 1;
		}

		if (data[i].Q6_Junior_Mints === "JOY") {          ///
			juniormints_joy += 1;
		} else if (data[i].Q6_Junior_Mints === "DESPAIR") {
			juniormints_despair += 1;
		} else {
			juniormints_meh += 1;
		}

		if (data[i].Q6_Kit_Kat === "JOY") {          ///
			kitkat_joy += 1;
		} else if (data[i].Q6_Kit_Kat === "DESPAIR") {
			kitkat_despair += 1;
		} else {
			kitkat_meh += 1;
		}
		
		if (data[i].Q6_LaffyTaffy === "JOY") {          ///
			laffytaffy_joy += 1;
		} else if (data[i].Q6_LaffyTaffy=== "DESPAIR") {
			laffytaffy_despair += 1;
		} else {
			laffytaffy_meh += 1;
		}

		if (data[i].Q6_LemonHeads === "JOY") {          ///
			lemonheads_joy += 1;
		} else if (data[i].Q6_LemonHeads=== "DESPAIR") {
			lemonheads_despair += 1;
		} else {
			lemonheads_meh += 1;
		}


		if (data[i].Q6_Licorice_not_black === "JOY") {          ///
			licorice_joy += 1;
		} else if (data[i].Q6_Licorice_not_black=== "DESPAIR") {
			licorice_despair += 1;
		} else {
			licorice_meh += 1;
		}

		if (data[i].Q6_Licorice_yes_black === "JOY") {          ///
			licoriceBlack_joy += 1;
		} else if (data[i].Q6_Licorice_yes_black=== "DESPAIR") {
			licoriceBlack_despair += 1;
		} else {
			licoriceBlack_meh += 1;
		}

		if (data[i].Q6_Lollipops === "JOY") {          ///
			lollipops_joy += 1;
		} else if (data[i].Q6_Lollipops === "DESPAIR") {
			lollipops_despair += 1;
		} else {
			lollipops_meh += 1;
		}

		if (data[i].Q6_Mike_and_Ike === "JOY") {          ///
			mikeAndIke_joy += 1;
		} else if (data[i].Q6_Mike_and_Ike === "DESPAIR") {
			mikeAndIke_despair += 1;
		} else {
			mikeAndIke_meh += 1;
		}

		if (data[i].Q6_Milk_Duds === "JOY") {          ///
			milkduds_joy += 1;
		} else if (data[i].Q6_Milk_Duds === "DESPAIR") {
			milkduds_despair += 1;
		} else {
			milkduds_meh += 1;
		}

		if (data[i].Q6_Milky_Way === "JOY") {          ///
			milkyway_joy += 1;
		} else if (data[i].Q6_Milky_Way === "DESPAIR") {
			milkyway_despair += 1;
		} else {
			milkyway_meh += 1;
		}

		if (data[i].Q6_Regular_M_Ms === "JOY") {          ///
			mm_joy += 1;
		} else if (data[i].Q6_Regular_M_Ms === "DESPAIR") {
			mm_despair += 1;
		} else {
			mm_meh += 1;
		}

		if (data[i].Q6_Peanut_M_M_s === "JOY") {          ///
			mmPeanuts_joy += 1;
		} else if (data[i].Q6_Peanut_M_M_s === "DESPAIR") {
			mmPeanuts_despair += 1;
		} else {
			mmPeanuts_meh += 1;
		}

		if (data[i].Q6_Mint_Kisses === "JOY") {          ///
			mintKisses_joy += 1;
		} else if (data[i].Q6_Mint_Kisses === "DESPAIR") {
			mintKisses_despair += 1;
		} else {
			mintKisses_meh += 1;
		}

		if (data[i].Q6_Mr_Goodbar === "JOY") {          ///
			mrGoodbar_joy += 1;
		} else if (data[i].Q6_Mr_Goodbar === "DESPAIR") {
			mrGoodbar_despair += 1;
		} else {
			mrGoodbar_meh += 1;
		}

		if (data[i].Q6_Nerds === "JOY") {          ///
			nerds_joy += 1;
		} else if (data[i].Q6_Nerds === "DESPAIR") {
			nerds_despair += 1;
		} else {
			nerds_meh += 1;
		}

		if (data[i].Q6_Nestle_Crunch === "JOY") {          ///
			nestleCrunch_joy += 1;
		} else if (data[i].Q6_Nestle_Crunch === "DESPAIR") {
			nestleCrunch_despair += 1;
		} else {
			nestleCrunch_meh += 1;
		}

		if (data[i].Q6_Peeps === "JOY") {          ///
			peeps_joy += 1;
		} else if (data[i].Q6_Peeps === "DESPAIR") {
			peeps_despair += 1;
		} else {
			peeps_meh += 1;
		}


		if (data[i].Q6_Pixy_Stix === "JOY") {          ///
			pixystix_joy += 1;
		} else if (data[i].Q6_Peeps === "DESPAIR") {
			pixystix_despair += 1;
		} else {
			pixystix_meh += 1;
		}

		if (data[i].Q6_Reese_s_Peanut_Butter_Cups === "JOY") {          ///
			reesesCup_joy += 1;
		} else if (data[i].Q6_Reese_s_Peanut_Butter_Cups === "DESPAIR") {
			reesesCup_despair += 1;
		} else {
			reesesCup_meh += 1;
		}

		if (data[i].Q6_Rolos === "JOY") {          ///
			rolos_joy += 1;
		} else if (data[i].Q6_Rolos === "DESPAIR") {
			rolos_despair += 1;
		} else {
			rolos_meh += 1;
		}

		if (data[i].Q6_Skittles === "JOY") {          ///
			skittles_joy += 1;
		} else if (data[i].Q6_Skittles === "DESPAIR") {
			skittles_despair += 1;
		} else {
			skittles_meh += 1;
		}

		if (data[i].Q6_Snickers === "JOY") {          ///
			snickers_joy += 1;
		} else if (data[i].Q6_Snickers === "DESPAIR") {
			snickers_despair += 1;
		} else {
			snickers_meh += 1;
		}

		if (data[i].Q6_Sourpatch_Kids_i_e_abominations_of_nature === "JOY") {          ///
			sourpatch_joy += 1;
		} else if (data[i].Q6_Sourpatch_Kids_i_e_abominations_of_nature === "DESPAIR") {
			sourpatch_despair += 1;
		} else {
			sourpatch_meh += 1;
		}

		if (data[i].Q6_Starburst === "JOY") {          ///
			starburst_joy += 1;
		} else if (data[i].Q6_Starburst === "DESPAIR") {
			starburst_despair += 1;
		} else {
			starburst_meh += 1;
		}

		if (data[i].Q6_Swedish_Fish === "JOY") {          ///
			swedishFish_joy += 1;
		} else if (data[i].Q6_Swedish_Fish === "DESPAIR") {
			swedishFish_despair += 1;
		} else {
			swedishFish_meh += 1;
		}

		if (data[i].Q6_Tic_Tacs === "JOY") {          ///
			tictacs_joy += 1;
		} else if (data[i].Q6_Tic_Tacs === "DESPAIR") {
			tictacs_despair += 1;
		} else {
			tictacs_meh += 1;
		}

		if (data[i].Q6_Three_Musketeers === "JOY") {          ///
			threeMusketeers_joy += 1;
		} else if (data[i].Q6_Three_Musketeers === "DESPAIR") {
			threeMusketeers_despair += 1;
		} else {
			threeMusketeers_meh += 1;
		}

		if (data[i].Q6_Tolberone_something_or_other === "JOY") {          ///
			tolberone_joy += 1;
		} else if (data[i].Q6_Tolberone_something_or_other === "DESPAIR") {
			tolberone_despair += 1;
		} else {
			tolberone_meh += 1;
		}

		if (data[i].Q6_Trail_Mix === "JOY") {          ///
			trailMix_joy += 1;
		} else if (data[i].Q6_Trail_Mix === "DESPAIR") {
			trailMix_despair += 1;
		} else {
			trailMix_meh += 1;
		}


		if (data[i].Q6_Twix === "JOY") {          ///
			twix_joy += 1;
		} else if (data[i].Q6_Twix === "DESPAIR") {
			twix_despair += 1;
		} else {
			twix_meh += 1;
		}
		
		if (data[i].Q6_Whatchamacallit_Bars === "JOY") {          ///
			watchamacallit_joy += 1;
		} else if (data[i].Q6_Whatchamacallit_Bars === "DESPAIR") {
			watchamacallit_despair += 1;
		} else {
			watchamacallit_meh += 1;
		}

		if (data[i].Q6_York_Peppermint_Patties === "JOY") {          ///
			york_joy += 1;
		} else if (data[i].Q6_York_Peppermint_Patties === "DESPAIR") {
			york_despair += 1;
		} else {
			york_meh += 1;
		}

	}
	
	
	var graph = document.getElementById('graph');
	var width = 4600;
    var height = 650;
	var svg = d3.select(graph)
        .append('svg')
        .attr('width', width)
        .attr('height', height)
		.append('g');
	
	var begin_circles = [
			 { "x_axis": 100, "y_axis": 75, "radius": 20, name: "Butterfinger", "color" : "green", "label": "Butterfinger1", "v1": butterfinger_joy, "v2": butterfinger_despair, "v3": butterfinger_meh},
			 { "x_axis": 100, "y_axis": 275, "radius": 20, name: "Butterfinger", "color" : "blue", "label": "Butterfinger2", "v1": butterfinger_joy, "v2": butterfinger_despair, "v3": butterfinger_meh},
			 { "x_axis": 100, "y_axis": 475, "radius": 20, name: "Butterfinger", "color" : "red", "label": "Butterfinger3", "v1": butterfinger_joy, "v2": butterfinger_despair, "v3": butterfinger_meh},
		{ "x_axis": 200, "y_axis": 175, "radius": 20, name: "Candy Corn", "color" : "green", "label": "Candy_Corn1", "v1": candycorn_joy, "v2": candycorn_despair, "v3": candycorn_meh},
			 { "x_axis": 200, "y_axis": 375, "radius": 20, name: "Candy Corn", "color" : "blue", "label": "Candy_Corn2", "v1": candycorn_joy, "v2": candycorn_despair, "v3": candycorn_meh},
			 { "x_axis": 200, "y_axis": 575, "radius": 20, name: "Candy Corn", "color" : "red", "label": "Candy_Corn3", "v1": candycorn_joy, "v2": candycorn_despair, "v3": candycorn_meh},
		{ "x_axis": 300, "y_axis": 75, "radius": 20, name: "Chiclets", "color" : "green", "label": "Chiclets1", "v1": chiclets_joy, "v2": chiclets_despair, "v3": chiclets_meh},
			 { "x_axis": 300, "y_axis": 275, "radius": 20, name: "Chiclets", "color" : "blue", "label": "Chiclets2", "v1": chiclets_joy, "v2": chiclets_despair, "v3": chiclets_meh},
			 { "x_axis": 300, "y_axis": 475, "radius": 20, name: "Chiclets", "color" : "red", "label": "Chiclets3", "v1": chiclets_joy, "v2": chiclets_despair, "v3": chiclets_meh},
		{ "x_axis": 400, "y_axis": 175, "radius": 20, name: "Dots", "color" : "green", "label": "Dots1", "v1": dots_joy, "v2": dots_despair, "v3": dots_meh},
			 { "x_axis": 400, "y_axis": 375, "radius": 20, name: "Dots", "color" : "blue", "label": "Dots2", "v1": dots_joy, "v2": dots_despair, "v3": dots_meh},
			 { "x_axis": 400, "y_axis": 575, "radius": 20, name: "Dots", "color" : "red", "label": "Dots3", "v1": dots_joy, "v2": dots_despair, "v3": dots_meh},
		{ "x_axis": 500, "y_axis": 75, "radius": 20, name: "Fuzzy Peaches", "color" : "green", "label": "Fuzzy_Peaches1", "v1": fuzzyPeaches_joy, "v2": fuzzyPeaches_despair, "v3": fuzzyPeaches_meh},
			 { "x_axis": 500, "y_axis": 275, "radius": 20, name: "Fuzzy Peaches", "color" : "blue", "label": "Fuzzy_Peaches2", "v1": fuzzyPeaches_joy, "v2": fuzzyPeaches_despair, "v3": fuzzyPeaches_meh},
			 { "x_axis": 500, "y_axis": 475, "radius": 20, name: "Fuzzy Peaches", "color" : "red", "label": "Fuzzy_Peaches3", "v1": fuzzyPeaches_joy, "v2": fuzzyPeaches_despair, "v3": fuzzyPeaches_meh},
		{ "x_axis": 600, "y_axis": 175, "radius": 20, name: "Good N Plenty", "color" : "green", "label": "Good_N_Plenty1",  "v1": goodNplenty_joy, "v2": goodNplenty_despair, "v3": goodNplenty_meh},
			 { "x_axis": 600, "y_axis": 375, "radius": 20, name: "Good N Plenty", "color" : "blue", "label": "Good_N_Plenty2",  "v1": goodNplenty_joy, "v2": goodNplenty_despair, "v3": goodNplenty_meh},
			 { "x_axis": 600, "y_axis": 575, "radius": 20, name: "Good N Plenty", "color" : "red", "label": "Good_N_Plenty3",  "v1": goodNplenty_joy, "v2": goodNplenty_despair, "v3": goodNplenty_meh},
		{ "x_axis": 700, "y_axis": 75, "radius": 20, name: "Gummy Bears", "color" : "green", "label": "Gummy_Bears1", "v1": gummybears_joy, "v2": gummybears_despair, "v3": gummybears_meh},
			 { "x_axis": 700, "y_axis": 275, "radius": 20, name: "Gummy Bears", "color" : "blue", "label": "Gummy_Bears2", "v1": gummybears_joy, "v2": gummybears_despair, "v3": gummybears_meh},
			 { "x_axis": 700, "y_axis": 475, "radius": 20, name: "Gummy Bears", "color" : "red", "label": "Gummy_Bears3", "v1": gummybears_joy, "v2": gummybears_despair, "v3": gummybears_meh},
		{ "x_axis": 800, "y_axis": 175, "radius": 20, name: "Healthy Fruit", "color" : "green", "label": "Healthy_Fruit1", "v1": healthyFruit_joy, "v2": healthyFruit_despair, "v3": healthyFruit_meh},
			 { "x_axis": 800, "y_axis": 375, "radius": 20, name: "Healthy Fruit", "color" : "blue", "label": "Healthy_Fruit2", "v1": healthyFruit_joy, "v2": healthyFruit_despair, "v3": healthyFruit_meh},
			 { "x_axis": 800, "y_axis": 575, "radius": 20, name: "Healthy Fruit", "color" : "red", "label": "Healthy_Fruit3", "v1": healthyFruit_joy, "v2": healthyFruit_despair, "v3": healthyFruit_meh},
		{ "x_axis": 900, "y_axis": 75, "radius": 20, name: "Heath Bar", "color" : "green", "label": "Heath_Bar1", "v1": heathbar_joy, "v2": heathbar_despair, "v3": heathbar_meh},
			 { "x_axis": 900, "y_axis": 275, "radius": 20, name: "Heath Bar", "color" : "blue", "label": "Heath_Bar2", "v1": heathbar_joy, "v2": heathbar_despair, "v3": heathbar_meh},
			 { "x_axis": 900, "y_axis": 475, "radius": 20, name: "Heath Bar", "color" : "red", "label": "Heath_Bar3", "v1": heathbar_joy, "v2": heathbar_despair, "v3": heathbar_meh},
		{ "x_axis": 1000, "y_axis": 175, "radius": 20, name: "Hersheys Dark Chocolate", "color" : "green", "label": "Hersheys_Dark_Chocolate1", "v1": hersheyDark_joy, "v2": hersheyDark_despair, "v3": hersheyDark_meh},
			 { "x_axis": 1000, "y_axis": 375, "radius": 20, name: "Hersheys Dark Chocolate", "color" : "blue", "label": "Hersheys_Dark_Chocolate2", "v1": hersheyDark_joy, "v2": hersheyDark_despair, "v3": hersheyDark_meh},
			 { "x_axis": 1000, "y_axis": 575, "radius": 20, name: "Hersheys Dark Chocolate", "color" : "red", "label": "Hersheys_Dark_Chocolate3", "v1": hersheyDark_joy, "v2": hersheyDark_despair, "v3": hersheyDark_meh},
		{ "x_axis": 1100, "y_axis": 75, "radius": 20, name: "Hersheys Milk Chocolate", "color" : "green", "label": "Hersheys_Milk_Chocolate1", "v1": hersheyMilk_joy, "v2": hersheyMilk_despair, "v3": hersheyMilk_meh},
			 { "x_axis": 1100, "y_axis": 275, "radius": 20, name: "Hersheys Milk Chocolate", "color" : "blue", "label": "Hersheys_Milk_Chocolate2", "v1": hersheyMilk_joy, "v2": hersheyMilk_despair, "v3": hersheyMilk_meh},
			 { "x_axis": 1100, "y_axis": 475, "radius": 20, name: "Hersheys Milk Chocolate", "color" : "red", "label": "Hersheys_Milk_Chocolate3", "v1": hersheyMilk_joy, "v2": hersheyMilk_despair, "v3": hersheyMilk_meh},
		{ "x_axis": 1200, "y_axis": 175, "radius": 20, name: "Hersheys Kisses", "color" : "green", "label": "Hersheys_Kisses1", "v1": hersheyKiss_joy, "v2": hersheyKiss_despair, "v3": hersheyKiss_meh},
			 { "x_axis": 1200, "y_axis": 375, "radius": 20, name: "Hersheys Kisses", "color" : "blue", "label": "Hersheys_Kisses2", "v1": hersheyKiss_joy, "v2": hersheyKiss_despair, "v3": hersheyKiss_meh},
			 { "x_axis": 1200, "y_axis": 575, "radius": 20, name: "Hersheys Kisses", "color" : "red", "label": "Hersheys_Kisses3", "v1": hersheyKiss_joy, "v2": hersheyKiss_despair, "v3": hersheyKiss_meh},
		{ "x_axis": 1300, "y_axis": 75, "radius": 20, name: "Jolly Ranchers", "color" : "green", "label": "Jolly_Rancher1s", "v1": jollyrancher_joy, "v2": jollyrancher_despair, "v3": jollyrancher_meh},
			 { "x_axis": 1300, "y_axis": 275, "radius": 20, name: "Jolly Ranchers", "color" : "blue", "label": "Jolly_Ranchers2", "v1": jollyrancher_joy, "v2": jollyrancher_despair, "v3": jollyrancher_meh},
			 { "x_axis": 1300, "y_axis": 475, "radius": 20, name: "Jolly Ranchers", "color" : "red", "label": "Jolly_Ranchers3", "v1": jollyrancher_joy, "v2": jollyrancher_despair, "v3": jollyrancher_meh},
		{ "x_axis": 1400, "y_axis": 175, "radius": 20, name: "Junior Mints", "color" : "green", "label": "Junior_Mints1", "v1": juniormints_joy, "v2": juniormints_despair, "v3": juniormints_meh},
			 { "x_axis": 1400, "y_axis": 375, "radius": 20, name: "Junior Mints", "color" : "blue", "label": "Junior_Mints2", "v1": juniormints_joy, "v2": juniormints_despair, "v3": juniormints_meh},
			 { "x_axis": 1400, "y_axis": 575, "radius": 20, name: "Junior Mints", "color" : "red", "label": "Junior_Mints3", "v1": juniormints_joy, "v2": juniormints_despair, "v3": juniormints_meh},
		{ "x_axis": 1515, "y_axis": 80, "radius": 20, name: "Kit Kat", "color" : "green", "label": "Kit_Kat1", "v1": kitkat_joy, "v2": kitkat_despair, "v3": kitkat_meh},
			 { "x_axis": 1515, "y_axis": 275, "radius": 20, name: "Kit Kat", "color" : "blue", "label": "Kit_Kat2", "v1": kitkat_joy, "v2": kitkat_despair, "v3": kitkat_meh},
			 { "x_axis": 1515, "y_axis": 475, "radius": 20, name: "Kit Kat", "color" : "red", "label": "Kit_Kat3", "v1": kitkat_joy, "v2": kitkat_despair, "v3": kitkat_meh},
		{ "x_axis": 1600, "y_axis": 175, "radius": 20, name: "Laffy Taffy", "color" : "green", "label": "Laffy_Taffy1", "v1": laffytaffy_joy, "v2": laffytaffy_despair, "v3": laffytaffy_meh},
			 { "x_axis": 1600, "y_axis": 375, "radius": 20, name: "Laffy Taffy", "color" : "blue", "label": "Laffy_Taffy2", "v1": laffytaffy_joy, "v2": laffytaffy_despair, "v3": laffytaffy_meh},
			 { "x_axis": 1600, "y_axis": 575, "radius": 20, name: "Laffy Taffy", "color" : "red", "label": "Laffy_Taffy3", "v1": laffytaffy_joy, "v2": laffytaffy_despair, "v3": laffytaffy_meh},
		{ "x_axis": 1700, "y_axis": 75, "radius": 20, name: "Lemon Heads", "color" : "green", "label": "Lemon_Heads1", "v1": lemonheads_joy, "v2": lemonheads_despair, "v3": lemonheads_meh},
			 { "x_axis": 1700, "y_axis": 275, "radius": 20, name: "Lemon Heads", "color" : "blue", "label": "Lemon_Heads2", "v1": lemonheads_joy, "v2": lemonheads_despair, "v3": lemonheads_meh},
			 { "x_axis": 1700, "y_axis": 475, "radius": 20, name: "Lemon Heads", "color" : "red", "label": "Lemon_Heads3", "v1": lemonheads_joy, "v2": lemonheads_despair, "v3": lemonheads_meh},
		{ "x_axis": 1800, "y_axis": 175, "radius": 20, name: "Non-black Licorice", "color" : "green", "label": "Non-black_Licorice1", "v1": licorice_joy, "v2": licorice_despair, "v3": licorice_meh},
			 { "x_axis": 1800, "y_axis": 375, "radius": 20, name: "Non-black Licorice", "color" : "blue", "label": "Non-black_Licorice2", "v1": licorice_joy, "v2": licorice_despair, "v3": licorice_meh},
			 { "x_axis": 1800, "y_axis": 575, "radius": 20, name: "Non-black Licorice", "color" : "red", "label": "Non-black_Licorice3", "v1": licorice_joy, "v2": licorice_despair, "v3": licorice_meh},
		{ "x_axis": 1900, "y_axis": 75, "radius": 20, name: "Black Licorice", "color" : "green", "label": "Black_Licorice1", "v1": licoriceBlack_joy, "v2": licoriceBlack_despair, "v3": licoriceBlack_meh},
			 { "x_axis": 1900, "y_axis": 275, "radius": 20, name: "Black Licorice", "color" : "blue", "label": "Black_Licorice2", "v1": licoriceBlack_joy, "v2": licoriceBlack_despair, "v3": licoriceBlack_meh},
			 { "x_axis": 1900, "y_axis": 475, "radius": 20, name: "Black Licorice", "color" : "red", "label": "Black_Licorice3", "v1": licoriceBlack_joy, "v2": licoriceBlack_despair, "v3": licoriceBlack_meh},
		{ "x_axis": 2000, "y_axis": 175, "radius": 20, name: "Lollipops", "color" : "green", "label": "Lollipops1", "v1": lollipops_joy, "v2": lollipops_despair, "v3": lollipops_meh},
			 { "x_axis": 2000, "y_axis": 375, "radius": 20, name: "Lollipops", "color" : "blue", "label": "Lollipops2", "v1": lollipops_joy, "v2": lollipops_despair, "v3": lollipops_meh},
			 { "x_axis": 2000, "y_axis": 575, "radius": 20, name: "Lollipops", "color" : "red", "label": "Lollipops3", "v1": lollipops_joy, "v2": lollipops_despair, "v3": lollipops_meh},
		{ "x_axis": 2100, "y_axis": 75, "radius": 20, name: "Mike and Ike", "color" : "green", "label": "Mike_and_Ike1", "v1": mikeAndIke_joy, "v2": mikeAndIke_despair, "v3": mikeAndIke_meh},
			 { "x_axis": 2100, "y_axis": 275, "radius": 20, name: "Mike and Ike", "color" : "blue", "label": "Mike_and_Ike2", "v1": mikeAndIke_joy, "v2": mikeAndIke_despair, "v3": mikeAndIke_meh},
			 { "x_axis": 2100, "y_axis": 475, "radius": 20, name: "Mike and Ike", "color" : "red", "label": "Mike_and_Ike3", "v1": mikeAndIke_joy, "v2": mikeAndIke_despair, "v3": mikeAndIke_meh},
		{ "x_axis": 2200, "y_axis": 175, "radius": 20, name: "Milk Duds", "color" : "green", "label": "Milk_Duds1", "v1": milkduds_joy, "v2": milkduds_despair, "v3": milkduds_meh},
			 { "x_axis": 2200, "y_axis": 375, "radius": 20, name: "Milk Duds", "color" : "blue", "label": "Milk_Duds2", "v1": milkduds_joy, "v2": milkduds_despair, "v3": milkduds_meh},
			 { "x_axis": 2200, "y_axis": 575, "radius": 20, name: "Milk Duds", "color" : "red", "label": "Milk_Duds3", "v1": milkduds_joy, "v2": milkduds_despair, "v3": milkduds_meh},
		{ "x_axis": 2300, "y_axis": 75, "radius": 20, name: "Milky Way", "color" : "green", "label": "Milky_Way1", "v1": milkyway_joy, "v2": milkyway_despair, "v3": milkyway_meh},
			 { "x_axis": 2300, "y_axis": 275, "radius": 20, name: "Milky Way", "color" : "blue", "label": "Milky_Way2", "v1": milkyway_joy, "v2": milkyway_despair, "v3": milkyway_meh},
			 { "x_axis": 2300, "y_axis": 475, "radius": 20, name: "Milky Way", "color" : "red", "label": "Milky_Way3", "v1": milkyway_joy, "v2": milkyway_despair, "v3": milkyway_meh},
		{ "x_axis": 2400, "y_axis": 175, "radius": 20, name: "M & Ms", "color" : "green", "label": "M_Ms1", "v1": mm_joy, "v2": mm_despair, "v3": mm_meh},
			 { "x_axis": 2400, "y_axis": 375, "radius": 20, name: "M & Ms", "color" : "blue", "label": "M_Ms2", "v1": mm_joy, "v2": mm_despair, "v3": mm_meh},
			 { "x_axis": 2400, "y_axis": 575, "radius": 20, name: "M & Ms", "color" : "red", "label": "M_Ms3", "v1": mm_joy, "v2": mm_despair, "v3": mm_meh},
		{ "x_axis": 2500, "y_axis": 75, "radius": 20, name: "Peanut M & Ms", "color" : "green", "label": "Peanut_M_&_Ms1", "v1": mmPeanuts_joy, "v2": mmPeanuts_despair, "v3": mmPeanuts_meh},
			 { "x_axis": 2500, "y_axis": 275, "radius": 20, name: "Peanut M & Ms", "color" : "blue", "label": "Peanut_M_Ms2", "v1": mmPeanuts_joy, "v2": mmPeanuts_despair, "v3": mmPeanuts_meh},
			 { "x_axis": 2500, "y_axis": 475, "radius": 20, name: "Peanut M & Ms", "color" : "red", "label": "Peanut_M_Ms3", "v1": mmPeanuts_joy, "v2": mmPeanuts_despair, "v3": mmPeanuts_meh},
		{ "x_axis": 2600, "y_axis": 175, "radius": 20, name: "Mint Kisses", "color" : "green", "label": "Mint_Kisses1", "v1": mintKisses_joy, "v2": mintKisses_despair, "v3": mintKisses_meh},
			 { "x_axis": 2600, "y_axis": 375, "radius": 20, name: "Mint Kisses", "color" : "blue", "label": "Mint_Kisses2", "v1": mintKisses_joy, "v2": mintKisses_despair, "v3": mintKisses_meh},
			 { "x_axis": 2600, "y_axis": 575, "radius": 20, name: "Mint Kisses", "color" : "red", "label": "Mint_Kisses3", "v1": mintKisses_joy, "v2": mintKisses_despair, "v3": mintKisses_meh},
		{ "x_axis": 2700, "y_axis": 75, "radius": 20, name: "Mr. Goodbar", "color" : "green", "label": "Mr_Goodbar1", "v1": mrGoodbar_joy, "v2": mrGoodbar_despair, "v3": mrGoodbar_meh},
			 { "x_axis": 2700, "y_axis": 275, "radius": 20, name: "Mr. Goodbar", "color" : "blue", "label": "Mr_Goodbar2", "v1": mrGoodbar_joy, "v2": mrGoodbar_despair, "v3": mrGoodbar_meh},
			 { "x_axis": 2700, "y_axis": 475, "radius": 20, name: "Mr. Goodbar", "color" : "red", "label": "Mr_Goodbar3", "v1": mrGoodbar_joy, "v2": mrGoodbar_despair, "v3": mrGoodbar_meh},
		{ "x_axis": 2800, "y_axis": 175, "radius": 20, name: "Nerds", "color" : "green", "label": "Nerds1", "v1": nerds_joy, "v2": nerds_despair, "v3": nerds_meh},
			 { "x_axis": 2800, "y_axis": 375, "radius": 20, name: "Nerds", "color" : "blue", "label": "Nerds2", "v1": nerds_joy, "v2": nerds_despair, "v3": nerds_meh},
			 { "x_axis": 2800, "y_axis": 575, "radius": 20, name: "Nerds", "color" : "red", "label": "Nerds3", "v1": nerds_joy, "v2": nerds_despair, "v3": nerds_meh},
		{ "x_axis": 2900, "y_axis": 75, "radius": 20, name: "Nestle Crunch", "color" : "green", "label": "Nestle_Crunch1", "v1": nestleCrunch_joy, "v2": nestleCrunch_despair, "v3": nestleCrunch_meh},
			 { "x_axis": 2900, "y_axis": 275, "radius": 20, name: "Nestle Crunch", "color" : "blue", "label": "Nestle_Crunch2", "v1": nestleCrunch_joy, "v2": nestleCrunch_despair, "v3": nestleCrunch_meh},
			 { "x_axis": 2900, "y_axis": 475, "radius": 20, name: "Nestle Crunch", "color" : "red", "label": "Nestle_Crunch3", "v1": nestleCrunch_joy, "v2": nestleCrunch_despair, "v3": nestleCrunch_meh},
		{ "x_axis": 3000, "y_axis": 175, "radius": 20, name: "Peeps", "color" : "green", "label": "Peeps1", "v1": peeps_joy, "v2": peeps_despair, "v3": peeps_meh},
			 { "x_axis": 3000, "y_axis": 375, "radius": 20, name: "Peeps", "color" : "blue", "label": "Peeps2", "v1": peeps_joy, "v2": peeps_despair, "v3": peeps_meh},
			 { "x_axis": 3000, "y_axis": 575, "radius": 20, name: "Peeps", "color" : "red", "label": "Peeps3", "v1": peeps_joy, "v2": peeps_despair, "v3": peeps_meh},
		{ "x_axis": 3100, "y_axis": 75, "radius": 20, name: "Pixy Stix", "color" : "green", "label": "Pixy_Stix1", "v1": pixystix_joy, "v2": pixystix_despair, "v3": pixystix_meh},
			 { "x_axis": 3100, "y_axis": 275, "radius": 20, name: "Pixy Stix", "color" : "blue", "label": "Pixy_Stix2", "v1": pixystix_joy, "v2": pixystix_despair, "v3": pixystix_meh},
			 { "x_axis": 3100, "y_axis": 475, "radius": 20, name: "Pixy Stix", "color" : "red", "label": "Pixy_Stix3", "v1": pixystix_joy, "v2": pixystix_despair, "v3": pixystix_meh},
		{ "x_axis": 3200, "y_axis": 175, "radius": 20, name: "Reeses Peanut Butter Cups", "color" : "green", "label": "Reeses_Peanut_Butter_Cups1", "v1": reesesCup_joy, "v2": reesesCup_despair, "v3": reesesCup_meh},
			 { "x_axis": 3200, "y_axis": 375, "radius": 20, name: "Reeses Peanut Butter Cups", "color" : "blue", "label": "Reeses_Peanut_Butter_Cups2", "v1": reesesCup_joy, "v2": reesesCup_despair, "v3": reesesCup_meh},
			 { "x_axis": 3200, "y_axis": 575, "radius": 20, name: "Reeses Peanut Butter Cups", "color" : "red", "label": "Reeses_Peanut_Butter_Cups3", "v1": reesesCup_joy, "v2": reesesCup_despair, "v3": reesesCup_meh},
		{ "x_axis": 3315, "y_axis": 75, "radius": 20, name: "Rolos", "color" : "green", "label": "Rolos1", "v1": rolos_joy, "v2": rolos_despair, "v3": rolos_meh},
			 { "x_axis": 3315, "y_axis": 275, "radius": 20, name: "Rolos", "color" : "blue", "label": "Rolos2", "v1": rolos_joy, "v2": rolos_despair, "v3": rolos_meh},
			 { "x_axis": 3315, "y_axis": 475, "radius": 20, name: "Rolos", "color" : "red", "label": "Rolos3", "v1": rolos_joy, "v2": rolos_despair, "v3": rolos_meh},
		{ "x_axis": 3400, "y_axis": 175, "radius": 20, name: "Skittles", "color" : "green", "label": "Skittles1", "v1": skittles_joy, "v2": skittles_despair, "v3": skittles_meh},
			 { "x_axis": 3400, "y_axis": 375, "radius": 20, name: "Skittles", "color" : "blue", "label": "Skittles2", "v1": skittles_joy, "v2": skittles_despair, "v3": skittles_meh},
			 { "x_axis": 3400, "y_axis": 575, "radius": 20, name: "Skittles", "color" : "red", "label": "Skittles3", "v1": skittles_joy, "v2": skittles_despair, "v3": skittles_meh},
		{ "x_axis": 3500, "y_axis": 80, "radius": 20, name: "Snickers", "color" : "green", "label": "Snickers1", "v1": snickers_joy, "v2": snickers_despair, "v3": snickers_meh},
			 { "x_axis": 3500, "y_axis": 275, "radius": 20, name: "Snickers", "color" : "blue", "label": "Snickers2", "v1": snickers_joy, "v2": snickers_despair, "v3": snickers_meh},
			 { "x_axis": 3500, "y_axis": 475, "radius": 20, name: "Snickers", "color" : "red", "label": "Snickers3", "v1": snickers_joy, "v2": snickers_despair, "v3": snickers_meh},
		{ "x_axis": 3600, "y_axis": 175, "radius": 20, name: "Sourpatch Kids", "color" : "green", "label": "Sourpatch_Kids1", "v1": sourpatch_joy, "v2": sourpatch_despair, "v3": sourpatch_meh},
			 { "x_axis": 3600, "y_axis": 375, "radius": 20, name: "Sourpatch Kids", "color" : "blue", "label": "Sourpatch_Kids2", "v1": sourpatch_joy, "v2": sourpatch_despair, "v3": sourpatch_meh},
			 { "x_axis": 3600, "y_axis": 575, "radius": 20, name: "Sourpatch Kids", "color" : "red", "label": "Sourpatch_Kids3", "v1": sourpatch_joy, "v2": sourpatch_despair, "v3": sourpatch_meh},
		{ "x_axis": 3700, "y_axis": 75, "radius": 20, name: "Starburst", "color" : "green", "label": "Starburst1", "v1": starburst_joy, "v2": starburst_despair, "v3": starburst_meh},
			 { "x_axis": 3700, "y_axis": 275, "radius": 20, name: "Starburst", "color" : "blue", "label": "Starburst2", "v1": starburst_joy, "v2": starburst_despair, "v3": starburst_meh},
			 { "x_axis": 3700, "y_axis": 475, "radius": 20, name: "Starburst", "color" : "red", "label": "Starburst3", "v1": starburst_joy, "v2": starburst_despair, "v3": starburst_meh},
		{ "x_axis": 3800, "y_axis": 175, "radius": 20, name: "Swedish Fish", "color" : "green", "label": "Swedish_Fish1", "v1": swedishFish_joy, "v2": swedishFish_despair, "v3": swedishFish_meh},
			 { "x_axis": 3800, "y_axis": 375, "radius": 20, name: "Swedish Fish", "color" : "blue", "label": "Swedish_Fish2", "v1": swedishFish_joy, "v2": swedishFish_despair, "v3": swedishFish_meh},
			 { "x_axis": 3800, "y_axis": 575, "radius": 20, name: "Swedish Fish", "color" : "red", "label": "Swedish_Fish3", "v1": swedishFish_joy, "v2": swedishFish_despair, "v3": swedishFish_meh},
		{ "x_axis": 3900, "y_axis": 75, "radius": 20, name: "Tic Tacs", "color" : "green", "label": "Tic_Tacs1", "v1": tictacs_joy, "v2": tictacs_despair, "v3": tictacs_meh},
			 { "x_axis": 3900, "y_axis": 275, "radius": 20, name: "Tic Tacs", "color" : "blue", "label": "Tic_Tacs2", "v1": tictacs_joy, "v2": tictacs_despair, "v3": tictacs_meh},
			 { "x_axis": 3900, "y_axis": 475, "radius": 20, name: "Tic Tacs", "color" : "red", "label": "Tic_Tacs3", "v1": tictacs_joy, "v2": tictacs_despair, "v3": tictacs_meh},
		{ "x_axis": 4000, "y_axis": 175, "radius": 20, name: "Three Musketeers", "color" : "green", "label": "Three_Musketeers1", "v1": threeMusketeers_joy, "v2": threeMusketeers_despair, "v3": threeMusketeers_meh},
			 { "x_axis": 4000, "y_axis": 375, "radius": 20, name: "Three Musketeers", "color" : "blue", "label": "Three_Musketeers2", "v1": threeMusketeers_joy, "v2": threeMusketeers_despair, "v3": threeMusketeers_meh},
			 { "x_axis": 4000, "y_axis": 575, "radius": 20, name: "Three Musketeers", "color" : "red", "label": "Three_Musketeers3", "v1": threeMusketeers_joy, "v2": threeMusketeers_despair, "v3": threeMusketeers_meh},
		{ "x_axis": 4100, "y_axis": 75, "radius": 20, name: "Toblerone", "color" : "green", "label": "Toblerone1", "v1": tolberone_joy, "v2": tolberone_despair, "v3": tolberone_joy},
			 { "x_axis": 4100, "y_axis": 275, "radius": 20, name: "Toblerone", "color" : "blue", "label": "Toblerone2", "v1": tolberone_joy, "v2": tolberone_despair, "v3": tolberone_joy},
			 { "x_axis": 4100, "y_axis": 475, "radius": 20, name: "Toblerone", "color" : "red", "label": "Toblerone3", "v1": tolberone_joy, "v2": tolberone_despair, "v3": tolberone_joy},
		{ "x_axis": 4200, "y_axis": 175, "radius": 20, name: "Trail Mix", "color" : "green", "label": "Trail_Mix1", "v1": trailMix_joy, "v2": trailMix_despair, "v3": trailMix_meh},
			 { "x_axis": 4200, "y_axis": 375, "radius": 20, name: "Trail Mix", "color" : "blue", "label": "Trail_Mix2", "v1": trailMix_joy, "v2": trailMix_despair, "v3": trailMix_meh},
			 { "x_axis": 4200, "y_axis": 575, "radius": 20, name: "Trail Mix", "color" : "red", "label": "Trail_Mix3", "v1": trailMix_joy, "v2": trailMix_despair, "v3": trailMix_meh},
		{ "x_axis": 4300, "y_axis": 80, "radius": 20, name: "Twix", "color" : "green", "label": "Twix1", "v1": twix_joy, "v2": twix_despair, "v3": twix_meh},
			 { "x_axis": 4300, "y_axis": 275, "radius": 20, name: "Twix", "color" : "blue", "label": "Twix2", "v1": twix_joy, "v2": twix_despair, "v3": twix_meh},
			 { "x_axis": 4300, "y_axis": 475, "radius": 20, name: "Twix", "color" : "red", "label": "Twix3", "v1": twix_joy, "v2": twix_despair, "v3": twix_meh},
		{ "x_axis": 4400, "y_axis": 175, "radius": 20, name: "Watchamacallit Bars", "color" : "green", "label": "Watchamacallit_Bars1", "v1": watchamacallit_joy, "v2": watchamacallit_despair, "v3": watchamacallit_meh},
			 { "x_axis": 4400, "y_axis": 375, "radius": 20, name: "Watchamacallit Bars", "color" : "blue", "label": "Watchamacallit_Bars2", "v1": watchamacallit_joy, "v2": watchamacallit_despair, "v3": watchamacallit_meh},
			 { "x_axis": 4400, "y_axis": 575, "radius": 20, name: "Watchamacallit Bars", "color" : "red", "label": "Watchamacallit_Bars3", "v1": watchamacallit_joy, "v2": watchamacallit_despair, "v3": watchamacallit_meh},
		{ "x_axis": 4500, "y_axis": 75, "radius": 20, name: "York Peppermint Patties", "color" : "green", "label": "York_Peppermint_Patties1", "v1": york_joy, "v2": york_despair, "v3": york_meh},
			 { "x_axis": 4500, "y_axis": 275, "radius": 20, name: "York Peppermint Patties", "color" : "blue", "label": "York_Peppermint_Patties2", "v1": york_joy, "v2": york_despair, "v3": york_meh},
			 { "x_axis": 4500, "y_axis": 475, "radius": 20, name: "York Peppermint Patties", "color" : "red", "label": "York_Peppermint_Patties3", "v1": york_joy, "v2": york_despair, "v3": york_meh}
	];
	
	function setradius(d) {
		var total = d.v1 + d.v2 + d.v3;
		var v1_percentage = ((d.v1 / total) * 100)
		var v2_percentage = ((d.v2 / total) * 100)
		var v3_percentage = ((d.v3 / total) * 100)
		if (d.color === "green") {
			d.radius = v1_percentage;	
		}
		if (d.color === "blue") {
			d.radius = v2_percentage;
		}
		if (d.color === "red") {
			d.radius = v3_percentage;
		}
	}
	
	var begin_drawn_circles = 
		svg.selectAll("circle")
		.data(begin_circles)
		.enter()
		.append("circle");
	var begin_attributes = begin_drawn_circles
		.attr("cx", function (d) { return d.x_axis; })
		.attr("cy", function (d) { return d.y_axis; })
		.attr("r", function (d) { setradius(d); return d.radius; })
		.attr("id", function(d) { return d.label; })
		.style("fill", function(d) { return d.color; })
		.on("mouseover", function(d) {
			var tempcircles = [];
			for (var i = 0; i < begin_circles.length; i++) {
				if (begin_circles[i].x_axis === d.x_axis) {
					tempcircles.push(begin_circles[i]);
				}
			}
			tempcircles.forEach(function(elem) {
				d3.select('#'+elem.label).transition()
               		.duration('50')
               		.attr('opacity', '.45');
			});
		})
		.on('mouseout', function (d, i) {
			var tempcircles = [];
			for (var i = 0; i < begin_circles.length; i++) {
				if (begin_circles[i].x_axis === d.x_axis) {
					tempcircles.push(begin_circles[i]);
				}
			}
			tempcircles.forEach(function(elem) {
				d3.select('#'+elem.label).transition()
               		.duration('50')
               		.attr('opacity', '1');
			});
		})
		.append("title")
		.text(function(d) {return d.name;});
	
	var gendertotal = males + females + other_gender;   
	var agetotal = age_under_eighteen + age_eighteen_to_thirty + age_thirty_to_fifty + age_above_fifty;
	
	document.getElementById("age1").innerHTML = age_under_eighteen + " people" + " / " + ((age_under_eighteen/agetotal)*100).toFixed(2).toString() + "%";
	document.getElementById("age2").innerHTML = age_eighteen_to_thirty + " people" + " / " + ((age_eighteen_to_thirty/agetotal)*100).toFixed(2).toString() + "%";
	document.getElementById("age3").innerHTML = age_thirty_to_fifty + " people" + " / " + ((age_thirty_to_fifty/agetotal)*100).toFixed(2).toString() + "%";
	document.getElementById("age4").innerHTML = age_above_fifty + " people" + " / " + ((age_above_fifty/agetotal)*100).toFixed(2).toString() + "%";
	document.getElementById("male").innerHTML = males + " people" + " / " + ((males/gendertotal)*100).toFixed(2).toString() + "%";
	document.getElementById("female").innerHTML = females + " people" + " / " + ((females/gendertotal)*100).toFixed(2).toString() + "%";
    document.getElementById("other").innerHTML = other_gender + " people" + " / " +     ((other_gender/gendertotal)*100).toFixed(2).toString() + "%";             
    


    
	
	d3.select(graph)
        .append('p')
        .append('button')
            .attr('id', 'button-filter')
        .text('Filter by Candy')
        .on('click', function() {
			selectedCandy = document.getElementById('dropdown').value;
			if (selectedCandy === "butterfinger") {
				var coldata = data.map(function(d) { return d.Q6_Butterfinger; });
				filterdata(coldata, butterfinger_joy, butterfinger_despair, butterfinger_meh, "https://images.freshop.com/00028000202033/19081e2fe3f55dd37bac2e77190f1fdf_medium.png");
			}
			if (selectedCandy === "candy_corn") {
				var coldata = data.map(function(d) { return d.Q6_Candy_Corn; });
				filterdata(coldata, candycorn_joy, candycorn_despair, candycorn_meh, "https://www.shareicon.net/data/256x256/2016/01/03/230632_candy_256x256.png");
			}
			if (selectedCandy === "chiclets") {
				var coldata = data.map(function(d) { return d.Q6_Chiclets; });
				filterdata(coldata, chiclets_joy, chiclets_despair, chiclets_meh, "http://walnutcreekcheese.com/images/detailed/2/chiclets.jpg");
			}
			if (selectedCandy === "dots") {
				var coldata = data.map(function(d) { return d.Q6_Dots; });
				filterdata(coldata, dots_joy, dots_despair, dots_meh, "https://images.freshop.com/00071720049723/760dbdbc596e2991527856748f1a39b5_medium.png");
			}
			if (selectedCandy === "fuzzy_peaches") {
				var coldata = data.map(function(d) { return d.Q6_Fuzzy_Peaches; });
				filterdata(coldata, fuzzyPeaches_joy, fuzzyPeaches_despair, fuzzyPeaches_meh, "https://images-na.ssl-images-amazon.com/images/I/81TxqG5Bz8L._SY450_.jpg");
			}
			if (selectedCandy === "goodnplenty") {
				var coldata = data.map(function(d) { return d.Q6_Good_N_Plenty; });
				filterdata(coldata, goodNplenty_joy, goodNplenty_despair, goodNplenty_meh, "https://www.pearlscandynh.com/prodimages/goodnplentybox1b.jpg");
			}
			if (selectedCandy === "gummy_bears") {
				var coldata = data.map(function(d) { return d.Q6_Gummy_Bears_straight_up; });
				filterdata(coldata, gummybears_joy, gummybears_despair, gummybears_meh, "https://images.freshop.com/6949613/4555c52371d594ee0a5791bc2d1f1815_medium.png");
			}
			if (selectedCandy === "healthy_fruit") {
				var coldata = data.map(function(d) { return d.Q6_Healthy_Fruit; });
				filterdata(coldata, healthyFruit_joy, healthyFruit_despair, healthyFruit_meh, "http://aux.iconspalace.com/uploads/apple-red-icon-256.png");
			}
			if (selectedCandy === "heath_bar") {
				var coldata = data.map(function(d) { return d.Q6_Heath_Bar; });
				filterdata(coldata, heathbar_joy, heathbar_despair, heathbar_meh, "https://images.freshop.com/00010700060907/c0a4e2a552736be27da3cc6e385ecbff_medium.png");
			}
			if (selectedCandy === "hershey_dark") {
				var coldata = data.map(function(d) { return d.Q6_Hershey_s_Dark_Chocolate; });
				filterdata(coldata, hersheyDark_joy, hersheyDark_despair, hersheyDark_meh, "https://images.freshop.com/00034000002252/c3187e46a5120491acc5e7ea80e9a84b_medium.png");
			}
			if (selectedCandy === "hershey_milk") {
				var coldata = data.map(function(d) { return d.Q6_Hershey_s_Milk_Chocolate; });
				filterdata(coldata, hersheyMilk_joy, hersheyMilk_despair, hersheyMilk_meh, "https://images.freshop.com/00034000002405/af89a66dd0b0e82abb0d91c82b151107_medium.png");
			}
			if (selectedCandy === "kisses") {
				var coldata = data.map(function(d) { return d.Q6_Hershey_s_Kisses; });
				filterdata(coldata, hersheyKiss_joy, hersheyKiss_despair, hersheyKiss_meh, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKSjBXL4BiwCWKo4dEDcgHBS5ooxcuHzd8zutn0sLY2obc0T1y");
			}
			if (selectedCandy === "jolly_rancher") {
				var coldata = data.map(function(d) { return d.Q6_Jolly_Ranchers_good_flavor; });
				filterdata(coldata, jollyrancher_joy, jollyrancher_despair, jollyrancher_meh, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTJHn2p4L1VQ5K0rzaMcLXsQqLuHQ5srX3nDMimm8HaBW4j5Yftw");
			}
			if (selectedCandy === "junior_mints") {
				var coldata = data.map(function(d) { return d.Q6_Junior_Mints; });
				filterdata(coldata, juniormints_joy, juniormints_despair, juniormints_meh, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA0SDV8yyfheB6X7VB7D7m0NTAUzcUjz2USeITAuPvKqqQHYdIVQ");
			}
			if (selectedCandy === "kit_kat") {
				var coldata = data.map(function(d) { return d.Q6_Kit_Kat; });
				filterdata(coldata, kitkat_joy, kitkat_despair, kitkat_meh, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpnQi5GFX6FExq8BM4yKNtg8fujQm55axxeIeHrNxsFwJe3VQxtQ");
			}
			if (selectedCandy === "laffy_taffy") {
				var coldata = data.map(function(d) { return d.Q6_LaffyTaffy; });
				filterdata(coldata, laffytaffy_joy, laffytaffy_despair, laffytaffy_meh, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrl8GMnahTildkz8x3sMC6KqyaZWwB-_nKVUaKzZKyloo_uQFGmw");
			}
			if (selectedCandy === "lemon_heads") {
				var coldata = data.map(function(d) { return d.Q6_LemonHeads; });
				filterdata(coldata, lemonheads_joy, lemonheads_despair, lemonheads_meh, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKOhQ_35XaJZHewBlu_SRbqlWsjK8y3_3K8F-OfPOEOypZO_l");
			}
			if (selectedCandy === "licorice_nonblack") {
				var coldata = data.map(function(d) { return d.Q6_Licorice_not_black; });
				filterdata(coldata, licorice_joy, licorice_despair, licorice_meh, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Udjnx-7JjMkDmYkMjcQ_V9y4igL4ZSs0cHhkHztVufSHlcmI");
			}
			if (selectedCandy === "licorice_black") {
				var coldata = data.map(function(d) { return d.Q6_Licorice_yes_black; });
				filterdata(coldata, licoriceBlack_joy, licoriceBlack_despair, licoriceBlack_meh, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlLnqjERV3fOyzoeWwMthlOvna03mzI9a-eAg_Bbdf36XOmJe-aw");
			}
			if (selectedCandy === "lollipops") {
				var coldata = data.map(function(d) { return d.Q6_Lollipops; });
				filterdata(coldata, lollipops_joy, lollipops_despair, lollipops_meh, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8J5UBXhz_8VUiaop8TY9Z4QP7s9MTDHQmGzloy19fLhNxToDeEg");
			}
			if (selectedCandy === "mikeandike") {
				var coldata = data.map(function(d) { return d.Q6_Mike_and_Ike; });
				filterdata(coldata, mikeAndIke_joy, mikeAndIke_despair, mikeAndIke_meh, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoYJ553HP9x3vygGkawuHL_mzpwpa7uNV9wBbH7i09JCVGKCsdUA");
			}
			if (selectedCandy === "milk_duds") {
				var coldata = data.map(function(d) { return d.Q6_Milk_Duds; });
				filterdata(coldata, milkduds_joy, milkduds_despair, milkduds_meh, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRZdvgA6jw7niWKqKi6zyOy7xKXVF_D6LcAdnLbePE27nQ_grPRA");
			}
			if (selectedCandy === "milky_way") {
				var coldata = data.map(function(d) { return d.Q6_Milky_Way; });
				filterdata(coldata, milkyway_joy, milkyway_despair, milkyway_meh, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHstDzcCRAUCXjlSrp3ur4EIOV62EiMEBJdhwh_PXxCopnCCOepA");
			}
			if (selectedCandy === "mandms") {
				var coldata = data.map(function(d) { return d.Q6_Regular_M_Ms; });
				filterdata(coldata, mm_joy, mm_despair, mm_meh, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXustB0XIOZJyH-yN4Vp3uSct0c-we8l1bPInc1vIE9yeTBlT7");
			}
			if (selectedCandy === "peanut_mandms") {
				var coldata = data.map(function(d) { return d.Q6_Peanut_M_M_s; });
				filterdata(coldata, mmPeanuts_joy, mmPeanuts_despair, mmPeanuts_meh, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs9oYktHWwe1jhAwhxQWiE_aXZDDVVZkqvAzhfEq3u0W39rzzX");
			}
			if (selectedCandy === "mint_kisses") {
				var coldata = data.map(function(d) { return d.Q6_Mint_Kisses; });
				filterdata(coldata, mintKisses_joy, mintKisses_despair, mintKisses_meh, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkil_cftzxPtikg8tZC9YZ9iaGnVuDQlKhSsumgmjybvDjqWZQ");
			}
			if (selectedCandy === "mr_goodbar") {
				var coldata = data.map(function(d) { return d.Q6_Mr_Goodbar; });
				filterdata(coldata, mrGoodbar_joy, mrGoodbar_despair, mrGoodbar_meh, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3tAHLT3NdQqdiuGundL2qTHOXIbig1pJDBkimNNRTuWPFlLfnjQ");
			}
			if (selectedCandy === "nerds") {
				var coldata = data.map(function(d) { return d.Q6_Nerds; });
				filterdata(coldata, nerds_joy, nerds_despair, nerds_meh, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQisXUeIaMevsO9Bb-wcH8Tqa1EcBdegfp6HQ7PPNDVPX9T99Ex");
			}
			if (selectedCandy === "nestle_crunch") {
				var coldata = data.map(function(d) { return d.Q6_Nestle_Crunch; });
				filterdata(coldata, nestleCrunch_joy, nestleCrunch_despair, nestleCrunch_meh, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0JOqtzJee4g2GphcgYeHED8AEI_DGuPzoYPGSwCAXENPNmtrQGA");
			}
			if (selectedCandy === "peeps") {
				var coldata = data.map(function(d) { return d.Q6_Peeps; });
				filterdata(coldata, peeps_joy, peeps_despair, peeps_meh, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzmFmMq7l1Bc-VYKUOYkFabxH4AvMyX8jvlCD6-zC6MLq0qTwb");
			}
			if (selectedCandy === "pixy_stix") {
				var coldata = data.map(function(d) { return d.Q6_Pixy_Stix; });
				filterdata(coldata, pixystix_joy, pixystix_despair, pixystix_meh, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-UxWoY70GkC0vCr9GbQw--rlKPYIwcwFkpRMjyOJmBGTyjoLqwg");
			}
			if (selectedCandy === "reeses") {
				var coldata = data.map(function(d) { return d.Q6_Reese_s_Peanut_Butter_Cups; });
				filterdata(coldata, reesesCup_joy, reesesCup_despair, reesesCup_meh, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd_q4t0rN-CtxpgEgffgBfBT71JRAclHteNpnhzQPmZ7405lh5Lg");
			}
			if (selectedCandy === "rolos") {
				var coldata = data.map(function(d) { return d.Q6_Rolos; });
				filterdata(coldata, rolos_joy, rolos_despair, rolos_meh, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX6f9OGqkr4y-xQ9ryQVahH7e4XbFStZV9fYa_k32MASA1QfKFCg");
			}
			if (selectedCandy === "skittles") {
				var coldata = data.map(function(d) { return d.Q6_Skittles; });
				filterdata(coldata, skittles_joy, skittles_despair, skittles_meh, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbskZfunGke3NCNOFKWaMtP3dN4jAFZZlvO0gFhtqjvnI8aXd1ig");
			}
			if (selectedCandy === "snickers") {
				var coldata = data.map(function(d) { return d.Q6_Snickers; });
				filterdata(coldata, snickers_joy, snickers_despair, snickers_meh, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxzHRilbHY74jTGQ4Qv3Y4vN5vD4lQDwLUVsPrdAkafXmv8vdKwg");
			}
			if (selectedCandy === "sourpatch") {
				var coldata = data.map(function(d) { return d.Q6_Sourpatch_Kids_i_e_abominations_of_nature; });
				filterdata(coldata, sourpatch_joy, sourpatch_despair, sourpatch_meh, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqMRH7O_Z_QPHILFMazG8CJbAzYdbOGoqU1Gj1FNVw23DqdJ1_Rg");
			}
			if (selectedCandy === "starburst") {
				var coldata = data.map(function(d) { return d.Q6_Starburst; });
				filterdata(coldata, starburst_joy, starburst_despair, starburst_meh, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4QHMeVuP7Q0nme14yENo2aOSEmnUajQKMiLEv2kvlIp1L7lTnZw");
			}
			if (selectedCandy === "swedish_fish") {
				var coldata = data.map(function(d) { return d.Q6_Swedish_Fish; });
				filterdata(coldata, swedishFish_joy, swedishFish_despair, swedishFish_meh, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR76vMP5yiO5hfeFhEB9CtvmNfJ6Sm1DcdDGd-lgjZgxa2zw0DG");
			}
			if (selectedCandy === "tic_tacs") {
				var coldata = data.map(function(d) { return d.Q6_Tic_Tacs; });
				filterdata(coldata, tictacs_joy, tictacs_despair, tictacs_meh, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRftogjpSKHpsXqYU3nwXYzX189G0ll2Naehed-OOK-m98bpZ7f");
			}
			if (selectedCandy === "three_musketeers") {
				var coldata = data.map(function(d) { return d.Q6_Three_Musketeers; });
				filterdata(coldata, threeMusketeers_joy, threeMusketeers_despair, threeMusketeers_meh, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw8iZr6lMCoRBQB5olcAWJ0y9b2jBMMRsnq8cvWBxS-MWmceZD3Q");
			}
			if (selectedCandy === "toblerone") {
				var coldata = data.map(function(d) { return d.Q6_Tolberone_something_or_other; });
				filterdata(coldata, tolberone_joy, tolberone_despair, tolberone_meh, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsCjE-Mya1Wc2upa8n4dfTSw73YESkywkzytYb-_FszhQ7DprVyA");
			}
			if (selectedCandy === "trail_mix") {
				var coldata = data.map(function(d) { return d.Q6_Trail_Mix; });
				filterdata(coldata, trailMix_joy, trailMix_despair, trailMix_meh, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpd-juDw6-ckc8qgK7DVwR72rl_0M8wewYcvE67OsvmXBAn8Ms");
			}
			if (selectedCandy === "twix") {
				var coldata = data.map(function(d) { return d.Q6_Twix; });
				filterdata(coldata, twix_joy, twix_despair, twix_meh, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ-OCOTfE4GklzH-mhW3ZEW8dwGTvt-uQ9439vyUvorcKk537Y");
			}
			if (selectedCandy === "watchamacallit") {
				var coldata = data.map(function(d) { return d.Q6_Whatchamacallit_Bars; });
				filterdata(coldata, watchamacallit_joy, watchamacallit_despair, watchamacallit_meh, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIhjxjJX5EDUxX8kV5H489Q1hwheMzmwd7H_RixHRHULEM1kNDpQ");
			}
			if (selectedCandy === "york") {
				var coldata = data.map(function(d) { return d.Q6_York_Peppermint_Patties; });
				filterdata(coldata, york_joy, york_despair, york_meh, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkVSculb-Rh8K2VUBSLETGsr3-Mi66ljdbUnP6T8vui5EiM0XiOw");
			}
        });
	
	d3.select(graph)
		.append('p')
		.append('button')
			.attr('id', 'button-reset')
		.text('Reset Filter')
		.on('click', function() {
			svg.selectAll("*").remove();
			document.getElementById("joy").innerHTML = "";
			document.getElementById("despair").innerHTML = "";
			document.getElementById("meh").innerHTML = "";
			document.getElementById("chart").style.display = "none";
			document.getElementById("attrib-labels").style.display = "none";
			document.getElementById("chart2").style.display = "block";
			document.getElementById("unfiltered-labels").style.display = "block";
			var begin_drawn_circles = 
				svg.selectAll("circle")
				.data(begin_circles)
				.enter()
				.append("circle");
			var begin_attributes = begin_drawn_circles
				.attr("cx", function (d) { return d.x_axis; })
				.attr("cy", function (d) { return d.y_axis; })
				.attr("r", function (d) { setradius(d); return d.radius; })
				.attr("id", function(d) { return d.label; })
				.style("fill", function(d) { return d.color; })
				.on("mouseover", function(d) {
					var tempcircles = [];
					for (var i = 0; i < begin_circles.length; i++) {
						if (begin_circles[i].x_axis === d.x_axis) {
							tempcircles.push(begin_circles[i]);
						}
					}
					tempcircles.forEach(function(elem) {
						d3.select('#'+elem.label).transition()
							.duration('50')
							.attr('opacity', '.45');
					});
				})
				.on('mouseout', function (d, i) {
					var tempcircles = [];
					for (var i = 0; i < begin_circles.length; i++) {
						if (begin_circles[i].x_axis === d.x_axis) {
							tempcircles.push(begin_circles[i]);
						}
					}
					tempcircles.forEach(function(elem) {
						d3.select('#'+elem.label).transition()
							.duration('50')
							.attr('opacity', '1');
					});
				})
				.append("title")
				.text(function(d) {return d.name;});
			});
	
	d3.select(graph)
        .append('p')
        .append('button')
            .attr('id', 'button-search')
        .text('Search')
        .on('click', function() {
			var found = false;
			var allCandy = document.getElementById('dropdown');
			var searchedCandy = document.getElementById('search').value;
			for (var i = 0; i < allCandy.length; i++) {
				if (searchedCandy === allCandy.options[i].text) {
					allCandy.selectedIndex = i;
					found = true;
				}
			}
			if (found != true) {
				alert("Could not find entered in candy");
			}
			document.getElementById('search').value = "";
        });
	
	function filterdata(coldata, v1, v2, v3, image_link) {
		svg.selectAll("*").remove();
		var myimage = svg.append('image')
    		.attr('xlink:href', image_link)
    		.attr('width', 200)
    		.attr('height', 200)
			.attr("transform", "translate(675, 100)");
		var male_joy = 0;
		var male_despair = 0;
		var male_meh = 0;
		var female_joy = 0;
		var female_despair = 0;
		var female_meh = 0;
		var other_joy = 0;
		var other_despair = 0;
		var other_meh = 0;
		var under_eighteen_joy = 0;
		var under_eighteen_despair = 0;
		var under_eighteen_meh = 0;
		var eighteen_to_thirty_joy = 0;
		var eighteen_to_thirty_despair = 0;
		var eighteen_to_thirty_meh = 0;
		var thirty_to_fifty_joy = 0;
		var thirty_to_fifty_despair = 0;
		var thirty_to_fifty_meh = 0;
		var above_fifty_joy = 0;
		var above_fifty_despair = 0;
		var above_fifty_meh = 0;
		for (var i = 0; i < coldata.length; i++) {
			if (data[i].Q2_GENDER === "Male" && coldata[i] === "JOY") {
				male_joy += 1;
			}
			if (data[i].Q2_GENDER === "Male" && coldata[i] === "DESPAIR") {
				male_despair += 1;
			}
			if (data[i].Q2_GENDER === "Male" && coldata[i] === "MEH") {
				male_meh += 1;
			}
			if (data[i].Q2_GENDER === "Female" && coldata[i] === "JOY") {
				female_joy += 1;
			}
			if (data[i].Q2_GENDER === "Female" && coldata[i] === "DESPAIR") {
				female_despair += 1;
			}
			if (data[i].Q2_GENDER === "Female" && coldata[i] === "MEH") {
				female_meh += 1;
			}
			if (data[i].Q2_GENDER != "Female" && data[i].Q2_GENDER != "Male" && coldata[i] === "JOY") {
				other_joy += 1;
			}
			if (data[i].Q2_GENDER != "Female" && data[i].Q2_GENDER != "Male" && coldata[i] === "DESPAIR") {
				other_despair += 1;
			}
			if (data[i].Q2_GENDER != "Female" && data[i].Q2_GENDER != "Male" && coldata[i] === "MEH") {
				other_meh += 1;
			}
			if (data[i].Q3_AGE < 18 && coldata[i] === "JOY") {
				under_eighteen_joy += 1;
			} else if (data[i].Q3_AGE >= 18 && data[i].Q3_AGE <= 30 && coldata[i] === "JOY") {
				eighteen_to_thirty_joy += 1;
			} else if (data[i].Q3_AGE > 30 && data[i].Q3_AGE <= 50 && coldata[i] === "JOY") {
				thirty_to_fifty_joy += 1;
			} else {
				if (coldata[i] === "JOY") {
					above_fifty_joy += 1;	
				}
			}
			if (data[i].Q3_AGE < 18 && coldata[i] === "DESPAIR") {
				under_eighteen_despair += 1;
			} else if (data[i].Q3_AGE >= 18 && data[i].Q3_AGE <= 30 && coldata[i] === "DESPAIR") {
				eighteen_to_thirty_despair += 1;
			} else if (data[i].Q3_AGE > 30 && data[i].Q3_AGE <= 50 && coldata[i] === "DESPAIR") {
				thirty_to_fifty_despair += 1;
			} else {
				if (coldata[i] === "DESPAIR") {
					above_fifty_despair += 1;	
				}
			}
			if (data[i].Q3_AGE < 18 && coldata[i] === "MEH") {
				under_eighteen_meh += 1;
			} else if (data[i].Q3_AGE >= 18 && data[i].Q3_AGE <= 30 && coldata[i] === "MEH") {
				eighteen_to_thirty_meh += 1;
			} else if (data[i].Q3_AGE > 30 && data[i].Q3_AGE <= 50 && coldata[i] === "MEH") {
				thirty_to_fifty_meh += 1;
			} else {
				if (coldata[i] === "MEH") {
					above_fifty_meh += 1;	
				}
			}
		}
		
		var total = v1 + v2 + v3;
		var v1_percentage = ((v1 / total) * 100)
		var v1_str = v1.toString() + " votes / " + v1_percentage.toFixed(2).toString() + "%";
		var v2_percentage = ((v2 / total) * 100)
		var v2_str = v2.toString() + " votes / " + v2_percentage.toFixed(2).toString() + "%";
		var v3_percentage = ((v3 / total) * 100)
		var v3_str = v3.toString() + " votes / " + v3_percentage.toFixed(2).toString() + "%";
		
		var maletotal = male_joy + male_despair + male_meh;
		var femaletotal = female_joy + female_despair + female_meh;
		var othertotal = other_joy + other_despair + other_meh;
		var undereighteentotal = under_eighteen_joy + under_eighteen_despair + under_eighteen_meh;
		var eighteentothirtytotal = eighteen_to_thirty_joy + eighteen_to_thirty_despair + eighteen_to_thirty_meh;
		var thirtytofiftytotal = thirty_to_fifty_joy + thirty_to_fifty_despair + thirty_to_fifty_meh;
		var abovefiftytotal = above_fifty_joy + above_fifty_despair + above_fifty_meh;
		
		joy_string = "Male: " + male_joy + " people / " + ((male_joy/v1)*100).toFixed(2).toString() + "%" + '\n'
			+ "Female: " + female_joy + " people / " + ((female_joy/v1)*100).toFixed(2).toString() + "%" + '\n'
			+ "Other: " + other_joy + " people / " + ((other_joy/v1)*100).toFixed(2).toString() + "%" + '\n'
			+ "Age < 18: " + under_eighteen_joy + " people / " + ((under_eighteen_joy/v1)*100).toFixed(2).toString() + "%" + '\n'
			+ "Age 18 - 30: " + eighteen_to_thirty_joy + " people / " + ((eighteen_to_thirty_joy/v1)*100).toFixed(2).toString() + "%" + '\n'
			+ "Age 30 - 50: " + thirty_to_fifty_joy + " people / " + ((thirty_to_fifty_joy/v1)*100).toFixed(2).toString() + "%" + '\n'
			+ "Age > 50: " + above_fifty_joy + " people / " + ((above_fifty_joy/v1)*100).toFixed(2).toString() + "%";
		despair_string = "Male: " + male_despair + " people / " + ((male_despair/v2)*100).toFixed(2).toString() + "%" + '\n'
			+ "Female: " + female_despair + " people / " + ((female_despair/v2)*100).toFixed(2).toString() + "%" + '\n'
			+ "Other: " + other_despair + " people / " + ((other_despair/v2)*100).toFixed(2).toString() + "%" + '\n'
			+ "Age < 18: " + under_eighteen_despair + " people / " + ((under_eighteen_despair/v2)*100).toFixed(2).toString() + "%" + '\n'
			+ "Age 18 - 30: " + eighteen_to_thirty_despair + " people / " + ((eighteen_to_thirty_despair/v2)*100).toFixed(2).toString() + "%" + '\n'
			+ "Age 30 - 50: " + thirty_to_fifty_despair + " people / " + ((thirty_to_fifty_despair/v2)*100).toFixed(2).toString() + "%" + '\n'
			+ "Age > 50: " + above_fifty_despair + " people / " + ((above_fifty_despair/v2)*100).toFixed(2).toString() + "%";
		meh_string = "Male: " + male_meh + " people / " + ((male_meh/v3)*100).toFixed(2).toString() + "%" + '\n'
			+ "Female: " + female_meh + " people / " + ((female_meh/v3)*100).toFixed(2).toString() + "%" + '\n'
			+ "Other: " + other_meh + " people / " + ((other_meh/v3)*100).toFixed(2).toString() + "%" + '\n'
			+ "Age < 18: " + under_eighteen_meh + " people / " + ((under_eighteen_meh/v3)*100).toFixed(2).toString() + "%" + '\n'
			+ "Age 18 - 30: " + eighteen_to_thirty_meh + " people / " + ((eighteen_to_thirty_meh/v3)*100).toFixed(2).toString() + "%" + '\n'
			+ "Age 30 - 50: " + thirty_to_fifty_meh + " people / " + ((thirty_to_fifty_meh/v3)*100).toFixed(2).toString() + "%" + '\n'
			+ "Age > 50: " + above_fifty_meh + " people / " + ((above_fifty_meh/v3)*100).toFixed(2).toString() + "%";
		
		var circles = [
			 { "x_axis": 150, "y_axis": 250, "radius": 40, "color" : "green", "label": joy_string},
			 { "x_axis": 330, "y_axis": 400, "radius": 40, "color" : "blue", "label": despair_string},
			 { "x_axis": 525, "y_axis": 550, "radius": 40, "color" : "red", "label": meh_string}];
		
		circles[0].radius = v1_percentage.toFixed(2);
		circles[1].radius = v2_percentage.toFixed(2);
		circles[2].radius = v3_percentage.toFixed(2);
		
		document.getElementById("joy").innerHTML = v1_str;
		document.getElementById("despair").innerHTML = v2_str;
		document.getElementById("meh").innerHTML = v3_str;
		
		document.getElementById("chart").style.display = "block";
		document.getElementById("attrib-labels").style.display = "block";
		document.getElementById("chart2").style.display = "none";
		document.getElementById("unfiltered-labels").style.display = "none";
		
		var drawn_circles = 
			svg.selectAll("circle")
			.data(circles)
			.enter()
			.append("circle");
		var attributes = drawn_circles
			.attr("cx", function (d) { return d.x_axis; })
			.attr("cy", function (d) { return d.y_axis; })
			.attr("r", function (d) { return d.radius; })
			.style("fill", function(d) { return d.color; })
		 	.on('mouseover', function (d, i) {
          		d3.select(this).transition()
               .duration('50')
               .attr('opacity', '.45');
			})
     	  	.on('mouseout', function (d, i) {
          		d3.select(this).transition()
               .duration('50')
               .attr('opacity', '1');
			})
			.append("title")
			.text(function(d) {return d.label;});
	}
});