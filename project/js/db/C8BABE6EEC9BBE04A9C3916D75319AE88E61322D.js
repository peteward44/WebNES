this.NesDb = this.NesDb || {};

NesDb[ 'C8BABE6EEC9BBE04A9C3916D75319AE88E61322D' ] = {
	"$": {
		"name": "Dance Aerobics",
		"class": "Licensed",
		"catalog": "NES-AE-USA",
		"publisher": "Nintendo",
		"developer": "Human Entertainment",
		"region": "USA",
		"players": "1",
		"date": "1989-03"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "powerpad",
						"name": "Power Pad"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "9E382EBF",
				"sha1": "C8BABE6EEC9BBE04A9C3916D75319AE88E61322D",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-07-03"
			},
			"board": [
				{
					"$": {
						"type": "NES-SBROM",
						"pcb": "NES-SBROM-01",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-AE-0 PRG",
								"size": "64k",
								"crc": "D836A90B",
								"sha1": "EDBFD05C39A624105A67CBC7C8827CCA9C6AACBF"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-AE-0 CHR",
								"size": "32k",
								"crc": "F24084EF",
								"sha1": "B9B4682CA68DBAAE80D8610C128239E0B25D275C"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1A"
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
