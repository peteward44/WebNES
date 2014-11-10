this.NesDb = this.NesDb || {};

NesDb[ '5BCF47901533372B7D9828380FCF32F11C6F9CE8' ] = {
	"$": {
		"name": "Wheel of Fortune: Junior Edition",
		"class": "Licensed",
		"catalog": "NES-WJ-USA",
		"publisher": "GameTek",
		"developer": "Rare",
		"region": "USA",
		"players": "3",
		"date": "1989-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "68383607",
				"sha1": "5BCF47901533372B7D9828380FCF32F11C6F9CE8",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-04-10"
			},
			"board": [
				{
					"$": {
						"type": "NES-ANROM",
						"pcb": "NES-ANROM-02",
						"mapper": "7"
					},
					"prg": [
						{
							"$": {
								"name": "NES-WJ-0 PRG",
								"size": "128k",
								"crc": "68383607",
								"sha1": "5BCF47901533372B7D9828380FCF32F11C6F9CE8"
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
								"type": "74xx02"
							}
						},
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
					]
				}
			]
		}
	]
};
