this.NesDb = this.NesDb || {};

NesDb[ '979494E7869AC7AB4815FDBD1DC99F893F713FBF' ] = {
	"$": {
		"name": "Contra",
		"class": "Licensed",
		"catalog": "NES-CT-USA",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "USA",
		"players": "2",
		"date": "1988-02"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "F6035030",
				"sha1": "979494E7869AC7AB4815FDBD1DC99F893F713FBF",
				"dump": "ok",
				"dumper": "polarz",
				"datedumped": "2006-01-29"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UN-ROM-06",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "NES-CT-0 PRG",
								"size": "128k",
								"crc": "F6035030",
								"sha1": "979494E7869AC7AB4815FDBD1DC99F893F713FBF"
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
								"type": "6113"
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
				"crc": "F6035030",
				"sha1": "979494E7869AC7AB4815FDBD1DC99F893F713FBF",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-10-01"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UN-ROM-07",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "NES-CT-0 PRG",
								"size": "128k",
								"crc": "F6035030",
								"sha1": "979494E7869AC7AB4815FDBD1DC99F893F713FBF"
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
								"type": "6113A"
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
			"name": "Start with infinite lives",
			"codes": [
				[
					"SLAIUZ"
				]
			]
		},
		{
			"name": "Keep weapons after losing a life",
			"codes": [
				[
					"GXIIUX"
				]
			]
		},
		{
			"name": "Become invincible-- enemies don't shoot at you",
			"codes": [
				[
					"SLTIYG"
				]
			]
		},
		{
			"name": "Start new life with machine gun",
			"codes": [
				[
					"PEIIXZ"
				]
			]
		},
		{
			"name": "Start new life with flame-thrower",
			"codes": [
				[
					"ZEIIXZ"
				]
			]
		},
		{
			"name": "Start new life with spread gun",
			"codes": [
				[
					"LEIIXZ"
				]
			]
		},
		{
			"name": "Start new life with laser",
			"codes": [
				[
					"GEIIXZ"
				]
			]
		}
	]
};
