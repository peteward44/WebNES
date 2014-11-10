this.NesDb = this.NesDb || {};

NesDb[ '4FD939373EED4ADD41A1C68C9C2412BD3B428F32' ] = {
	"$": {
		"name": "NES Open Tournament Golf",
		"class": "Licensed",
		"catalog": "NES-UG-NOE",
		"publisher": "Nintendo",
		"developer": "Nintendo",
		"region": "Germany",
		"players": "2",
		"date": "1992-05-30"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "2D020965",
				"sha1": "4FD939373EED4ADD41A1C68C9C2412BD3B428F32",
				"dump": "ok",
				"dumper": "piteta",
				"datedumped": "2007-08-03"
			},
			"board": [
				{
					"$": {
						"type": "NES-SNROM",
						"pcb": "NES-SNROM-05",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-UG-0 PRG",
								"size": "256k",
								"crc": "2D020965",
								"sha1": "4FD939373EED4ADD41A1C68C9C2412BD3B428F32"
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
								"type": "MMC1B3"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "3195A"
							}
						}
					]
				}
			]
		}
	]
};
