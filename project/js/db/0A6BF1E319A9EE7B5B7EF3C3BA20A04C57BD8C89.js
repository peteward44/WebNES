this.NesDb = this.NesDb || {};

NesDb[ '0A6BF1E319A9EE7B5B7EF3C3BA20A04C57BD8C89' ] = {
	"$": {
		"name": "Nightshade",
		"class": "Licensed",
		"catalog": "NES-8Y-USA",
		"publisher": "Ultra Games",
		"developer": "Beam Software",
		"region": "USA",
		"players": "1",
		"date": "1992-01"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "A60CA3D6",
				"sha1": "0A6BF1E319A9EE7B5B7EF3C3BA20A04C57BD8C89",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-09-21"
			},
			"board": [
				{
					"$": {
						"type": "NES-TLROM",
						"pcb": "NES-TLROM-03",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-8Y-0 PRG",
								"size": "256k",
								"crc": "21A3F190",
								"sha1": "5D4636011AC080BD439973B7C36844B28ED25E2E"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-8Y-0 CHR",
								"size": "256k",
								"crc": "C142C8A9",
								"sha1": "F1C9187669145E25928205C003FC90F2E9496C6B"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3B"
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
