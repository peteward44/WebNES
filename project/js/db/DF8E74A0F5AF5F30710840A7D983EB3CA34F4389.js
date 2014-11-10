this.NesDb = this.NesDb || {};

NesDb[ 'DF8E74A0F5AF5F30710840A7D983EB3CA34F4389' ] = {
	"$": {
		"name": "Gun.Smoke",
		"class": "Licensed",
		"catalog": "NES-GK-UKV",
		"publisher": "Capcom",
		"developer": "Capcom",
		"region": "United Kingdom",
		"players": "1",
		"date": "1989-02-23"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-A",
				"crc": "B79C320D",
				"sha1": "DF8E74A0F5AF5F30710840A7D983EB3CA34F4389",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2011-06-23"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UN-ROM-07",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-GK-0 PRG",
								"size": "128k",
								"crc": "B79C320D",
								"sha1": "DF8E74A0F5AF5F30710840A7D983EB3CA34F4389"
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
								"type": "74xx161"
							}
						},
						{
							"$": {
								"type": "74xx32"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "3197A"
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
