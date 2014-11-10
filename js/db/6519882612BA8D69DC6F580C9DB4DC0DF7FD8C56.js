this.NesDb = this.NesDb || {};

NesDb[ '6519882612BA8D69DC6F580C9DB4DC0DF7FD8C56' ] = {
	"$": {
		"name": "Blades of Steel",
		"class": "Licensed",
		"catalog": "NES-VS-USA",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "USA",
		"players": "2",
		"date": "1988-12"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "8AB52A24",
				"sha1": "6519882612BA8D69DC6F580C9DB4DC0DF7FD8C56",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-10-26"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UN-ROM-07",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "NES-VS-0 PRG",
								"size": "128k",
								"crc": "8AB52A24",
								"sha1": "6519882612BA8D69DC6F580C9DB4DC0DF7FD8C56"
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
		},
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "8AB52A24",
				"sha1": "6519882612BA8D69DC6F580C9DB4DC0DF7FD8C56",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-02-14"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UNROM-10",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "NES-VS-0 PRG",
								"size": "128k",
								"crc": "8AB52A24",
								"sha1": "6519882612BA8D69DC6F580C9DB4DC0DF7FD8C56"
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
			"name": "Faster timer",
			"codes": [
				[
					"GEUGTTYA"
				]
			]
		},
		{
			"name": "Slower timer",
			"codes": [
				[
					"GOUGTTYA"
				]
			]
		},
		{
			"name": "Players can take only one punch",
			"codes": [
				[
					"PAXZLGIA"
				]
			]
		},
		{
			"name": "Player with puck doesn't slow down",
			"codes": [
				[
					"AAOSSAAZ"
				]
			]
		}
	]
};
