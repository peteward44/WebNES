this.NesDb = this.NesDb || {};

NesDb[ '754B1F27C3FCADA8FAC6871366146E0767A4AE37' ] = {
	"$": {
		"name": "Conflict",
		"class": "Licensed",
		"catalog": "NES-C3-USA",
		"publisher": "Vic Tokai",
		"developer": "Vic Tokai",
		"region": "USA",
		"players": "2",
		"date": "1990-03"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "32CF4307",
				"sha1": "754B1F27C3FCADA8FAC6871366146E0767A4AE37",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-07-03"
			},
			"board": [
				{
					"$": {
						"type": "NES-SKROM",
						"pcb": "NES-SKROM-04",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-C3-0 PRG",
								"size": "128k",
								"crc": "EDEA9AC6",
								"sha1": "D2E4C44ADFB52E0CCB85446E1B5A1217F2DB7F8B"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-C3-0 CHR",
								"size": "128k",
								"crc": "03ECBB63",
								"sha1": "896D4DD694A55B2ADB1B81121576DC5BCB48ED42"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B2"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113B1"
							}
						}
					]
				}
			]
		}
	]
};
