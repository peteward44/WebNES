this.NesDb = this.NesDb || {};

NesDb[ '338F99B32B26FFBEFB5BE92AC27AC3295713FDDC' ] = {
	"$": {
		"name": "RoboCop 3",
		"class": "Licensed",
		"catalog": "NES-R3-USA",
		"publisher": "Ocean",
		"developer": "Probe",
		"region": "USA",
		"players": "1",
		"date": "1992-08"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "96087988",
				"sha1": "338F99B32B26FFBEFB5BE92AC27AC3295713FDDC",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-12-02"
			},
			"board": [
				{
					"$": {
						"type": "NES-SLROM",
						"pcb": "NES-SLROM-06",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-R3-0 PRG",
								"size": "128k",
								"crc": "AF4B5C8A",
								"sha1": "410EA33BB442894E5A3FCB2AFC9F461804D3A4F2"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-R3-0 CHR",
								"size": "128k",
								"crc": "4F496603",
								"sha1": "4070ECC5CF7256043AEE9E3A6ED8B924AB4B6BAC"
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
	],
	"gameGenieCodes": [
		{
			"name": "Start with 2x energy",
			"codes": [
				[
					"ZLVGIXPP"
				]
			]
		},
		{
			"name": "Start with 1/2 energy",
			"codes": [
				[
					"GAVGIXPO"
				]
			]
		},
		{
			"name": "1 hit kills all enemies",
			"codes": [
				[
					"GNUNAEKN"
				]
			]
		},
		{
			"name": "Lots of repair icons",
			"codes": [
				[
					"VVKGLATE"
				]
			]
		},
		{
			"name": "Invincibility",
			"codes": [
				[
					"OXONLPSV",
					"POONGPXV"
				]
			]
		}
	]
};
