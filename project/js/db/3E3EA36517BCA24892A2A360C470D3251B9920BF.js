this.NesDb = this.NesDb || {};

NesDb[ '3E3EA36517BCA24892A2A360C470D3251B9920BF' ] = {
	"$": {
		"name": "Super Jeopardy!",
		"class": "Licensed",
		"catalog": "NES-7J-USA",
		"publisher": "GameTek",
		"developer": "GameTek",
		"region": "USA",
		"players": "4",
		"date": "1991-09"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "fourplayer",
						"name": "4-Player Adapter"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "CF4487A2",
				"sha1": "3E3EA36517BCA24892A2A360C470D3251B9920BF",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-04-21"
			},
			"board": [
				{
					"$": {
						"type": "NES-SLROM",
						"pcb": "NES-SLROM-06",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-7J-0 PRG",
								"size": "128k",
								"crc": "D3428E2E",
								"sha1": "B5A92FD2FCA16B63FA5BFB710EE91741A49C2033"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-7J-0 CHR",
								"size": "128k",
								"crc": "FA029DBF",
								"sha1": "26426EE53997F3403E511B721B1AC7CF64CCC12E"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B3"
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
		},
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "CF4487A2",
				"sha1": "3E3EA36517BCA24892A2A360C470D3251B9920BF",
				"dump": "ok",
				"dumper": "polarz",
				"datedumped": "2006-02-27"
			},
			"board": [
				{
					"$": {
						"type": "NES-SLROM",
						"pcb": "NES-SLROM-06",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-7J-0 PRG",
								"size": "128k",
								"crc": "D3428E2E",
								"sha1": "B5A92FD2FCA16B63FA5BFB710EE91741A49C2033"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-7J-0 CHR",
								"size": "128k",
								"crc": "FA029DBF",
								"sha1": "26426EE53997F3403E511B721B1AC7CF64CCC12E"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B2"
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
	]
};
