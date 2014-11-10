this.NesDb = this.NesDb || {};

NesDb[ '02D8D6A815FFFC12C19E183EEE11006C7D84109C' ] = {
	"$": {
		"name": "Super Glove Ball",
		"class": "Licensed",
		"catalog": "NES-5L-USA",
		"publisher": "Mattel",
		"developer": "Rare",
		"region": "USA",
		"players": "1",
		"date": "1990-10"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "powerglove",
						"name": "Power Glove"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "EFCF375D",
				"sha1": "02D8D6A815FFFC12C19E183EEE11006C7D84109C",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-12-17"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UNROM-09",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "NES-5L-0 PRG",
								"size": "128k",
								"crc": "EFCF375D",
								"sha1": "02D8D6A815FFFC12C19E183EEE11006C7D84109C"
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
