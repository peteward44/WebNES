this.NesDb = this.NesDb || {};

NesDb[ 'CF29201FB3D085B2AB5310232265EA1602DF210C' ] = {
	"$": {
		"name": "Smash T.V.",
		"class": "Licensed",
		"catalog": "NES-5V-ESP",
		"publisher": "Acclaim",
		"developer": "Williams Entertainment",
		"portdeveloper": "Beam Software",
		"region": "Spain",
		"players": "2",
		"date": "1991"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "fourplayer",
						"name": "4-Player Adapter"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "0B8F8128",
				"sha1": "CF29201FB3D085B2AB5310232265EA1602DF210C",
				"dump": "ok",
				"dumper": "piteta",
				"datedumped": "2007-08-04"
			},
			"board": [
				{
					"$": {
						"type": "NES-TLROM",
						"pcb": "NES-TLROM-03",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-5V-0 PRG",
								"size": "128k",
								"crc": "5460529A",
								"sha1": "E28B68E7A8219EE1A4EB3C72C0D258C5E71A6914"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-5V-0 CHR",
								"size": "128k",
								"crc": "6FAE4C9D",
								"sha1": "2836CE44DB30358C239DF85D92C59673C5D040F0"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3B"
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
			"name": "Infinite lives",
			"codes": [
				[
					"UIVYGXVS"
				]
			]
		},
		{
			"name": "Get a lot more grenades",
			"codes": [
				[
					"OPNXVTTE"
				]
			]
		},
		{
			"name": "Infinite grenades",
			"codes": [
				[
					"OXXUUYVS"
				]
			]
		},
		{
			"name": "Touch and kill most enemies",
			"codes": [
				[
					"EAOZPZEY"
				]
			]
		}
	]
};
