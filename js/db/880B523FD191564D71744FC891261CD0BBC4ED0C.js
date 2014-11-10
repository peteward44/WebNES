this.NesDb = this.NesDb || {};

NesDb[ '880B523FD191564D71744FC891261CD0BBC4ED0C' ] = {
	"$": {
		"name": "Bump 'n' Jump",
		"class": "Licensed",
		"catalog": "NES-BP-USA",
		"publisher": "Vic Tokai",
		"developer": "Data East",
		"portdeveloper": "Sakata SAS",
		"region": "USA",
		"players": "1",
		"date": "1988-12"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "A0A095C4",
				"sha1": "880B523FD191564D71744FC891261CD0BBC4ED0C",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-27"
			},
			"board": [
				{
					"$": {
						"type": "NES-CNROM",
						"pcb": "NES-CN-ROM-256-05",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "NES-BP-0 PRG",
								"size": "32k",
								"crc": "8B56FAEB",
								"sha1": "D3BA4ED783D5879A02043BD21B2FF9545B200813"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-BP-0 CHR",
								"size": "32k",
								"crc": "3A34AA35",
								"sha1": "EB8F9607B401E4046FB034BBCE1BEE68341EFE75"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113A"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "0",
								"v": "1"
							}
						}
					]
				}
			]
		},
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "A0A095C4",
				"sha1": "880B523FD191564D71744FC891261CD0BBC4ED0C",
				"dump": "ok",
				"dumper": "polarz",
				"datedumped": "2006-10-08"
			},
			"board": [
				{
					"$": {
						"type": "NES-CNROM",
						"pcb": "NES-CN-ROM-256-05",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "NES-BP-0 PRG",
								"size": "32k",
								"crc": "8B56FAEB",
								"sha1": "D3BA4ED783D5879A02043BD21B2FF9545B200813"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-BP-0 CHR",
								"size": "32k",
								"crc": "3A34AA35",
								"sha1": "EB8F9607B401E4046FB034BBCE1BEE68341EFE75"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
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
								"h": "0",
								"v": "1"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Jump OK, even with no power",
			"codes": [
				[
					"AAVPNLGP"
				]
			]
		},
		{
			"name": "Gain double power on every pick-up",
			"codes": [
				[
					"ZAUZAIPA"
				]
			]
		},
		{
			"name": "Jump OK at any speed",
			"codes": [
				[
					"AGVONLAA"
				]
			]
		},
		{
			"name": "Set jump OK speed to 190",
			"codes": [
				[
					"PANPNLIE"
				]
			]
		},
		{
			"name": "Set jump OK speed to 130",
			"codes": [
				[
					"LANPNLIA"
				]
			]
		},
		{
			"name": "Start on scene 5",
			"codes": [
				[
					"GEOAGGAA"
				]
			]
		},
		{
			"name": "Start on scene 10",
			"codes": [
				[
					"PEOAGGAE"
				]
			]
		},
		{
			"name": "Start on scene 15",
			"codes": [
				[
					"TEOAGGAE"
				]
			]
		}
	]
};
