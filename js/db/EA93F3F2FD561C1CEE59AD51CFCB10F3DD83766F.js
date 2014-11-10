this.NesDb = this.NesDb || {};

NesDb[ 'EA93F3F2FD561C1CEE59AD51CFCB10F3DD83766F' ] = {
	"$": {
		"name": "RockMan",
		"altname": "ロックマン",
		"class": "Licensed",
		"catalog": "CAP-RX",
		"publisher": "Capcom",
		"developer": "Capcom",
		"region": "Japan",
		"players": "1",
		"date": "1987-12-17"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "D31DC910",
				"sha1": "EA93F3F2FD561C1CEE59AD51CFCB10F3DD83766F",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2011-01-22"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UNROM",
						"pcb": "HVC-UNROM-10",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "CAP-RX-0 PRG",
								"size": "128k",
								"crc": "D31DC910",
								"sha1": "EA93F3F2FD561C1CEE59AD51CFCB10F3DD83766F"
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
