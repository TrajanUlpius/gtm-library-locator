function init () {
	
	// déclaration d'un objet contenant les coordonnées de la position initiale de la carte
	const centerMap = {
		lat: 48.851604,
		lng: -1.481649619269687
	}
	
	// déclaration du niveau de zoom
	const zoomLevel = 10.5;
	
	// déclaration de la carte avec ces variables en arguments
	const map = L.map('mapid').setView([centerMap.lat, centerMap.lng], zoomLevel);
	
	// déclaration du calque principal avec les données de bases, l'attribution des sources, et le token d'accès de mapbox
	const mainLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoibm1haW5lIiwiYSI6ImNrejQwbnZqdzBiemwycGthdDc5YWN6NzEifQ.lH5UJZAaaQh7mqZvck8dDg'
	});
	
	// affichage du calque
	mainLayer.addTo(map);
	
	// déclaration d'un objet médiathèques avec : ses coordonnées, le contenu du pop-up, et un tableau représentant les jours d'ouvertures, contenant les horaires d'ouvertures
	var animatheque = {
		latlng: [48.8343154,-1.567634],
		popupText: "<b>Animathèque municipale</b><br>202 rue Paul de Gibon - 50400 Granville<br><br>02 33 61 98 98 - animatheque@ville-granville.fr<br><br><b>Mardi :</b> 14:00 - 18:00<br><b>Mercredi :</b> 10:00 - 12:00 & 14:00 - 18:00<br><b>Jeudi :</b> 10:00 - 12:00 & 14:00 - 18:00<br><b>Vendredi :</b> 14:00 - 18:00",
		openingDays: [
		//lundi (exemple de jour fermé)
		{},
		// mardi
		{openingHours: [1400, 1800]},
		// mercredi
		{openingHours: [1000, 1200, 1400, 1800]},
		// jeudi
		{openingHours: [1000, 1200, 1400, 1800]},
		// vendredi
		{openingHours: [1400, 1800]},
		// samedi
		{},
		// dimanche
		{}
		]
	};
	
	// nous allons déclarer sur le même modèle toutes nos autres médiathèques
	var brehal = {
		latlng: [48.8989937, -1.5100729],
		popupText: "<b>Médiathèque municipale Marcel-Launay</b><br>2 rue Briselance - 50290 Bréhal<br><br>02 33 91 96 92 - mediatheque@ville-brehal.fr<br><br><b>Lundi :</b> 16:00 - 19:00<br><b>Mardi :</b> 10:00 - 12:30<br><b>Mercredi :</b> 10:00 - 12:30 & 14:30 - 18:00<br><b>Vendredi :</b> 16:00 - 19:00<br><b>Samedi :</b> 10:00 - 12:30 & 14:30 - 16:30",
		openingDays: [
		//lundi
		{openingHours: [1600,1900]},
		// mardi
		{openingHours: [1000, 1230]},
		// mercredi
		{openingHours: [1000, 1230, 1430, 2000]},
		// jeudi
		{},
		// vendredi
		{openingHours: [1600, 1900]},
		// samedi
		{openingHours: [1000, 1230, 1430, 1630]},
		// dimanche
		{}
		]
	};
	
	var cerences = {
		latlng: [48.9169018, -1.4350607],
		popupText: "<b>Médiathèque municipale de Cérences</b><br>10 rue des Salines - 50510 Cérences<br><br>02 33 51 66 03 - mediatheque.cerences@orange.fr<br><br><b>Mardi :</b> 16:30 - 18:30<br><b>Mercredi :</b> 9:00 - 12:30 & 15:00 - 18:30<br><b> Jeudi :</b>9:00 - 12:30<br><b>Vendredi :</b> 16:30 - 18:30<br><b>Samedi :</b> 9:00 - 12:30",
		openingDays: [
		//lundi
		{},
		// mardi
		{openingHours: [1630, 1830]},
		// mercredi
		{openingHours: [900, 1230, 1500, 1830]},
		// jeudi
		{openingHours: [900, 1230]},
		// vendredi
		{openingHours: [1630, 1830]},
		// samedi
		{openingHours: [900, 1230]},
		// dimanche
		{}
		]
	};
	
	var donville = {
		latlng: [48.8474119,-1.5740285],
		popupText: "<b>Médiathèque municipale de Donville-les-Bains</b><br>2 rue de la Passardière - 50350 Donville-les-Bains<br><br>02 33 51 79 31 - mediatheque@donville.fr<br><br><b>Lundi :</b> 10:00 -12:30<br><b>Mardi :</b> 15:30 - 17:30<br><b>Mercredi :</b> 10:00 - 12:30 & 14:30 - 17:30<br><b>Jeudi :</b> 15:30 - 18:00<b><br>Samedi :</b> 10:00 - 12:30",
		openingDays: [
		//lundi
		{openingHours: [1000,1230]},
		// mardi
		{openingHours: [1530, 1730]},
		// mercredi
		{openingHours: [1000, 1230, 1430, 1730]},
		// jeudi
		{openingHours: [1530, 1800]},
		// vendredi
		{},
		// samedi
		{openingHours: [1000, 1230]},
		// dimanche
		{}
		]
	};
	
	var granville = {
		latlng: [48.8368048, -1.5984592],
		popupText: "<b>Médiathèque municipale Charles de La Morandière</b><br>rue Clément Desmaisons - 50400 Granville<br><br>02 33 50 34 09 - mediatheque@ville-granville.fr<br><br><b>Mardi :</b> 13:00 - 18:00<br><b>Mercredi :</b> 10:00 - 12:00 & 13:00 - 18:00<br><b>Jeudi :</b> 13:00 - 18:00<br><b>Vendredi :</b> 13:00 - 18:00<br><b>Samedi :</b> 10:00 - 17:00 (fermée en juillet et août)",
		openingDays: [
		//lundi
		{},
		// mardi
		{openingHours: [1300, 1800]},
		// mercredi
		{openingHours: [1000, 1200, 1300, 1800]},
		// jeudi
		{openingHours: [1300, 1800]},
		// vendredi
		{openingHours: [1300, 1800]},
		// samedi
		{openingHours: [1000, 1700]},
		// dimanche
		{}
		]
	};
	
	var hayePesnel = {
		latlng: [48.79665756225586, -1.398124098777771],
		popupText: "<b>Médiathèque intercommunale Emile-Vivier</b><br>8c rue de la Libération - 50320 La Haye-Pesnel<br><br>02 33 51 07 75 - mediatheque-lhp@granville-terre-mer.fr<br><br><b>Lundi :</b> 16:00 - 18:00<br><b>Mercredi :</b> 10:00 - 12:30 & 13:30 - 17:00<br><b>Jeudi :</b> 16:00 - 18:00<br><b>Samedi :</b> 10:00 - 12:00",
		openingDays: [
		//lundi
		{openingHours: [1600,1800]},
		// mardi
		{},
		// mercredi
		{openingHours: [1000, 1230, 1330, 1700]},
		// jeudi
		{openingHours: [1600,1800]},
		// vendredi
		{},
		// samedi
		{openingHours: [1000, 1200]},
		// dimanche
		{}
		]
	};
	
	var stJean = {
		latlng: [48.8268829, -1.4650631],
		popupText: "<b>Médiathèque intercommunale Emile-Vivier (antenne)</b><br>3b square André Néel - 50320 Saint-Jean-des-Champs<br><br>02 33 51 15 76 - mediatheque-lhp@granville-terre-mer.fr<br><br><b>Mercredi : </b>10:00 - 12:00 & 14:00 - 16:00<br><b>Samedi :</b> 10:00 - 12:00 (mais fermée jusqu'à nouvel ordre)",
		openingDays: [
		//lundi
		{},
		// mardi
		{},
		// mercredi
		{openingHours: [1000, 1200, 1400, 1600]},
		// jeudi
		{},
		// vendredi
		{},
		// samedi
		{openingHours: [1000, 1200]},
		// dimanche
		{}
		]
	};
	
	var stPair = {
		latlng: [48.81367111206055,-1.565131425857544],
		popupText: "<b>Médiathèque municipale de Saint-Pair-sur-Mer</b><br>40 place de la Gare - 50380 Saint-Pair-sur-Mer<br><br>02 33 90 41 22 - mediatheque@saintpairsurmer.fr<br><br><b>Lundi : </b>16:00 - 18:00<br><b>Mardi : </b>16:00 - 18:00<br><b>Mercredi : </b>14:00 - 18:00<br><b>Jeudi : </b>10:00 - 12:30 & 16:00 - 18:00<br><b>Vendredi : </b>15:30 - 19:00<br><b>Samedi : </b>14:00 - 17:00",
		openingDays: [
		//lundi
		{openingHours: [1600,1800]},
		// mardi
		{openingHours: [1600, 1800]},
		// mercredi
		{openingHours: [1400, 1800]},
		// jeudi
		{openingHours: [1000, 1230, 1600, 1800]},
		// vendredi
		{openingHours: [1530, 1900]},
		// samedi
		{openingHours: [1400, 1700]},
		// dimanche
		{}
		]
	};
	
	// déclaration d'un tableau contenant toutes les médiathèques rangées par ordre alphabétique
	var mediatheques = [animatheque, brehal, cerences, donville, granville, hayePesnel, stJean, stPair];
		
	//pour chaque élément du tableau médiathèque, on créé un marker avec ces coordonnées propres qu'on affiche sur la map	
	mediatheques.forEach(item => item.marker = L.marker(item.latlng).addTo(map));

	// et on créer un pop-up avec le texte correspondant
	mediatheques.forEach(item => item.marker.bindPopup(item.popupText));
	
	
	// quand on clique sur le bouton "Toutes" (qu'on a codé sur la page html)
	document.getElementById('btnAll').onclick = function ()
	{ 
		//on affiche toutes les médiathèques
		mediatheques.forEach(item => map.addLayer(item.marker));
	};

	// quand on clique sur le bouton "Ouvert aujourd'hui"
	document.getElementById('btnFilterByDay').onclick = function () { 
	
		// on récupère la date du jour
		var now = new Date(); 
		
		//on va tester pour chaque médiathèque si la case du jour d'aujourd'hui contient des horaires
		for (let i = 0; i < mediatheques.length; i++) {
			//on met dans une variable le contenu de la case du jour
			var openingDay = mediatheques[i].openingDays[now.getDay() - 1];
			
			//si elle est pleine alors c'est qu'il y a des horaires d'ouvertures donc c'est ouvert aujourd'hui
			if (openingDay.openingHours && openingDay.openingHours.length > 0) { 
				map.addLayer(mediatheques[i].marker);
			}
			//sinon c'est que c'est fermé, donc on peut retirer le marqueur de la carte
			else { 
				map.removeLayer(mediatheques[i].marker);
			}
		}
	};
	
	
	//quand on clique sur le bouton "Ouvert maintenant"
	document.getElementById('btnFilterByTime').onclick = function () { 
	
		var now = new Date(); 
		
		// on reprends la même logique que précédemment
		for (let i = 0; i < mediatheques.length; i++) {
			
			var openingDay = mediatheques[i].openingDays[now.getDay() - 1];
		
			// mais cette fois on vérifie juste que la case du jour n'est pas vide et on lance une fonction qui va regarder si c'est ouvert maintenant
			if (openingDay.openingHours && isOpened(openingDay.openingHours, now)) { 
				map.addLayer(mediatheques[i].marker);
			}
			else { 
				map.removeLayer(mediatheques[i].marker);
			}
		}
	};

  //cette fonction prend en argument le contenu de la case du jour et l'heure qu'il est actuellement
  var isOpened = function (timeArray, datetime) {
		// si la case du jour est vide alors on est fermé
		if (!timeArray || timeArray.length === 0)
			return false;
		
		// sinon on va comparer les heures exactes 
		// pour cela on déclare une variable time qui contient l'heure actuelle sous cette forme : 15h35 = 1535
		var nowTime = datetime.getHours() * 100 + datetime.getMinutes();

		// on parcourt notre tableau d'horaires de la dernière case à la première
		for (let j = timeArray.length - 1; j >= 0 ; j--) {
			// les creneaux vont par paire (ouverture, fermeture), si l'heure actuelle est plus grande que l'heure de la case considérée
			// alors si l'index de cette case est impair, on est plus tard qu'une heure de fermeture
			//  mais si l'index de cette case est pair, on se situe entre une heure d'ouverture et une heure de fermeture

			if (nowTime > timeArray[j]) {
				return (j % 2 === 0); // calcul du modulo et si il est égale 0, alors on est sur une case paire et donc on retourne true
			}

			// sinon, l'heure actuelle est plus petite que l'heure de la case considérée, donc on passe à la case suivante
		}

		// enfin, si l'heure actuelle est plus que petite que tout les créneaux alors il est trop tôt et on est fermé
		return false;
	};
}
