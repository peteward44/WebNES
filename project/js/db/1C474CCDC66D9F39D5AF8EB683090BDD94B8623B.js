this.NesDb = this.NesDb || {};

NesDb[ '1C474CCDC66D9F39D5AF8EB683090BDD94B8623B' ] = {
	"$": {
		"name": "John Elway's Quarterback",
		"class": "Licensed",
		"catalog": "NES-JQ-USA",
		"publisher": "Tradewest",
		"developer": "Rare",
		"region": "USA",
		"players": "2",
		"date": "1989-03"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "CF322BB3",
				"sha1": "1C474CCDC66D9F39D5AF8EB683090BDD94B8623B",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-03-10"
			},
			"board": [
				{
					"$": {
						"type": "NES-CNROM",
						"pcb": "NES-CN-ROM-256-05",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "NES-JQ-0 PRG",
								"size": "32k",
								"crc": "D7C4816B",
								"sha1": "C03DA3179DDD2F676E257C34858D6175552FE640"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-JQ-0 CHR",
								"size": "32k",
								"crc": "DA2CF1B0",
								"sha1": "A2A8B8A8B472E258D1FB152064C1797BCEAFED4B"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113B1"
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
