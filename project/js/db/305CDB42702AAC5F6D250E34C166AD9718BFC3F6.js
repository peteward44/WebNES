this.NesDb = this.NesDb || {};

NesDb[ '305CDB42702AAC5F6D250E34C166AD9718BFC3F6' ] = {
	"$": {
		"name": "Double Dribble",
		"class": "Licensed",
		"catalog": "NES-DW-USA",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "USA",
		"players": "2",
		"date": "1987-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "437E7B69",
				"sha1": "305CDB42702AAC5F6D250E34C166AD9718BFC3F6",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-03-10"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UN-ROM-04",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "NES-DW-0 PRG",
								"size": "128k",
								"crc": "437E7B69",
								"sha1": "305CDB42702AAC5F6D250E34C166AD9718BFC3F6"
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
				"crc": "437E7B69",
				"sha1": "305CDB42702AAC5F6D250E34C166AD9718BFC3F6",
				"dump": "ok",
				"dumper": "polarz",
				"datedumped": "2007-02-11"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UN-ROM-04",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "NES-DW-0 PRG",
								"size": "128k",
								"crc": "437E7B69",
								"sha1": "305CDB42702AAC5F6D250E34C166AD9718BFC3F6"
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
		}
	]
};
