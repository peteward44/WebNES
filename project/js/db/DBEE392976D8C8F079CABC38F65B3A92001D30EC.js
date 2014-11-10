this.NesDb = this.NesDb || {};

NesDb[ 'DBEE392976D8C8F079CABC38F65B3A92001D30EC' ] = {
	"$": {
		"name": "Napoleon Senki",
		"altname": "ナポレオン戦記",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "IF-09",
		"publisher": "Irem",
		"developer": "Lenar",
		"region": "Japan",
		"players": "1",
		"date": "1988-03-18"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "06144B4A",
				"sha1": "DBEE392976D8C8F079CABC38F65B3A92001D30EC",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-27"
			},
			"board": [
				{
					"$": {
						"type": "IREM-74*161/161/21/138",
						"pcb": "LROG017-00",
						"mapper": "77"
					},
					"prg": [
						{
							"$": {
								"size": "128k",
								"crc": "ADB47286",
								"sha1": "AFE8FED9AFE985494ED5F0CC14B845F38919AAFC"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "32k",
								"crc": "F822DD8D",
								"sha1": "B4CCB34146ECA1A8E7DC13B26A671408A616C879"
							}
						}
					],
					"vram": [
						{
							"$": {
								"size": "8k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx138"
							}
						},
						{
							"$": {
								"type": "74xx161"
							}
						},
						{
							"$": {
								"type": "74xx161"
							}
						},
						{
							"$": {
								"type": "74xx21"
							}
						}
					]
				}
			]
		}
	]
};
