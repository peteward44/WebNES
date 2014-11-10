this.NesDb = this.NesDb || {};

NesDb[ 'F7C9B6694362C244234257153B14A4F1A6093F6C' ] = {
	"$": {
		"name": "Wayne Gretzky Hockey",
		"class": "Licensed",
		"catalog": "NES-ZY-USA",
		"publisher": "THQ",
		"developer": "Bethesda Softworks",
		"region": "USA",
		"players": "2",
		"date": "1991-01"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "15F0D3F1",
				"sha1": "F7C9B6694362C244234257153B14A4F1A6093F6C",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-04-11"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UNROM-09",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "NES-ZY-0 PRG",
								"size": "128k",
								"crc": "15F0D3F1",
								"sha1": "F7C9B6694362C244234257153B14A4F1A6093F6C"
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
	]
};
