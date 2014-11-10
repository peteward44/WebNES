this.NesDb = this.NesDb || {};

NesDb[ '16D8F322ED337255A15B607FD1FB77950D59AD56' ] = {
	"$": {
		"name": "Hototogisu",
		"altname": "不如帰",
		"class": "Licensed",
		"catalog": "TIX-Z1 (IF-10)",
		"publisher": "Irem",
		"developer": "Tamtex",
		"region": "Japan",
		"players": "1",
		"date": "1988-08-19"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "9EBDC94E",
				"sha1": "16D8F322ED337255A15B607FD1FB77950D59AD56",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-24"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SNROM",
						"pcb": "HVC-SNROM-06",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "TIX-Z1-0 PRG",
								"size": "256k",
								"crc": "9EBDC94E",
								"sha1": "16D8F322ED337255A15B607FD1FB77950D59AD56"
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
								"type": "MMC1A"
							}
						}
					]
				}
			]
		}
	]
};
