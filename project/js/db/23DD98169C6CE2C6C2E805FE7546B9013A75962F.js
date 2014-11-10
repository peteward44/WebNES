this.NesDb = this.NesDb || {};

NesDb[ '23DD98169C6CE2C6C2E805FE7546B9013A75962F' ] = {
	"$": {
		"name": "Shooting Range",
		"class": "Licensed",
		"catalog": "NES-ZS-USA",
		"publisher": "Bandai",
		"developer": "TOSE Software",
		"region": "USA",
		"players": "4",
		"date": "1989-06"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "zapper",
						"name": "Zapper Light Gun"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "851EB9BE",
				"sha1": "23DD98169C6CE2C6C2E805FE7546B9013A75962F",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-04-11"
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
								"name": "NES-ZS-0 PRG",
								"size": "32k",
								"crc": "885A8A6D",
								"sha1": "0AFD2242AEEA686FBA778F5B363394385058B043"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-ZS-0 CHR",
								"size": "32k",
								"crc": "BF24AE29",
								"sha1": "F7224EE1FE1C732B0A526F6070F67701AE57C1AE"
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
			"name": "Double bonus time for hourglasses",
			"codes": [
				[
					"GTEPOAZL"
				]
			]
		},
		{
			"name": "Half bonus time for hourglasses",
			"codes": [
				[
					"PPEPOAZU"
				]
			]
		},
		{
			"name": "More time for level 1",
			"codes": [
				[
					"GEKAILLA",
					"GAEETTLA"
				]
			]
		},
		{
			"name": "Less time for level 1",
			"codes": [
				[
					"ZEKAILLA",
					"ZAEETTLA"
				]
			]
		},
		{
			"name": "More time for level 2",
			"codes": [
				[
					"GAOAATZA",
					"AAOAPTZL"
				]
			]
		},
		{
			"name": "Less time for level 2",
			"codes": [
				[
					"PAOAATZA",
					"ZLOAPTZL"
				]
			]
		},
		{
			"name": "More time for level 3",
			"codes": [
				[
					"GAOAZTZA",
					"ZLOALTAA"
				]
			]
		},
		{
			"name": "Less time for level 3",
			"codes": [
				[
					"PAOAZTZA",
					"AAOALTAA"
				]
			]
		},
		{
			"name": "Double usual shots per round",
			"codes": [
				[
					"ASUAIVAZ",
					"ASXOVXAZ",
					"SXVONOOU"
				]
			]
		},
		{
			"name": "Triple usual shots per round",
			"codes": [
				[
					"ASUAIVAZ",
					"ANXOVXAX",
					"SXVONOOU"
				]
			]
		},
		{
			"name": "Quadruple usual shots per round",
			"codes": [
				[
					"ASUAIVAZ",
					"EXXOVXAZ",
					"SXVONOOU"
				]
			]
		}
	]
};
