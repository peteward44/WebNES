this.NesDb = this.NesDb || {};

NesDb[ '4AD225EB6EA778E4C221268CB0FD7EAA3977D86D' ] = {
	"$": {
		"name": "Flight of the Intruder",
		"class": "Licensed",
		"catalog": "NES-4F-USA",
		"publisher": "Mindscape",
		"developer": "Imagineering",
		"region": "USA",
		"players": "1",
		"date": "1991-05"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "F92BE7F2",
				"sha1": "4AD225EB6EA778E4C221268CB0FD7EAA3977D86D",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-04-11"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UNROM-09",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "NES-4F-0 PRG",
								"size": "128k",
								"crc": "F92BE7F2",
								"sha1": "4AD225EB6EA778E4C221268CB0FD7EAA3977D86D"
							}
						}
					],
					"vram": [
						{
							"$": {
								"size": "8k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
							}
						},
						{
							"$": {
								"type": "74xx32"
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
								"h": "1",
								"v": "0"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Infinite radar-guided missiles--bombing/strafing screen",
			"codes": [
				[
					"GZUOZYVG"
				]
			]
		},
		{
			"name": "Start with 9 radar-guided missiles--bombing/strafing screen",
			"codes": [
				[
					"PAOALZTE"
				]
			]
		},
		{
			"name": "Infinite missiles--cockpit screen",
			"codes": [
				[
					"GZUOLKVK"
				]
			]
		},
		{
			"name": "Start on mission 3",
			"codes": [
				[
					"GAKGKGAA"
				]
			]
		},
		{
			"name": "Start on mission 6",
			"codes": [
				[
					"ZAKGKGAE"
				]
			]
		},
		{
			"name": "Start on mission 9",
			"codes": [
				[
					"APKGKGAA"
				]
			]
		},
		{
			"name": "Start on mission 12",
			"codes": [
				[
					"TPKGKGAA"
				]
			]
		},
		{
			"name": "Start each mission with 6 missiles",
			"codes": [
				[
					"OZKZTXOK",
					"AAKXGZPA"
				]
			]
		}
	]
};
