this.NesDb = this.NesDb || {};

NesDb[ 'C200D0BF8914B2116720BF8A29B5521C3CEFA36A' ] = {
	"$": {
		"name": "Hogan's Alley",
		"altname": "ホーガンズアレイ",
		"class": "Licensed",
		"catalog": "HVC-HA",
		"publisher": "Nintendo",
		"developer": "Nintendo",
		"region": "Japan",
		"players": "1",
		"date": "1984-06-12"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "zapper",
						"name": "Zapper Light Gun"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "FF24D794",
				"sha1": "C200D0BF8914B2116720BF8A29B5521C3CEFA36A",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-06-26"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SROM",
						"pcb": "HVC-SROM-03",
						"mapper": "0"
					},
					"prg": [
						{
							"$": {
								"name": "HVC-HA-0 PRG",
								"size": "16k",
								"crc": "8963AE6E",
								"sha1": "BCA489ED0FB58E1E99F36C427BC0D7D805B6C61A"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "HVC-HA-0 CHR",
								"size": "8k",
								"crc": "5DF42FC4",
								"sha1": "4FCF23151D9F11C1EF1B1007DD8058F5D5FE9AB8"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "1",
								"v": "0"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "5 misses allowed-Game A",
			"codes": [
				[
					"IAEKOIAP"
				]
			]
		},
		{
			"name": "20 misses allowed-Game A",
			"codes": [
				[
					"AZEKOIAP"
				]
			]
		},
		{
			"name": "Infinite misses allowed-all games",
			"codes": [
				[
					"AAOGETPA"
				]
			]
		},
		{
			"name": "Each miss counts as 2-all games",
			"codes": [
				[
					"ZAOGETPA"
				]
			]
		}
	]
};
