this.NesDb = this.NesDb || {};

NesDb[ '29CA7CC398B855472C9D94E7581BE8288468382B' ] = {
	"$": {
		"name": "Trog!",
		"class": "Licensed",
		"catalog": "NES-4A-USA",
		"publisher": "Acclaim",
		"developer": "Midway",
		"portdeveloper": "Visual Concepts",
		"region": "USA",
		"players": "2",
		"date": "1991-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "EE6892EB",
				"sha1": "29CA7CC398B855472C9D94E7581BE8288468382B",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-09-29"
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
								"name": "NES-4A-0 PRG",
								"size": "128k",
								"crc": "EE6892EB",
								"sha1": "29CA7CC398B855472C9D94E7581BE8288468382B"
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
