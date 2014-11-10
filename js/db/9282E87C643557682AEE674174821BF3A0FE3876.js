this.NesDb = this.NesDb || {};

NesDb[ '9282E87C643557682AEE674174821BF3A0FE3876' ] = {
	"$": {
		"name": "Gradius",
		"class": "Licensed",
		"catalog": "NES-GR-USA",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "USA",
		"players": "2",
		"date": "1986-12"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "350D835E",
				"sha1": "9282E87C643557682AEE674174821BF3A0FE3876",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-12-30"
			},
			"board": [
				{
					"$": {
						"type": "NES-CNROM",
						"pcb": "NES-CN-ROM-256-01",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "NES-GR-0 PRG",
								"size": "32k",
								"crc": "2FB0FF59",
								"sha1": "DFF7BCC522E5F4AADAC9A801DE613A10F29B1E23"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-GR-0 CHR",
								"size": "32k",
								"crc": "0DDDD32E",
								"sha1": "1C3A41F53A57F7B6767CE0F788735EB9AE6EE071"
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
								"type": "3193A"
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
				"crc": "350D835E",
				"sha1": "9282E87C643557682AEE674174821BF3A0FE3876",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-02-14"
			},
			"board": [
				{
					"$": {
						"type": "NES-CNROM",
						"pcb": "NES-CNROM-06",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "NES-GR-0 PRG",
								"size": "32k",
								"crc": "2FB0FF59",
								"sha1": "DFF7BCC522E5F4AADAC9A801DE613A10F29B1E23"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-GR-0 CHR",
								"size": "32k",
								"crc": "0DDDD32E",
								"sha1": "1C3A41F53A57F7B6767CE0F788735EB9AE6EE071"
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
			"name": "Both players have infinite lives",
			"codes": [
				[
					"SXOOYYVI"
				]
			]
		},
		{
			"name": "Both players start with 1 life",
			"codes": [
				[
					"AENELZLA"
				]
			]
		},
		{
			"name": "Both players start with 6 lives",
			"codes": [
				[
					"IENELZLA"
				]
			]
		},
		{
			"name": "Both players start with 9 lives",
			"codes": [
				[
					"AENELZLE"
				]
			]
		},
		{
			"name": "Keep power capsules",
			"codes": [
				[
					"KOXOLYSP"
				]
			]
		},
		{
			"name": "Increase force field protection",
			"codes": [
				[
					"NNOEKPIE"
				]
			]
		},
		{
			"name": "Never lose weapons",
			"codes": [
				[
					"YGUONUZS",
					"YGKPUUIL"
				]
			]
		}
	]
};
