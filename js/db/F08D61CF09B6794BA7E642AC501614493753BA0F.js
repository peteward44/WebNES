this.NesDb = this.NesDb || {};

NesDb[ 'F08D61CF09B6794BA7E642AC501614493753BA0F' ] = {
	"$": {
		"name": "Crisis Force",
		"altname": "クライシスフォース",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "KON-RC856",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "Japan",
		"players": "2",
		"date": "1991-08-27"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "FCBF28B1",
				"sha1": "F08D61CF09B6794BA7E642AC501614493753BA0F",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-27"
			},
			"board": [
				{
					"$": {
						"type": "KONAMI-VRC-4",
						"pcb": "352396",
						"mapper": "23"
					},
					"prg": [
						{
							"$": {
								"name": "RC856J00P",
								"size": "128k",
								"crc": "99580334",
								"sha1": "66E802DDEC4CCF58F7FE214A14B71BD41DA4463A"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "RC856J00C",
								"size": "128k",
								"crc": "A709BCB8",
								"sha1": "EF1FB940FC723DA4E958428C4782C470C6BF18BC"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "2k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "VRC4"
							},
							"pin": [
								{
									"$": {
										"number": "3",
										"function": "PRG A3"
									}
								},
								{
									"$": {
										"number": "4",
										"function": "PRG A2"
									}
								}
							]
						}
					]
				}
			]
		}
	]
};
