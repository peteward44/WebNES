this.NesDb = this.NesDb || {};

NesDb[ 'EA660ABBC1CDB74E85F932E38013E4FA5B9F6BB8' ] = {
	"$": {
		"name": "Super Team Games",
		"class": "Licensed",
		"catalog": "NES-UN-USA",
		"publisher": "Nintendo",
		"developer": "Human Entertainment",
		"region": "USA",
		"players": "1",
		"date": "1988-11"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "powerpad",
						"name": "Power Pad"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "D74B2719",
				"sha1": "EA660ABBC1CDB74E85F932E38013E4FA5B9F6BB8",
				"dump": "ok",
				"dumper": "Quietust",
				"datedumped": "2006-03-07"
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
								"name": "NES-UN-0 PRG",
								"size": "32k",
								"crc": "F210E68F",
								"sha1": "1F706AE232FFB5F54FF1918B624DCDAE4FA27A15"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-UN-0 CHR",
								"size": "32k",
								"crc": "A11F69FF",
								"sha1": "57DCC878797801F98C753BA4E7F5369AAFACB40F"
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
	]
};
