this.NesDb = this.NesDb || {};

NesDb[ 'E1A37FC82BD0BA7A20B4BC49C22EE82406F66F2F' ] = {
	"$": {
		"name": "Hayauchi Super Igo",
		"altname": "早打ちスーパー囲碁",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "NAM-X79-5900",
		"publisher": "Namco",
		"developer": "Home Data",
		"region": "Japan",
		"players": "1",
		"date": "1989-03-03"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "FA7E02FA",
				"sha1": "E1A37FC82BD0BA7A20B4BC49C22EE82406F66F2F",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-10-03"
			},
			"board": [
				{
					"$": {
						"type": "NAMCOT-CNROM+WRAM",
						"pcb": "UNK-NAMCOT-X79",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "X79F01",
								"size": "32k",
								"crc": "18F5BFDC",
								"sha1": "8D23F293C2ED9447642966F120865075DC1CEE9B"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "X79F02",
								"size": "32k",
								"crc": "BDC34B2B",
								"sha1": "BB13F4BDA3A1709C97F1AC54515C92EA2701AD51"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "2k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx10"
							}
						},
						{
							"$": {
								"type": "74xx161"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "0",
								"v": "1"
							}
						}
					]
				}
			]
		}
	]
};
