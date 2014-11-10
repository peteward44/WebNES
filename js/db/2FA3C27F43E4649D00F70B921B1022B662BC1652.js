this.NesDb = this.NesDb || {};

NesDb[ '2FA3C27F43E4649D00F70B921B1022B662BC1652' ] = {
	"$": {
		"name": "Sunday Funday: The Ride",
		"class": "Unlicensed",
		"subclass": "Multi-cart",
		"catalog": "WT-SF-6",
		"publisher": "Wisdom Tree",
		"developer": "Wisdom Tree",
		"region": "USA",
		"players": "1",
		"date": "1995"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "5B16A3C8",
				"sha1": "2FA3C27F43E4649D00F70B921B1022B662BC1652",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-07-03"
			},
			"board": [
				{
					"$": {
						"type": "COLORDREAMS-74*377",
						"pcb": "BC6",
						"mapper": "11"
					},
					"prg": [
						{
							"$": {
								"name": "SUNDAY FUNDAY PRG",
								"size": "128k",
								"crc": "A94686CB",
								"sha1": "03B1B32387A8AD2BF745266ECF3D888ED61769F8"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "SUNDAY FUNDAY VID",
								"size": "128k",
								"crc": "4E244BBC",
								"sha1": "2B65CB908CF6D90AE612D7B5C90E06434754DAB4"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx377"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "7660"
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
	]
};
