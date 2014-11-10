this.NesDb = this.NesDb || {};

NesDb[ 'FE6A2F35CCD699C1324A786A733DFDAC26794C51' ] = {
	"$": {
		"name": "RoboCop 3",
		"class": "Licensed",
		"catalog": "NES-R3-ESP",
		"publisher": "Ocean",
		"developer": "Probe",
		"region": "Spain",
		"players": "1",
		"date": "1994-07-28"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "A8D93537",
				"sha1": "FE6A2F35CCD699C1324A786A733DFDAC26794C51",
				"dump": "ok",
				"dumper": "efnes",
				"datedumped": "2006-07-23"
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
								"name": "PAL-R3-0 PRG",
								"size": "128k",
								"crc": "06FCD47A",
								"sha1": "DA9F0C3689E76CFED96C0C603101D91C029CC965"
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
