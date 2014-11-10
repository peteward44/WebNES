this.NesDb = this.NesDb || {};

NesDb[ '7AE08F6C3358B434D2782D646482FA37BC3FBE21' ] = {
	"$": {
		"name": "Pipe Dream",
		"class": "Licensed",
		"catalog": "NES-4P-USA",
		"publisher": "Bullet-Proof Software",
		"developer": "The Assembly Line",
		"portdeveloper": "Distinctive Software",
		"region": "USA",
		"players": "2",
		"date": "1990-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "BCE77871",
				"sha1": "7AE08F6C3358B434D2782D646482FA37BC3FBE21",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-02-07"
			},
			"board": [
				{
					"$": {
						"type": "NES-CNROM",
						"pcb": "NES-CNROM-07",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "NES-4P-0 PRG",
								"size": "32k",
								"crc": "DB70A67C",
								"sha1": "BF0305A5EF4246444DA95129556A8482D423A999"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-4P-0 CHR",
								"size": "32k",
								"crc": "019F53E8",
								"sha1": "43F7ADEDB87EFE59912134342F18E6DB7610670D"
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
			"name": "Start with 1 wrench",
			"codes": [
				[
					"PAOALPLA"
				]
			]
		},
		{
			"name": "Start with 6 wrenches",
			"codes": [
				[
					"TAOALPLA"
				]
			]
		},
		{
			"name": "Start with 9 wrenches",
			"codes": [
				[
					"PAOALPLE"
				]
			]
		},
		{
			"name": "Infinite wrenches",
			"codes": [
				[
					"SZKTPUVK"
				]
			]
		},
		{
			"name": "One-way pipes from level 1",
			"codes": [
				[
					"AAOGZZIA"
				]
			]
		},
		{
			"name": "One-way pipes from level 5",
			"codes": [
				[
					"IAOGAZLA"
				]
			]
		},
		{
			"name": "One-way pipes from level 10",
			"codes": [
				[
					"ZAOKPZLE"
				]
			]
		},
		{
			"name": "Tunnels galore",
			"codes": [
				[
					"KEUAUVSE"
				]
			]
		},
		{
			"name": "Pumps instead of reservoirs",
			"codes": [
				[
					"GPKIEGZP"
				]
			]
		},
		{
			"name": "Pumps before reservoirs",
			"codes": [
				[
					"GPKIEGZP",
					"ZPKINGGP"
				]
			]
		}
	]
};
