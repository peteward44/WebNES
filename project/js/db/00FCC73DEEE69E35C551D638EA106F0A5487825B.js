this.NesDb = this.NesDb || {};

NesDb[ '00FCC73DEEE69E35C551D638EA106F0A5487825B' ] = {
	"$": {
		"name": "Exciting Boxing",
		"altname": "エキサイティングボクシング",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "KON-RC250",
		"publisher": "Konami",
		"developer": "Human Entertainment",
		"region": "Japan",
		"players": "1",
		"date": "1987-12-16"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "AC4BF9DC",
				"sha1": "00FCC73DEEE69E35C551D638EA106F0A5487825B",
				"dump": "ok",
				"dumper": "aodinets",
				"datedumped": "2012-03-05"
			},
			"board": [
				{
					"$": {
						"type": "KONAMI-VRC-1",
						"pcb": "350459",
						"mapper": "75"
					},
					"prg": [
						{
							"$": {
								"name": "RC250J0P",
								"size": "128k",
								"crc": "786148B6",
								"sha1": "20CBA7316CB907D7A6245C598640CE7ACA56F30A"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "RC250J0C",
								"size": "128k",
								"crc": "18A005CF",
								"sha1": "DC28B692F70383798623FE3088C921F3BC7366AA"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx32"
							}
						},
						{
							"$": {
								"type": "VRC1"
							}
						}
					]
				}
			]
		}
	]
};
