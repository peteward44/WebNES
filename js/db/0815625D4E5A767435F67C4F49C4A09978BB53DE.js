this.NesDb = this.NesDb || {};

NesDb[ '0815625D4E5A767435F67C4F49C4A09978BB53DE' ] = {
	"$": {
		"name": "To The Earth",
		"class": "Licensed",
		"catalog": "NES-ZE-EEC",
		"publisher": "Nintendo",
		"developer": "Nintendo",
		"region": "Europe",
		"players": "1",
		"date": "1990-02-23"
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
				"system": "NES-PAL-B",
				"crc": "790B295B",
				"sha1": "0815625D4E5A767435F67C4F49C4A09978BB53DE",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2007-07-28"
			},
			"board": [
				{
					"$": {
						"type": "NES-TEROM",
						"pcb": "NES-TEROM-02",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-ZE-0 PRG",
								"size": "32k",
								"crc": "418C9992",
								"sha1": "ED558CAAA857B5EA81F8D6C38A9C4C0D7DFBA43A"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-ZE-0 CHR",
								"size": "32k",
								"crc": "9426179D",
								"sha1": "63305982693C1CF80E3D89609E8B5A41C1578EB0"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3A"
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
		},
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "790B295B",
				"sha1": "0815625D4E5A767435F67C4F49C4A09978BB53DE",
				"dump": "ok",
				"dumper": "Bregalad",
				"datedumped": "2007-08-02"
			},
			"board": [
				{
					"$": {
						"type": "NES-TEROM",
						"pcb": "NES-TEROM-03",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-ZE-0 PRG",
								"size": "32k",
								"crc": "418C9992",
								"sha1": "ED558CAAA857B5EA81F8D6C38A9C4C0D7DFBA43A"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-ZE-0 CHR",
								"size": "32k",
								"crc": "9426179D",
								"sha1": "63305982693C1CF80E3D89609E8B5A41C1578EB0"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3A"
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
			"name": "Your shots use up no energy",
			"codes": [
				[
					"AAEUXTGA"
				]
			]
		},
		{
			"name": "Your shots use up less energy",
			"codes": [
				[
					"ZAEUXTGA"
				]
			]
		},
		{
			"name": "Your shots use up more energy",
			"codes": [
				[
					"AAEUXTGE"
				]
			]
		},
		{
			"name": "Enemy bombs do no damage",
			"codes": [
				[
					"AEUVEYGP"
				]
			]
		},
		{
			"name": "Enemy bombs do half damage",
			"codes": [
				[
					"AEUVEYGO"
				]
			]
		},
		{
			"name": "Enemy bombs do more damage",
			"codes": [
				[
					"AXUVEYGO"
				]
			]
		},
		{
			"name": "Bonus energy for shooting enemy",
			"codes": [
				[
					"GOEUEVZA"
				]
			]
		},
		{
			"name": "Less energy for shooting enemy",
			"codes": [
				[
					"GEEUEVZA"
				]
			]
		},
		{
			"name": "No energy for shooting enemy",
			"codes": [
				[
					"AEEUEVZA"
				]
			]
		}
	]
};
