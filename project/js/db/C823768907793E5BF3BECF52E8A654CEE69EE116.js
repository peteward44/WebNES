this.NesDb = this.NesDb || {};

NesDb[ 'C823768907793E5BF3BECF52E8A654CEE69EE116' ] = {
	"$": {
		"name": "Gradius",
		"altname": "グラディウス",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "KON-RC810",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "Japan",
		"players": "2",
		"date": "1986-04-25"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "D8EFF0DF",
				"sha1": "C823768907793E5BF3BECF52E8A654CEE69EE116",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-05-13"
			},
			"board": [
				{
					"$": {
						"type": "KONAMI-CNROM",
						"pcb": "302041A",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "RC810J0P",
								"size": "32k",
								"crc": "9204A65D",
								"sha1": "500693F8F65B1E2F09B722C5FA28B32088E22A29"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "RC810J0C",
								"size": "32k",
								"crc": "DE963BEC",
								"sha1": "ECB76B5897658EBAC31A07516BB2A5820279474F"
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
				"system": "Famicom",
				"crc": "D8EFF0DF",
				"sha1": "C823768907793E5BF3BECF52E8A654CEE69EE116",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-07-01"
			},
			"board": [
				{
					"$": {
						"type": "KONAMI-CNROM",
						"pcb": "810J02",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"size": "32k",
								"crc": "9204A65D",
								"sha1": "500693F8F65B1E2F09B722C5FA28B32088E22A29"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "32k",
								"crc": "DE963BEC",
								"sha1": "ECB76B5897658EBAC31A07516BB2A5820279474F"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "<74xx161>"
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
