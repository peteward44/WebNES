this.NesDb = this.NesDb || {};

NesDb[ '7F57EACE7CADA7C36412A50F2299231B304527A8' ] = {
	"$": {
		"name": "1942",
		"class": "Licensed",
		"catalog": "CAP-19",
		"publisher": "Capcom",
		"developer": "Capcom",
		"portdeveloper": "Micronics / Khaos",
		"region": "Japan",
		"players": "2",
		"date": "1985-12-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "171251E3",
				"sha1": "7F57EACE7CADA7C36412A50F2299231B304527A8",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-12-01"
			},
			"board": [
				{
					"$": {
						"type": "HVC-NROM-256",
						"pcb": "3E",
						"mapper": "0"
					},
					"prg": [
						{
							"$": {
								"size": "32k",
								"crc": "C4E8C04A",
								"sha1": "D608F769333B13DA9C67F07599E405944893A950"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "8k",
								"crc": "03379B76",
								"sha1": "D2A6CA1CDD8935525F59F1D38806B2296CB12A12"
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
				"system": "Famicom",
				"crc": "171251E3",
				"sha1": "7F57EACE7CADA7C36412A50F2299231B304527A8",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-21"
			},
			"board": [
				{
					"$": {
						"type": "HVC-NROM-256",
						"pcb": "HVC-NROM-256K-02S",
						"mapper": "0"
					},
					"prg": [
						{
							"$": {
								"name": "CAP-19-0 PRG",
								"size": "32k",
								"crc": "C4E8C04A",
								"sha1": "D608F769333B13DA9C67F07599E405944893A950"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "CAP-19-0 CHR",
								"size": "8k",
								"crc": "03379B76",
								"sha1": "D2A6CA1CDD8935525F59F1D38806B2296CB12A12"
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
			"name": "Both players start with 9 rolls",
			"codes": [
				[
					"PASIOALE"
				]
			]
		},
		{
			"name": "Start with 6 lives, 1-player game only",
			"codes": [
				[
					"IESUTYZA"
				]
			]
		},
		{
			"name": "Start with 9 lives, 1-player game only",
			"codes": [
				[
					"AESUTYZE"
				]
			]
		},
		{
			"name": "After continue, player 1 has 6 lives in 2-player game",
			"codes": [
				[
					"IAKUUAZA"
				]
			]
		},
		{
			"name": "After continue, player 1 has 9 lives in 2-player game",
			"codes": [
				[
					"AAKUUAZE"
				]
			]
		},
		{
			"name": "Player 2 has 6 lives in 2-player game",
			"codes": [
				[
					"IASUOAZA"
				]
			]
		},
		{
			"name": "Player 2 has 9 lives in 2-player game",
			"codes": [
				[
					"AASUOAZE"
				]
			]
		}
	]
};
