this.NesDb = this.NesDb || {};

NesDb[ 'D77D9B89347510B852BAA83EA1C3E1EF41A1288E' ] = {
	"$": {
		"name": "Operation Wolf: Take no Prisoners",
		"class": "Licensed",
		"catalog": "NES-OW-USA",
		"publisher": "Taito",
		"developer": "Taito",
		"region": "USA",
		"players": "1",
		"date": "1989-05"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "zapper",
						"name": "Zapper Light Gun"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"revision": "0A",
				"crc": "EDC3662B",
				"sha1": "D77D9B89347510B852BAA83EA1C3E1EF41A1288E",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-25"
			},
			"board": [
				{
					"$": {
						"type": "NES-SL1ROM",
						"pcb": "NES-SL1ROM-01",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-OW-0 PRG",
								"size": "128k",
								"crc": "1388AEB9",
								"sha1": "6FBCF9F3E7531825134F3ACF0849E3B62015A79B"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-OW-0 CHR",
								"size": "128k",
								"crc": "B6C77A38",
								"sha1": "EE6BF933D33320CFAC050C24353DFFC98AB711F4"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx32"
							}
						},
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
		},
		{
			"$": {
				"system": "NES-NTSC",
				"revision": "0A",
				"crc": "EDC3662B",
				"sha1": "D77D9B89347510B852BAA83EA1C3E1EF41A1288E",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-10-05"
			},
			"board": [
				{
					"$": {
						"type": "NES-SLROM",
						"pcb": "NES-SLROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-OW-0 PRG",
								"size": "128k",
								"crc": "1388AEB9",
								"sha1": "6FBCF9F3E7531825134F3ACF0849E3B62015A79B"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-OW-1 CHR",
								"size": "128k",
								"crc": "B6C77A38",
								"sha1": "EE6BF933D33320CFAC050C24353DFFC98AB711F4"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B1-H"
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
