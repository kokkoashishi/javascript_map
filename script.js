import { LeafletMap, TileLayer, Marker, Icon } from 'leaflet';

const locations = [
	{ name: '東京ディズニーランド', coordinates: [35.6329, 139.8804], icon: 'ico_pink.png' },
	{ name: 'ユニバーサル・スタジオ・ジャパン', coordinates: [34.6654, 135.4323], icon: 'ico_blue.png' },
	{ name: '富士急ハイランド', coordinates: [35.4881, 138.7808], icon: 'ico_yellow.png' },
	{ name: 'サンリオピューロランド', coordinates: [35.6245, 139.4293], icon: 'ico.png' }
];

const map = new LeafletMap('map');

// タイルレイヤーを作成し、地図にセットする
// Open Street Map
new TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

for (const location of locations) {
	const icon = new Icon({
		iconUrl: `images/${location.icon}`,
		shadowUrl: 'images/ico_shadow.png',
		iconSize: [40, 40],
		shadowSize: [40, 40],
		iconAnchor: [20, 40],
		shadowAnchor: [20, 40],
		popupAnchor: [0, -42]
	});

	new Marker(location.coordinates, { icon }).addTo(map).bindPopup(location.name);
}

map.fitBounds(locations.map(location => location.coordinates), { padding: [40, 40] });