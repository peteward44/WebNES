this.NesDb = this.NesDb || {};

NesDb[ 'C881749BDED199785699F51C3925F940332EFAC1' ] = {
	"$": {
		"name": "NES Open Tournament Golf",
		"class": "Licensed",
		"catalog": "NES-UG-USA",
		"publisher": "Nintendo",
		"developer": "Nintendo",
		"region": "USA",
		"players": "2",
		"date": "1991-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "F6B9799C",
				"sha1": "C881749BDED199785699F51C3925F940332EFAC1",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-03-25"
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
								"name": "NES-UG-0 PRG",
								"size": "256k",
								"crc": "F6B9799C",
								"sha1": "C881749BDED199785699F51C3925F940332EFAC1"
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
