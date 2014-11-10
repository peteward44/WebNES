this.NesDb = this.NesDb || {};

NesDb[ 'D9FE4F00109B7D75456E1673C2B30DE68A125A5B' ] = {
	"$": {
		"name": "Nobunaga's Ambition",
		"class": "Licensed",
		"catalog": "NES-NZ-USA",
		"publisher": "Koei",
		"developer": "Koei",
		"region": "USA",
		"players": "8",
		"date": "1989-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "4642DDA6",
				"sha1": "D9FE4F00109B7D75456E1673C2B30DE68A125A5B",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-02-18"
			},
			"board": [
				{
					"$": {
						"type": "NES-SOROM",
						"pcb": "NES-SOROM-01",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-NZ-0 PRG",
								"size": "256k",
								"crc": "4642DDA6",
								"sha1": "D9FE4F00109B7D75456E1673C2B30DE68A125A5B"
							}
						}
					],
					"wram": [
						{
							"$": {
								"id": "0",
								"size": "8k",
								"battery": "1"
							}
						},
						{
							"$": {
								"id": "1",
								"size": "8k"
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
								"type": "MMC1A"
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
