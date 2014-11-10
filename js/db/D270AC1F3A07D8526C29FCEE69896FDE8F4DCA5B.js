this.NesDb = this.NesDb || {};

NesDb[ 'D270AC1F3A07D8526C29FCEE69896FDE8F4DCA5B' ] = {
	"$": {
		"name": "To The Earth",
		"class": "Licensed",
		"catalog": "NES-ZE-USA",
		"publisher": "Nintendo",
		"developer": "Nintendo",
		"region": "USA",
		"players": "1",
		"date": "1989-11"
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
				"crc": "DE8FD935",
				"sha1": "D270AC1F3A07D8526C29FCEE69896FDE8F4DCA5B",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-12-17"
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
								"name": "NES-ZE-0 PRG",
								"size": "32k",
								"crc": "163E86C0",
								"sha1": "FE2D8964DCB660A4C34E9FFD9B3988C83CDF6656"
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
								"type": "6113B1"
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
