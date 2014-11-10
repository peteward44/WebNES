this.NesDb = this.NesDb || {};

NesDb[ '0CBCB3EB0AEB196D8564ADB4823A270DC213B5BD' ] = {
	"$": {
		"name": "Pesterminator",
		"class": "Unlicensed",
		"catalog": "CDR-PR-81015",
		"publisher": "Color Dreams",
		"developer": "Color Dreams",
		"region": "USA",
		"players": "1",
		"date": "1990"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "6A483073",
				"sha1": "0CBCB3EB0AEB196D8564ADB4823A270DC213B5BD",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-12-10"
			},
			"board": [
				{
					"$": {
						"type": "COLORDREAMS-74*377",
						"pcb": "UNK-COLORDREAMS-REVA",
						"mapper": "11"
					},
					"prg": [
						{
							"$": {
								"size": "64k",
								"crc": "BA93CB95",
								"sha1": "B22197A020C4262684BC40E31AD8F3D9EBE0299E"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "64k",
								"crc": "F7989510",
								"sha1": "B23C88B0A23EA96759601AB204E9AA570A304ADA"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx377"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "CIC Stun"
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
		},
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "6A483073",
				"sha1": "0CBCB3EB0AEB196D8564ADB4823A270DC213B5BD",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-12-16"
			},
			"board": [
				{
					"$": {
						"type": "COLORDREAMS-74*377",
						"pcb": "UNK-COLORDREAMS-REVC",
						"mapper": "11"
					},
					"prg": [
						{
							"$": {
								"name": "PESTERMINATOR PRG.",
								"size": "64k",
								"crc": "BA93CB95",
								"sha1": "B22197A020C4262684BC40E31AD8F3D9EBE0299E"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PESTERMINATOR VID.",
								"size": "64k",
								"crc": "F7989510",
								"sha1": "B23C88B0A23EA96759601AB204E9AA570A304ADA"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx377"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "7660"
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
