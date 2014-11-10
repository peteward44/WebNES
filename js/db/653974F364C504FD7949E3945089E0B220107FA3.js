this.NesDb = this.NesDb || {};

NesDb[ '653974F364C504FD7949E3945089E0B220107FA3' ] = {
	"$": {
		"name": "Eliminator Boat Duel",
		"class": "Licensed",
		"catalog": "NES-6R-SCN",
		"publisher": "Storm",
		"developer": "Sculptured Software",
		"region": "Scandinavia",
		"players": "2",
		"date": "1993-04-29"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "924CDE0B",
				"sha1": "653974F364C504FD7949E3945089E0B220107FA3",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2007-06-10"
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
								"name": "PAL-6R-0 PRG",
								"size": "128k",
								"crc": "5202FD30",
								"sha1": "2EA0B8E37EA421D0B0DC2BE06C3AF28B2F091B3B"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-6R-0 CHR",
								"size": "128k",
								"crc": "D5BAA788",
								"sha1": "14D0301140681F469493A032BCE54CE7421D189D"
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
			"name": "Start with 36 nitros",
			"codes": [
				[
					"IZEEZZGA"
				]
			]
		},
		{
			"name": "Start with 0 nitros",
			"codes": [
				[
					"AAEEZZGA"
				]
			]
		},
		{
			"name": "Almost infinite nitros--no on buoy stage",
			"codes": [
				[
					"SZVSVNVS"
				]
			]
		},
		{
			"name": "Boat starts with full turbo, steering, hull, max engine power",
			"codes": [
				[
					"IENEYPPA"
				]
			]
		},
		{
			"name": "Have full hull strength",
			"codes": [
				[
					"SXUGOEVS"
				]
			]
		}
	]
};
