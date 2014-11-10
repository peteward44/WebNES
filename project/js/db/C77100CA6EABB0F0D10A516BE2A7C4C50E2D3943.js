this.NesDb = this.NesDb || {};

NesDb[ 'C77100CA6EABB0F0D10A516BE2A7C4C50E2D3943' ] = {
	"$": {
		"name": "Banana",
		"altname": "バナナ",
		"class": "Licensed",
		"catalog": "VFR-B1-01",
		"publisher": "Victor",
		"developer": "",
		"region": "Japan",
		"players": "1",
		"date": "1986-09-08"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "86ACB36B",
				"sha1": "C77100CA6EABB0F0D10A516BE2A7C4C50E2D3943",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2008-04-16"
			},
			"board": [
				{
					"$": {
						"type": "HVC-CNROM",
						"pcb": "HVC-CNROM-256K-01",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "VFR-B1-0 PRG",
								"size": "32k",
								"crc": "9CF17FAB",
								"sha1": "73F05A931AD15639979907BC3AC4300138A7000E"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "VFR-B1-0 CHR",
								"size": "16k",
								"crc": "940018F3",
								"sha1": "036243540FF9B992D0B056FDD10EEB864A91F482"
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
