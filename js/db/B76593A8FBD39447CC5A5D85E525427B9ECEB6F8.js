this.NesDb = this.NesDb || {};

NesDb[ 'B76593A8FBD39447CC5A5D85E525427B9ECEB6F8' ] = {
	"$": {
		"name": "Rygar",
		"class": "Licensed",
		"catalog": "NES-RY-USA",
		"publisher": "Tecmo",
		"developer": "Tecmo",
		"region": "USA",
		"players": "1",
		"date": "1987-07"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "B3783F2A",
				"sha1": "B76593A8FBD39447CC5A5D85E525427B9ECEB6F8",
				"dump": "ok",
				"dumper": "polarz",
				"datedumped": "2007-02-03"
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
								"name": "NES-RY-0 PRG",
								"size": "128k",
								"crc": "B3783F2A",
								"sha1": "B76593A8FBD39447CC5A5D85E525427B9ECEB6F8"
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
		}
	]
};
