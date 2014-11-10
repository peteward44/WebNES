this.NesDb = this.NesDb || {};

NesDb[ '58D85F49AA54B33BA211FE21D12AD75FEF3A9754' ] = {
	"$": {
		"name": "World Grand-Prix: Pole to Finish",
		"altname": "ワールドグランプリ ポールトウフィニッシュ",
		"class": "Licensed",
		"catalog": "DFC-FH",
		"publisher": "Data East",
		"developer": "Sakata SAS",
		"region": "Japan",
		"players": "4",
		"date": "1989-01-31"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "B5F7E661",
				"sha1": "58D85F49AA54B33BA211FE21D12AD75FEF3A9754",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-06-27"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SKROM",
						"pcb": "HVC-SKROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "DFC-FH-0 PRG",
								"size": "128k",
								"crc": "2C003FB2",
								"sha1": "CA29D3BFE2DCE19151DEC5D8CDBA64D54528C02C"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "DFC-FH-0 CHR",
								"size": "128k",
								"crc": "09BBE594",
								"sha1": "743855A24C7DFEEA67E0417F3F07A60C37609DE4"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k",
								"battery": "1"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1A"
							}
						}
					]
				}
			]
		}
	]
};
