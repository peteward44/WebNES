this.NesDb = this.NesDb || {};

NesDb[ 'F479C80513575F6AB71AF1B7A12C221AF7006B0C' ] = {
	"$": {
		"name": "Cosmic Wars",
		"altname": "コズミックウォーズ",
		"class": "Licensed",
		"catalog": "KDS-CJ",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "Japan",
		"players": "2",
		"date": "1989-08-04"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "9F2712DF",
				"sha1": "F479C80513575F6AB71AF1B7A12C221AF7006B0C",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-12"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SKROM",
						"pcb": "HVC-SKROM-04",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "KDS-CJ-0 PRG",
								"size": "128k",
								"crc": "9EAB6B1F",
								"sha1": "20735566E77D4EFB6F3D3C6DBD34D3287E7DDC57"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "KDS-CJ-0 CHR",
								"size": "128k",
								"crc": "8C8F8FA5",
								"sha1": "D51CE458F45191D5BC4604F1DA2CB202F149D1C9"
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
								"type": "MMC1B2"
							}
						}
					]
				}
			]
		}
	]
};
