this.NesDb = this.NesDb || {};

NesDb[ '1CFDA337532AA99DC49BEB200E41B39A3EA5051B' ] = {
	"$": {
		"name": "Iron Tank: The Invasion of Normandy",
		"class": "Licensed",
		"catalog": "NES-IT-AUS",
		"publisher": "SNK",
		"developer": "SNK",
		"region": "Australia",
		"players": "1",
		"date": "1988"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-A",
				"crc": "DF6D0CE8",
				"sha1": "1CFDA337532AA99DC49BEB200E41B39A3EA5051B",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2011-06-14"
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
								"name": "PAL-IT-0 PRG",
								"size": "128k",
								"crc": "969D8687",
								"sha1": "689ED0FC97902645BD06FECB0DF6A80BAE36A797"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-IT-0 CHR",
								"size": "128k",
								"crc": "C61175CC",
								"sha1": "BEBC127B3CAD2FF0448A0C48119C817C1AC98D29"
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
								"type": "3197A"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Super strong tank",
			"codes": [
				[
					"SLUVKESO"
				]
			]
		},
		{
			"name": "Infinite lives",
			"codes": [
				[
					"OIOGIIPA",
					"SXUKTKVK"
				]
			]
		},
		{
			"name": "Start with 1 life",
			"codes": [
				[
					"OIOGIIPA",
					"AAUKGGZA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"OIOGIIPA",
					"IAUKGGZA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"OIOGIIPA",
					"AAUKGGZE"
				]
			]
		}
	]
};
