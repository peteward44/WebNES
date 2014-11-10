this.NesDb = this.NesDb || {};

NesDb[ '489D1FC30630D3AD60835992C2433250A8E0803E' ] = {
	"$": {
		"name": "Dragon Ninja",
		"altname": "ドラゴンニンジャ",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "NAM-DN-5800",
		"publisher": "Namco",
		"developer": "Data East",
		"portdeveloper": "Sakata SAS",
		"region": "Japan",
		"players": "2",
		"date": "1989-07-14"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "2A7D3ADF",
				"sha1": "489D1FC30630D3AD60835992C2433250A8E0803E",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-29"
			},
			"board": [
				{
					"$": {
						"type": "NAMCOT-163",
						"pcb": "110F0",
						"mapper": "19"
					},
					"prg": [
						{
							"$": {
								"name": "NAMCOTDNPR",
								"size": "128k",
								"crc": "FBA98643",
								"sha1": "6F79E0AAE58654FE50AB5DAF47A1C5F6F33C74EF"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NAMCOTDNCH",
								"size": "128k",
								"crc": "1C4518A4",
								"sha1": "6BD1CCEF8D6681E365E676E9D8BB5F1F9AA66F42"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "163"
							}
						}
					]
				}
			]
		}
	]
};
