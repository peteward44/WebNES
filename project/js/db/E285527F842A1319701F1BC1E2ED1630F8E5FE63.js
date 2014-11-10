this.NesDb = this.NesDb || {};

NesDb[ 'E285527F842A1319701F1BC1E2ED1630F8E5FE63' ] = {
	"$": {
		"name": "NTF2 System Cartridge",
		"class": "Licensed",
		"subclass": "Test Cart",
		"catalog": "NTC-NTF2-SYS",
		"publisher": "Nintendo",
		"developer": "Nintendo",
		"region": "USA",
		"players": "1",
		"date": "0000"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "powerpad",
						"name": "Power Pad"
					}
				},
				{
					"$": {
						"type": "rob",
						"name": "R. O. B."
					}
				},
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
				"crc": "E149E0B2",
				"sha1": "E285527F842A1319701F1BC1E2ED1630F8E5FE63",
				"dump": "ok",
				"dumper": "TheRedEye",
				"datedumped": "2012-04-23"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SIROM",
						"pcb": "HVC-SIROM-01",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NTF2 PRG SYS. V1.1",
								"size": "32k",
								"crc": "AF8F7059",
								"sha1": "C1F144B6B474FBF69C2603D360CFE29ABB246F42"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NTF2 CHR SYS. V1.1",
								"size": "64k",
								"crc": "031F9622",
								"sha1": "668107F9747D077F581AA240626ACC3B3DEEA861"
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
								"type": "MMC1B1-H"
							}
						}
					]
				}
			]
		}
	]
};
